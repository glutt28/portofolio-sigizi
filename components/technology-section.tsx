const technologies = [
  {
    icon: '🖥️',
    title: 'Backend',
    description: 'Node.js, Express, PostgreSQL / alternatif basis data relasional.'
  },
  {
    icon: '🤖',
    title: 'AI Layer',
    description: 'Model AI Risk Scoring, Anomaly Detection, NLP untuk summary feedback.'
  },
  {
    icon: '⚛️',
    title: 'Frontend',
    description: 'React.js + HTML5/CSS3 + animasi CSS/GSAP untuk experience modern.'
  },
  {
    icon: '🔗',
    title: 'Open API',
    description: 'Integrasi API bank/PJP untuk VA issuance dan data transaksi real-time.'
  }
]

export default function TechnologySection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Teknologi Dibalik SIGIZI Guard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Stack modern untuk performa, AI, dan integrasi API.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
