import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "@/utils/saas/navbar.module.scss";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href={"/"}>My Store</Link>
      </div>
      <div className={styles.body}>
        <ul>
          {session ? (
            <>
              <li>
                <Link href={"/AddProduct"}>Add Product </Link>
              </li>
              <li>
                <Link href={"/"}>Log out </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/Login"}>Login </Link>
              </li>
              <li>
                <Link href={"/Signup"}>SignUp </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
