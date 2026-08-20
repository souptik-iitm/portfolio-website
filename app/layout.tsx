import "./globals.css";

export const metadata = {
  title: "Souptik | Portfolio",
  description: "Data Science & Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#08080a] text-zinc-100">
        {children}
      </body>
    </html>
  );
}