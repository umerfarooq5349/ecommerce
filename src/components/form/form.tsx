import styles from "@/utils/saas/FormComponent.module.scss";
import React, { useState, ChangeEventHandler, FormEventHandler } from "react";

interface FormData {
  price: number;
  description: string;
  title: string;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  handleImageUpload: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Foorm = (formData: FormData) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      formData.handleImageUpload(event); // Call the original handler
    }
  };
  console.log(`Thumbnail image url from foorm: ${formData.thumbnail}`);
  return (
    <div className="container">
      <form className={styles.addProductForm} onSubmit={formData.handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={formData.title}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Discount</label>
            <input
              type="number"
              name="discountPercentage"
              placeholder="Discount Percentage"
              value={formData.discountPercentage}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
          <div className="col-md-4">
            <label className={`${styles.group_label}`}>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={formData.handleChange}
              required
              className={`form-control ${styles.input_field}`}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className={`${styles.group_label}`}>Thumbnail URL</label>
          <input
            type="file"
            name="thumbnail"
            required
            onChange={handleImageUpload}
            className={`form-control ${styles.input_field}`}
          />
          {(selectedImage || formData.thumbnail) && (
            <img
              src={selectedImage || formData.thumbnail}
              alt="Selected Thumbnail"
              className={styles.thumbnail_preview}
            />
          )}
        </div>
        <div className="mb-3">
          <label className={`${styles.group_label}`}>Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            required
            onChange={formData.handleChange}
            rows={5}
            className={`form-control ${styles.input_field}`}
          />
        </div>
        <button
          type="submit"
          className={`${styles.submit_button} btn btn-primary`}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Foorm;
