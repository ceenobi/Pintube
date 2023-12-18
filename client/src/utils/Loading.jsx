/* eslint-disable react/prop-types */
import { BounceLoader } from "react-spinners";

const Loading = ({ text }) => {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center min-vh-100">
      <BounceLoader color="rgb(126, 182, 154)" />
      <p>{text}</p>
    </div>
  );
};

export default Loading;
