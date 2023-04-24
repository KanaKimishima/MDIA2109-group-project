import Link from "next/link";

export default function Result2() {
  return (
    <div>
      <h1>Result 2</h1>
      <p>You answered "Almost Always" for 3 or 4 questions.</p>
      <Link href="/">Go back to home page</Link>
    </div>
  );
}