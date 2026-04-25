"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Sweat Into\nStrength.",
  "Effort Into\nResults.",
  "Iron Into\nArmor.",
  "Doubt Into\nPower."
];

export function HeroTextAnimation() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && text === currentPhrase) {
      typingSpeed = 2000;
    } else if (isDeleting && text === "") {
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="block mt-1 md:mt-2 xl:mt-3 whitespace-pre-line">
      {text}
      <span className="inline-block animate-[pulse_1s_ease-in-out_infinite] font-light ml-1 md:ml-2 text-rose-500">
        |
      </span>
    </span>
  );
}
