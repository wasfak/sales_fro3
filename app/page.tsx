"use client";
import { Button } from "@/components/ui/button";
import { getCode } from "@/lib/actions/userActions";
import { useEffect, useState } from "react";

export default function Home() {
  const [code, setCode] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch("https://full-2.vercel.app/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: 2,
        }),
      });
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Hello World</h1>
      <Button variant="outline">Click</Button>
    </div>
  );
}
