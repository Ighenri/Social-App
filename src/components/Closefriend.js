export default function Closefriend({ closeF }) {
  return (
    <div>
      <li className="leftbarFriendListItem flex mb-2">
        <img
          src={closeF.profilePicture}
          className="leftbarFriendImg h-6 w-6 rounded-full mr-3 object-cover"
          alt=""
        />
        <span className="leftbarFriendName">{closeF.username}</span>
      </li>
    </div>
  );
}
