import { elementType, elementDataType } from "@/types/transport";
import { motion } from "framer-motion";

export const FirstRow = (props: {
  el: elementType;
  handle: any;
}): React.ReactElement => {
  const el = props.el;
  const handleClick = props.handle;

  const Row = (
    <tr key={el.location + el.item_id + el.quality} className="bg-teal-900 text-teal-100">
      <td colSpan={2} className="border border-slate-600">
        {el.location} {el.item_id} {el.quality}
      </td>
      <td align="right" className="border border-slate-600">
        <motion.img
          className="mr-3 cursor-pointer"
          data-testid="close-icon"
          src="/eye.svg"
          alt="Close Nav Bar"
          height="30"
          width="30"
          onClick={(e) => handleClick(e)}
        ></motion.img>
      </td>
    </tr>
  );

  return Row;
};


function getTime(timestamp:string) {

  const date = new Date(timestamp)

  return date.toLocaleString("ru-RU");
}

export const DataRows = (props: {
  el: elementDataType[];
}): React.ReactElement[] => {
  const elem = props.el;

  const rows = elem.map((elem: elementDataType) => {

    

    const time = getTime(elem.timestamp)

    return (
      <tr key={elem.timestamp}>
        <td className="border border-slate-600">{elem.item_count}</td>
        <td className="border border-slate-600">{elem.avg_price}</td>
        <td className="border border-slate-600">{time}</td>
      </tr>
    );
  });

  return rows;
};
