"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { UserButton } from "@/features/auth/components/UserButton";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Docs", href: "#" },
  { name: "About", href: "#" },
];

export default function Header({ user }: { user: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <nav
        data-state={menuOpen && "active"}
        className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
                <h1 className="text-lg font-semibold tracking-tight">
                  Vibe Code Editor
                </h1>
              </Link>

              <div className="flex items-center gap-2 lg:hidden">
                {user ? (
                  <UserButton user={user} />
                ) : (
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    className="relative z-20 -m-2.5 p-2.5"
                  >
                    {menuOpen ? (
                      <X className="size-6" />
                    ) : (
                      <Menu className="size-6" />
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <SunIcon className="size-5" />
                  ) : (
                    <MoonIcon className="size-5" />
                  )}
                </button>

                {user ? (
                  <UserButton user={user} />
                ) : (
                  <Button asChild variant="outline" size="sm">
                    <Link href="/auth/sign-in">Sign in</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
