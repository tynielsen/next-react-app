import Image from "next/image";
import Header from "@/components/Header";
import ResourcesSection from "@/components/ResourcesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutSection />
      <ResourcesSection />

      <Footer />
    </main>
  );
}
