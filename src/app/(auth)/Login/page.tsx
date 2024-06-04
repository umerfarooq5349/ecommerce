"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/auth/route";
import styles from "@/utils/saas/login.module.scss";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>

      <label>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span>Email</span>
      </label>
      <div className={styles.flex}>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <span>Password</span>
        </label>
      </div>
      <button className={styles.submit} type="submit">
        Sign Up
      </button>
      <Link href="/Signup">
        <p>
          Do nott have an account? <b>Signup</b>
        </p>
      </Link>
    </form>
  );
};

export default Login;
