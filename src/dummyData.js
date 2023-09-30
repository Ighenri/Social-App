import Post1 from "./assets/post/1.jpeg";
import Post2 from "./assets/post/2.jpeg";
import Post3 from "./assets/post/3.jpeg";
import Post4 from "./assets/post/4.jpeg";
import Post5 from "./assets/post/5.jpeg";
import Post6 from "./assets/post/6.jpeg";
import Post7 from "./assets/post/7.jpeg";
import Post8 from "./assets/post/8.jpeg";
import Post9 from "./assets/post/9.jpeg";
import Post10 from "./assets/post/10.jpeg";
import ProfilePic1 from "./assets/person/7.jpeg";
import ProfilePic2 from "./assets/person/2.jpeg";
import ProfilePic3 from "./assets/person/3.jpeg";
import ProfilePic4 from "./assets/person/4.jpeg";
import ProfilePic5 from "./assets/person/5.jpeg";
import ProfilePic6 from "./assets/person/6.jpeg";
import ProfilePic7 from "./assets/person/7.jpeg";
import ProfilePic8 from "./assets/person/8.jpeg";
import ProfilePic9 from "./assets/person/9.jpeg";
import ProfilePic10 from "./assets/person/10.jpeg";

// Note, the above Posts were imported and save with the property name photo in the Post array.This is the same thing done with the profilepic
export const Users = [
  {
    id: 1,
    profilePicture: ProfilePic1,
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: ProfilePic2,
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: ProfilePic3,
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: ProfilePic4,
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: ProfilePic5,
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: ProfilePic6,
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: ProfilePic7,
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: ProfilePic8,
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: ProfilePic9,
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: ProfilePic10,
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: Post1,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: Post2,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 10,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: Post3,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: Post4,
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: Post5,
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: Post6,
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: Post7,
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: Post8,
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: Post9,
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: Post10,
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
