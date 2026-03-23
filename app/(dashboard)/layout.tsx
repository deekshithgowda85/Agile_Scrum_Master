"use client";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 lg:ml-64 w-full flex flex-col">
          <Navbar />
          <main className="flex-1 w-full bg-white dark:bg-black min-h-[calc(100vh-12rem)] p-6">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
