import { Productts } from "@/utils/model/item";
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
    // body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const getItem = async (item: any) => {
  // Extract the ID from the item object
  const itemId = item;

  let response = await fetch(`http://localhost:8080/api/items/${itemId}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const updateItem = async (id: number, updatedData: Productts) => {
  let response = await fetch(`http://localhost:8080/api/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log(`Success: ${response}`);
  return response.json();
};

export const uploadProductImage = async (imageFile: File) => {
  const formData = new FormData();
  formData.set("thumbnail", imageFile);

  const response = await fetch("http://localhost:8080/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
