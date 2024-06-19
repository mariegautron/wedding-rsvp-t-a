"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import classNames from "classnames";
import Paragraph from "@/components/design-system/Paragraph";

const Header: FC = () => {
  const pathname = usePathname();
  const presentListUrl = process.env.NEXT_PUBLIC_PRESENT_LIST;

  const linkClasses = (path: string) =>
    classNames(
      "text-lg font-semibold mx-4 transition duration-300 ease-in-out relative group",
      {
        "text-primary border-b-2 border-primary": pathname === path,
        "text-fond-foncé": pathname !== path,
        "hover:text-primary": pathname !== path,
      }
    );

  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto flex justify-center items-center px-4">
        <nav className="flex space-x-10">
          <Link href="/menu" className={linkClasses("/menu")}>
            <Paragraph className="group-hover:underline">
              Découvrez notre menu
            </Paragraph>
          </Link>
          <Link href="/photos" className={linkClasses("/photos")}>
            <Paragraph className="group-hover:underline">
              Galerie de photos
            </Paragraph>
          </Link>
          {presentListUrl && (
            <a
              href={presentListUrl}
              className="text-lg font-semibold mx-4 transition duration-300 ease-in-out text-fond-foncé hover:text-primary relative group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph className="group-hover:underline">
                Liste des cadeaux
              </Paragraph>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
