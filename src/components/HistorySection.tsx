import React from 'react';
import userIcon from '@/assets/user-icon.png';
import  chatgptlogo from '@/assets/chatgptlogo.png';
import Image from "next/image";
import styles from '@/styles/HistorySection.module.css'


const allChats = [
  {
    id: 1,
    chatName: "Chat 1",
  },
  {
    id: 2,
    chatName: "Chat 2",
  },
  {
    id: 3,
    chatName: "Chat 3",
  },
];

const HistorySection = () => {
  return (
    <div className={styles.historySec}>
      <div className={styles.newChat}>
        <div>
          <Image src={chatgptlogo} alt='ChatGPT LOGO' width={50} height={50}/>
          <p className={styles.text1}>New chat</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </div>
      <div className={styles.allChats}>
          {allChats.map(chat => (
            <div key={chat.id}>
              <p className={styles.text1}>{chat.chatName}</p>
            </div>
          ))}
      </div>
      <div className={styles.newChat}>  
        <div>
          <Image className={styles.icon} src={userIcon} alt='ChatGPT user logo' width={50} height={50}/>
          <p className={styles.text1}>John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default HistorySection