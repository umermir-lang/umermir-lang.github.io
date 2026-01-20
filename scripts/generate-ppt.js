import PptxGenJS from "pptxgenjs";
import { SLIDES } from "../slides.js";

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
    slide.addText(`Slide ${idx + 1} / ${SLIDES.length}`, { x: '85%', y: '92%', fontSize: 10, color: COLORS.textLight, align: 'right' });
});

pptx.writeFile({ fileName: 'public/Deviniti_AI_Change_Management.pptx' })
    .then(fileName => {
        console.log(`Created file: ${fileName}`);
    })
    .catch(err => {
        console.error(err);
    });
