import "./globals.css";

export const metadata = {
  title: "𝔽𝕝𝕪𝕃𝕒𝕿𝕰𝖝 Excalidraw",
  description: "AI 驱动的图表生成",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
