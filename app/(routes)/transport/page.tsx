"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { GetData, GetBlobData } from "@/api/getData";
import { TownSelect } from "@/components/elements/select/transport";
import { Table } from "@/components/elements/tables/transport";

export default () => {
  const effectRan = useRef(false);
  const [data, setData] = useState([
    {
      location: "nothing",
      item_id: "tosee",
      quality: 1,
      data: [],
    },
  ]);

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
      effectRan.current = true;
    };
  }, []);

  return (
    <div>
      <h1>Транспорт</h1>
      <TownSelect />
      <Table elements={data} />
    </div>
  );
};
