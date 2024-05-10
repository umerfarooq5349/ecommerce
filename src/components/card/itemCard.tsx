import styles from "@/utils/saas/itemCard.module.scss";

interface ItemCardProps {
  name: string;
  price: number;
  imageUrl: string;
  brand: string;
  stock: number;
  updateBtn(): void;
  deleteBtn(): void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  price,
  imageUrl,
  brand,
  stock,
  updateBtn,
  deleteBtn,
}) => {
  return (
    <div className={styles.itemCard}>
      <img src={imageUrl} alt={name} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{name}</h3>
        <h3 className={styles.itemBrand}>{brand}</h3>
      </div>
      <p className={styles.itemPrice}>${price.toFixed(2)}</p>
      <div className={stock <= 0 ? styles.outOfStock : styles.inStock}>
        In Stock {stock}
      </div>
      <div className={styles.buttons}>
        <button className={styles.seeMore} onClick={updateBtn}>
          Update
        </button>
        <button className={styles.delete} onClick={deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
