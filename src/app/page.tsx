import Image from "next/image";
import styles from "./page.module.css";
import HistorySection from "@/components/HistorySection";
import ChatSection from "@/components/ChatSection";

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.historyOut}>
        <HistorySection />
      </div>
      <div className={styles.chatOut}>
        <ChatSection />
      </div>
    </div>
  );
}
