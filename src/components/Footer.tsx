import moment from "moment";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = moment().format("YYYY");
  return (
    <footer className="mx-auto h-20 text-xs font-mono flex items-center justify-center text-white md:text-lg lg:text-base bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-flow-col gap-4 mb-5 uppercase">
          &copy; {date} -{" "}
          <Link to={"/"} rel="noopener noreferrer">
            Cristian Developer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
