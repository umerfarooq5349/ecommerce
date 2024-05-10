import { Route } from "next";
import { useRouter } from "next/router";

export const getAllItems = async () => {
  let response = await fetch("http://localhost:8080/api/items/");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const addItem = async (item: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

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

export const deleteItem = async (item: any) => {
  // Extract the ID from the item object
  const itemId = item;

  let response = await fetch(`http://localhost:8080/api/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item), // Verify if this is intended; typically, for DELETE requests, you don't need to send a body
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  console.log(await response.json()); // Use await to get the JSON response
  return response.json();
};
