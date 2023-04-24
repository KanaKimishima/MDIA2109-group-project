import Link from "next/link";

export default function Result2() {
  return (
    <div>
      <p>Seems like you don't get enough sleep.</p>
      <p>Recommended actions for you</p>
      <Link href="/home_page">Go back to home page</Link>
    </div>
  );
}