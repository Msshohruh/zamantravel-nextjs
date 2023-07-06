import "./globals.css";
import Context from "./context/store";
import Layout from "@/components/Layout";
export const metadata = {
  title: "Zaman Aviatravel",
  description: "dunyo bo'ylab turlar",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Context>
      <Layout>{children}</Layout>
    </Context>
  );
}
