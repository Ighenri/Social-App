import BirthdayGift from "../assets/gift.png";
import ImageAd from "../assets/ad.png";
import Online from "./online";
import { Users } from "../dummyData";
import followingpic from "../assets/person/7.jpeg";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle font-bold">User Information</h4>
        <div className="rightbarInfo mb-5">
          <div className="rightbarInfoItem">
            <span className="text-sm mr-3">City:</span>
            <span className="text-gray-500">Nigeria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="text-sm mr-3">From:</span>
            <span className="text-gray-500">Abuja</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="text-sm mr-3">Relationship:</span>
            <span className="text-gray-500">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle font-bold mb-3 text-lg">User Friends</h4>
        <div className="rigtbarFollowings flex flex-wrap justify-between items-center">
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-2 cursor-pointer ">
            <img
              className="h-[80px] w-[80px] object-cover"
              src={followingpic}
              alt=""
            />
            <span className="text-sm font-medium text-center">Ben Carson</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar w-[35%] h-[90vh]">
      <div className="rightBarwrapper py-2">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
