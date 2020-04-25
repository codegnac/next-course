import fetch from "isomorphic-unfetch";

const Post = ({ post }) => {
  return <div>post is {post.title}</div>;
};

export default Post;

export async function getServerSideProps({ res, query }) {
  throw new Error();
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.params[0]}`
  );

  return {
    props: {
      post: await post.json(),
    },
  };
}
