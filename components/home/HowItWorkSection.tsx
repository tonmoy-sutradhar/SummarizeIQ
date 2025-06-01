import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5}></FileText>,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5}></BrainCircuit>,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5}></FileOutput>,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
];

export default function HowItWorkSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* How it work section */}
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 "></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 96.9%, 85.5% 100%, 80.7% 72.5%, 52.3% 62.5%, 51.8% 100%, 31.6% 97.1%, 26.9% 71.6%, 18.4% 64.3%, 0% 100%, 0% 61.6%, 22.1% 53.3%, 29.4% 28.1%, 42.7% 18.9%, 41.1% 6.3%, 56.1% 0%, 58.1% 18.4%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="text-center mb-16 px-5">
        <h2 className="font-bold text-sm lg:text-xl uppercase mb-4 text-blue-500">
          How it works
        </h2>
        <h3 className="font-bold text-xl lg:text-3xl max-w-2xl mx-auto">
          Transform any PDF into an easy to digest summary three simple steps
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
        {steps.map((step, idx) => (
          <div className="relative flex items-stretch">
            <StepItem key={idx} {...step}></StepItem>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <MoveRight
                size={32}
                strokeWidth={1}
                className="text-blue-400"
              ></MoveRight>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-blue-500/5 transition-colors group w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-colors">
          <div className="text-blue-500">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
