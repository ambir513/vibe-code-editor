import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/features/dashboard/actions";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const playgroundData = await getAllPlaygroundForUser();

  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  };

  const FormattedPlaygroundData =
    playgroundData?.map((playground) => ({
      id: playground.id,
      name: playground.title,
      icons: technologyIconMap[playground.template] || "Code2",
      starred: playground.starmark[0]?.isMarked || false,
    })) || [];
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* TODO: DashboardSidebar */}
        <DashboardSidebar initialPlaygroundData={FormattedPlaygroundData} />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
