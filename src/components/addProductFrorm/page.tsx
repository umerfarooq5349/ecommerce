"use client";
import { useState } from "react";
import styles from "@/utils/saas/FormComponent.module.scss";
import { addItem } from "@/app/api/item";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Foorm from "../form/form";

interface Product {
  price: number;
  description: string;
  title: string;
  discountPercentage: 0;
  stock: 10;
  brand: string;
  category: string;
  thumbnail: string;
}

const AddProduct = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<Product>({
    price: 0,
    description: "",
    title: "",
    discountPercentage: 0,
    stock: 10,
    brand: "",
    category: "",
    thumbnail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      addItem(formData)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item has been added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          router.push("/");
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    } catch (error: any) {
      throw new Error("Error in Adding new item");
    }
  };

  return (
    <Foorm
      brand={formData.brand}
      category={formData.category}
      description={formData.description}
      discountPercentage={formData.discountPercentage}
      price={formData.price}
      stock={formData.stock}
      thumbnail={formData.thumbnail}
      title={formData.title}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></Foorm>
  );
};

export default AddProduct;
