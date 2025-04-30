import userIcon from "./assets/svg/fi_user.svg";
import bookIcon from "./assets/svg/book_light.svg";
import userCheck from "./assets/svg/fi_user-check.svg";
import box from "./assets/svg/fi_box.svg";
import setting from "./assets/svg/setting.svg";
import helpCircle from "./assets/svg/fi_help-circle.svg";

export const data = [
  ...Array.from({ length: 60 }, (_, i) => {
    const book_status = ["Confirmed", "Cancelled", "Vouchered", "Travelled"][
      Math.floor(Math.random() * 4)
    ];

    return {
      status: Math.random() < 0.5 ? "M" : "A",
      agent: {
        title: "ABC Pvt. Ltd",
        subTitle: "Acc. Manager - Dristi Yadav",
      },
      source: Math.random() < 0.5 ? "API" : "Not API",
      id: `AB_US_${(1 + i).toString().padStart(3, "0")}`,
      date: "03-02-2025",
      travel_date: "03-02-2025",
      pax_name: {
        name: "Rahul Sharma",
        more: "2A, 2C [4yrs, 8yrs",
      },
      type: Math.random() < 0.5 ? "boat" : "car",
      book_status,
      city: "Melbourne",
    };
  }),
];

export const mainMenu = [
  {
    title: "User Management",
    route: "/management",
    icon: userIcon,
    dropDown: true,
  },
  {
    title: "Booking",
    route: "/booking",
    icon: bookIcon,
  },
  {
    title: "Agent",
    route: "/agent",
    icon: userCheck,
  },
  {
    title: "Supplier",
    route: "/supplier",
    icon: box,
  },
  {
    title: "Product",
    route: "/product",
    icon: box,
    dropDown: true,
  },
];

export const secMenu = [
  {
    title: "Settings",
    route: "/settings",
    icon: setting,
  },
  {
    title: "Help",
    route: "/help",
    icon: helpCircle,
  },
];
