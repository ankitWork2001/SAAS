import React from "react";

const Data = [
  {
    id: 1,
    title: "Total User",
    number: "12,532"
  },
  {
    id: 2,
    title: "Total Subscription",
    number: "6,829"
  },
  {
    id: 3,
    title: "Total Revenue",
    number: "8,654"
  },
  {
    id: 4,
    title: "Revenue",
    number: "23,450"
  }
];

const FourGrid = () => {
  return (
    <div className="h-auto w-full font-semibold text-slate-50 sm:flex dark:text-slate-50 overflow-auto">
      <div className="flex w-full flex-row justify-between gap-2 p-1">
        {Data.map((data) => (
          <div key={data.id} className="flex flex-grow justify-center-safe h-32 flex-col rounded-sm bg-cyan-600 p-3 m-2">
            <div className="text-2xl">{data.title}</div>
            <div className="text-3xl font-bold">{data.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourGrid;
