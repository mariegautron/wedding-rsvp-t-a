import "./globals.css";

export const metadata = {
  title: "Thomas & Amélie - Le mariage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ConfigProvider theme={themeTokens}> */}
        <div style={{ height: "100vh" }}>{children}</div>
        {/* </ConfigProvider> */}
      </body>
    </html>
  );
}
