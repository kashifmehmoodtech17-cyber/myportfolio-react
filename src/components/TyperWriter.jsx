import { useEffect, useState } from "react";

const Typewriter = ({
  words = [],
  typingSpeed = 150,
  deletingSpeed = 100,
  delayAfterTyping = 1500,
  delayAfterDeleting = 600,
  className = "",
  style = {},
  cursorColor = "#6366f1", // Indigo cursor by default
  cursorWidth = "2px",
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const currentWord = words[index];

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.slice(0, text.length - 1)
          : currentWord.slice(0, text.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, index, words, typingSpeed, deletingSpeed]);

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
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "pre",
        ...style,
      }}
      className={className}
    >
      {text}
      <span
        style={{
          marginLeft: "4px",
          borderLeft: `${cursorWidth} solid ${cursorColor}`,
          height: "1em",
          animation: "blink 0.8s infinite",
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
