"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { GetData, GetBlobData } from "@/api/getData";
import { ItemSelect, TownSelect } from "@/components/elements/select/transport";
import { Table } from "@/components/elements/tables/transport/table";
import { elementType } from "@/types/transport";

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

function filterByLocation(city: string, data: elementType[]) {
  const mainCity = locations.find((el) => el.Index === city);

  const filtered = data.filter((el) => el.location === mainCity?.Name);

  return filtered;
}

export default function Transport() {
  const effectRan = useRef(false);
  const [data, setData] = useState<elementType[]>([
    {
      location: "nothing",
      item_id: "tosee",
      quality: 1,
      data: [],
    },
  ]);

  const [filteredData, setFilteredData] = useState<elementType[]>([
    {
      location: "nothing",
      item_id: "tosee",
      quality: 1,
      data: [],
    },
  ]);

  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (effectRan.current) {
      const getData = async () => {
        const response: any = await GetData();

        setData(response);
      };

      getData();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);

  useEffect(() => {
    if (effectRan.current) {
      if (!city.length) {
        setFilteredData(filterData(data));
        return;
      }

      const filtered = filterByLocation(city, data);
      setFilteredData(filtered);
    }
  }, [city, data]);

  return (
    <div>
      <h1>Транспорт</h1>
      <div className="p-4">
        <TownSelect data={locations} setCity={setCity} />
        <ItemSelect data={ore} />
      </div>
      <Table elements={filteredData} />
    </div>
  );
};
