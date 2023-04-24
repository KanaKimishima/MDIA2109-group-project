import Link from "next/link";

export default function Result3() {
  return (
    <div>
      <h1>Seems like you need to relax.</h1>
      <p>Recommended actions for you</p>
      <Link href="."></Link>
      <Link href="/home_page">Go back to home page</Link>
    </div>
  );
}