import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";

const Highlight = () => {
  return (
    <div className="flex justify-between items-center w-full px-16 py-3 border-b text-md bg-white">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faBars} />
          <span>All category</span>
        </button>
        <a href="#" className="hover:underline">Hot offers</a>
        <a href="#" className="hover:underline">Gift boxes</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Menu item</a>
        <button className="flex items-center space-x-1">
          <span>Help</span>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </button>
      </div>
      
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1">
          <span>English, USD</span>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </button>
        <button className="flex items-center space-x-1">
          <span>Ship to</span>
          <FontAwesomeIcon icon={faFlag} className="text-red-600" />
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </button>
      </div>
    </div>
  );
};

export default Highlight;
