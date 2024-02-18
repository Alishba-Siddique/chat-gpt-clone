import React from 'react';
import userIcon from '@/assets/user-icon.png';
import  chatgptlogo from '@/assets/chatgptlogo.png';
import Image from "next/image";
import styles from '@/styles/HistorySection.module.css'

const HistorySection = () => {
  const allChats = [
    {
      id: 1,
      chatName: "Sample Chat 1 For Chatgpt",
    },
    {
      id: 2,
      chatName: "Sample Chat 2 For Chatgpt",
    },
    {
      id: 3,
      chatName: "Sample Chat 3 For Chatgpt",
    },
    {
      id: 4,
      chatName: "Sample Chat 4 For Chatgpt",
    },
    {
      id: 5,
      chatName: "Sample Chat 5 For Chatgpt",
    }
  ];

  return (
    <div className={styles.historySec}>
      <div className={styles.newChat}>
        <div>
          <Image src={chatgptlogo} alt='ChatGPT LOGO' width={50} height={50}/>
          <p className={styles.text1}>New chat</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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
