import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostProfile from "../assets/person/1.jpeg";
import PostImg from "../assets/post/1.jpeg";
import LikeIcon from "../assets/like.png";
import LoveIcon from "../assets/heart.png";

export default function Post() {
  return (
    <div className="post">
      <div className="postwrapper p-3 rounded-lg">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center cursor-pointer">
            <img
              className="h-8 w-8 object-cover rounded-full cursor-pointer mr-2"
              src={PostProfile}
              alt=""
            />
            <span className="postUserName mr-2 font-bold">Henry Igwe</span>
            <span className="postDate text-sm">3 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="postCenter">
          <p className="postText my-4">Hello, i am here to make you happy</p>
          <img
            className="w-full max-h[500px] object-contain"
            src={PostImg}
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
            <span className="postLikeCounter text-sm">32 People like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText border-b-2 border-dotted border-gray-300">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
