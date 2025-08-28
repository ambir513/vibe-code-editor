import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* TODO: DashboardSidebar */}
        <DashboardSidebar initialPlaygroundData={[]} />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
