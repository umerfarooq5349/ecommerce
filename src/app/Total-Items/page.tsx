"use client";

import ItemCard from "@/components/card/itemCard";
import { deleteItem, getAllItems } from "../api/item";
import { useEffect, useState } from "react";
import styles from "@/utils/saas/total-Items.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
const TotalProducts = () => {
  const router = useRouter();
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getAllItems();
        setAllItems(itemsData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const updateBtn = (Item: number) => {
    console.log(`Update Btn ${Item}`);
    router.push(`/${Item}`);
  };
  const deleteBtn = (id: number) => {
    console.log(`Delete Btn ${id}`);
    deleteItem(id);
  };

  return (
    <div className={styles.container}>
      <h1>All Products</h1>
      <div className={styles.body}>
        <Link href={"/1"}>students</Link>
        {allItems.map((item: any) => (
          <ItemCard
            imageUrl={item.thumbnail}
            name={item.title}
            price={item.price}
            brand={item.brand}
            key={item._id}
            stock={item.stock}
            updateBtn={() => updateBtn(item._id)}
            deleteBtn={() => deleteBtn(item._id)}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
};
export default TotalProducts;
