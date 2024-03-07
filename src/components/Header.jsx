import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="max-w-[150px]" src="/Netflix.svg" alt="netflix" />
      </Link>
    </header>
  );
};

export default Header;
