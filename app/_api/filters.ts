import { elementType } from "@/types/transport";
import { Item } from "@/types/api";

export function filterData(data: elementType[], locations: Item[]) {
    const locationsSet = new Set(locations.map((el) => el.Name));
    const filtered = data.filter((el) => {
      if (locationsSet.has(el.location)) return true;
    });

    return filtered;
}



export function filterByLocation(city: string, data: elementType[], locations: Item[]) {
    const mainCity = locations.find((el) => el.Index === city);
  
    const filtered = data.filter((el) => el.location === mainCity?.Name);
  
    return filtered;
  }