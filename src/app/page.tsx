import Image from "next/image";
import styles from "@/utils/saas/home.module.scss";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import TotalProducts from "./Total-Items/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <TotalProducts />
    </main>
  );
}
