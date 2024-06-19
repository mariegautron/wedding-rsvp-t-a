"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import classNames from "classnames";
import Paragraph from "@/components/design-system/Paragraph";

const Header: FC = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    classNames(
      "text-lg font-semibold mx-4 transition duration-300 ease-in-out",
      {
        "text-primary border-b-2 border-primary": pathname === path,
        "text-fond-foncé": pathname !== path,
        "hover:text-primary": pathname !== path,
      }
    );

  return (
    <header className="bg-transparent py-2">
      <div className="container mx-auto flex justify-center items-center px-4">
        <nav className="flex space-x-4">
          <Link href="/photos" className={linkClasses("/photos")}>
            <Paragraph>Photos</Paragraph>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
