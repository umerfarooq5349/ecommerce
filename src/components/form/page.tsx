"use client";
import { useState } from "react";
import styles from "@/utils/saas/FormComponent.module.scss";
import { addItem } from "@/app/api/item";
import { useRouter } from "next/router";

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

const FormComponent = () => {
  // const router = useRouter(); // Correct usage

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

      console.log(`From form submit: ${JSON.stringify(formData)}`);
      addItem(formData);
    } catch (error: any) {
      console.error("Error adding item:", error.message);
    }
  };

  return (
    <form className={styles.addProductForm} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={`${styles.group_label}`}>Basic Information</label>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={formData.title}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
      </div>
      <div className={styles.group}>
        <label className={`${styles.group_label}`}>Discount & Stock</label>
        <input
          type="number"
          name="discountPercentage"
          placeholder="Discount Percentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
      </div>
      <div className={styles.group}>
        <label className={`${styles.label}`}>Additional Information</label>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className={`${styles.input_feild} `}
        />
      </div>
      <div className={styles.group}>
        <label className={`${styles.group_label}`}>Thumbnail URL</label>
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={formData.thumbnail}
          required
          onChange={handleChange}
          className={`${styles.input_feild} `}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        required
        onChange={handleChange}
        rows={5}
        className={`${styles.input_feild} `}
      />
      <button type="submit" className={`${styles.submit_button}`}>
        Add Product
      </button>
    </form>
  );
};

export default FormComponent;
