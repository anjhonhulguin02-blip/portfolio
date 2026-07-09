export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-12 text-white">
        Get In <span className="text-purple-500">Touch</span>
      </h2>

      <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl text-center space-y-6">
        <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
          I am a proactive fast-learner ready to deliver secure, production-ready web solutions. Open for remote opportunities and technical collaborations!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-4 text-left">
          {/* Email Card */}
          <a href="mailto:anjhon.huiguin02@gmail.com" className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-pink-500/50 transition-all group flex items-center gap-4">
            <div className="p-3 bg-pink-500/10 rounded-lg text-pink-500 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <span className="block text-xs uppercase text-slate-500 font-bold tracking-wider">Email Me</span>
              <span className="text-sm font-medium text-slate-200 block truncate">anjhon.huiguin02@gmail.com</span>
            </div>
          </a>

          {/* Location Card */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <span className="block text-xs uppercase text-slate-500 font-bold tracking-wider">Location</span>
              <span className="text-xs font-medium text-slate-200 block leading-tight">Norzagaray Bulacan, PH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}