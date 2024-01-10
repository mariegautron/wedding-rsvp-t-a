import { ConfigProvider } from "antd";
import "./tailwind.css";
import "./globals.css";
import themeTokens from "@/utils/theme";

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
      <body style={{ height: "100%" }}>
        <ConfigProvider theme={themeTokens}>
          <div style={{ height: "100%" }}>{children}</div>
        </ConfigProvider>
      </body>
    </html>
  );
}
