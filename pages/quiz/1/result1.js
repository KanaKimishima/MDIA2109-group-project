import Link from "next/link";

export default function Result1() {
  return (
    <div>
      <h1>Result 1</h1>
      <p>Congratulations! You answered "Almost Always" for more than 5 questions.</p>
      <Link href="/">Go back to home page</Link>
    </div>
  );
}