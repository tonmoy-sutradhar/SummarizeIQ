import { Pizza } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
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
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-blue-500"></Pizza>
          </div>
          {/* margin bottom 16*/}
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-4xl mx-auto px-4 sm:px-6">
              Watch how SummarizeIQ transforms{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy to read summary!
            </h3>
          </div>
          {/* Summary */}
          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
          </div>
        </div>
      </div>
    </section>
  );
}
