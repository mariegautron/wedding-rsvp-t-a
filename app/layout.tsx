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
      <body className="bg-white h-full">
        <ConfigProvider theme={themeTokens}>
          <div className="h-full">{children}</div>
        </ConfigProvider>
      </body>
    </html>
  );
}
