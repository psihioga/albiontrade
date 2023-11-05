import { blob } from "./blobRunes";
import { ore } from "./oreList";
import { locations } from "./locations";
import { Item } from "@/types/api";


type dataType = Item[]; 

const url = "https://west.albion-online-data.com/api/v2/stats/history/";
const items = "T4_RUNE,T5_RUNE,T6_RUNE,T7_RUNE,T8_RUNE";
const date = "date=10-30-2023&end_date=10-31-2023";
const qualities = "qualities=0";
const timescale = "time-scale=6";




function filterData(data: unknown) {

    if (data instanceof Array) {
        // const filtered = data.filter(el=> {

        // }) 
        console.log('data is array')
        return data;
    }
   


  return data;
}

export async function GetData(params: dataType) {

  const locationsList = locations
    .reduce((acc, cur) => acc + cur.Name + ",", "")
    .slice(0, -1);
  console.log("starting fetch");
  console.log(
    `${url}${items}?${date}&${locationsList}&${qualities}&${timescale}`
  );

  const response = await fetch(`${url}${items}?${date}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function GetBlobData(params: dataType | void) {
  console.log("starting fetch");
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(blob);
    }, 0);
  });
  return filterData(data);
  
}
