
"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        <Script
        src="https://shasha-ai-frontend.onrender.com/widget.js"
        data-widget-key="staging_1_UH2qZubWATIAaqsnwB6m6b7EebRMO9U3"
        strategy="afterInteractive"
        />
    </>
 );
}
