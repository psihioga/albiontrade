import { blob } from "./blob";
type Item = {
  Index: string;
  Name: string;
  UniqueName: string;
};

type dataType = Item[];

const url = "https://west.albion-online-data.com/api/v2/stats/history/";
const items = "T4_RUNE,T5_RUNE,T6_RUNE,T7_RUNE,T8_RUNE";
const date = "date=10-30-2023&end_date=10-31-2023";
const qualities = "qualities=0";
const timescale = "time-scale=6";

const locations: Item[] = [
  {
    Index: "4002",
    Name: "FortSterling",
    UniqueName: "Fort Sterling Market",
  },
  {
    Index: "3008",
    Name: "Martlock",
    UniqueName: "Martlock Market",
  },
  {
    Index: "1002",
    Name: "Lymhurst",
    UniqueName: "Lymhurst Market",
  },
  {
    Index: "0007",
    Name: "Thetford",
    UniqueName: "Thetford Market",
  },

  {
    Index: "3005",
    Name: "Caerleon",
    UniqueName: "Caerleon Market",
  },
  {
    Index: "5003",
    Name: "Brecilien",
    UniqueName: "Brecilien Market",
  },
];

const otherLocations = [
  {
    Index: "3013-Auction2",
    UniqueName: "Caerleon Market",
  },
];

const ore = [
  {
    Index: "917",
    Name: "T2_ORE",
    UniqueName: "Copper Ore",
    Translation: "титановая руда",
  },
  {
    Index: "918",
    Name: "T3_ORE",
    UniqueName: "Tin Ore",
    Translation: "Оловяная руда",
  },
  {
    Index: "919",
    Name: "T4_ORE",
    UniqueName: "Iron Ore",
    Translation: "железная руда",
  },
  {
    Index: "920",
    Name: "T5_ORE",
    UniqueName: "Titanium Ore",
    Translation: "титановая руда",
  },
  {
    Index: "921",
    Name: "T6_ORE",
    UniqueName: "Runite Ore",
    Translation: "рунитовая руда",
  },
  {
    Index: "922",
    Name: "T7_ORE",
    UniqueName: "Meteorite Ore",
    Translation: "метеоритная руда",
  },
  {
    Index: "923",
    Name: "T8_ORE",
    UniqueName: "Adamantium Ore",
    Translation: "Адамантиновая руда",
  },
];

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
