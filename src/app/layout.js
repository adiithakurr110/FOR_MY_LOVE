import { Shantell_Sans } from "next/font/google";
import "./globals.css";

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "For uh my love ❤️",
  description: "A heartfelt romantic experience created straight from the heart, for uh my love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shantellSans.className} bg-[#07040d] antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
