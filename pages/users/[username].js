import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

export default ({ username, quote }) => {
  const router = useRouter();
  return (
    <div>
      User is <i>{username}</i>. The user favorite quote is:
      <blockquote>"{quote}"</blockquote>.
    </div>
  );
};

export async function getStaticProps({ params }) {
  const response = await fetch("https://api.kanye.rest/");
  return {
    props: {
      username: params.username,
      quote: (await response.json()).quote,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          username: "codegnac",
        },
      },
    ],
    fallback: false,
  };
}
