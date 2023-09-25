import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
