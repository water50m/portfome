import "./globals.css";
import GalaxyBg from "@/components/galaxy_bg";

export const metadata = {
  title: "Got Zilla – Portfolio",
  description: "Futuristic Neon + Minimal Luxury Portfolio",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className=" text-white font-inter">
        <GalaxyBg />
        {children}
      </body>
    </html>
  );
}
