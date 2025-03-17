import type { Metadata } from "next";
import { ADLaM_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const geistSans = ADLaM_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Create Next App"
};

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html>
      <body className={geistSans.className}>
        <AntdRegistry>
          <div className="container mx-auto">
            <div className="flex justify-center text-blue-500 p-6 gap-6">
              <Link href="/">Home</Link>
              <Link href="/visitors">Visitors</Link>
            </div>
            <div className="flex gap-6 ">
              {team}
              {analytics}
            </div>
            {children}
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html>
//       <body className={geistSans.className}>
//         {children}
//       </body>
//     </html>
//   );
// }
