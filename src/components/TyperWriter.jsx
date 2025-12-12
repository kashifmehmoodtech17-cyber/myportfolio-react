import { useEffect, useState } from "react";

const Typewriter = ({
    words = [],
    typingSpeed = 200,
    deletingSpeed = 100,
    delayAfterTyping = 1500,
    delayAfterDeleting = 600,
    className = "",
    style = {}
}) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const currentWord = words[index];

        let timer;

        if (!isDeleting) {
            timer = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, deletingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, isPaused, index, words, typingSpeed, deletingSpeed]);

    // ---- Pause Logic (fixes speed jump issue) ----
    useEffect(() => {
        const currentWord = words[index];

        let pauseTimer;

        if (!isDeleting && text === currentWord) {
            setIsPaused(true);
            pauseTimer = setTimeout(() => {
                setIsDeleting(true);
                setIsPaused(false);
            }, delayAfterTyping);
        }

        if (isDeleting && text === "") {
            setIsPaused(true);
            pauseTimer = setTimeout(() => {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
                setIsPaused(false);
            }, delayAfterDeleting);
        }

        return () => clearTimeout(pauseTimer);
    }, [text, isDeleting, index, words, delayAfterTyping, delayAfterDeleting]);

    return (
        <span style={{ display: "inline-flex", alignItems: "center", ...style }}>
            {text}

            <span
                style={{
                    marginLeft: "4px",
                    borderLeft: "3px solid #007BFF",
                    height: "1em",
                    animation: "blink 0.8s infinite"
                }}
            />

            <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
        </span>
    );
};

export default Typewriter;
