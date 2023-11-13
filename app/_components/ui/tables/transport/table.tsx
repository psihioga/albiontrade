import React from "react";
import { TableBody } from "./tbody";
import { elementType } from "@/types/transport";


export const Table = (props: {
  elements: elementType[];
}): React.ReactElement => {
  const elements = props.elements;

  return (
    <table className="w-full border-collapse border-spacing-2 border border-slate-500">
      <tbody>
        <tr>
          <th>кол-во </th>
          <th>средняя цена </th>
          <th>время </th>
        </tr>
      </tbody>

      {elements.map((el: elementType) => (
        <TableBody el={el} key={el.item_id + el.location + el.quality} />
      ))}
    </table>
  );
};
