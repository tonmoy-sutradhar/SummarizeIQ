import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="">
            <h2>Ready to Save Hours of Reading Time</h2>
            <p>
              Transform lengthy documents into clear, actionable insights with
              Out AI-Powered summarizer.
            </p>
          </div>
          <div>
            <div>
              <Link href={"/#pricing"}></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
