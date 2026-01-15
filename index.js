
/**
 * Deviniti Presentation Logic
 * Handles slide rendering, navigation, and visual updates.
 */

const SLIDES = [
    {
        title: "AI-Powered Change Management",
        html: `
            <div class="flex flex-col items-center justify-center h-full text-center space-y-10">
                <div class="relative animate-bounce" style="animation-duration: 3s;">
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
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
                <div class="space-y-8">
                    <h2 class="text-5xl font-black text-slate-900 leading-tight">Manual Management is <br/><span class="text-red-600 italic">Broken.</span></h2>
                    <div class="space-y-6 mt-12">
                        <div class="flex gap-5 items-start p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
                            <div class="p-4 bg-red-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <i data-lucide="shield-alert" class="w-7 h-7 text-red-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Lost Requests</h4>
                                <p class="text-slate-600">Incorrect forms and misplaced tickets lead to chaos.</p>
                            </div>
                        </div>
                        <div class="flex gap-5 items-start p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
                            <div class="p-4 bg-red-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <i data-lucide="clock" class="w-7 h-7 text-red-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Approval Delays</h4>
                                <p class="text-slate-600">Inconsistent details breach SLAs and waste time.</p>
                            </div>
                        </div>
                        <div class="flex gap-5 items-start p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
                            <div class="p-4 bg-red-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <i data-lucide="file-text" class="w-7 h-7 text-red-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl text-slate-900 mb-1">Manual Overhead</h4>
                                <p class="text-slate-600">Documentation takes hours away from actual work.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl space-y-8 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
                    <h3 class="text-2xl font-bold border-b border-slate-700 pb-6 uppercase tracking-widest text-slate-400">The Business Impact</h3>
                    <ul class="space-y-8">
                        <li class="flex items-center gap-6">
                            <div class="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <span class="text-xl font-medium opacity-90">Increased operational costs</span>
                        </li>
                        <li class="flex items-center gap-6">
                            <div class="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <span class="text-xl font-medium opacity-90">Elevated business risk profile</span>
                        </li>
                        <li class="flex items-center gap-6">
                            <div class="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <span class="text-xl font-medium opacity-90">Persistent deployment delays</span>
                        </li>
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
        html: `
            <div class="flex flex-col items-center justify-center h-full space-y-16">
                <div class="text-center max-w-4xl space-y-6">
                    <h2 class="text-5xl font-black text-slate-900 tracking-tight">You are already investing in the <span class="text-blue-600">Atlassian ecosystem.</span></h2>
                    <p class="text-xl text-slate-600 font-medium">Stop leaving ROI on the table. Rovo, Confluence AI, and Forge are waiting for you.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-3 transition-all group">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                            <i data-lucide="zap" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">No Extra Costs</h3>
                        <p class="text-slate-500 leading-relaxed">No additional AI tool purchases required. Use what's on your balance sheet.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-3 transition-all group">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                            <i data-lucide="layers" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">Zero Licensing</h3>
                        <p class="text-slate-500 leading-relaxed">Leverage existing Atlassian tier benefits without extra per-seat AI taxes.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-3 transition-all group">
                        <div class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                            <i data-lucide="trending-up" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-slate-900">Immediate ROI</h3>
                        <p class="text-slate-500 leading-relaxed">Turn passive tools into active profit-generating intelligence today.</p>
                    </div>
                </div>
                
                <div class="w-full bg-blue-600 p-10 rounded-[2rem] text-white text-center shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-50"></div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold mb-3 tracking-wide">The Proposition</h3>
                        <p class="text-blue-50 text-xl italic font-light">"Maximize your existing Atlassian investment through intelligent automation."</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Industry-Specific Challenges",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center">
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-blue-500 hover:shadow-2xl transition-all">
                    <div class="p-5 bg-blue-50 rounded-2xl text-blue-600"><i data-lucide="building-2" class="w-10 h-10"></i></div>
                    <div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-3">Banking & Finance</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">Heavy compliance (SOX, PCI-DSS) and zero-tolerance for operational risk.</p>
                    </div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-orange-500 hover:shadow-2xl transition-all">
                    <div class="p-5 bg-orange-50 rounded-2xl text-orange-600"><i data-lucide="factory" class="w-10 h-10"></i></div>
                    <div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-3">Manufacturing</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">Complex dependencies (ERP/IoT); shutdowns cost millions per hour.</p>
                    </div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-emerald-500 hover:shadow-2xl transition-all">
                    <div class="p-5 bg-emerald-50 rounded-2xl text-emerald-600"><i data-lucide="shopping-cart" class="w-10 h-10"></i></div>
                    <div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-3">Retail & E-Commerce</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">High-frequency changes and critical peak-traffic stability windows.</p>
                    </div>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-xl flex items-start gap-8 border-l-[6px] border-rose-500 hover:shadow-2xl transition-all">
                    <div class="p-5 bg-rose-50 rounded-2xl text-rose-600"><i data-lucide="heart-pulse" class="w-10 h-10"></i></div>
                    <div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-3">Healthcare</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">Strict regulatory oversight (HIPAA) and slow clinical governance cycles.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Case Study: Manufacturing Risk",
        html: `
            <div class="flex flex-col h-full space-y-10">
                <div class="bg-orange-50 border border-orange-200 rounded-[2.5rem] p-10 flex gap-8 items-center shadow-sm">
                    <div class="p-6 bg-orange-500 rounded-full text-white shadow-lg"><i data-lucide="shield-alert" class="w-12 h-12"></i></div>
                    <div class="space-y-2">
                        <h3 class="text-3xl font-black text-orange-950">Scenario: Robotic Arm Sensor Protocol Change</h3>
                        <p class="text-orange-900 text-xl opacity-80">A missed cross-team dependency triggers a global production shutdown.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center">
                        <h4 class="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
                            <span class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-base font-black">01</span>
                            The Manual Failure
                        </h4>
                        <p class="text-slate-600 text-lg">Cross-departmental rail systems were ignored. Technicians lacked impact visualization.</p>
                    </div>
                    <div class="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center">
                        <h4 class="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
                            <span class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-base font-black">02</span>
                            The Consequence
                        </h4>
                        <p class="text-slate-600 text-lg">E-Stop triggered across the entire line. Remediation took hours of high-stakes downtime.</p>
                    </div>
                </div>

                <div class="mt-auto bg-slate-900 p-14 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i data-lucide="trending-up" class="w-48 h-48 text-red-500"></i>
                    </div>
                    <div class="relative z-10">
                        <div class="text-red-500 text-5xl font-black mb-4 tracking-tight underline decoration-red-900 underline-offset-8">Loss: Tens of Millions</div>
                        <p class="text-slate-400 text-2xl font-medium tracking-wide">AI could have predicted this impact in milliseconds.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "The Solution: AI at Every Stage",
        html: `
            <div class="h-full flex flex-col justify-center space-y-16">
                <div class="text-center">
                    <h2 class="text-4xl font-black text-slate-900 mb-4">Reimagining the Lifecycle with Atlassian AI</h2>
                    <p class="text-slate-500 text-xl font-medium italic">Intelligent automation from intake to implementation.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 h-72 items-stretch">
                    <div class="flex flex-col group h-full">
                        <div class="bg-blue-600 flex-1 rounded-3xl p-8 text-white shadow-xl transition-all group-hover:-translate-y-4 group-hover:shadow-2xl flex flex-col justify-between">
                            <div class="text-3xl font-black opacity-30">01</div>
                            <div>
                                <h3 class="font-bold text-xl mb-3 leading-tight">Intelligent Triage</h3>
                                <p class="text-sm opacity-80">AI detects incorrect forms and redirects users automatically.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col group h-full">
                        <div class="bg-blue-500 flex-1 rounded-3xl p-8 text-white shadow-xl transition-all group-hover:-translate-y-4 group-hover:shadow-2xl flex flex-col justify-between">
                            <div class="text-3xl font-black opacity-30">02</div>
                            <div>
                                <h3 class="font-bold text-xl mb-3 leading-tight">Auto-Classify</h3>
                                <p class="text-sm opacity-80">Rovo populates 90% of fields with intelligent suggestions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col group h-full">
                        <div class="bg-blue-400 flex-1 rounded-3xl p-8 text-white shadow-xl transition-all group-hover:-translate-y-4 group-hover:shadow-2xl flex flex-col justify-between">
                            <div class="text-3xl font-black opacity-30">03</div>
                            <div>
                                <h3 class="font-bold text-xl mb-3 leading-tight">Smart Approval</h3>
                                <p class="text-sm opacity-80">Automated CAB scheduling finds optimal time slots.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col group h-full">
                        <div class="bg-blue-300 flex-1 rounded-3xl p-8 text-white shadow-xl transition-all group-hover:-translate-y-4 group-hover:shadow-2xl flex flex-col justify-between">
                            <div class="text-3xl font-black opacity-30">04</div>
                            <div>
                                <h3 class="font-bold text-xl mb-3 leading-tight">Auto-Docs</h3>
                                <p class="text-sm opacity-80">AI generates meeting notes, PIRs, and audit trails.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col group h-full">
                        <div class="bg-blue-200 flex-1 rounded-3xl p-8 text-white shadow-xl transition-all group-hover:-translate-y-4 group-hover:shadow-2xl flex flex-col justify-between">
                            <div class="text-3xl font-black opacity-30">05</div>
                            <div>
                                <h3 class="font-bold text-xl mb-3 leading-tight">SDLC Sync</h3>
                                <p class="text-sm opacity-80">Automatic creation of Jira epics and tech tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Intelligent Request Handling",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
                <div class="space-y-12">
                    <div class="space-y-4">
                        <h3 class="text-4xl font-black text-blue-600 tracking-tight uppercase">Stages 1 & 2</h3>
                        <p class="text-slate-600 text-2xl font-medium">Precision intake through Rovo-powered intelligence.</p>
                    </div>
                    <div class="space-y-8">
                        <div class="bg-white p-8 rounded-3xl border-l-[8px] border-blue-600 shadow-xl group hover:bg-slate-50 transition-colors">
                            <h4 class="font-bold text-2xl text-slate-900 flex items-center gap-4 mb-3">
                                <div class="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="bot" class="w-6 h-6"></i></div>
                                Triage
                            </h4>
                            <p class="text-slate-600 text-lg leading-relaxed">Rovo extracts intent and context from descriptions to ensure requests are never misrouted.</p>
                        </div>
                        <div class="bg-white p-8 rounded-3xl border-l-[8px] border-blue-600 shadow-xl group hover:bg-slate-50 transition-colors">
                            <h4 class="font-bold text-2xl text-slate-900 flex items-center gap-4 mb-3">
                                <div class="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="layers" class="w-6 h-6"></i></div>
                                Classification
                            </h4>
                            <p class="text-slate-600 text-lg leading-relaxed">AI suggests impacted applications and backout plans based on past institutional knowledge.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-600 rounded-[3rem] p-12 space-y-10 flex flex-col justify-center text-white shadow-2xl relative overflow-hidden">
                   <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>
                   <div class="text-blue-100 text-2xl font-bold border-b border-blue-500 pb-6 uppercase tracking-widest">Client Value</div>
                   <div class="flex items-center gap-10">
                     <div class="text-8xl font-black">80%</div>
                     <div class="text-2xl text-blue-100 font-medium leading-tight">Reduction in form-filling <br/>friction</div>
                   </div>
                   <div class="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      <p class="text-white text-xl italic font-light">"Stop fixing bad data at the end of the process; prevent it at the start."</p>
                   </div>
                </div>
            </div>
        `
    },
    {
        title: "Streamlined Approvals & Documentation",
        html: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
                <div class="bg-slate-900 rounded-[3rem] p-10 text-white min-h-[500px] flex flex-col shadow-2xl relative">
                   <div class="absolute top-10 right-10"><i data-lucide="clock" class="w-16 h-16 text-blue-500 opacity-20"></i></div>
                   <h3 class="text-3xl font-bold mb-12 text-blue-400 tracking-widest uppercase">Stages 3 & 4</h3>
                   <div class="space-y-10 flex-1">
                     <div class="flex gap-6 items-center">
                       <div class="h-14 w-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg"><i data-lucide="users" class="w-7 h-7"></i></div>
                       <div><h4 class="font-bold text-2xl">Approval Routing</h4><p class="text-slate-400 text-lg">AI identifies exact approvers per risk profile.</p></div>
                     </div>
                     <div class="flex gap-6 items-center">
                       <div class="h-14 w-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg"><i data-lucide="settings" class="w-7 h-7"></i></div>
                       <div><h4 class="font-bold text-2xl">Smart Scheduling</h4><p class="text-slate-400 text-lg">Zero calendar overhead for CAB meetings.</p></div>
                     </div>
                     <div class="flex gap-6 items-center">
                       <div class="h-14 w-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg"><i data-lucide="file-text" class="w-7 h-7"></i></div>
                       <div><h4 class="font-bold text-2xl">Auto-Documentation</h4><p class="text-slate-400 text-lg">Complete meeting notes and Confluence pages.</p></div>
                     </div>
                   </div>
                </div>

                <div class="space-y-12">
                   <h3 class="text-5xl font-black text-slate-900 leading-tight">Zero Scheduling <span class="text-blue-600">Bottlenecks.</span></h3>
                   <p class="text-2xl text-slate-600 leading-relaxed font-light">Eliminate the human friction of coordination. Move through governance at the speed of your team's intent.</p>
                   
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
        html: `
            <div class="flex flex-col h-full space-y-16 justify-center">
                <div class="flex flex-col md:flex-row justify-between items-center bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl relative">
                  <div class="text-center flex-1 px-8">
                    <div class="text-xs text-slate-400 uppercase font-black tracking-[0.3em] mb-4">The Manual Past</div>
                    <div class="text-xl font-bold text-slate-500 line-through opacity-50">Hours spent writing stories & tasks</div>
                  </div>
                  <div class="p-6 bg-blue-50 rounded-full text-blue-600 mx-4 shadow-inner">
                    <i data-lucide="arrow-right" class="w-10 h-10"></i>
                  </div>
                  <div class="text-center flex-1 px-8">
                    <div class="text-xs text-blue-500 uppercase font-black tracking-[0.3em] mb-4">The Intelligent Future</div>
                    <div class="text-3xl font-black text-blue-700">Seconds to Generate</div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 space-y-6 hover:shadow-2xl transition-all">
                     <h3 class="text-3xl font-bold flex items-center gap-5 text-slate-900">
                       <div class="p-3 bg-blue-50 text-blue-600 rounded-2xl"><i data-lucide="cpu" class="w-8 h-8"></i></div>
                       Stage 5 Transition
                     </h3>
                     <p class="text-slate-600 text-xl leading-relaxed">Approved changes flow directly into execution. Jira epics and stories are built with consistent, high-quality structures automatically.</p>
                  </div>
                  <div class="bg-blue-600 p-12 rounded-[2.5rem] shadow-2xl text-white space-y-6 relative overflow-hidden group">
                     <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div class="relative z-10">
                        <h3 class="text-3xl font-bold mb-6">Client Value</h3>
                        <ul class="space-y-6 text-blue-50 font-medium text-xl">
                          <li class="flex gap-4 items-center"><i data-lucide="check-circle-2" class="w-6 h-6 text-blue-200"></i> Immediate implementation readiness</li>
                          <li class="flex gap-4 items-center"><i data-lucide="check-circle-2" class="w-6 h-6 text-blue-200"></i> Consistent engineering workflows</li>
                          <li class="flex gap-4 items-center"><i data-lucide="check-circle-2" class="w-6 h-6 text-blue-200"></i> Higher quality acceptance criteria</li>
                        </ul>
                     </div>
                  </div>
                </div>
            </div>
        `
    },
    {
        title: "Business Value & Immediate ROI",
        html: `
            <div class="flex flex-col h-full items-center justify-center space-y-20">
                <div class="text-center space-y-6">
                  <h2 class="text-7xl font-black text-slate-900 tracking-tight">Immediate <span class="text-blue-600">ROI</span></h2>
                  <p class="text-2xl text-slate-500 max-w-2xl mx-auto font-medium">Dramatic productivity gains using tools you already own.</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center gap-6 hover:-translate-y-4 transition-all border border-slate-50">
                    <div class="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shadow-sm"><i data-lucide="shield-check" class="w-10 h-10"></i></div>
                    <div><h4 class="font-bold text-2xl text-slate-900 mb-2">SLA Safe</h4><p class="text-slate-500 font-medium">Predictable compliance.</p></div>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center gap-6 hover:-translate-y-4 transition-all border border-slate-50">
                    <div class="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shadow-sm"><i data-lucide="clock" class="w-10 h-10"></i></div>
                    <div><h4 class="font-bold text-2xl text-slate-900 mb-2">Faster Go-Live</h4><p class="text-slate-500 font-medium">Days to hours.</p></div>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center gap-6 hover:-translate-y-4 transition-all border border-slate-50">
                    <div class="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center shadow-sm"><i data-lucide="zap" class="w-10 h-10"></i></div>
                    <div><h4 class="font-bold text-2xl text-slate-900 mb-2">Better Quality</h4><p class="text-slate-500 font-medium">Fewer incidents.</p></div>
                  </div>
                  <div class="bg-white p-10 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center gap-6 hover:-translate-y-4 transition-all border border-slate-50">
                    <div class="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center shadow-sm"><i data-lucide="trending-up" class="w-10 h-10"></i></div>
                    <div><h4 class="font-bold text-2xl text-slate-900 mb-2">Op Savings</h4><p class="text-slate-500 font-medium">Direct cost savings.</p></div>
                  </div>
                </div>

                <div class="w-full bg-slate-900 rounded-[3rem] p-16 text-center text-white relative overflow-hidden group shadow-2xl">
                   <div class="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-all duration-1000"></div>
                   <div class="relative z-10 space-y-10">
                     <h3 class="text-4xl font-black italic text-blue-300">Modernize your ITSM today.</h3>
                     <div class="text-7xl font-black tracking-[0.6em] text-white opacity-90">DEVINITI</div>
                   </div>
                </div>
            </div>
        `
    }
];

let currentIndex = 0;
const TOTAL = SLIDES.length;

// DOM Elements
const stage = document.getElementById('slide-content');
const titleHeader = document.getElementById('header-slide-title');
const progressBar = document.getElementById('top-progress-bar');
const progressTxt = document.getElementById('progress-percent');
const indexLabel = document.getElementById('slide-index-label');
const dotsContainer = document.getElementById('nav-dots');
const btnNext = document.getElementById('nav-next');
const btnPrev = document.getElementById('nav-prev');
const hitboxLeft = document.getElementById('hitbox-left');
const hitboxRight = document.getElementById('hitbox-right');

/**
 * Initialize dot navigation based on total slides
 */
function setupDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
        const d = document.createElement('button');
        d.className = `h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`;
        d.onclick = () => goTo(i);
        dotsContainer.appendChild(d);
    }
}

/**
 * Render slide content and update UI meta-data
 */
function render(index) {
    // Stage Transition: Fade Out
    stage.classList.remove('slide-visible');
    stage.classList.add('slide-hidden');

    setTimeout(() => {
        currentIndex = index;
        const slide = SLIDES[index];

        // Update Content
        stage.innerHTML = slide.html;
        titleHeader.textContent = slide.title;
        
        // Update Meta UI
        const pct = Math.round(((index + 1) / TOTAL) * 100);
        progressBar.style.width = `${pct}%`;
        progressTxt.textContent = `${pct}%`;
        indexLabel.textContent = `${String(index + 1).padStart(2, '0')} / ${TOTAL}`;
        
        // Disable state
        btnPrev.disabled = index === 0;
        btnNext.disabled = index === TOTAL - 1;
        hitboxLeft.disabled = index === 0;
        hitboxRight.disabled = index === TOTAL - 1;

        // Dots and Icons
        setupDots();
        lucide.createIcons();

        // Stage Transition: Fade In
        stage.classList.remove('slide-hidden');
        stage.classList.add('slide-visible');
    }, 400);
}

function next() {
    if (currentIndex < TOTAL - 1) render(currentIndex + 1);
}

function prev() {
    if (currentIndex > 0) render(currentIndex - 1);
}

function goTo(index) {
    if (index !== currentIndex) render(index);
}

// Global Event Listeners
btnNext.onclick = next;
btnPrev.onclick = prev;
hitboxLeft.onclick = prev;
hitboxRight.onclick = next;

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next();
    if (e.key === 'ArrowLeft') prev();
});

// Start the presentation
render(0);
