import styles from "./layout.module.css";

export const metadata = {
  title: "제품페이지",
  description: "제품페이지",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
