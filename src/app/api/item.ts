import { Route } from "next";
import { Router, useRouter } from "next/router";

export const getAllItems = async () => {
  let response = await fetch("http://localhost:8080/api/items/");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const addItem = async (item: any) => {
  let response = await fetch("http://localhost:8080/api/items/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
