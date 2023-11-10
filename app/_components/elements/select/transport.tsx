import { Item } from "@/types/api";

export const TownSelect = (props: {
  data: Item[];
  setCity: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement => {
  const cities = props.data;
  const setCity = props.setCity;
  const label = <label htmlFor="town-select">Выберите город:</label>;

  function changeCity(city: string) {
    console.log(city)
    setCity(city);
  }

  const select = (
    <select
      name="towns"
      id="town-select"
      onChange={(e) => {
        changeCity(e.target.value);
      }}
    >
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
