import FriendReq from "../assets/person/2.jpeg";

export default function online({ user }) {
  return (
    <div>
      <li className="rightBarFriend flex items-center my-2">
        <div className="rightbarProfileImgcontainer relative">
          <img
            className="h-8 w-8 object-cover rounded-full cursor-pointer"
            src={user.profilePicture}
            alt=""
          />
          <span className="rightbarOnline h-3 w-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-white"></span>
        </div>
        <span className="profileName ml-3 font-bold">{user.username}</span>
      </li>
    </div>
  );
}
