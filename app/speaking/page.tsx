import { Metadata } from "next";
import { SpeakingForm } from "@/components/SpeakingForm";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Dr. Andrew David Edwards for speaking engagements on money, capitalism, and the American Revolution.",
};

const speakingTopics = [
  {
    title: "Who Gets to Make Money?",
    subtitle: "History, Cryptocurrency, and Democratic Control",
    description:
      "From colonial paper money to Bitcoin, the question of who controls currency creation has defined American political economy. This talk explores how the founding-era debates over money illuminate—and complicate—contemporary discussions of cryptocurrency and central bank digital currencies.",
    audiences: ["General public", "Finance professionals", "Policy forums"],
  },
  {
    title: "Why History Matters Now",
    subtitle: "Money, Power, and Democratic Control",
    description:
      "Money is not a technical matter to be left to experts—it is a constitutional question about how we govern ourselves and distribute power in society. This talk recovers the founders' understanding of money as a political institution and applies it to today's debates.",
    audiences: ["Academic conferences", "Policy institutes", "Media"],
  },
  {
    title: "Money and the Making of the American Revolution",
    subtitle: "New Research on the Monetary Origins of American Independence",
    description:
      "A presentation of the core arguments from the new Princeton University Press book, demonstrating how the Revolution was fundamentally about monetary sovereignty—not just taxation without representation.",
    audiences: ["Academic conferences", "Universities", "Historical societies"],
  },
  {
    title: "The Global History of Capitalism",
    subtitle: "Connecting American Money to World Systems",
    description:
      "How did American monetary struggles connect to the transatlantic slave trade, the East India Company, and violence against Native Americans? This talk situates the American Revolution within global systems of money and power.",
    audiences: ["Academic audiences", "Global affairs forums"],
  },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Speaking</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
            Dr. Edwards is available for lectures, book talks, media appearances,
            and podcast interviews.
          </p>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Speaking Topics</h2>
          <div className="accent-line mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingTopics.map((topic, index) => (
              <article
                key={index}
                className="bg-white p-8 border border-[var(--color-border)]"
              >
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1">
                  {topic.title}
                </h3>
                <p className="text-[var(--color-gold)] text-sm font-semibold mb-4">
                  {topic.subtitle}
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.audiences.map((audience, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[var(--color-warm-white)] text-[var(--color-text-muted)] px-3 py-1"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Inquiry Form */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Speaking Inquiry
            </h2>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-center text-[var(--color-text-muted)] mb-12">
              Interested in booking Dr. Edwards for your event? Please fill out
              the form below and we&apos;ll be in touch.
            </p>

            <SpeakingForm />
          </div>
        </div>
      </section>

      {/* Past Appearances */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Selected Presentations</h2>
          <div className="accent-line mb-12"></div>

          <div className="space-y-6 max-w-3xl">
            <div className="border-l-4 border-[var(--color-gold)] pl-6">
              <h3 className="font-bold text-[var(--color-navy)]">
                &ldquo;Who Won the American Revolution? Freedom and Global Capitalism in the Early Republic&rdquo;
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Omohundro Institute Annual Conference, University of Pittsburgh
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-gold)] pl-6">
              <h3 className="font-bold text-[var(--color-navy)]">
                &ldquo;Early Modern Money in Global Perspective&rdquo;
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Currency and Empire Sawyer Seminar, The New School
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-gold)] pl-6">
              <h3 className="font-bold text-[var(--color-navy)]">
                &ldquo;The Global History of Capitalism: Old Problems, New Directions&rdquo;
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Brasenose College Blurbs, University of Oxford
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-gold)] pl-6">
              <h3 className="font-bold text-[var(--color-navy)]">
                &ldquo;Project Introduction: Reframing the Age of Revolutions&rdquo;
              </h3>
              <p className="text-[var(--color-text-muted)]">
                St Andrews Institute for Transnational & Spatial History
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
