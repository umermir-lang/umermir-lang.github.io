
/**
 * Deviniti Presentation Logic
 * Enhanced with direction-aware sophisticated animations and detailed speaker notes.
 */

import { SLIDES } from './slides.js';

let currentIndex = 0;
const TOTAL = SLIDES.length;
let notesOpen = false;

// DOM Elements
const stage = document.getElementById('slide-content');
const mainStage = document.getElementById('main-stage');
const titleHeader = document.getElementById('header-slide-title');
const progressBar = document.getElementById('top-progress-bar');
const progressTxt = document.getElementById('progress-percent');
const indexLabel = document.getElementById('slide-index-label');
const dotsContainer = document.getElementById('nav-dots');
const btnNext = document.getElementById('nav-next');
const btnPrev = document.getElementById('nav-prev');
const hitboxLeft = document.getElementById('hitbox-left');
const hitboxRight = document.getElementById('hitbox-right');
const btnDownloadPPT = document.getElementById('download-ppt');
const btnDownloadPDF = document.getElementById('download-pdf');
const btnToggleNotes = document.getElementById('toggle-notes');
const btnCloseNotes = document.getElementById('close-notes');
const notesDrawer = document.getElementById('notes-drawer');
const notesBody = document.getElementById('notes-body');
const printContainer = document.getElementById('print-container');
const bgBlob1 = document.getElementById('bg-blob-1');
const bgBlob2 = document.getElementById('bg-blob-2');

function setupDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
        const d = document.createElement('button');
        d.className = `h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`;
        d.onclick = () => goTo(i);
        dotsContainer.appendChild(d);
    }
}

function updateNotesUI() {
    const slide = SLIDES[currentIndex];
    notesBody.innerHTML = slide.speakerNotes ? slide.speakerNotes.split('\n\n').map(p => `<p class="mb-4">${p}</p>`).join('') : '<p class="italic opacity-50">No notes for this slide.</p>';

    if (notesOpen) {
        notesDrawer.classList.add('open');
        mainStage.classList.add('pr-80', 'lg:pr-96');
    } else {
        notesDrawer.classList.remove('open');
        mainStage.classList.remove('pr-80', 'lg:pr-96');
    }
}

function render(index, direction = 'next') {
    const exitClass = direction === 'next' ? 'exit-left' : 'exit-right';
    const entryClass = direction === 'next' ? 'enter-right' : 'enter-left';

    stage.classList.remove('slide-active');
    stage.classList.add(exitClass);

    const moveX = (index / TOTAL) * 100;
    bgBlob1.style.transform = `translate(${moveX}px, ${moveX / 2}px)`;
    bgBlob2.style.transform = `translate(-${moveX}px, -${moveX / 2}px)`;

    setTimeout(() => {
        currentIndex = index;
        const slide = SLIDES[index];
        stage.innerHTML = `<div class="animate-content w-full h-full flex flex-col justify-center">${slide.html}</div>`;

        stage.classList.remove(exitClass);
        stage.classList.add(entryClass);

        titleHeader.textContent = slide.title;
        const pct = Math.round(((index + 1) / TOTAL) * 100);
        progressBar.style.width = `${pct}%`;
        progressTxt.textContent = `${pct}%`;
        indexLabel.textContent = `${String(index + 1).padStart(2, '0')} / ${TOTAL}`;

        btnPrev.disabled = index === 0;
        btnNext.disabled = index === TOTAL - 1;
        hitboxLeft.disabled = index === 0;
        hitboxRight.disabled = index === TOTAL - 1;

        setupDots();
        updateNotesUI();
        lucide.createIcons();

        requestAnimationFrame(() => {
            stage.classList.remove(entryClass);
            stage.classList.add('slide-active');
        });
    }, 300);
}

function next() { if (currentIndex < TOTAL - 1) render(currentIndex + 1, 'next'); }
function prev() { if (currentIndex > 0) render(currentIndex - 1, 'prev'); }
function goTo(index) {
    if (index > currentIndex) render(index, 'next');
    else if (index < currentIndex) render(index, 'prev');
}

/**
 * PPT Export - Enhanced to include Speaker Notes
 */
function downloadPPT() {
    // FIX: Use PptxGenJS constructor which is correctly defined by the bundle
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    const COLORS = { primary: '2563EB', textDark: '0F172A', textLight: '475569', bg: 'F8FAFC' };

    pptx.defineSlideMaster({
        title: 'MASTER',
        background: { fill: COLORS.bg },
        objects: [
            { rect: { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: COLORS.primary } } },
            { text: { text: 'DEVINITI AI', options: { x: 0.5, y: 0.2, fontFace: 'Arial', fontSize: 14, color: COLORS.primary, bold: true } } }
        ]
    });

    SLIDES.forEach((slideData, idx) => {
        const slide = pptx.addSlide({ masterName: 'MASTER' });

        // Include Speaker Notes in PPT
        if (slideData.speakerNotes) {
            slide.notes = slideData.speakerNotes;
        }

        slide.addText(slideData.pptTitle, { x: 0.5, y: 0.8, w: '90%', fontSize: 32, fontFace: 'Arial', bold: true, color: COLORS.textDark });
        if (slideData.pptBody) {
            slide.addText(slideData.pptBody.map(t => ({ text: t, options: { bullet: true } })), { x: 0.5, y: 1.8, w: '90%', fontSize: 18, fontFace: 'Arial', color: COLORS.textLight, lineSpacing: 28 });
        }
        slide.addText(`Slide ${idx + 1} / ${TOTAL}`, { x: '85%', y: '92%', fontSize: 10, color: COLORS.textLight, align: 'right' });
    });

    pptx.writeFile({ fileName: 'Deviniti_AI_Change_Management.pptx' });
}

/**
 * PDF Export - All slides in one shareable file
 */
function downloadPDF() {
    printContainer.innerHTML = '';
    SLIDES.forEach(slide => {
        const div = document.createElement('div');
        div.className = 'print-slide';
        div.innerHTML = slide.html;
        printContainer.appendChild(div);
    });
    lucide.createIcons();
    // Small delay to ensure icons and layout are ready for the print engine
    setTimeout(() => window.print(), 800);
}

// Event Listeners
btnNext.onclick = next;
btnPrev.onclick = prev;
hitboxLeft.onclick = prev;
hitboxRight.onclick = next;
btnDownloadPPT.onclick = downloadPPT;
btnDownloadPDF.onclick = downloadPDF;
btnToggleNotes.onclick = () => {
    notesOpen = !notesOpen;
    updateNotesUI();
};
btnCloseNotes.onclick = () => {
    notesOpen = false;
    updateNotesUI();
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'n' || e.key === 'N') {
        notesOpen = !notesOpen;
        updateNotesUI();
    }
});

// Initial Render
render(0);
