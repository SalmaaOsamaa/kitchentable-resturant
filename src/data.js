// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import Completemenuimage from "../src/assets/img/menu/completemenu.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";
import Videobg from "../src/assets/img/hero/video.mp4";
export const navData = [
  { href: "/", name: "home" },
  { href: "/", name: "about" },
  { href: "/", name: "menu" },
  { href: "/", name: "team" },
  { href: "/", name: "testimonials" },
  { href: "/", name: "book a table" },
  { href: "/", name: "contact" },
];

export const heroData = {
  pretitle: "It's not just food it's an experience",
  title: "Kitchen Table",
  subtitle:
    "Good choice. We are the best at what we do and we will not disappoint you! Enjoy your meal.",
  btnText: "Find out more",
  backVideo: Videobg,
};

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "Kitchen table",
  subtitle:
    "Our Barbecue At Kitchen Table, we pride ourselves on using all local, seasonal, ingredients, including pasture-raised meat from Porter Road Butcher to make our Appalachian heritage inspired barbecue. Our meats are dry-rubbed and smoked with native Tennessee cherry until tender and juicy. No dry meat here. All sides are handmade in small batches using locally grown produced",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "Kitchen Table top dishes for you !",
  subtitle: "view complete menu to check our plates",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Obe Ata Soup",
      price: "85 EGP",
      description:
        "African tomato soup, African red pepper stew, buka stew, red stew, or even another name. Along with Ata Din Din, also known as Red Pepper sauce.",
    },
    {
      image: MenuImg2,
      name: "English breakfast",
      price: "110 EGP",
      description:
        "The english breakfast consists of bacon, fried egg, sausage, mushrooms, baked beans, toast, and grilled tomatoes.",
    },
    {
      image: MenuImg3,
      name: "Baked Salmon dish",
      price: "350 EGP",
      description:
        " Baked Salmon with a sweet and tangy Buttery Honey Mustard Sauce",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "90 EGP",
      description:
        "A hamburger patty, grilled to perfection, is nestled with refried beans inside a freshly rolled flour tortilla. ",
    },
  ],
};
export const completemenuData = {
  pretitle: "Our menu",
  title: "Kitchen table",
  subtitle:
    "What is fresh & nice that morning at the market is what you'll find on our daily changing menu.",
  btnTexts: [
    { id: "1", btnname: "KitchenTable menu" },
    { id: "2", btnname: "Wine List" },
    { id: "3", btnname: "Dessert menu" },
    { id: "4", btnname: "Packages and offers" },
  ],
  image: Completemenuimage,
};

export const teamData = {
  pretitle: "our story",
  title: "how we started",
  sub1: " Situated in San Francisco's historic Jackson Square, Lindsay and Chef Michael Tusk's celebrated Kitchen table features Californian contemporary cuisine with Italian influences. Kitchen table serves nightly-changing tasting menus highlighting the restaurant's unique partnership with Fresh Run Farm where Michael and third-generation owner Peter Martinelli plan the plantings in the singular microclimate of Bolinas each season. ",
  sub2: " Chef Michael Tusk was named “Best Chef: Pacific” by the James Beard Foundation in 2011. kitchen table was awarded its third Michelin star in 2017 and holds four stars from the San Francisco Chronicle. Kitchen table is a proud member of Relais & Châteaux, an association of the world's most celebrated restaurants and luxury hotels. In 2020, kitchen table was one of the first recipients in the country to be awarded a Green Star from Michelin for its work towards sustainability and biodiversity. ",
  name: "Chef Michael Tusk",
  occupation: "owner of kitchen table",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
    ],
  },
};
