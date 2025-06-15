// import BgGradient from "@/components/common/BgGradient";
// import { getSummaryById } from "@/lib/summaries";
// import { notFound } from "next/navigation";
// import SummaryHeader from "./../../../../components/summaries/summaryHeader";

// export default async function SummaryPage(props: { params: { id: string } }) {
//   const { id } = props.params;

//   const summary = await getSummaryById(id); // <-- await is important

//   if (!summary) {
//     notFound();
//   }

//   const { title, summary_text, file_name } = summary;
//   return (
//     <div className="relative isolate min-h-screen bg-linear-to-b from-blue-50/40 to-white">
//       <BgGradient className="from-blue-400 via-blue-300 to-orange-200"></BgGradient>
//       <div className="container mx-auto flex flex-col gap-4">
//         <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
//           <div className="flex flex-col">
//             <SummaryHeader title={title}></SummaryHeader>
//             {file_name && <p>{file_name}</p>}
//             {/* <p>{summary_text}</p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//==============

import BgGradient from "@/components/common/BgGradient";
import SourceInfo from "@/components/summaries/sourceInfo";
import SummaryHeader from "@/components/summaries/summaryHeader";
import { SummaryViewer } from "@/components/summaries/summaryViewer";
import { getSummaryById } from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const summary = await getSummaryById(id);

  if (!summary) {
    notFound();
  }

  const { title, summary_text, file_name, word_count } = summary;
  return (
    <div className="relative isolate min-h-screen bg-linear-to-b from-blue-50/40 to-white">
      <BgGradient className="from-blue-400 via-blue-300 to-orange-200"></BgGradient>
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <div className="flex flex-col">
            <SummaryHeader title={title}></SummaryHeader>
            {file_name && <SourceInfo fileName={file_name}></SourceInfo>}
            <div className="relative mt-4 sm:mt-8 lg:mt-16">
              {/* line */}
              <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/90 max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-50 rounded-2xl sm:rounded-3xl"></div>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-rose-400" />
                  {word_count?.toLocaleString()} words
                </div>

                <div className="relative mt-8 sm:mt-6 flex justify-center">
                  {/* <SummaryViewer summary={summary?.summary_text} /> */}
                  <SummaryViewer summary={summary_text}></SummaryViewer>
                </div>
              </div>
              {/* line */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
