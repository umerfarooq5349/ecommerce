"use client";

import { useState, useEffect } from "react";
import styles from "@/utils/saas/mainContaint.module.scss";
import ItemCard from "../card/itemCard";
import { getAllItems } from "@/app/api/item";

const MainContaint = () => {
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

  return (
    <div className={styles.container}>
      <h1>All Products</h1>
      <div className={styles.body}>
        {allItems.map((item: any) => (
          <ItemCard
            imageUrl={item.thumbnail}
            name={item.title}
            price={item.price}
            key={item._id}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MainContaint;
