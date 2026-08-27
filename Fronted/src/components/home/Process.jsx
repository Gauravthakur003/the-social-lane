import { ArrowUpRight } from "lucide-react";
import { processSteps } from "../../data/process";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function Process() {
  return (
    <section className="process-section">
      <Container>
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Our Process"
            title="From idea to impact."
            description="A strategic process designed to turn ambitious ideas into meaningful digital experiences."
          />

          <div className="max-w-sm text-sm leading-6 text-slate-500">
            <p>
              Every project starts with understanding the problem, defining
              the right direction, and creating work that delivers real
              value.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Step number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold tracking-widest text-blue-600">
                  {step.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="text-xl font-bold tracking-tight text-[#0A1628]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {/* Points */}
                <ul className="mt-6 space-y-3">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-2 text-8xl font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-blue-50"
              >
                {step.number}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;