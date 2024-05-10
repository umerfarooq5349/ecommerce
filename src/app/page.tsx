import Image from "next/image";
import styles from "@/utils/saas/home.module.scss";
import Navbar from "@/components/navbar/navbar";
import MainContaint from "@/components/main/mainContaint";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainContaint></MainContaint>
    </main>
  );
}
