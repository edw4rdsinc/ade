import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dr. Andrew David Edwards is a historian of Early America, capitalism, and money at the University of St Andrews.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
            Historian of Early America, capitalism, and money
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-[var(--color-navy)] aspect-[3/4] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-sm uppercase tracking-widest mb-2">Photo</p>
                  <p className="text-gray-400 text-sm">Coming soon</p>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-[var(--color-text-muted)]">
                  <strong className="text-[var(--color-navy)]">Position:</strong><br />
                  Lecturer in Early American History
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong className="text-[var(--color-navy)]">Institution:</strong><br />
                  University of St Andrews
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong className="text-[var(--color-navy)]">Email:</strong><br />
                  <a href="mailto:ade3@st-andrews.ac.uk">ade3@st-andrews.ac.uk</a>
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-2 prose max-w-none">
              <h2>An Unconventional Path</h2>
              <p>
                Andrew David Edwards is a historian whose work has reshaped understanding
                of money&apos;s role in the American Revolution. Currently Lecturer in Early
                American History at the University of St Andrews, he brings a distinctive
                trajectory—from financial journalist covering the 2008 crisis to prize-winning
                scholar—that informs his groundbreaking research connecting monetary systems,
                capitalism, and revolutionary politics across four continents.
              </p>

              <p>
                A first-generation college graduate and native of rural Humboldt County,
                California, Edwards dropped out of college twice before age 21. He worked
                as a baker, event producer, and financial reporter before completing his
                degree in history at Columbia University School of General Studies at age 29,
                graduating summa cum laude and Phi Beta Kappa in 2011.
              </p>

              <h2>Academic Journey</h2>
              <p>
                Edwards received his PhD from Princeton University in 2018, studying under
                Sean Wilentz and writing the dissertation &ldquo;Money and the American Revolution:
                Changing Concepts of Money and Wealth, 1765-1787.&rdquo; He also holds an MA with
                distinction from Princeton.
              </p>

              <p>
                Before joining St Andrews, Edwards held two prestigious early-career fellowships:
              </p>

              <ul>
                <li>
                  <strong>Charles Wilson Career Development Fellow</strong> in the Global History
                  of Capitalism at Brasenose College, University of Oxford (2018–2021), where he
                  co-convened the Political Economy and Culture in Global History research seminar
                </li>
                <li>
                  <strong>Sawyer Fellow</strong> at The New School for Social Research (2021–2022),
                  working on the Mellon-funded project &ldquo;Currency and Empire: Race, Monetary
                  Policy and Power&rdquo;
                </li>
              </ul>

              <h2>The 2008 Crisis and the Turn to History</h2>
              <p>
                Before academia, Edwards worked as a financial reporter covering structured
                credit instruments during the 2008 financial crisis, and as a foreign correspondent
                in China. His journalism appeared in the Wall Street Journal, International Herald
                Tribune, and San Francisco Chronicle.
              </p>

              <p>
                Reporting on the 2008 crisis was his awakening to history. He wondered why
                it had happened and where the system that caused it had come from—questions
                that could only be answered through historical inquiry. As he puts it:
                &ldquo;I write history because history wrote me.&rdquo;
              </p>

              <h2>Research Focus</h2>
              <p>
                Edwards&apos;s research focuses on the relationship between empire, global monetary
                regimes, and the European world system in the eighteenth century. His work
                demonstrates how the dispute over taxes in the American Revolution was really
                a dispute over money: what it was, who could make it, and how to keep it from
                being used at the expense of the colonists.
              </p>

              <p>
                He is also a co-lead on the AHRC-funded <em>Reframing the Age of Revolutions</em> project,
                examining how global the Age of Revolutions (c. 1750–1850) actually was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="accent-line mb-12"></div>

          <div className="space-y-8 max-w-2xl">
            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-16 shrink-0">2018</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">PhD, History</h3>
                <p className="text-[var(--color-text-muted)]">Princeton University</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Advisor: Sean Wilentz
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-16 shrink-0">2014</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">MA, History (with distinction)</h3>
                <p className="text-[var(--color-text-muted)]">Princeton University</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-16 shrink-0">2011</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">BA, History (summa cum laude)</h3>
                <p className="text-[var(--color-text-muted)]">Columbia University, School of General Studies</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Phi Beta Kappa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Academic Positions</h2>
          <div className="accent-line mb-12"></div>

          <div className="space-y-8 max-w-2xl">
            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-24 shrink-0">2022–</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">Lecturer in Early American History</h3>
                <p className="text-[var(--color-text-muted)]">University of St Andrews</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-24 shrink-0">2021–22</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">Sawyer Fellow</h3>
                <p className="text-[var(--color-text-muted)]">The New School for Social Research</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Project: Currency and Empire: Race, Monetary Policy and Power
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg w-24 shrink-0">2018–21</div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">
                  Charles Wilson Career Development Fellow
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Brasenose College, University of Oxford
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Inaugural Fellow in the Global History of Capitalism
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
