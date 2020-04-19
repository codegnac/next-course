import moment from "moment";

export default () => {
  console.log(window);
  return <p>{moment().toString()}</p>;
};
