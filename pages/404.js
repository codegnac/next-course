import Link from "next/link";

export default () => (
  <p>
    This page doesn't exist.{" "}
    <Link href="/">
      <a>Go to the home</a>
    </Link>
  </p>
);
