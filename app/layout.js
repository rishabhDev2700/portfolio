import localFont from "next/font/local";
import "./globals.css";
import { Bebas_Neue, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Rishabh Bahukhandi",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased dark:text-white min-h-screen flex flex-col justify-between`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        // className="min-h-screen flex flex-col justify-between"
        >
          <Navbar />

          {children}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
