export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] p-8 shadow-xl mb-6">
            <h1 className="text-5xl font-bold text-[#2C3E50] mb-4">Si Ying Chan</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-[#34495E]">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Singapore</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+6586682313" className="hover:text-[#87CEEB] transition-colors">
                  +65 8668 2313
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:siying8668@gmail.com" className="hover:text-[#87CEEB] transition-colors">
                  siying8668@gmail.com
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* About Me Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-[#B0E0E6] to-[#87CEEB] p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">About Me</h2>
            <p className="text-lg leading-7 text-[#34495E]">
              Applied Computing (Fintech) undergraduate at Singapore Institute of Technology. 
              I'm passionate about the intersection of finance, technology, and culture, and enjoy 
              exploring how innovation shapes industries like sports and fashion.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-md">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#FFB6C1] pl-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                  Singapore Institute of Technology
                </h3>
                <p className="text-lg text-[#34495E] mb-1">
                  BSc (Hons) Applied Computing – Fintech Specialisation
                </p>
                <p className="text-[#87CEEB] font-medium">2025–2028</p>
              </div>
              <div className="border-l-4 border-[#B0E0E6] pl-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                  Tampines Meridian Junior College
                </h3>
                <p className="text-lg text-[#34495E] mb-1">GCE A Levels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#2C3E50]">
                    Customer Service Agent
                  </h3>
                  <span className="text-[#87CEEB] font-medium">2024–Present</span>
                </div>
                <p className="text-[#34495E] mb-2 font-medium">Singapore Airlines</p>
                <ul className="list-disc list-inside space-y-1 text-[#34495E] ml-2">
                  <li>Assisted passengers with inquiries and issue resolution</li>
                  <li>Supported efficient boarding processes across multiple flights</li>
                  <li>Ensured strict compliance with security verification protocols</li>
                </ul>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#2C3E50]">
                    Pharmacy Assistant
                  </h3>
                  <span className="text-[#87CEEB] font-medium">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[#34495E] ml-2">
                  <li>Assisted with medication preparation and dispensing</li>
                  <li>Managed medication inventory and monitored stock levels</li>
                  <li>Processed prescriptions following regulatory guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Internships & Job Shadowing Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-md">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Internships & Job Shadowing</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#B0E0E6] to-[#87CEEB] rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  General Management Intern
                </h3>
                <p className="text-[#34495E] mb-1">Simple Group Pte. Ltd.</p>
                <p className="text-[#87CEEB] font-medium">2023</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  Prosthodontics Job Shadowing
                </h3>
                <p className="text-[#34495E] mb-1">Prostho Dental Office</p>
                <p className="text-[#87CEEB] font-medium">2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-[#B0E0E6] to-[#87CEEB] p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Projects</h2>
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  Stock Market Trend Analysis
                </h3>
                <ul className="list-disc list-inside space-y-1 text-[#34495E] ml-2">
                  <li>Processed and analysed stock data (SMA, daily returns)</li>
                  <li>Built algorithmic trading logic components</li>
                  <li>Visualised market trends using Python and Pandas</li>
                </ul>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  Class Management System (C Project)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-[#34495E] ml-2">
                  <li>Developed CLI database system with full CRUD operations</li>
                  <li>Implemented sorting, validation, and file-based storage</li>
                  <li>Designed comprehensive test cases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-md">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#B0E0E6] text-[#2C3E50] font-medium">
                    Python
                  </span>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#B0E0E6] text-[#2C3E50] font-medium">
                    C
                  </span>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#B0E0E6] text-[#2C3E50] font-medium">
                    Microsoft Excel
                  </span>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#B0E0E6] text-[#2C3E50] font-medium">
                    PowerPoint
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">Other</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB6C1] to-[#FFC0CB] text-[#2C3E50] font-medium">
                    Problem-solving
                  </span>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB6C1] to-[#FFC0CB] text-[#2C3E50] font-medium">
                    Customer Service
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-[#34495E] font-medium">Languages:</p>
                  <p className="text-[#87CEEB]">English, Mandarin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Achievements</h2>
            <div className="space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-lg font-semibold text-[#2C3E50]">
                      1st Place — SIT-KPMG FutureScape 2035
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🥇</span>
                  <div>
                    <p className="text-lg font-semibold text-[#2C3E50]">
                      Top 5 — FinConnect Hackathon 2025 (SFYC, SFA, VISA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#34495E] py-8">
          <p>© 2025 Si Ying Chan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
