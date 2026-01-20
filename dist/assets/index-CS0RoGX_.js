(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const u=[{title:"AI-Powered Change Management",pptTitle:"AI-Powered Change Management",pptBody:["Transforming your Atlassian ecosystem into an intelligent powerhouse.","A complete end-to-end automation framework that maximizes existing tools."],speakerNotes:"Welcome everyone. Today we are discussing the evolution of Change Management. In an era where manual processes are becoming the primary bottleneck for innovation, we are showcasing how to turn your existing Atlassian stack into an intelligent, AI-powered governance engine.",html:`
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
        `},{title:"The Problem: Manual Management is Broken",pptTitle:"The Problem: Manual Management is Broken",pptBody:["Lost Requests: Incorrect forms and misplaced tickets lead to chaos.","Approval Delays: Inconsistent details breach SLAs.","Manual Overhead: Documentation takes hours away from actual work.","IMPACT: Millions in potential business losses."],speakerNotes:"Why are we here? Because manual management is fundamentally broken at scale. We see millions lost due to deployment delays and operational friction. Inconsistent documentation isn't just a nuisance; it's a critical business risk that leads to SLA breaches and failed audits.",html:`
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
        `},{title:"Unlocking Value You Already Own",pptTitle:"Unlocking Value You Already Own",pptBody:["You already invest in Atlassian; use it effectively.","No extra costs: No additional AI tools needed.","Zero Licensing: Use existing tier benefits.","Immediate ROI: Turn passive tools into active profit intelligence."],speakerNotes:"The best part of this strategy? You likely already own the infrastructure. By leveraging Atlassian Rovo and Forge, you're not adding new per-seat 'AI taxes'—you're activating latent capabilities in the platform you already pay for.",html:`
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
        `},{title:"Industry-Specific Challenges",pptTitle:"Industry-Specific Challenges",pptBody:["Banking: Heavy compliance (SOX, PCI-DSS).","Manufacturing: Complex dependencies (ERP/IoT); downtime is expensive.","Retail: High-frequency changes & peak traffic windows.","Healthcare: Regulatory oversight (HIPAA)."],speakerNotes:"Different industries face unique pressures. In Banking, it's about avoiding massive fines. In Manufacturing, it's about physical safety and expensive downtime. AI allows us to create custom logic for each of these high-stakes environments.",html:`
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
        `},{title:"Institutional Use Case: Cyber Security",pptTitle:"Institutional Use Case: Cyber Security",pptBody:["Scenario: New '72-Hour' Breach Reporting Law.","The Challenge: Aligning 5,000+ staff to a critical deadline.","Manual Risk: Emails ignored, SLAs missed, fines levied.","The AI Solution: Auto-updates Jira workflows to enforce new time limit.","Outcome: Compliance is code, not just policy."],speakerNotes:`Let's discuss a real-world institutional use case. Imagine a new Cyber Security regulation passes that mandates: 'All data breaches must be reported within 72 hours.'

In the old manual world, this is a nightmare. Layers of bureaucracy, emails, and meetings. But when a breach actually happens at 2 AM, the engineer on call might follow an old playbook, miss the deadline, and the institution faces massive fines.

With AI, the system monitors the law. It detects the '72-Hour' requirement and instantly finds your 'Incident Response' workflow in Jira. It proposes a change: 'Update SLA to 3 days.' Once approved, the tool itself enforces the law. We stop relying on human memory and start baking compliance directly into our operations.`,html:`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center animate-content">
                <div class="space-y-10">
                    <div class="bg-indigo-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                        <div class="absolute -right-6 -top-6 text-white opacity-10"><i data-lucide="scale" class="w-48 h-48"></i></div>
                        <h3 class="text-indigo-300 font-bold uppercase tracking-widest mb-4 text-sm">The "New Law" Scenario</h3>
                        <h2 class="text-3xl font-black mb-6 leading-tight">"Report all breaches within <span class="text-yellow-400">72 Hours</span>."</h2>
                        <p class="text-indigo-100 text-lg leading-relaxed opacity-90">A strict new government mandate drops. Failure to comply means millions in fines.</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-3xl border-l-[6px] border-red-500 shadow-xl">
                        <div class="flex items-center gap-4 mb-3">
                            <div class="p-2 bg-red-100 text-red-600 rounded-lg"><i data-lucide="x-circle" class="w-6 h-6"></i></div>
                            <h4 class="font-bold text-slate-900 text-xl">The Old Way</h4>
                        </div>
                        <p class="text-slate-600">Legal sends an email. IT Operations misses the memo. <br/><span class="font-bold text-red-600">Result: Non-Compliance at 2 AM.</span></p>
                    </div>
                </div>

                <div class="flex flex-col gap-8">
                    <div class="bg-white p-10 rounded-[2.5rem] border border-blue-100 shadow-xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                        <h3 class="flex items-center gap-3 text-2xl font-black text-slate-900 mb-6">
                            <i data-lucide="sparkles" class="w-8 h-8 text-blue-500"></i>
                            The AI Transformation
                        </h3>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                                <div><h4 class="font-bold text-slate-900">Interpretation</h4><p class="text-slate-500">AI reads the law and extracts the "72-Hour" variable.</p></div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
                                <div><h4 class="font-bold text-slate-900">Adaptation</h4><p class="text-slate-500">System auto-updates the <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Incident_SLA</span> field in Jira.</p></div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
                                <div><h4 class="font-bold text-slate-900">Enforcement</h4><p class="text-slate-500">The software alerts staff automatically. Compliance is guaranteed.</p></div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-between">
                         <div>
                            <div class="text-xs uppercase font-bold text-emerald-800 tracking-wider mb-1">Impact</div>
                            <div class="text-xl font-bold text-emerald-900">Audit-Ready Instantly</div>
                         </div>
                         <div class="h-12 w-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm"><i data-lucide="check" class="w-6 h-6"></i></div>
                    </div>
                </div>
            </div>
        `},{title:"Banking & Cyber Governance Frameworks",pptTitle:"Banking & Cyber Governance Frameworks",pptBody:["NIST CSF Tiers: Mapping from Tier 1 (Partial/Ad-hoc) to Tier 2 (Risk-Informed).","EU Mandates: Accelerating DORA and NIS2 (Oct 2024 deadlines).","Maturity Shift: Moving reactive governance into proactive risk management.","Efficiency: 3-5 day standard AI-augmented cycles for standard changes."],speakerNotes:`Most Tier 1 banking institutions currently operate in 'NIST Tier 1 maturity'—risk management is ad-hoc, informal, and reactive. However, new EU mandates like NIS2 (which hit national laws in Oct 2024) and DORA (for finance) are making this manual approach legally untenable. 

We use AI to bridge the gap to Tier 2: 'Risk-Informed.' This means move away from 'hope-based' compliance to 'verified' compliance. AI regulatory intelligence can scan thousands of regulatory sources in real-time. Organizations no longer need to manually review websites or track newsletters. Using AI regulatory intelligence, NLP engines detect new rules the moment they are published and flag updates relevant specifically to your Jira tickets. We're talking about reducing a 30-day manual cross-referencing slog into a 3–5 day AI-augmented governance cycle that still maintains strict institutional human-in-the-loop oversight.`,html:`
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
        `},{title:"Case Study: Manufacturing Risk",pptTitle:"Case Study: Manufacturing Risk",pptBody:["Scenario: Robotic Arm Sensor Protocol Change.","Manual Failure: Missed cross-team dependency.","Consequence: Global production shutdown.","Business Impact: Tens of millions in losses."],speakerNotes:`To illustrate the danger of 'Tier 1' manual practices, look at this Manufacturing scenario. A team decided to update a sensor protocol on a robotic arm. In a siloed, manual environment, they missed that this protocol was a dependency for the safety-stop rail systems. 

Manual failure happened because the tech leads lacked a cross-departmental visual map. When the change was deployed, it triggered a global E-Stop across the entire production line. In a manufacturing setting, downtime costs tens of millions per hour. 

With AI-powered change management, the system doesn't just look at the ticket text—it scans the actual technical assets and cross-references them against internal dependency maps in Confluence and Jira. It would have flagged the safety-stop dependency in milliseconds, stopping the change before it ever reached the CAB. This moves us from 'Reactive Recovery' to 'Proactive Prevention'.`,html:`
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
        `},{title:"The Solution: AI at Every Stage",pptTitle:"The Solution: AI at Every Stage",pptBody:["1. Intelligent Triage: AI redirects users to correct forms.","2. Auto-Classify: Rovo populates 90% of fields.","3. Smart Approval: Automated CAB scheduling.","4. Auto-Docs: AI generates meeting notes and audit trails.","5. SDLC Sync: Automatic Jira epic and task creation."],speakerNotes:"The architecture of our solution covers the entire lifecycle. From the moment a user thinks about a change, to the moment the developer starts coding. We use AI to remove the 'empty page' problem and the 'scheduling nightmare' of CAB meetings.",html:`
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
        `},{title:"Intelligent Request Handling",pptTitle:"Intelligent Request Handling",pptBody:["Stages 1 & 2: Precision intake via Rovo.","Triage: Rovo extracts intent and context; no more misrouting.","Classification: AI suggests impacted apps and backout plans.","Value: 80% reduction in form-filling friction."],speakerNotes:"Intake is where most projects die. Users fill in the wrong fields or use the wrong templates. Rovo acts as a concierge, interpreting user intent to ensure 100% data accuracy before the request even hits the governance team.",html:`
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
        `},{title:"Streamlined Approvals",pptTitle:"Streamlined Approvals",pptBody:["Stages 3 & 4: Zero Scheduling Bottlenecks.","Approval Routing: AI identifies exact approvers per risk profile.","Smart Scheduling: Zero calendar overhead for CAB meetings.","Auto-Documentation: Meeting notes & Confluence sync.","Full auditability for compliance (SOX/HIPAA/GDPR)."],speakerNotes:"Approvals often stagnate because people can't find a time to meet. Our system uses smart scheduling to automate CAB invitations based on real-time availability and risk profiles, and then generates the meeting minutes automatically.",html:`
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
        `},{title:"End-to-End SDLC Integration",pptTitle:"End-to-End SDLC Integration",pptBody:["Stage 5 Transition: Moving to execution.","AI generates Jira stories and tasks in seconds.","Consistent engineering workflows and high-quality criteria.","Immediate implementation readiness once approved."],speakerNotes:"Once a change is approved, the tech work begins. Instead of asking developers to manually copy-paste requirements into task lists, our AI generates the Jira Epics and Stories instantly, ensuring nothing is lost in translation.",html:`
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
        `},{title:"Business Value & ROI",pptTitle:"Business Value & ROI",pptBody:["SLA Safe: Predictable compliance.","Faster Go-Live: Cycle times from days to hours.","Better Quality: Fewer incidents through prediction.","Op Savings: Direct hourly cost savings.","Modernize your ITSM today with Deviniti."],speakerNotes:"The conclusion is clear: AI-powered change management isn't just a technical upgrade; it's a financial imperative. We deliver predictable compliance, faster go-lives, and significant operational savings. Thank you for your time.",html:`
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
        `}];let l=0;const n=u.length;let c=!1;const d=document.getElementById("slide-content"),h=document.getElementById("main-stage"),A=document.getElementById("header-slide-title"),S=document.getElementById("top-progress-bar"),T=document.getElementById("progress-percent"),C=document.getElementById("slide-index-label"),v=document.getElementById("nav-dots"),y=document.getElementById("nav-next"),w=document.getElementById("nav-prev"),k=document.getElementById("hitbox-left"),I=document.getElementById("hitbox-right"),B=document.getElementById("download-ppt"),L=document.getElementById("download-pdf"),R=document.getElementById("toggle-notes"),M=document.getElementById("close-notes"),f=document.getElementById("notes-drawer"),E=document.getElementById("notes-body"),b=document.getElementById("print-container"),N=document.getElementById("bg-blob-1"),P=document.getElementById("bg-blob-2");function O(){v.innerHTML="";for(let e=0;e<n;e++){const s=document.createElement("button");s.className=`h-2 rounded-full transition-all duration-500 ${e===l?"bg-blue-600 w-8":"bg-slate-300 w-2 hover:bg-slate-400"}`,s.onclick=()=>j(e),v.appendChild(s)}}function x(){const e=u[l];E.innerHTML=e.speakerNotes?e.speakerNotes.split(`

`).map(s=>`<p class="mb-4">${s}</p>`).join(""):'<p class="italic opacity-50">No notes for this slide.</p>',c?(f.classList.add("open"),h.classList.add("pr-80","lg:pr-96")):(f.classList.remove("open"),h.classList.remove("pr-80","lg:pr-96"))}function p(e,s="next"){const i=s==="next"?"exit-left":"exit-right",o=s==="next"?"enter-right":"enter-left";d.classList.remove("slide-active"),d.classList.add(i);const t=e/n*100;N.style.transform=`translate(${t}px, ${t/2}px)`,P.style.transform=`translate(-${t}px, -${t/2}px)`,setTimeout(()=>{l=e;const a=u[e];d.innerHTML=`<div class="animate-content w-full h-full flex flex-col justify-center">${a.html}</div>`,d.classList.remove(i),d.classList.add(o),A.textContent=a.title;const r=Math.round((e+1)/n*100);S.style.width=`${r}%`,T.textContent=`${r}%`,C.textContent=`${String(e+1).padStart(2,"0")} / ${n}`,w.disabled=e===0,y.disabled=e===n-1,k.disabled=e===0,I.disabled=e===n-1,O(),x(),lucide.createIcons(),requestAnimationFrame(()=>{d.classList.remove(o),d.classList.add("slide-active")})},300)}function m(){l<n-1&&p(l+1,"next")}function g(){l>0&&p(l-1,"prev")}function j(e){e>l?p(e,"next"):e<l&&p(e,"prev")}function D(){const e=new PptxGenJS;e.layout="LAYOUT_16x9";const s={primary:"2563EB",textDark:"0F172A",textLight:"475569",bg:"F8FAFC"};e.defineSlideMaster({title:"MASTER",background:{fill:s.bg},objects:[{rect:{x:0,y:0,w:"100%",h:.1,fill:{color:s.primary}}},{text:{text:"DEVINITI AI",options:{x:.5,y:.2,fontFace:"Arial",fontSize:14,color:s.primary,bold:!0}}}]}),u.forEach((i,o)=>{const t=e.addSlide({masterName:"MASTER"});i.speakerNotes&&(t.notes=i.speakerNotes),t.addText(i.pptTitle,{x:.5,y:.8,w:"90%",fontSize:32,fontFace:"Arial",bold:!0,color:s.textDark}),i.pptBody&&t.addText(i.pptBody.map(a=>({text:a,options:{bullet:!0}})),{x:.5,y:1.8,w:"90%",fontSize:18,fontFace:"Arial",color:s.textLight,lineSpacing:28}),t.addText(`Slide ${o+1} / ${n}`,{x:"85%",y:"92%",fontSize:10,color:s.textLight,align:"right"})}),e.writeFile({fileName:"Deviniti_AI_Change_Management.pptx"})}function F(){b.innerHTML="",u.forEach(e=>{const s=document.createElement("div");s.className="print-slide",s.innerHTML=e.html,b.appendChild(s)}),lucide.createIcons(),setTimeout(()=>window.print(),800)}y.onclick=m;w.onclick=g;k.onclick=g;I.onclick=m;B.onclick=D;L.onclick=F;R.onclick=()=>{c=!c,x()};M.onclick=()=>{c=!1,x()};window.addEventListener("keydown",e=>{(e.key==="ArrowRight"||e.key===" ")&&m(),e.key==="ArrowLeft"&&g(),(e.key==="n"||e.key==="N")&&(c=!c,x())});p(0);
