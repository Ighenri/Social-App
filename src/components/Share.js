import Proile from "../assets/person/1.jpeg";
import {
  Collections,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share h-36 w-full">
      <div className="shareWrapper p-2">
        <div className="shareTop flex">
          <img
            src={Proile}
            alt=""
            className="shareProfile h-8 w-8 object-cover rounded-full cursor-pointer mr-3"
          />
          <input
            type="text"
            placeholder="What's in your mind Henry?"
            className="shareInput w-3/4 pl-2 outline-none"
          />
        </div>
        <hr className="my-4 mb-5 ml-4 border border-gray-300" />
        <div className="shareBottom flex justify-around items-center">
          <div className="shareOptions flex items-center">
            <div className="shareoption mr-4 cursor-pointer">
              <Collections className="mr-1 text-orange-400" />
              <span className="shareoptionText font-medium">
                Photo or Video
              </span>
            </div>
            <div className="shareOption mr-4 cursor-pointer">
              <Label className="mr-1 text-indigo-400" />
              <span className="shareoptionText font-medium">Tag</span>
            </div>
            <div className="shareOption mr-4 cursor-pointer">
              <LocationOn className="mr-1 text-blue-400" />
              <span className="shareoptionText font-medium">Location</span>
            </div>
            <div className="shareOption mr-4 cursor-pointer">
              <EmojiEmotions className="mr-1 text-yellow-400" />
              <span className="shareoptionText font-medium">Feelings</span>
            </div>
          </div>
          <button className="bg-green-700 text-white py-1 px-4 rounded-lg text-sm border-none">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
