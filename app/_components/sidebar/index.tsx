import React from "react";
type Item = {
  title: string;
  item: menuItems | null;
};
type menuItems = Item[];

const itemsArr: menuItems = [
  {
    title: "Ресурсы",
    item: [
      { title: "Ткань", item: null },
      { title: "Волокно", item: null },
      { title: "Шкуры", item: [
        {title: "Твоя бывшая", item: null}
      ] },
      { title: "Кожа", item: null },
      { title: "Слитки", item: null },
      { title: "Руда", item: null },
      { title: "Другое", item: null },
      { title: "Брусья", item: null },
      { title: "Камень", item: null },
      { title: "Блоки", item: null },
      { title: "Древесина", item: null },
    ],
  },
  {
    title: "Артефакты",
    item: [
      { title: "Броня", item: null },
      { title: "Магия", item: null },
      { title: "Ближний бой", item: null },
      { title: "Левая рука", item: null },
      { title: "Другое", item: null },
      { title: "Дальний бой", item: null },
    ],
  },
  {
    title: "Материалы",
    item: [
      { title: "Эссенции", item: null },
      { title: "Другое", item: null },
      { title: "Реликты", item: null },
      { title: "Руны", item: null },
      { title: "Души", item: null },
    ],
  },
];

const LiElement = (props: { element: Item }): React.ReactElement => {
  const { element } = { ...props };

  return (
    <li
      key={element.title}
      className="duration-100 ease-in-out transition-colors
            p-2 cursor-pointer 
           hover:bg-slate-700 hover:text-cyan-100"
    >
      {element.title}
    </li>
  );
};

const ElementsRender = (props: { items: menuItems }) => {
  const { items } = { ...props };

  const elements: React.ReactElement[] = items.map((el) => {
    if (el.item) {
      return (
        <li
          key={el.title}
          className="duration-100 ease-in-out transition-colors
            p-2 cursor-pointer text-sm
           hover:bg-slate-200 hover:text-cyan-900"
        >
          {el.title}
          <ul>
            <ElementsRender items={el.item} />
          </ul>
        </li>
      );
    }

    return <LiElement element={el} key={el.title}/>;
  });

  return elements;
};

export default () => {
  return (
    <aside className="max-w-140 bg-green-300">
      <nav>
        <ul>
          <ElementsRender items={itemsArr} />
        </ul>
      </nav>
    </aside>
  );
};
