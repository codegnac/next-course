import Link from "next/link";

export default () => {
  const username = "codegnac";

  return (
    <>
      <style jsx>{`
        h2 {
          margin-top: 24px;
        }
        section {
          padding: 0 16px;
        }
      `}</style>
      <section>
        <h2>Codegnac.com Courses</h2>
        <ul>
          <li>
            <Link prefetch={false} href="/course/javascript">
              <a>JavaScript course</a>
            </Link>
          </li>
          <li>
            <Link href="/course/next">
              <a>Next.js course</a>
            </Link>
          </li>
          <li>
            <Link href="/users/[username]" as={`/users/${username}`}>
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
