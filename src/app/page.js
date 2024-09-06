import Header from "@/components/Header";
import Resources from "@/components/Resources";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
