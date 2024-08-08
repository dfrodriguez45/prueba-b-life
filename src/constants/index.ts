import { Product } from "@/types/Product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Xiphone 14 Pro Maxe",
    price: 175.0,
    description:
      "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    rating: 5,
    reviews: 121,
    image: "",
    isFavorite: false,
    isAddedToCart: false,
  },
  {
    id: 2,
    name: "Xiphone 13",
    price: 100.0,
    description:
      "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    rating: 5,
    reviews: 89,
    image: "",
    isFavorite: false,
    isAddedToCart: false,
  },
  {
    id: 3,
    name: "Samsonge Galaxy A53",
    price: 90.0,
    description:
      "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    rating: 5,
    reviews: 121,
    image: "",
    isFavorite: false,
    isAddedToCart: false,
  },
  {
    id: 4,
    name: "Samsonge Galaxy A53",
    price: 90.0,
    description:
      "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    rating: 5,
    reviews: 121,
    image: "",
    isFavorite: false,
    isAddedToCart: false,
  },
];

export const CATEGORIES = [
  {
    id: 1,
    label: "Computer & Laptop",
    icon: "/icons/laptop.svg",
  },
  {
    id: 2,
    label: "Mobile & Phone",
    icon: "/icons/phone.svg",
  },
  {
    id: 3,
    label: "Camera",
    icon: "/icons/camera.svg",
  },
  {
    id: 4,
    label: "TV & Smart Box",
    icon: "/icons/tv.svg",
  },
  {
    id: 5,
    label: "Home Appliance",
    icon: "/icons/home.svg",
  },
  {
    id: 6,
    label: "Accessories",
    icon: "/icons/accessories.svg",
  },
  {
    id: 7,
    label: "Others Categories",
    icon: "/icons/others.svg",
  },
];

export const CATEGORIESLIST = [
  {
    id: 1,
    label: "Computer & Laptop",
    count: 15,
    color: "#F5F5F5",
    selected: false,
  },
  {
    id: 2,
    label: "Mobile & Phone",
    count: 35,
    color: "#AFE638",
    selected: true,
  },
  {
    id: 3,
    label: "Camera Imaging",
    count: 10,
    color: "#5e1ee5",
    selected: false,
  },
  {
    id: 4,
    label: "TV & Smart Box",
    count: 8,
    color: "#F1F1F2",
    selected: false,
  },
  {
    id: 5,
    label: "Home Appliance",
    count: 2,
    color: "#FFE921",
    selected: false,
  },
];

export const SETTINGS_SLIDER = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
