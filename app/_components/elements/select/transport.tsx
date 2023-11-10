import { Item } from "@/types/api";

export const TownSelect = (props: { data: Item[] }): React.ReactElement => {
  const cities = props.data;
  const label = <label htmlFor="town-select">Выберите город:</label>;

  const select = (
    <select name="towns" id="town-select">
      <option value="">--Город говна--</option>
      {cities.map((city) => (
        <option key={city.UniqueName} value={city.Index}>
          {city.Name}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {label}
      {select}
    </>
  );
};

export const ItemSelect = (props: { data: Item[] }): React.ReactElement => {
  const items = props.data;
  const label = <label htmlFor="item-select">Выберите говно:</label>;

  const select = (
    <select name="items" id="item-select">
      <option value="">--Не выбрано--</option>
      {items.map((item) => (
        <option key={item.UniqueName} value={item.Index}>
          {item.Name}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {label}
      {select}
    </>
  );
};
