import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostProfile from "../assets/person/1.jpeg";
// import PostImg from "../assets/post/1.jpeg";
import LikeIcon from "../assets/like.png";
import LoveIcon from "../assets/heart.png";
import { Users } from "../dummyData";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postwrapper p-3 rounded-lg">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center cursor-pointer">
            <img
              className="h-8 w-8 object-cover rounded-full cursor-pointer mr-2"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName mr-2 font-bold">
              {Users.filter((u) => u.id === post?.userId)[0].username}
              {/* This code iterates through the users array, checks the u.id that === post.userId. returns the first array(index 0) of the username */}
            </span>
            <span className="postDate text-sm">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="postCenter">
          <p className="postText my-4">{post?.desc}</p>
          <img
            className="w-full max-h[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postBottom flex justify-between p-3">
          <div className="postBottomLeft flex items-center">
            <img
              className="likeIcon h-6 mr-2 cursor-pointer"
              src={LikeIcon}
              alt=""
            />
            <img
              className="likeIcon h-6 mr-2 cursor-pointer"
              src={LoveIcon}
              alt=""
            />
            <span className="postLikeCounter text-sm">
              {post.like} People like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText border-b-2 border-dotted border-gray-300">
              {post.comment} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
