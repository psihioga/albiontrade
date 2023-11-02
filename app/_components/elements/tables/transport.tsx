import React from "react";

type elementDataType = {
  item_count: number;
  avg_price: number;
  timestamp: string | Date;
};

type elementType = {
  location: string;
  item_id: string;
  quality: number;
  data: elementDataType[];
};

export const Table = (props: {
  elements: elementType[];
}): React.ReactElement => {
  const elements = props.elements;

  return (
    <table className="w-full border-separate border-spacing-2 border border-slate-500">
      <tbody>
        <tr>
          <td>кол-во </td>
          <td>средняя цена </td>
          <td>время </td>
        </tr>
        {elements.map((el: any) => {
          const firstRow = (
            <tr className="" key={el.location + el.item_id + el.quality}>
              <td colSpan={3} className="border border-slate-600">
                {el.location} {el.item_id} {el.quality}
              </td>
            </tr>
          );

          if (el.data) {
            const secondRow = el.data.map((elem: any) => {
              return (
                <tr key={elem.timestamp}>
                  <td className="border border-slate-600">{elem.item_count}</td>
                  <td className="border border-slate-600">{elem.avg_price}</td>
                  <td className="border border-slate-600">{elem.timestamp}</td>
                </tr>
              );
            });
            return (
              <React.Fragment key={Math.random()}>
                {firstRow}
                {secondRow}
              </React.Fragment>
            );
          }

          return firstRow;
        })}
      </tbody>
    </table>
  );
};
