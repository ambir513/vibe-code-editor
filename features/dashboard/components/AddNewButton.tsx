"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import TemplateSelectionModel from "./TemplateSelectionModel";
import { createPlayground } from "../actions";
import { toast } from "sonner";

const AddNewButton = () => {
  const router = useRouter();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null);
  const handleSubmit = async (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    setSelectedTemplate(data);
    const res = await createPlayground(data);
    toast.success("Playground created successfully");
    setIsModelOpen(false);
    router.push(`/playground/${res?.id}`);
  };

  return (
    <>
      <div
        className="group bg-muted hover:bg-background flex cursor-pointer flex-row items-center justify-between rounded-lg border px-6 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-[#E93F3F] hover:shadow-[0_10px_30px_rgba(233,63,63,0.15)]"
        onClick={() => setIsModelOpen((prev) => !prev)}
      >
        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            variant={"outline"}
            className="flex items-center justify-center bg-white transition-colors duration-300 group-hover:border-[#E93F3F] group-hover:bg-[#fff8f8] group-hover:text-[#E93F3F]"
            size={"icon"}
          >
            <Plus
              size={30}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#e93f3f]">Add new</h1>
            <p className="text-muted-foreground max-w-[220px] text-sm">
              Create now Playground
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={"/add-new.svg"}
            alt="Create new Playground"
            width={150}
            height={150}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <TemplateSelectionModel
        isOpen={isModelOpen}
        onClose={() => setIsModelOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
