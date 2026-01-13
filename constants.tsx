
import React from 'react';
import { 
  ShieldAlert, 
  Clock, 
  FileText, 
  Zap, 
  ArrowRight, 
  Settings, 
  Users, 
  TrendingUp,
  Cpu,
  Layers,
  Factory,
  Building2,
  ShoppingCart,
  HeartPulse,
  Bot
} from 'lucide-react';

export const SLIDES = [
  // Slide 1: Title
  {
    title: "AI-Powered Change Management",
    subtitle: "Transforming your Atlassian ecosystem into an intelligent powerhouse.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in duration-1000">
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full"></div>
          <Bot className="w-24 h-24 text-blue-600 relative z-10" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">
            AI-Powered <span className="text-blue-600">Change Management</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Transforming your Atlassian ecosystem into an intelligent powerhouse.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 px-8 py-4 rounded-2xl shadow-sm">
          <p className="text-slate-700 font-medium">
            A complete end-to-end automation framework that maximizes the tools you already own.
          </p>
        </div>
        <div className="pt-12">
          <span className="text-xl font-bold tracking-widest text-slate-400 uppercase">Deviniti</span>
        </div>
      </div>
    )
  },
  // Slide 2: The Problem
  {
    title: "The Problem: Manual Management is Broken",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900">Manual Management is <span className="text-red-600 underline decoration-red-200 underline-offset-8">Broken</span></h2>
          <div className="space-y-8 mt-10">
            {[
              { icon: ShieldAlert, title: "Lost Requests", desc: "Users submit incorrect forms; requests are misplaced or duplicated." },
              { icon: Clock, title: "Approval Delays", desc: "Inconsistent details lead to rework; CAB scheduling wastes time and breaches SLAs." },
              { icon: FileText, title: "Manual Overhead", desc: "Implementers spend hours on documentation; managers waste time chasing stakeholders." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl space-y-6">
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-4">The Impact</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="h-2 w-2 bg-red-500 rounded-full" />
              <span className="text-lg opacity-90">Increased operational costs</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-2 w-2 bg-red-500 rounded-full" />
              <span className="text-lg opacity-90">Elevated business risk</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-2 w-2 bg-red-500 rounded-full" />
              <span className="text-lg opacity-90">Persistent operational delays</span>
            </li>
          </ul>
          <div className="mt-10 pt-6 border-t border-slate-700">
            <div className="text-sm uppercase tracking-widest text-slate-500 font-bold">Bottom Line</div>
            <div className="text-3xl font-bold text-red-400 mt-2">Millions in Potential Loss</div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 3: Unlocking Value
  {
    title: "Unlocking Value You Already Own",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        <div className="text-center max-w-3xl space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">You are already investing in the Atlassian ecosystem</h2>
          <p className="text-xl text-slate-600">Most organizations never fully utilize their Rovo, Confluence AI, and Forge capabilities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: "No Extra Costs", desc: "No additional AI tool purchases required.", color: "blue" },
            { title: "Zero Licensing", desc: "No extra licensing costs beyond your existing stack.", color: "indigo" },
            { title: "Immediate ROI", desc: "Maximize existing assets on your balance sheet.", color: "emerald" }
          ].map((item, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform`}>
              <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-${item.color}-50`}>
                <Zap className={`w-6 h-6 text-${item.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="w-full bg-blue-600 p-8 rounded-3xl text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-2">The Proposition</h3>
          <p className="text-blue-100 text-lg italic">"Turn your passive tools into active profit-generating intelligence."</p>
        </div>
      </div>
    )
  },
  // Slide 4: Industry Challenges
  {
    title: "Industry-Specific Challenges",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        {[
          { icon: Building2, industry: "Banking & Finance", desc: "Heavy compliance (SOX, PCI-DSS) and zero-tolerance for risk.", accent: "border-l-4 border-blue-500" },
          { icon: Factory, industry: "Manufacturing", desc: "Complex dependencies (ERP, IoT, Robotics); shutdowns cost millions per hour.", accent: "border-l-4 border-orange-500" },
          { icon: ShoppingCart, industry: "Retail & E-Commerce", desc: "High-frequency changes (POS, payments) and tight peak-traffic windows.", accent: "border-l-4 border-emerald-500" },
          { icon: HeartPulse, industry: "Healthcare", desc: "Strict regulatory oversight (HIPAA, GDPR) and slow clinical governance cycles.", accent: "border-l-4 border-rose-500" }
        ].map((item, i) => (
          <div key={i} className={`bg-white p-8 rounded-2xl shadow-md flex items-start gap-6 ${item.accent}`}>
            <div className="p-4 bg-slate-50 rounded-xl">
              <item.icon className="w-8 h-8 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.industry}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
  // Slide 5: Case Study
  {
    title: "Case Study: Manufacturing Risk",
    content: (
      <div className="flex flex-col h-full space-y-8">
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 flex gap-6 items-center">
          <div className="p-4 bg-orange-500 rounded-full text-white">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange-900">Scenario: Robotic Arm Sensor Protocol Change</h3>
            <p className="text-orange-800 text-lg">A technician misses a dependency on a rail system managed by a different team.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">01</span>
              The Manual Failure
            </h4>
            <p className="text-slate-600">The manual check failed to identify cross-departmental dependencies. Integration documentation was outdated.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm 02">02</span>
              The Consequence
            </h4>
            <p className="text-slate-600">Deployment triggered an Emergency Stop (E-Stop) across the entire production line.</p>
          </div>
        </div>

        <div className="mt-auto bg-slate-900 p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp className="w-32 h-32 text-red-500" />
          </div>
          <div className="relative z-10">
            <div className="text-red-500 text-4xl font-extrabold mb-2 underline decoration-red-900 underline-offset-8">Total Loss: $XX Millions</div>
            <p className="text-slate-400 text-xl font-medium tracking-wide">Remediation took hours of high-stakes downtime.</p>
          </div>
        </div>
      </div>
    )
  },
  // Slide 6: The Solution
  {
    title: "The Solution: AI at Every Stage",
    content: (
      <div className="h-full flex flex-col justify-center space-y-12">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4 italic">Reimagining the Lifecycle with Atlassian AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-64 items-stretch">
          {[
            { id: "01", title: "Intelligent Triage", desc: "AI detects incorrect forms and redirects.", color: "bg-blue-600" },
            { id: "02", title: "Auto-Classification", desc: "Rovo populates 80-90% of fields.", color: "bg-blue-500" },
            { id: "03", title: "Smart Approvals", desc: "Optimal CAB slot finding.", color: "bg-blue-400" },
            { id: "04", title: "Documentation", desc: "AI generates meeting notes & PIRs.", color: "bg-blue-300" },
            { id: "05", title: "SDLC Integration", desc: "Auto-creation of Jira tasks.", color: "bg-blue-200" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col group h-full">
              <div className={`${item.color} flex-1 rounded-2xl p-6 text-white shadow-lg transition-all group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col justify-between`}>
                <div className="text-2xl font-black opacity-40">{item.id}</div>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-2">{item.title}</h3>
                  <p className="text-xs opacity-90 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="h-2 w-full flex justify-center mt-4">
                 {i < 4 && <ArrowRight className="w-4 h-4 text-slate-300" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  // Slide 7: Request Handling
  {
    title: "Intelligent Request Handling",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-blue-600">Stages 1 & 2</h3>
            <p className="text-slate-600 text-lg">Foundation of accurate change data through Rovo-powered intelligence.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-md">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-blue-600" /> Triage
              </h4>
              <p className="text-slate-600">Rovo extracts intent and context from descriptions to ensure requests are never misrouted.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-md">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-blue-600" /> Classification
              </h4>
              <p className="text-slate-600">AI suggests impacted applications and backout plans based on past changes.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-3xl p-10 space-y-8 flex flex-col justify-center border border-blue-100">
           <div className="text-blue-900 text-2xl font-bold border-b border-blue-200 pb-4">Client Value</div>
           <div className="flex items-center gap-6">
             <div className="text-6xl font-black text-blue-600">80%</div>
             <div className="text-xl text-blue-800 font-medium">Reduction in change form-filling time</div>
           </div>
           <div className="p-6 bg-white/60 rounded-xl">
              <p className="text-slate-700 italic">"Eliminates manual corrections and redirects users to the correct process before they hit submit."</p>
           </div>
        </div>
      </div>
    )
  },
  // Slide 8: Approvals & Docs
  {
    title: "Streamlined Approvals & Documentation",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        <div className="bg-slate-900 rounded-3xl p-8 text-white h-[400px] flex flex-col relative">
           <div className="absolute top-6 right-6">
             <Clock className="w-12 h-12 text-blue-400 opacity-30" />
           </div>
           <h3 className="text-2xl font-bold mb-8 text-blue-400">Stages 3 & 4</h3>
           <div className="space-y-8 flex-1">
             <div className="flex gap-4">
               <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
                 <Users className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold">Approval Routing</h4>
                 <p className="text-sm text-slate-400">Rovo identifies approvers based on risk profile.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
                 <Settings className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold">Smart Scheduling</h4>
                 <p className="text-sm text-slate-400">Automated calendar coordination for CAB slots.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
                 <FileText className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold">Auto-Documentation</h4>
                 <p className="text-sm text-slate-400">Meeting records & Confluence page generation.</p>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8">
           <h3 className="text-4xl font-bold text-slate-900">Zero Scheduling <span className="text-blue-600">Bottlenecks</span></h3>
           <p className="text-xl text-slate-600 leading-relaxed">By removing the human overhead of scheduling and note-taking, changes move through the governance cycle at the speed of thought.</p>
           
           <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center gap-4">
             <ShieldAlert className="w-10 h-10 text-emerald-600" />
             <div className="font-bold text-emerald-900">Full auditability for compliance (SOX/HIPAA)</div>
           </div>
        </div>
      </div>
    )
  },
  // Slide 9: SDLC Integration
  {
    title: "End-to-End SDLC Integration",
    content: (
      <div className="flex flex-col h-full space-y-12 justify-center">
        <div className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl border border-slate-200">
          <div className="text-center flex-1">
            <div className="text-sm text-slate-500 uppercase font-bold mb-2">Before AI</div>
            <div className="text-lg font-bold text-slate-800">Hours spent writing stories</div>
          </div>
          <div className="px-10">
            <ArrowRight className="w-8 h-8 text-blue-500" />
          </div>
          <div className="text-center flex-1">
            <div className="text-sm text-blue-500 uppercase font-bold mb-2">After AI</div>
            <div className="text-2xl font-extrabold text-blue-600">Seconds to generate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 space-y-4">
             <h3 className="text-2xl font-bold flex items-center gap-3">
               <Cpu className="w-8 h-8 text-blue-600" />
               Stage 5: The Transition
             </h3>
             <p className="text-slate-600 text-lg">Once approved, changes flow automatically into the execution pipeline. No manual copying of data required.</p>
          </div>
          <div className="bg-blue-600 p-10 rounded-3xl shadow-xl text-white space-y-4">
             <h3 className="text-2xl font-bold">Client Value</h3>
             <ul className="space-y-4 text-blue-100 font-medium">
               <li className="flex gap-2"><span>•</span> Immediate implementation readiness</li>
               <li className="flex gap-2"><span>•</span> Consistent engineering workflows</li>
               <li className="flex gap-2"><span>•</span> High-quality acceptance criteria</li>
             </ul>
          </div>
        </div>
      </div>
    )
  },
  // Slide 10: Business Value
  {
    title: "Business Value & Immediate ROI",
    content: (
      <div className="flex flex-col h-full items-center justify-center space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-900">Immediate ROI</h2>
          <p className="text-xl text-slate-500">Dramatic productivity gains using tools you already own.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {[
            { label: "SLA Protection", desc: "Predictable compliance; no stall.", icon: ShieldAlert },
            { label: "Faster Deployments", desc: "Days to hours cycle times.", icon: Clock },
            { label: "Higher Quality", desc: "Fewer incidents, better analysis.", icon: Zap },
            { label: "Op Savings", desc: "Direct hourly cost savings.", icon: TrendingUp }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 hover:shadow-2xl transition-all border border-slate-50">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900">{item.label}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-all duration-700"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold mb-4 italic text-blue-300">"Modernize your IT Service Management today."</h3>
             <div className="text-6xl font-black tracking-widest text-white mt-6">DEVINITI</div>
           </div>
        </div>
      </div>
    )
  }
];
