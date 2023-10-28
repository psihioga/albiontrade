import Link from "next/link";

type Item = {
  title: string;
  link: string;
};
type menuItems = Item[];

const itemsArr: menuItems = [
  { title: "Крафт", link: "craft" },
  { title: "Перевозка", link: "transport" },
  { title: "Данж", link: "dungeon" },
];

function createLiEl(element: Item): React.ReactNode {
  return (
    <li
      className="duration-[400ms] ease-in-out transition-colors
      p-2 cursor-pointer 
     hover:bg-slate-700"
    >
      <Link href={element.link}>{element.title}</Link>
    </li>
  );
}

const LiElements = (props: { items: menuItems }) => {
  const { items } = { ...props };

  return items.map((el) => createLiEl(el));
};
export default () => {
  return (
    <header className="flex flex-row flex-wrap content-center w-full justify-center mt-2 bg-slate-500">
      <nav>
        <ul className="flex flex-row flex-wrap content-center w-fit  rounded-md">
          <LiElements items={itemsArr} />
        </ul>
      </nav>
    </header>
  );
};
