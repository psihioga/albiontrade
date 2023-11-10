export type elementDataType = {
  item_count: number;
  avg_price: number;
  timestamp: string;
};

export type elementType = {
  location: string;
  item_id: string;
  quality: number;
  data: elementDataType[];
};
