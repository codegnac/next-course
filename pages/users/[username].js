import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  console.log(router.query);
  return <div>I am the user {router.query.username}</div>;
};
