"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { usePlayground } from "@/features/playground/hooks/usePlayground";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const { playgroundData, templateData, isLoading, error, saveTemplateData } =
    usePlayground(id);
  console.log(templateData);
  console.log(playgroundData, "palyg");
  return (
    <div className="">
      <>
        {/* TODO: template tree */}
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator className="mr-2 h-4" orientation="vertical" />
            <div className="flex flex-1 items-center gap-2">
              <div className="flex flex-1 flex-col">
                {playgroundData?.title || "Code Playground"}
              </div>
            </div>
          </header>
        </SidebarInset>
      </>
    </div>
  );
};

export default page;
