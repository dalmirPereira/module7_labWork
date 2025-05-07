//------------------ Module 7 Exercise 3 ------------------------

import React, { createContext, useState, useContext } from "react";

const emojiContext = createContext();

export const EmojiProvider = (props) => {
  
  const [currentEmoji, setCurrentEmoji] = useState("");
  
  const handleEmojiChange = (emoji) => {
    if (!emoji) {
        alert("Error");
    } else {
        setCurrentEmoji(emoji);
    }; 
  };
  
  return (
    <emojiContext.Provider value={{ currentEmoji, handleEmojiChange }}>
      {props.children}
    </emojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(emojiContext);
};

