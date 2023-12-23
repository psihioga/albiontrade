import { useState, useEffect, useRef } from "react";
import { elementType } from "@/types/transport";
import { GetData, GetBlobData } from "@/api/getData";
import { locations } from "@/api/locations";
import { ore } from "@/api/oreList";
import { filterData, filterByLocation } from "@/api/filters";

export default function getData() {
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

  const effectRan = useRef(false);

  const mode = process.env.MODE;

  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (mode === "development") {
      if (effectRan.current) {
        const GetBlobData = async () => {
          const response: any = await GetBlobData();

          setData(response);
        };

        GetBlobData();
      }
      return () => {
        effectRan.current = true;
      };
    } else {
      const getData = async () => {
        const response: any = await GetData();

        setData(response);
      };

      getData();
    }
  }, []);

  useEffect(() => {
    if (mode === "development") {
      if (effectRan.current) {
        if (!city.length) {
          setFilteredData(filterData(data, locations));
          return;
        }

        const filtered = filterByLocation(city, data, locations);
        setFilteredData(filtered);
      }
    } else {
      if (!city.length) {
        setFilteredData(filterData(data, locations));
        return;
      }

      const filtered = filterByLocation(city, data, locations);
      setFilteredData(filtered);
    }
  }, [city, data]);

  return {
    locations,
    setCity,
    ore,
    filteredData,
  };
}
