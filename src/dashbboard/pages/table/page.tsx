import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();

  console.log("products", json.products);
  return json.products;
}

export default function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h3 className="my-5 text-3xl font-medium">My Table</h3>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
