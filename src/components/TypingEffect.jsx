import { useEffect, useState } from 'react';

const TypingEffect = ({ words }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed at which each letter is typed
  const deletingSpeed = 100; // Speed at which letters are deleted
  const pauseDuration = 2000; // Time to pause before typing the next word

  useEffect(() => {
    let timer;

    const handleTypingEffect = () => {
      const current = words[index];

      if (isDeleting) {
        setCurrentWord((prev) => current.substring(0, prev.length - 1));

        if (currentWord.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentWord((prev) => current.substring(0, prev.length + 1));

        if (currentWord.length === current.length) {
          setIsDeleting(true);
          timer = setTimeout(() => {
            setCurrentWord(current.substring(0, current.length - 1));
          }, pauseDuration);
        }
      }
    };

    timer = setTimeout(handleTypingEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);  // Cleanup timeout when effect is rerun
  }, [currentWord, isDeleting, words, index]);

  return <span className="text-[#A0ECD0]">{currentWord}</span>;
};

export default TypingEffect;
