import { useState } from "react";
import { FirstRow, DataRows } from "./trow";
import { elementType } from "@/types/transport";

export const TableBody = (props: { el: elementType }): React.ReactElement => {
  const [isActive, setIsActive] = useState(true);

  const el = props.el;
  const handleClick = (e: any) => {
    setIsActive((current) => !current);
  };

  const tableBody = (
    <tbody className={isActive ? "hide" : ""}>
      <FirstRow
        el={{
          location: el.location,
          item_id: el.item_id,
          quality: el.quality,
          data: [],
        }}
        handle={handleClick}
      />
      <DataRows el={el.data} />
    </tbody>
  );

  return tableBody;
};
