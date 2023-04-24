import { useRouter } from "next/router";

const questions = [
  "How are you feeling today ?",
  "Do you struggle to fall asleep at night?",
  "How often do you feel overwhelmed with your life?",
  "Do you feel irritable, annoyed, or angry over trivial issues?",
  "Do you feeling fatigued or tired?",
  "Do you feel anxious or depressed?",
  "Do you feel anxious or depressed",
];

export default function Quiz() {
  const router = useRouter();
  const { id } = router.query;
  const questionIndex = parseInt(id) - 1;
  const question = questions[questionIndex];

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      router.push(`/quiz/${questionIndex + 2}`);
    } else {
      router.push(`/result/${calculateResult()}`);
    }
  };

  const calculateResult = () => {
    const countAlmostAlways = answers.filter((answer) => answer === "Almost Always").length;
    if (countAlmostAlways >= 5) {
      return "result1";
    } else if (countAlmostAlways >= 3) {
      return "result2";
    } else {
      return "result3";
    }
  };

  return (
    <div>
      <h1>Question {id}</h1>
      <p>{question}</p>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
}