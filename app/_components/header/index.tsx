"use client";

import Link from "next/link";
import { menuItems, Item } from "@/types/header";
import { Dispatch, SetStateAction, useState } from "react";

function createLiEl(
  element: Item,
  setActive: Dispatch<SetStateAction<string | null>>,
  active: string | null
): React.ReactNode {
  const activeClass =
    "duration-300 ease-in-out transition-colors cursor-pointer border-2 border-slate-50 bg-red-800 hover:bg-slate-700";
  const inactiveClass =
    "duration-300 ease-in-out transition-colors cursor-pointer border-2 border-slate-500 hover:bg-slate-700";

  return (
    <li
      className={element.link === active ? activeClass : inactiveClass}
      key={element.link}
    >
      <Link
        className="block p-2"
        href={element.link}
        onClick={() => setActive(element.link)}
      >
        {element.title}
      </Link>
    </li>
  );
}

export default function Header(props: { items: menuItems }) {
  const { items } = props;

  const [active, setActive] = useState<string | null>(null);

  const LiElements = (props: {
    items: menuItems;
    setActive: Dispatch<SetStateAction<string | null>>;
    active: string | null;
  }) => {
    const { items, setActive, active } = { ...props };

    return items.map((el) => createLiEl(el, setActive, active));
  };

  return (
    <header className="flex flex-row flex-wrap content-center w-full justify-center mt-2 bg-slate-500">
      <nav>
        <ul className="flex flex-row flex-wrap content-center w-fit  rounded-md">
          <LiElements items={items} setActive={setActive} active={active} />
        </ul>
      </nav>
    </header>
  );
}
