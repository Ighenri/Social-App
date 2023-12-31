import Post from "./Post";
import Share from "./Share";
import { Posts } from "../dummyData";

export default function Feed() {
  return (
    <div className="feed flex-grow h-[90vh]">
      <div className="feedWrapper p-5">
        <Share />
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
