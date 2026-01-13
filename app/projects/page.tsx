// import Section from "@/components/Section";
import { Section } from "@/components/Section";

export default function ProjectsPage() {
  return (
    <>
      <Section
        title="Algorithm Engineer Intern (Computing & Data Science Core)"
        subtitle="Epileptic seizure prediction (EEG) — data preprocessing, model training/validation, and optimal prediction-window selection via CIOPC/CIOPR."
      >
        <div className="max-w-none">
          <h2 id="seizure" className="text-xl font-semibold tracking-tight">
            Seizure prediction (EEG) — project details
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Scope: multi-source EEG preprocessing, model training/validation, and optimal prediction-window selection
            via a CIOPC/CIOPR-style runner.
          </p>

          {/* Summary card */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="grid gap-3 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold text-zinc-500">ROLE</div>
                <div className="mt-1 text-sm text-zinc-800">Algorithm Engineer Intern</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500">FOCUS</div>
                <div className="mt-1 text-sm text-zinc-800">
                  EEG preprocessing · prediction windows · evaluation
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500">OUTPUT</div>
                <div className="mt-1 text-sm text-zinc-800">
                  Standardized datasets · runner results · diagnostic plots
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-8 space-y-8">
            <section>
              <h3 className="text-base font-semibold">1. Project overview</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                This project targets <span className="font-medium">seizure prediction</span> using EEG signals.
                The pipeline covers <span className="font-medium">multi-source EEG preprocessing</span>,
                <span className="font-medium"> model training & validation</span>, and
                <span className="font-medium"> optimal prediction-window selection</span> using a CIOPC/CIOPR-style
                runner to compare different pre-ictal windows (e.g., 60/30/10 minutes) and select the best early-warning
                window automatically.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                The work also includes <span className="font-medium">format unification</span>,
                <span className="font-medium"> channel-structure adaptation</span>, and evaluation across
                <span className="font-medium"> single-dataset</span> and <span className="font-medium">cross-subject</span>{" "}
                settings to understand generalization and stability.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold">2. What I delivered</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  Standardized EEG datasets from multiple sources into a consistent training-ready format (including channel alignment).
                </li>
                <li>
                  Implemented/maintained preprocessing scripts for prediction tasks (segmentation + label generation for pre-ictal windows).
                </li>
                <li>
                  Trained and validated deep learning models for seizure prediction; compared performance under different window settings.
                </li>
                <li>
                  Ran CIOPC/CIOPR-style evaluation to select the best early-warning window and generated diagnostic plots for review.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold">3. Data & preprocessing pipeline (high level)</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  <span className="font-medium">Raw EEG ingestion:</span> load raw signals from different dataset sources and unify the layout.
                </li>
                <li>
                  <span className="font-medium">Standardization:</span> normalize naming and output tensor shapes (and align sampling when needed).
                </li>
                <li>
                  <span className="font-medium">Segmentation:</span> slice EEG into windows for training/inference.
                </li>
                <li>
                  <span className="font-medium">Prediction-window labeling:</span> generate labels for pre-ictal windows (e.g., 60/30/10 min) and inter-ictal segments.
                </li>
                <li>
                  <span className="font-medium">Save preprocessed outputs:</span> write to a unified directory so training scripts can load without dataset-specific branching.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base font-semibold">4. CIOPC/CIOPR window selection</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Seizure prediction performance can vary significantly based on how the “pre-ictal” period is defined.
                The runner automates window comparison by evaluating multiple candidate windows and selecting the best one
                using metrics reflecting <span className="font-medium">earliness</span> and{" "}
                <span className="font-medium">stability</span>.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>Runs evaluation under several candidate pre-ictal windows (e.g., 60/30/10 minutes).</li>
                <li>Exports diagnostic plots to verify whether the model captures pre-ictal patterns.</li>
                <li>Selects the best-performing window for deployment/experimentation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold">5. Known issues + next steps</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Runner plots suggested the current setup may not exhibit a strong pre-ictal signal. Recommended next steps:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  <span className="font-medium">Verify labeling logic:</span> ensure window generation is correct and avoid leakage/offset mistakes.
                </li>
                <li>
                  <span className="font-medium">Confirm channel configuration:</span> model input channels must match preprocessing output channels.
                </li>
                <li>
                  <span className="font-medium">Improve preprocessing:</span> consider filtering/denoising, artifact handling, and normalization checks.
                </li>
                <li>
                  <span className="font-medium">Strengthen evaluation:</span> add subject-level breakdowns and stability checks across runs.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
