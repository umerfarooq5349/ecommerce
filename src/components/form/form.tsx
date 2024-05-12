import styles from "@/utils/saas/FormComponent.module.scss";
import { ChangeEventHandler, FormEventHandler } from "react";
interface formData {
  price: number;
  description: string;
  title: string;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
const Foorm = (formData: formData) => {
  return (
    <div>
      <form className={styles.addProductForm} onSubmit={formData.handleSubmit}>
        <div className={styles.group}>
          <label className={`${styles.group_label}`}>Basic Information</label>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={formData.handleChange}
            required
            className={`${styles.input_feild} `}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={formData.handleChange}
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
            onChange={formData.handleChange}
            required
            className={`${styles.input_feild} `}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={formData.handleChange}
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
            onChange={formData.handleChange}
            required
            className={`${styles.input_feild} `}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={formData.handleChange}
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
            onChange={formData.handleChange}
            className={`${styles.input_feild} `}
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          required
          onChange={formData.handleChange}
          rows={5}
          className={`${styles.input_feild} `}
        />
        <button type="submit" className={`${styles.submit_button}`}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Foorm;
