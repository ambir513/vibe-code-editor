import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/UserButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Vide Code Editor</p>
      <Button variant={"outline"}>Click Me!</Button>
      <UserButton />
    </div>
  );
}
