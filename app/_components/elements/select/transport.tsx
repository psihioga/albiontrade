type city = {
  id: string;
  value: string;
  text: string;
};

const cities: city[] = [
  { id: "FortSterling", value: "FortSterling", text: "FortSterling" },
  { id: "Martlock", value: "Martlock", text: "Martlock" },
  { id: "Lymhurst", value: "Lymhurst", text: "Lymhurst" },
  { id: "Thetford", value: "Thetford", text: "Thetford" },
  { id: "Caerleon", value: "Caerleon", text: "Caerleon" },
  { id: "Brecilien", value: "Brecilien", text: "Brecilien" }
];

export const TownSelect = (props: {}): React.ReactElement => {
  const label = <label htmlFor="town-select">Ввберите город:</label>;

  const select = (
    <select name="towns" id="town-select">
      <option value="">--Город говна--</option>
      {cities.map(city => <option key={city.id} value={city.value}>{city.text}</option>)}
    </select>
  );

  return (
    <>
      {label}
      {select}
    </>
  );
};
