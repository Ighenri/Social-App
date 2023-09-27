import BirthdayGift from "../assets/gift.png";
import ImageAd from "../assets/ad.png";
import FriendReq from "../assets/person/2.jpeg";

export default function Rightbar() {
  return (
    <div className="rightBar w-1/4 h-[90vh]">
      <div className="rightBarwrapper py-2">
        <div className="flex items-center">
          <img className="h-8 mr-2" src={BirthdayGift} alt="" />
          <span className="rightBarText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAd w-full mt-3 rounded-md"
          src={ImageAd}
          alt=""
        />
        <h4 className="rightBarTitle mt-3 font-bold">Online Friends</h4>
        <ul className="rightBarFriendsList">
          <li className="rightBarFriend flex items-center my-2">
            <div className="rightbarProfileImgcontainer relative">
              <img
                className="h-8 w-8 object-cover rounded-full cursor-pointer"
                src={FriendReq}
                alt=""
              />
              <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
            </div>
            <span className="profileName ml-3 font-bold">Alex Obi</span>
          </li>
          <li className="rightBarFriend flex items-center my-2">
            <div className="rightbarProfileImgcontainer relative">
              <img
                className="h-8 w-8 object-cover rounded-full cursor-pointer"
                src={FriendReq}
                alt=""
              />
              <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
            </div>
            <span className="profileName ml-3 font-bold">Alex Obi</span>
          </li>
          <li className="rightBarFriend flex items-center my-2">
            <div className="rightbarProfileImgcontainer relative">
              <img
                className="h-8 w-8 object-cover rounded-full cursor-pointer"
                src={FriendReq}
                alt=""
              />
              <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
            </div>
            <span className="profileName ml-3 font-bold">Alex Obi</span>
          </li>
          <li className="rightBarFriend flex items-center my-2">
            <div className="rightbarProfileImgcontainer relative">
              <img
                className="h-8 w-8 object-cover rounded-full cursor-pointer"
                src={FriendReq}
                alt=""
              />
              <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
            </div>
            <span className="profileName ml-3 font-bold">Alex Obi</span>
          </li>
          <li className="rightBarFriend flex items-center my-2">
            <div className="rightbarProfileImgcontainer relative">
              <img
                className="h-8 w-8 object-cover rounded-full cursor-pointer"
                src={FriendReq}
                alt=""
              />
              <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
            </div>
            <span className="profileName ml-3 font-bold">Alex Obi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
