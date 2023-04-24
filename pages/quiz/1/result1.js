import Link from "next/link";

export default function Result1() {
  return (
    <div>
      <p>Seems like you need to be more active.</p>
      <p>Recommended actions for you</p>
      <Link href="/home_page">Go back to home page</Link>
    </div>
  );
}