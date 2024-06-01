import styles from "@/utils/saas/navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href={"/"}>My Store</Link>
      </div>
      <div className={styles.body}>
        <ul>
          <li>
            <Link href={"/AddProduct"}>Add Product </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
