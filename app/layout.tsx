import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SummarizeIQ - AI-Powered PDF Summarization ",
  description:
    "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advance AI Technology. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${fontSans.variable} font-sans antialiased`}
          cz-shortcut-listen="true"
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body
//           suppressHydrationWarning
//           className={`${fontSans.variable} font-sans antialiased`}
//         >
//           <div className="relative flex min-h-screen flex-col">
//             <Header></Header>
//             <main className="">{children}</main>
//             <Footer></Footer>
//           </div>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
