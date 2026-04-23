import "./globals.css";

export const metadata = {
  title: "KATANA·LABS — Webdesign, KI Automation & Digitale Sichtbarkeit",
  description: "Handgesetzte Websites, KI-Stimmen, Chatbots, CRM-Automation. Aus Berlin, weltweit aktiv.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Noto+Serif+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
