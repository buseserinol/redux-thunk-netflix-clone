import { useSelector } from "react-redux";

const Hero = () => {
  const store = useSelector((store) => store.movieReducer);
  return <div>Hero</div>;
};

export default Hero;
