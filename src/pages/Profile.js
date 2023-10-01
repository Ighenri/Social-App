import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import Topbar from "../components/Topbar";
import ProfileCoverImg from "../assets/post/3.jpeg";
import ProfileUserImg from "../assets/person/1.jpeg";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile flex">
        <Leftbar />
        <div className="profileRight w-9/12">
          <div className="profileRightTop">
            <div className="ProfileCover h-[310px] relative">
              <img
                className="w-[150px] h-[150px] rounded-full absolute left-0 right-0 top-[150px] border-2 border-white m-auto object-cover"
                src={ProfileUserImg}
                alt=""
              />
              <img
                className="w-full h-[250px] object-cover"
                src={ProfileCoverImg}
                alt=""
              />
            </div>
            <div className="profileInfo flex flex-col justify-center items-center ">
              <h4 className="profileInfoName text-2xl font-bold mt-0">
                Henry Igwe
              </h4>
              <span className="profileInfoDesc text-gray-500">
                Software Developer
              </span>
            </div>
          </div>
          <div className="profileRightBottom flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
