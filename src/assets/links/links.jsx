import {AiOutlineUser, AiOutlineQuestionCircle} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {RiLogoutCircleLine} from "react-icons/ri";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About Us",
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
];

export const cardInfo = [
  {
    id: 1,
    header: "Matthew",
    text: "I mistakenly recharged 10,000 naira from my bank account, this got me so scared until i heard about Airtime2Cash.It was so amazing that i could convert my airtime to cash and instantly cashed it into my bank account",
  },
  {
    id: 2,
    header: "Michelle",
    text: "I am a student of the University of Ibadan.My friend told me about Aitime2Cash, was so migical as i could sell my airtime and get the monetary value.Airtime@Cash is a Goal!. hurry and get the application on your phone",
  },
  {
    id: 3,
    header: "Tobi",
    text: "I mistakenly recharged 10,000 naira from my bank account, this got me so scared until i heard about Airtime2Cash.It was so amazing that i could convert my airtime to cash and instantly cashed it into my bank account",
  },
  {
    id: 4,
    header: "Naomi",
    text: "I am a student of the University of Ibadan.My friend told me about Aitime2Cash, was so migical as i could sell my airtime and get the monetary value.Airtime@Cash is a Goal!. hurry and get the application on your phone",
  },
  {
    id: 5,
    header: "Tobi",
    text: "I mistakenly recharged 10,000 naira from my bank account, this got me so scared until i heard about Airtime2Cash.It was so amazing that i could convert my airtime to cash and instantly cashed it into my bank account",
  },
  {
    id: 6,
    header: "Simeon",
    text: "I am a student of the University of Ibadan.My friend told me about Aitime2Cash, was so migical as i could sell my airtime and get the monetary value.Airtime@Cash is a Goal!. hurry and get the application on your phone",
  },
];

export const sideBarLinks=[
  {
    id:1,
    icon:<AiOutlineUser size ="1rem"/>,
    text:"Account",
    url:"/edit"
  },
   {
    id:2,
    icon:<FiSettings size ="1rem" />,
    text:"Settings",
    url:"/settings"
  },
   {
    id:3,
    icon:<AiOutlineQuestionCircle size ="1rem"/>,
    text:"Help Center",
    url:"/call-center"
  },
   {
    id:4,
    icon:<RiLogoutCircleLine size ="1rem"/>,
    text:"Logout",
    url:"/logout"
  },

]