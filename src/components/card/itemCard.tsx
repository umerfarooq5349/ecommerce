import styles from "@/utils/saas/itemCard.module.scss";

interface ItemCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, price, imageUrl }) => {
  console.log(`Card ${imageUrl}`);
  return (
    <div className={styles.itemCard}>
      <img src={imageUrl} alt={name} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{name}</h3>
        <p className={styles.itemPrice}>${price.toFixed(2)}</p>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
