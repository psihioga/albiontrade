"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

import { ItemSelect, TownSelect } from "@/components/ui/select/transport";
import { Table } from "@/components/ui/tables/transport/table";
import { elementType } from "@/types/transport";
import { Button } from "@/components/shadcn/ui/button";
import { Calendar } from "@/components/shadcn/ui/calendar";

import { DatePickerWithRange } from "@/components/ui/calendar/calendar";

import useGetData from "@/hooks/getData";

export default function Transport() {
  const { locations, setCity, ore, filteredData } = useGetData();

  return (
    <div>
      <h1>Транспорт</h1>
      <div className="p-4">
        <TownSelect data={locations} setCity={setCity} />
        <ItemSelect data={ore} />
        <Button>Click me</Button>
        <br />

        <DatePickerWithRange />
      </div>
      <Table elements={filteredData} />
    </div>
  );
}
