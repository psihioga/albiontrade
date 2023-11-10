"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { GetData, GetBlobData } from "@/api/getData";
import { ItemSelect, TownSelect } from "@/components/elements/select/transport";
import { Table } from "@/_components/elements/tables/transport/table";

import { locations } from "@/api/locations";
import { ore } from "@/api/oreList";

function filterData(data: any) {
  if (data instanceof Array) {
    const locationsSet = new Set(locations.map((el) => el.Name));
    const filtered = data.filter((el) => {
      if (locationsSet.has(el.location)) return true;
    });

    return filtered;
  }

  return data;
}

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
      const getData = async () => {
        const response: any = await GetData();
        console.log(response);
        setData(filterData(response));
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
      <TownSelect data={locations} />
      <ItemSelect data={ore} />
      <Table elements={data} />
    </div>
  );
};
