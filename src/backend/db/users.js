import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Avinash",
    lastName: "Prajapati",
    username: "avinashprj",
    password: "Avinashprajapati914@",
    bio: "Be yourself!",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1669571098/IMG_20221126_093420_nsibko.jpg",
    website: "https://avinashprajapati.me/",
    createdAt: "2022-10-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079461/john-doe_gbkuda_d5p0ze.webp",
    website: "https://google.com/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
    website: "https://avinashprajapati.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
    website: "https://avinashprajapati.netlify.app/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "Wes",
    lastName: "Bos",
    username: "wesbos",
    password: "wesBos123@",
    bio: "Aspiring Frontend Engineer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
    website: "https://wesbos.com/",
    createdAt: "2022-01-04T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Alex",
    lastName: "Maxwell",
    username: "alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079687/alex-maxwell_ghtzkg.webp",
    website: "",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
