import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import TopbarProfilepic from "../assets/person/1.jpeg";

export default function Topbar() {
  return (
    <div className="topbarContainer h-[10vh] w-full bg-blue-500 sticky top-0 flex items-center z-10">
      <div className="topbarLeft flex-1">
        <span className="logo ml-4 text-white font-bold cursor-pointer text-2xl">
          Henrysocial
        </span>
      </div>

      <div className="topbarCenter flex-grow">
        <div className="searchBar w-full bg-white rounded-2xl">
          <Search className="searchIcon !text-lg ml-3" />
          <input
            placeholder="Search for Friends, Post or Video"
            className="searchInput border-0 outline-0 w-10/12 pl-2"
          />
        </div>
      </div>

      <div className="topbarRight flex-1 flex items-center justify-around">
        <div className="topbarLinks">
          <span className="topbarLink text-white mr-4 cursor-pointer">
            Homepage
          </span>
          <span className="topbarLink text-white cursor-pointer">Timeline</span>
        </div>
        <div className="topbaricons flex ">
          <div className="topbarIconItem mr-4 relative">
            <Person className="text-white" />
            <span className="topbarIconBadge bg-red-500 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center absolute top-0 -right-[20%]">
              1
            </span>
          </div>
          <div className="topbarIconItem mr-4 relative">
            <Chat className="text-white" />
            <span className="topbarIconBadge bg-red-500 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center absolute top-0 -right-[20%]">
              2
            </span>
          </div>
          <div className="topbarIconItem mr-4 relative">
            <Notifications className="text-white" />
            <span className="topbarIconBadge bg-red-500 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center absolute top-0 -right-[20%]">
              1
            </span>
          </div>
        </div>
        <img
          src={TopbarProfilepic}
          alt=""
          className="topbarImg h-8 w-8 object-cover rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
