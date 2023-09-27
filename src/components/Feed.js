import Post from "./Post";
import Share from "./Share";

export default function Feed() {
  return (
    <div className="feed w-1/2 h-[90vh]">
      <div className="feedWrapper p-5">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
