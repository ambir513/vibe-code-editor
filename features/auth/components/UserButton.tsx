"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { SignOutAction } from "./Signout"; // ✅ import server action

export const UserButton = ({ user }: { user: any }) => {
  if (!user) return null;

  const nameParts = user?.name?.split(" ") ?? [];
  const initials =
    nameParts.length >= 2
      ? nameParts[0][0] + nameParts[1][0]
      : (nameParts[0]?.[0] ?? "?");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user?.email && (
          <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form action={SignOutAction} className="w-full">
            <button
              type="submit"
              className="flex w-full items-center gap-2 text-red-600 dark:text-red-400"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
