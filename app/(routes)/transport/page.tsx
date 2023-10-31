"use client";

import { GetData, GetBlobData } from "@/api/getData";
import React from "react";
import { useEffect, useRef, useState } from "react";

export default () => {
  const effectRan = useRef(false);
  const [data, setData] = useState([{ label: "Nothing here" }]);

  useEffect(() => {
    if (effectRan.current) {
      console.log("effect Ran");
      const getData = async () => {
        const response: any = await GetBlobData();
        console.log(response);
        setData(response);
      };

      getData();
    }
    return () => {
      console.log("unmounted");
      effectRan.current = true;
    };
  }, []);

  const Table = (props: {}): React.ReactElement => {
    return (
      <table className="w-full border-separate border-spacing-2 border border-slate-500">
        <tbody>
          <tr className="">
            <td className="border border-slate-600">location </td>
            <td className="border border-slate-600">item_id </td>
            <td className="border border-slate-600">quality </td>
          </tr>
          {data.map((el: any) => {
            const firstRow = (
              <tr className="" key={el.location + el.item_id + el.quality}>
                <td className="border border-slate-600">
                  {el.location}
                </td>
                <td className="border border-slate-600">
                 {el.item_id}
                </td>
                <td className="border border-slate-600">
                 {el.quality}
                </td>
              </tr>
            );

            if (el.data) {
              const secondRow = el.data.map((elem: any) => {
                return (
                  <tr key={elem.timestamp}>
                    <td className="border border-slate-600">
                      {elem.item_count}
                    </td>
                    <td className="border border-slate-600">
                      {elem.avg_price}
                    </td>
                    <td className="border border-slate-600">
                      {elem.timestamp}
                    </td>
                  </tr>
                );
              });
              return (
                <React.Fragment key={Math.random()}>
                  {firstRow}
                  <tr>
                    <td>кол-во </td>
                    <td>средняя цена </td>
                    <td>время </td>
                  </tr>
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
  return (
    <div>
      <h1>Транспорт</h1>
      <Table />
    </div>
  );
};
