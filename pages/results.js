import { useRouter } from "next/router";

const results = {
  result1: "Result 1",
  result2: "Result 2",
  result3: "Result 3",
};

export default function Result() {
  const router = useRouter();
  const { id } = router.query;
  const result = results[id];
  return (
    <div>
      <h1>Result</h1>
      <p>{result}</p>
    </div>
  );
}