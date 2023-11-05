import React from "react";

type elementDataType = {
  item_count: number;
  avg_price: number;
  timestamp: string;
};

type elementType = {
  location: string;
  item_id: string;
  quality: number;
  data: elementDataType[];
};

const FirstRow = (props: { el: elementType }): React.ReactElement => {
  const el = props.el;

  return (
    <tr key={el.location + el.item_id + el.quality}>
      <td colSpan={3} className="border border-slate-600">
        {el.location} {el.item_id} {el.quality}
      </td>
    </tr>
  );
};

const DataRows = (props: { el: elementDataType[] }): React.ReactElement[] => {
  const elem = props.el;
  
  const rows = elem.map((elem: elementDataType) => {
    return (
      <tr key={elem.timestamp}>
        <td className="border border-slate-600">{elem.item_count}</td>
        <td className="border border-slate-600">{elem.avg_price}</td>
        <td className="border border-slate-600">{elem.timestamp}</td>
      </tr>
    );
  });
  

  return rows;
};

export const Table = (props: {
  elements: elementType[];
}): React.ReactElement => {
  const elements = props.elements;

  return (
    <table className="w-full border-separate border-spacing-2 border border-slate-500">
      <tbody>
        <tr>
          <th>кол-во </th>
          <th>средняя цена </th>
          <th>время </th>
        </tr>
      </tbody>

      {elements.map((el: elementType) => {
        if (el.data.length) {  
          
          return (
            <tbody key={Math.random()}>
              <FirstRow
                el={{
                  location: el.location,
                  item_id: el.item_id,
                  quality: el.quality,
                  data: [],
                }}
              />
              <DataRows el={el.data}/>
            </tbody>
          );
        }

        return (
          <tbody key={Math.random()}>
            <FirstRow
            el={{
              location: el.location,
              item_id: el.item_id,
              quality: el.quality,
              data: [],
            }}
          />
          </tbody>
          
        );
      })}
    </table>
  );
};
