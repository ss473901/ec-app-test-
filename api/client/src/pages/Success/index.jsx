import { useLocation } from "react-router-dom";

export const Success = () => {
  const location = useLocation();
  console.log(location);

  return <div>Success</div>;
};
