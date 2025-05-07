//------------------- Module 6: Lab Exercise 3 ------------------------
import * as emoji from "node-emoji";
import { useEmojiContext } from "./contex/EmojiContex";
import { useEffect } from "react";

function Button({ onClick, children }) {
    return (
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

function getMood(mood) {
    if (mood === ":smile:") return ":heart_eyes:";
    if (mood === ":heart_eyes:") return ":sob:";
    return ":smile:";
}

function Emoji() {

    const { currentEmoji, handleEmojiChange } = useEmojiContext();

    useEffect(() => {
        if (!currentEmoji) {
          handleEmojiChange(":smile:");
        }
    }, []);

    return (
        <>
            <div>{emoji.emojify(currentEmoji)}</div>

            <Button onClick={() => handleEmojiChange(getMood(currentEmoji))}>
                Change Mood
            </Button>
        </>
    )
}



export default Emoji;