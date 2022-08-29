import { PropTypes } from "prop-types";

export const Header = ({ sectionName }) => (
  <div className="lg:flex lg:items-center lg:justify-between p-2">
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:text-3xl sm:tracking-tight sm:truncate">
        {sectionName || ""}
      </h2>
    </div>
  </div>
);
Header.defaultProps = {
  sectionName: ""
};

Header.propTypes = {
  sectionName: PropTypes.string
};

export default Header;
