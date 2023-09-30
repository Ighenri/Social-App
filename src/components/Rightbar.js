import BirthdayGift from "../assets/gift.png";
import ImageAd from "../assets/ad.png";
import Online from "./online";
import { Users } from "../dummyData";

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
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}
