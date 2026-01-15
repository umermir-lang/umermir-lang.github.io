
/**
 * Deviniti Presentation Logic
 * Enhanced with direction-aware sophisticated animations and detailed speaker notes.
 */

const SLIDES = [
    {
        title: "AI-Powered Change Management",
        pptTitle: "AI-Powered Change Management",
        pptBody: ["Transforming your Atlassian ecosystem into an intelligent powerhouse.", "A complete end-to-end automation framework that maximizes existing tools."],
        speakerNotes: "Welcome everyone. Today we are discussing the evolution of Change Management. In an era where manual processes are becoming the primary bottleneck for innovation, we are showcasing how to turn your existing Atlassian stack into an intelligent, AI-powered governance engine.",
        html: `
            <div class="flex flex-col items-center justify-center h-full text-center space-y-10 animate-content">
                <div class="relative">
                    <div class="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full"></div>
                    <i data-lucide="bot" class="w-28 h-28 text-blue-600 relative z-10"></i>
                </div>
                <div class="space-y-6">
                    <h1 class="text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-tight">
                        AI-Powered <br/><span class="text-blue-600">Change Management</span>
                    </h1>
                    <p class="text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Transforming your Atlassian ecosystem into an intelligent powerhouse.
                    </p>
                </div>
                <div class="bg-white border border-slate-200 px-10 py-5 rounded-3xl shadow-xl max-w-xl mx-auto">
                    <p class="text-slate-700 font-medium text-lg">
                        A complete end-to-end automation framework that maximizes the tools you already own.
                    </p>
                </div>
                <div class="pt-16">
                    <span class="text-xl font-black tracking-[0.4em] text-slate-300 uppercase">Deviniti</span>
                </div>
            </div>
        `
    },
    {
        title: "The Problem: Manual Management is Broken",
        pptTitle: "The Problem: Manual Management is Broken",
        pptBody: ["Lost Requests: Incorrect forms and misplaced tickets lead to chaos.", "Approval Delays: Inconsistent details breach SLAs.", "Manual Overhead: Documentation takes hours away from actual work.", "IMPACT: Millions in potential business losses."],
        speakerNotes: "Why are we here? Because manual management is fundamentally broken at scale. We see millions lost due to deployment delays and operational friction. Inconsistent documentation isn't just a nuisance; it's a critical business risk that leads to SLA breaches and failed audits.",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center animate-content">
                <div class="space-y-8">
                    <h2 class="text-5xl font-black text-slate-900 leading-tight">Manual Management is <br/><span class="text-red-600 italic">Broken.</span></h2>
                    <div class="space-y-6 mt-12">
                        <div class="flex gap-5 items-start p-4 rounded-2xl group transition-all">
                            <div class="p-4 bg-red-50 rounded-2xl"><i data-lucide="shield-alert" class="w-7 h-7 text-red-600"></i></div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Lost Requests</h4>
                                <p class="text-slate-600">Incorrect forms and misplaced tickets lead to chaos.</p>
                            </div>
                        </div>
                        <div class="flex gap-5 items-start p-4 rounded-2xl group transition-all">
                            <div class="p-4 bg-red-50 rounded-2xl"><i data-lucide="clock" class="w-7 h-7 text-red-600"></i></div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Approval Delays</h4>
                                <p class="text-slate-600">Inconsistent details breach SLAs and waste time.</p>
                            </div>
                        </div>
                        <div class="flex gap-5 items-start p-4 rounded-2xl group transition-all">
                            <div class="p-4 bg-red-50 rounded-2xl"><i data-lucide="file-text" class="w-7 h-7 text-red-600"></i></div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Manual Overhead</h4>
                                <p class="text-slate-600">Documentation takes hours away from actual work.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl space-y-8 relative overflow-hidden">
                    <h3 class="text-2xl font-bold border-b border-slate-700 pb-6 uppercase tracking-widest text-slate-400">The Business Impact</h3>
                    <ul class="space-y-8">
                        <li class="flex items-center gap-6"><div class="h-3 w-3 bg-red-500 rounded-full"></div><span class="text-xl font-medium opacity-90">Increased operational costs</span></li>
                        <li class="flex items-center gap-6"><div class="h-3 w-3 bg-red-500 rounded-full"></div><span class="text-xl font-medium opacity-90">Elevated business risk profile</span></li>
                        <li class="flex items-center gap-6"><div class="h-3 w-3 bg-red-500 rounded-full"></div><span class="text-xl font-medium opacity-90">Persistent deployment delays</span></li>
                    </ul>
                    <div class="mt-12 pt-8 border-t border-slate-800">
                        <div class="text-sm uppercase tracking-[0.3em] text-slate-500 font-bold mb-3">Critical Warning</div>
                        <div class="text-4xl font-black text-red-500 leading-tight">Millions in Potential Losses</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Unlocking Value You Already Own",
        pptTitle: "Unlocking Value You Already Own",
        pptBody: ["You already invest in Atlassian; use it effectively.", "No extra costs: No additional AI tools needed.", "Zero Licensing: Use existing tier benefits.", "Immediate ROI: Turn passive tools into active profit intelligence."],
        speakerNotes: "The best part of this strategy? You likely already own the infrastructure. By leveraging Atlassian Rovo and Forge, you're not adding new per-seat 'AI taxes'—you're activating latent capabilities in the platform you already pay for.",
        html: `
            <div class="flex flex-col items-center justify-center h-full space-y-16 animate-content">
                <div class="text-center max-w-4xl space-y-6">
                    <h2 class="text-5xl font-black text-slate-900 tracking-tight">You are already investing in the <span class="text-blue-600">Atlassian ecosystem.</span></h2>
                    <p class="text-xl text-slate-600 font-medium">Stop leaving ROI on the table. Rovo, Confluence AI, and Forge are waiting for you.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl group hover:-translate-y-3 transition-all">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="zap" class="w-8 h-8"></i></div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">No Extra Costs</h3>
                        <p class="text-slate-500 leading-relaxed">No additional AI tool purchases required. Use what's on your balance sheet.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl group hover:-translate-y-3 transition-all">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white transition-colors"><i data-lucide="layers" class="w-8 h-8"></i></div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">Zero Licensing</h3>
                        <p class="text-slate-500 leading-relaxed">Leverage existing Atlassian tier benefits without extra per-seat AI taxes.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl group hover:-translate-y-3 transition-all">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-colors"><i data-lucide="trending-up" class="w-8 h-8"></i></div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">Immediate ROI</h3>
                        <p class="text-slate-500 leading-relaxed">Turn passive tools into active profit-generating intelligence today.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Industry-Specific Challenges",
        pptTitle: "Industry-Specific Challenges",
        pptBody: ["Banking: Heavy compliance (SOX, PCI-DSS).", "Manufacturing: Complex dependencies (ERP/IoT); downtime is expensive.", "Retail: High-frequency changes & peak traffic windows.", "Healthcare: Regulatory oversight (HIPAA)."],
        speakerNotes: "Different industries face unique pressures. In Banking, it's about avoiding massive fines. In Manufacturing, it's about physical safety and expensive downtime. AI allows us to create custom logic for each of these high-stakes environments.",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center animate-content">
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-blue-500">
                    <div class="p-5 bg-blue-50 rounded-2xl text-blue-600"><i data-lucide="building-2" class="w-10 h-10"></i></div>
                    <div><h3 class="text-2xl font-bold text-slate-900 mb-3">Banking & Finance</h3><p class="text-slate-600 text-lg leading-relaxed">Heavy compliance (SOX, PCI-DSS) and zero-tolerance for operational risk.</p></div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-orange-500">
                    <div class="p-5 bg-orange-50 rounded-2xl text-orange-600"><i data-lucide="factory" class="w-10 h-10"></i></div>
                    <div><h3 class="text-2xl font-bold text-slate-900 mb-3">Manufacturing</h3><p class="text-slate-600 text-lg leading-relaxed">Complex dependencies; shutdowns cost millions per hour.</p></div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-emerald-500">
                    <div class="p-5 bg-emerald-50 rounded-2xl text-emerald-600"><i data-lucide="shopping-cart" class="w-10 h-10"></i></div>
                    <div><h3 class="text-2xl font-bold text-slate-900 mb-3">Retail & E-Commerce</h3><p class="text-slate-600 text-lg leading-relaxed">High-frequency changes and critical peak-traffic stability windows.</p></div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-rose-500">
                    <div class="p-5 bg-rose-50 rounded-2xl text-rose-600"><i data-lucide="heart-pulse" class="w-10 h-10"></i></div>
                    <div><h3 class="text-2xl font-bold text-slate-900 mb-3">Healthcare</h3><p class="text-slate-600 text-lg leading-relaxed">Strict regulatory oversight (HIPAA) and slow clinical governance cycles.</p></div>
                </div>
            </div>
        `
    },
    {
        title: "Banking & Cyber Governance Frameworks",
        pptTitle: "Banking & Cyber Governance Frameworks",
        pptBody: ["NIST CSF Tiers: Mapping from Tier 1 (Partial/Ad-hoc) to Tier 2 (Risk-Informed).", "EU Mandates: Accelerating DORA and NIS2 (Oct 2024 deadlines).", "Maturity Shift: Moving reactive governance into proactive risk management.", "Efficiency: 3-5 day standard AI-augmented cycles for standard changes."],
        speakerNotes: `Most Tier 1 banking institutions currently operate in 'NIST Tier 1 maturity'—risk management is ad-hoc, informal, and reactive. However, new EU mandates like NIS2 (which hit national laws in Oct 2024) and DORA (for finance) are making this manual approach legally untenable. 

We use AI to bridge the gap to Tier 2: 'Risk-Informed.' This means move away from 'hope-based' compliance to 'verified' compliance. AI regulatory intelligence can scan thousands of regulatory sources in real-time. Organizations no longer need to manually review websites or track newsletters. Using AI regulatory intelligence, NLP engines detect new rules the moment they are published and flag updates relevant specifically to your Jira tickets. We're talking about reducing a 30-day manual cross-referencing slog into a 3–5 day AI-augmented governance cycle that still maintains strict institutional human-in-the-loop oversight.`,
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center animate-content">
                <div class="space-y-10">
                    <div class="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden">
                        <h3 class="text-blue-400 font-black uppercase tracking-[0.2em] text-sm mb-4">Maturity Standards</h3>
                        <h2 class="text-4xl font-black mb-6">NIST CSF & EU <br/>Governance Tiers</h2>
                        <div class="space-y-4 text-slate-300">
                           <div class="flex gap-4"><div class="font-bold text-white min-w-[80px]">Tier 1:</div><p>Partial/Ad-hoc. Reactive and informal risk management.</p></div>
                           <div class="flex gap-4"><div class="font-bold text-blue-400 min-w-[80px]">Tier 2:</div><p>Risk-Informed. AI-driven consistency and institutional awareness.</p></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-6">
                        <div class="bg-white p-6 rounded-2xl border-l-[6px] border-blue-600 shadow-lg flex gap-5 items-center">
                            <div class="p-3 bg-blue-50 text-blue-600 rounded-xl"><i data-lucide="shield-check" class="w-8 h-8"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900">Mandatory Shift</h4>
                                <p class="text-slate-500 text-sm">NIS2 and DORA require formal maturity levels by law.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl relative">
                        <div class="text-xs uppercase font-black tracking-widest opacity-60 mb-2">Cycle Time Reduction</div>
                        <div class="text-6xl font-black mb-4">~10x Faster</div>
                        <p class="text-blue-100 leading-relaxed">Standardizing manual cross-referencing into AI-verified compliance trails that meet Tier 1 institutional standards.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
                        <h4 class="font-black text-slate-900 uppercase tracking-widest text-xs mb-4">Target Outcome</h4>
                        <p class="text-slate-600 italic font-medium">"Transitioning from informal 30-day manual review to 3–5 day AI-augmented governance for a 'Risk-Informed' posture."</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Use Case: DORA/NIS2 Mandatory Transition",
        pptTitle: "Use Case: DORA/NIS2 Mandatory Transition",
        pptBody: ["Context: EU Financial entity facing Oct 2024 compliance.", "Action: AI monitors EBA Technical Standards (RTS) in real-time.", "Mapping: Automating the linking of RTS to internal ICT risk controls.", "Impact: Moving from 'Informal Reactive' to 'Mandatory Compliant' in days, not months."],
        speakerNotes: `Let's deep-dive into the DORA and NIS2 transition. Regulatory Change Management (RCM) is overwhelming because of the volume. AI brings speed to every stage. 

Step 1 — Automated Monitoring: AI scans thousands of regulatory sources in real-time. Using AI regulatory intelligence, NLP engines detect new rules the moment they are published.
Step 2 — NLP Interpretation: AI extracts meaning from complex legal documents, identifies obligations, and converts them into structured Jira data, summarizing 100-page RTS documents into actionable tasks.
Step 3 — AI Regulatory Mapping: AI links new obligations directly to internal policies and controls in Confluence, highlighting exactly where documentation or training must be updated.
Step 4 — AI Risk Scoring: Assigning risk categories based on deadlines and severity to prioritize high-risk updates like AML or cybersecurity patches.
Step 5 — AI Workflow Automation: Automatically triggering remediation tasks in Jira once a new requirement is mapped.
Step 6 — Audit Readiness: Generating detailed audit trails instantly for regulatory examinations. We move from 'Reactive Recovery' to 'Proactive Prevention' in days, not months.`,
        html: `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-stretch animate-content">
                <div class="lg:col-span-2 flex flex-col gap-8">
                    <div class="bg-blue-900 p-12 rounded-[3rem] text-white shadow-2xl flex-1 relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-10 opacity-10"><i data-lucide="landmark" class="w-40 h-40"></i></div>
                        <h3 class="text-blue-400 font-bold uppercase tracking-widest mb-6">Institutional Use Case</h3>
                        <h2 class="text-4xl font-black mb-8 leading-tight">Implementing Digital <br/>Operational Resilience (DORA)</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div class="space-y-4">
                                <h4 class="text-xl font-bold border-b border-blue-700 pb-2">The Challenge</h4>
                                <p class="text-blue-100 opacity-80 leading-relaxed">Managing 10,000+ third-party ICT service providers under new, strict EU resilience standards.</p>
                            </div>
                            <div class="space-y-4">
                                <h4 class="text-xl font-bold border-b border-blue-700 pb-2">The AI Edge</h4>
                                <p class="text-blue-100 opacity-80 leading-relaxed">Rovo extracts Technical Standards (RTS) and maps gaps to existing Forge/Jira workflows instantly.</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                            <h4 class="font-bold text-slate-900 mb-2">Tier 1 Strategy</h4>
                            <p class="text-slate-500">Used for basic automated reporting across all vendors.</p>
                        </div>
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                            <h4 class="font-bold text-slate-900 mb-2">Tier 2 Integration</h4>
                            <p class="text-slate-500">Full ICT risk management with 48-hour 'Max Velocity' remediation paths.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between shadow-2xl">
                    <div>
                        <div class="p-4 bg-blue-600 rounded-3xl w-fit mb-8 shadow-lg"><i data-lucide="activity" class="w-8 h-8"></i></div>
                        <h4 class="text-2xl font-black mb-4">Standard Delivery</h4>
                        <div class="text-5xl font-black text-blue-500 mb-2">3-5 Days</div>
                        <p class="text-slate-400">Total cycle for cross-border regulatory interpretation & mapping.</p>
                    </div>
                    <div class="pt-10 border-t border-slate-800">
                        <div class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Audit Readiness</div>
                        <div class="flex items-center gap-4"><div class="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div><span class="text-lg">Real-time Trail</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Case Study: Manufacturing Risk",
        pptTitle: "Case Study: Manufacturing Risk",
        pptBody: ["Scenario: Robotic Arm Sensor Protocol Change.", "Manual Failure: Missed cross-team dependency.", "Consequence: Global production shutdown.", "Business Impact: Tens of millions in losses."],
        speakerNotes: `To illustrate the danger of 'Tier 1' manual practices, look at this Manufacturing scenario. A team decided to update a sensor protocol on a robotic arm. In a siloed, manual environment, they missed that this protocol was a dependency for the safety-stop rail systems. 

Manual failure happened because the tech leads lacked a cross-departmental visual map. When the change was deployed, it triggered a global E-Stop across the entire production line. In a manufacturing setting, downtime costs tens of millions per hour. 

With AI-powered change management, the system doesn't just look at the ticket text—it scans the actual technical assets and cross-references them against internal dependency maps in Confluence and Jira. It would have flagged the safety-stop dependency in milliseconds, stopping the change before it ever reached the CAB. This moves us from 'Reactive Recovery' to 'Proactive Prevention'.`,
        html: `
            <div class="flex flex-col h-full space-y-10 animate-content">
                <div class="bg-orange-50 border border-orange-200 rounded-[2.5rem] p-10 flex gap-8 items-center shadow-sm">
                    <div class="p-6 bg-orange-500 rounded-full text-white shadow-lg"><i data-lucide="shield-alert" class="w-12 h-12"></i></div>
                    <div class="space-y-2"><h3 class="text-3xl font-black text-orange-950">Scenario: Robotic Arm Sensor Protocol Change</h3><p class="text-orange-900 text-xl opacity-80">A missed cross-team dependency triggers a global production shutdown.</p></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100"><h4 class="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900"><span class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-base font-black">01</span>Manual Failure</h4><p class="text-slate-600 text-lg">Cross-departmental rail systems were ignored. Technicians lacked impact visualization.</p></div>
                    <div class="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100"><h4 class="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900"><span class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-base font-black">02</span>The Consequence</h4><p class="text-slate-600 text-lg">E-Stop triggered across the entire line. Remediation took hours of high-stakes downtime.</p></div>
                </div>
                <div class="mt-auto bg-slate-900 p-14 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <div class="relative z-10"><div class="text-red-500 text-5xl font-black mb-4 tracking-tight">Loss: Tens of Millions</div><p class="text-slate-400 text-2xl font-medium tracking-wide">AI could have predicted this impact in milliseconds.</p></div>
                </div>
            </div>
        `
    },
    {
        title: "The Solution: AI at Every Stage",
        pptTitle: "The Solution: AI at Every Stage",
        pptBody: ["1. Intelligent Triage: AI redirects users to correct forms.", "2. Auto-Classify: Rovo populates 90% of fields.", "3. Smart Approval: Automated CAB scheduling.", "4. Auto-Docs: AI generates meeting notes and audit trails.", "5. SDLC Sync: Automatic Jira epic and task creation."],
        speakerNotes: "The architecture of our solution covers the entire lifecycle. From the moment a user thinks about a change, to the moment the developer starts coding. We use AI to remove the 'empty page' problem and the 'scheduling nightmare' of CAB meetings.",
        html: `
            <div class="h-full flex flex-col justify-center space-y-16 animate-content">
                <div class="text-center"><h2 class="text-4xl font-black text-slate-900 mb-4">Reimagining the Lifecycle with Atlassian AI</h2><p class="text-slate-500 text-xl font-medium italic">Intelligent automation from intake to implementation.</p></div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 h-72 items-stretch">
                    <div class="bg-blue-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
                        <div class="text-3xl font-black opacity-30">01</div>
                        <div><h3 class="font-bold text-xl mb-3 leading-tight">Intelligent Triage</h3><p class="text-sm opacity-80">AI detects incorrect forms and redirects users automatically.</p></div>
                    </div>
                    <div class="bg-blue-500 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
                        <div class="text-3xl font-black opacity-30">02</div>
                        <div><h3 class="font-bold text-xl mb-3 leading-tight">Auto-Classify</h3><p class="text-sm opacity-80">Rovo populates 90% of fields with intelligent suggestions.</p></div>
                    </div>
                    <div class="bg-blue-400 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
                        <div class="text-3xl font-black opacity-30">03</div>
                        <div><h3 class="font-bold text-xl mb-3 leading-tight">Smart Approval</h3><p class="text-sm opacity-80">Automated CAB scheduling finds optimal time slots.</p></div>
                    </div>
                    <div class="bg-blue-300 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
                        <div class="text-3xl font-black opacity-30">04</div>
                        <div><h3 class="font-bold text-xl mb-3 leading-tight">Auto-Docs</h3><p class="text-sm opacity-80">AI generates meeting notes, PIRs, and audit trails.</p></div>
                    </div>
                    <div class="bg-blue-200 rounded-3xl p-8 text-blue-950 shadow-xl flex flex-col justify-between">
                        <div class="text-3xl font-black opacity-30">05</div>
                        <div><h3 class="font-bold text-xl mb-3 leading-tight">SDLC Sync</h3><p class="text-sm opacity-80">Automatic creation of Jira epics and tech tasks.</p></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Intelligent Request Handling",
        pptTitle: "Intelligent Request Handling",
        pptBody: ["Stages 1 & 2: Precision intake via Rovo.", "Triage: Rovo extracts intent and context; no more misrouting.", "Classification: AI suggests impacted apps and backout plans.", "Value: 80% reduction in form-filling friction."],
        speakerNotes: "Intake is where most projects die. Users fill in the wrong fields or use the wrong templates. Rovo acts as a concierge, interpreting user intent to ensure 100% data accuracy before the request even hits the governance team.",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center animate-content">
                <div class="space-y-12">
                    <div class="space-y-4"><h3 class="text-4xl font-black text-blue-600 tracking-tight uppercase">Stages 1 & 2</h3><p class="text-slate-600 text-2xl font-medium">Precision intake through Rovo intelligence.</p></div>
                    <div class="space-y-8">
                        <div class="bg-white p-8 rounded-3xl border-l-[8px] border-blue-600 shadow-xl"><h4 class="font-bold text-2xl text-slate-900 mb-3">Triage</h4><p class="text-slate-600 text-lg leading-relaxed">Rovo extracts intent to ensure requests are never misrouted.</p></div>
                        <div class="bg-white p-8 rounded-3xl border-l-[8px] border-blue-600 shadow-xl"><h4 class="font-bold text-2xl text-slate-900 mb-3">Classification</h4><p class="text-slate-600 text-lg leading-relaxed">AI suggests impacted applications and backout plans instantly.</p></div>
                    </div>
                </div>
                <div class="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl space-y-10 flex flex-col justify-center">
                   <div class="text-blue-100 text-2xl font-bold border-b border-blue-500 pb-6 uppercase tracking-widest">Client Value</div>
                   <div class="flex items-center gap-10"><div class="text-8xl font-black">80%</div><div class="text-2xl text-blue-100 font-medium leading-tight">Reduction in form-filling friction</div></div>
                </div>
            </div>
        `
    },
    {
        title: "Streamlined Approvals",
        pptTitle: "Streamlined Approvals",
        pptBody: ["Stages 3 & 4: Zero Scheduling Bottlenecks.", "Approval Routing: AI identifies exact approvers per risk profile.", "Smart Scheduling: Zero calendar overhead for CAB meetings.", "Auto-Documentation: Meeting notes & Confluence sync.", "Full auditability for compliance (SOX/HIPAA/GDPR)."],
        speakerNotes: "Approvals often stagnate because people can't find a time to meet. Our system uses smart scheduling to automate CAB invitations based on real-time availability and risk profiles, and then generates the meeting minutes automatically.",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center animate-content">
                <div class="bg-slate-900 rounded-[3rem] p-10 text-white min-h-[400px] flex flex-col shadow-2xl">
                   <h3 class="text-3xl font-bold mb-12 text-blue-400 tracking-widest uppercase">Stages 3 & 4</h3>
                   <div class="space-y-10 flex-1">
                     <div class="flex gap-6 items-center"><div class="h-14 w-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg"><i data-lucide="users" class="w-7 h-7 text-blue-400"></i></div><div><h4 class="font-bold text-2xl">Approval Routing</h4><p class="text-slate-400 text-lg">AI identifies exact approvers per risk profile.</p></div></div>
                     <div class="flex gap-6 items-center"><div class="h-14 w-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg"><i data-lucide="file-text" class="w-7 h-7 text-blue-400"></i></div><div><h4 class="font-bold text-2xl">Auto-Documentation</h4><p class="text-slate-400 text-lg">Complete meeting notes and Confluence pages.</p></div></div>
                   </div>
                </div>
                <div class="space-y-12">
                   <h3 class="text-5xl font-black text-slate-900 leading-tight">Zero Scheduling <span class="text-blue-600">Bottlenecks.</span></h3>
                   <div class="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 flex items-center gap-8 shadow-sm">
                     <div class="p-4 bg-emerald-500 rounded-full text-white shadow-lg"><i data-lucide="shield-check" class="w-10 h-10"></i></div>
                     <div class="font-bold text-emerald-950 text-xl leading-relaxed">Full auditability for compliance (SOX/HIPAA/GDPR)</div>
                   </div>
                </div>
            </div>
        `
    },
    {
        title: "End-to-End SDLC Integration",
        pptTitle: "End-to-End SDLC Integration",
        pptBody: ["Stage 5 Transition: Moving to execution.", "AI generates Jira stories and tasks in seconds.", "Consistent engineering workflows and high-quality criteria.", "Immediate implementation readiness once approved."],
        speakerNotes: "Once a change is approved, the tech work begins. Instead of asking developers to manually copy-paste requirements into task lists, our AI generates the Jira Epics and Stories instantly, ensuring nothing is lost in translation.",
        html: `
            <div class="flex flex-col h-full space-y-16 justify-center animate-content">
                <div class="flex flex-col md:flex-row justify-between items-center bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                  <div class="text-center flex-1 px-8"><div class="text-xs text-slate-400 uppercase font-black tracking-[0.3em] mb-4">Manual Past</div><div class="text-xl font-bold text-slate-500 line-through opacity-50">Hours spent writing stories & tasks</div></div>
                  <div class="p-6 bg-blue-50 rounded-full text-blue-600 mx-4 shadow-inner"><i data-lucide="arrow-right" class="w-10 h-10"></i></div>
                  <div class="text-center flex-1 px-8"><div class="text-xs text-blue-500 uppercase font-black tracking-[0.3em] mb-4">Intelligent Future</div><div class="text-3xl font-black text-blue-700">Seconds to Generate</div></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 space-y-6 hover:shadow-2xl transition-all">
                     <h3 class="text-3xl font-bold flex items-center gap-5 text-slate-900"><div class="p-3 bg-blue-50 text-blue-600 rounded-2xl"><i data-lucide="cpu" class="w-8 h-8"></i></div>Stage 5 Transition</h3>
                     <p class="text-slate-600 text-xl leading-relaxed">Approved changes flow directly into execution. Jira epics are built automatically.</p>
                  </div>
                  <div class="bg-blue-600 p-12 rounded-[2.5rem] shadow-2xl text-white space-y-6">
                     <h3 class="text-3xl font-bold mb-6">Client Value</h3>
                     <ul class="space-y-6 text-blue-50 font-medium text-xl">
                        <li class="flex gap-4 items-center"><i data-lucide="check-circle-2" class="w-6 h-6 text-blue-200"></i> Immediate implementation readiness</li>
                        <li class="flex gap-4 items-center"><i data-lucide="check-circle-2" class="w-6 h-6 text-blue-200"></i> Consistent engineering workflows</li>
                     </ul>
                  </div>
                </div>
            </div>
        `
    },
    {
        title: "Business Value & ROI",
        pptTitle: "Business Value & ROI",
        pptBody: ["SLA Safe: Predictable compliance.", "Faster Go-Live: Cycle times from days to hours.", "Better Quality: Fewer incidents through prediction.", "Op Savings: Direct hourly cost savings.", "Modernize your ITSM today with Deviniti."],
        speakerNotes: "The conclusion is clear: AI-powered change management isn't just a technical upgrade; it's a financial imperative. We deliver predictable compliance, faster go-lives, and significant operational savings. Thank you for your time.",
        html: `
            <div class="flex flex-col h-full items-center justify-center space-y-20 animate-content">
                <div class="text-center space-y-6">
                  <h2 class="text-7xl font-black text-slate-900 tracking-tight">Immediate <span class="text-blue-600">ROI</span></h2>
                  <p class="text-2xl text-slate-500 font-medium">Dramatic productivity gains using tools you already own.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
                    <div class="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shadow-sm mb-6"><i data-lucide="shield-check" class="w-10 h-10"></i></div>
                    <h4 class="font-bold text-2xl text-slate-900 mb-2">SLA Safe</h4><p class="text-slate-500">Compliance.</p>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
                    <div class="w-20 h-20 mx-auto bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shadow-sm mb-6"><i data-lucide="clock" class="w-10 h-10"></i></div>
                    <h4 class="font-bold text-2xl text-slate-900 mb-2">Go-Live</h4><p class="text-slate-500">Days to hours.</p>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
                    <div class="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center shadow-sm mb-6"><i data-lucide="zap" class="w-10 h-10"></i></div>
                    <h4 class="font-bold text-2xl text-slate-900 mb-2">Quality</h4><p class="text-slate-500">Fewer incidents.</p>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
                    <div class="w-20 h-20 mx-auto bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center shadow-sm mb-6"><i data-lucide="trending-up" class="w-10 h-10"></i></div>
                    <h4 class="font-bold text-2xl text-slate-900 mb-2">Savings</h4><p class="text-slate-500">Op cost direct.</p>
                  </div>
                </div>
                <div class="w-full bg-slate-900 rounded-[3rem] p-16 text-center text-white relative shadow-2xl">
                   <h3 class="text-4xl font-black italic text-blue-300">Modernize your ITSM today.</h3>
                </div>
            </div>
        `
    }
];

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
    bgBlob1.style.transform = `translate(${moveX}px, ${moveX/2}px)`;
    bgBlob2.style.transform = `translate(-${moveX}px, -${moveX/2}px)`;

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
