import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  EventNote,
  School,
} from "@mui/icons-material";
import LeftBarImg from "../assets/person/2.jpeg";

export default function Leftbar() {
  return (
    <div className="leftBar w-1/4 h-[calc(100vh-10vh)] overflow-y-scroll sticky top-[10vh]">
      <div className="leftbarWrapper pl-4">
        <ul className="leftbarList">
          <li className="leftbarListItem mb-4 pt-3">
            <RssFeed className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem mb-4">
            <Chat className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem mb-4">
            <PlayCircleFilled className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem mb-4">
            <Group className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem mb-4">
            <Bookmark className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem mb-4">
            <HelpOutline className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem mb-4">
            <WorkOutline className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem mb-4">
            <EventNote className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem mb-4">
            <School className="leftbarIcon mr-2" />
            <span className="leftbarListItemText">Courses</span>
          </li>
          <button className="p-2 pr-4 pl-4 bg-slate-200 text-sm font-medium rounded-lg mb-2">
            Show more
          </button>
          <hr className="border-1 border-black my-2 mr-4" />
        </ul>
        <ul className="leftbarFriendList ">
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">Henry Igwe</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">Mario Hu</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">James Rio</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">Alex Brown</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">Sandy Trio</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">James Mike</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
          <li className="leftbarFriendListItem flex mb-2">
            <img
              src={LeftBarImg}
              className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
              alt=""
            />
            <span className="leftbarFriendName">King Nath</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
