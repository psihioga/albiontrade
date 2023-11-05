"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { GetData, GetBlobData } from "@/api/getData";
import { TownSelect } from "@/components/elements/select/transport";
import { Table } from "@/components/elements/tables/transport";

import { locations } from "@/api/locations";


function filterData(data: any) {

  if (data instanceof Array) {

      const locationsSet = new Set(locations.map(el => el.Name))
      const filtered = data.filter(el=> {
        if (locationsSet.has(el.location)) return true
      }) 

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
        const response: any = await GetBlobData();
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
      <TownSelect />
      <Table elements={data} />
    </div>
  );
};
