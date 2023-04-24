import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    router.push(`/quiz/q/${answers.length + 1}`);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <button onClick={() => handleAnswer("Almost Always")}>Almost Always</button>
      <button onClick={() => handleAnswer("Often")}>Often</button>
      <button onClick={() => handleAnswer("Sometimes")}>Sometimes</button>
      <button onClick={() => handleAnswer("Never")}>Never</button>
    </div>
  );
}