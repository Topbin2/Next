import type { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "제품페이지 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
