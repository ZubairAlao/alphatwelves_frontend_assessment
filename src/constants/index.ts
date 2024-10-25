import HomeIcon from "@/assets/icons/header_icons/home.svg";
import EventsIcon from "@/assets/icons/header_icons/solar_calendar-linear.svg";
import SpeakersIcon from "@/assets/icons/header_icons/solar_user-speak-rounded-linear.svg";
import ReportIcon from "@/assets/icons/header_icons/solar_document-linear.svg";
import NotificationIcon from "@/assets/icons/header_icons/bell.svg";
import MessageIcon from "@/assets/icons/header_icons/double-chat-bubble.svg";
import SettingIcon from "@/assets/icons/header_icons/settings-2.svg";

import userCircleIcon from "@/assets/icons/user-circle.svg";


import slideOneImg from "@/assets/images/Slide1.jpg";
import slideTwoImg from "@/assets/images/Slide2.jpg";
import slideThreeImg from "@/assets/images/Slide3.jpg";


export const navHeaders = [
    {
        label: "Home",
        icon: HomeIcon,
        link: "/",
    },
    {
        label: "Events",
        icon:EventsIcon,
        link: "/events",
    },
    {
        label: "Speakers",
        icon: SpeakersIcon,
        link: "/speaker",
    },
    {
        label: "Report",
        icon: ReportIcon,
        link: "/report",
      },
      {
        label: "Notifications",
        icon: NotificationIcon,
        link: "/notification",
      },
      {
        label: "Messages",
        icon: MessageIcon,
        link: "/message",
      },
      {
        label: "settings",
        icon: SettingIcon,
        link: "/setting",
      },    
  ];

  export const footerHeaders = [
    {
      label: "Home",
      icon: HomeIcon,
      link: "/",
    },
    {
        label: "Events",
        icon:EventsIcon,
        link: "/events",
    },
    {
        label: "Speakers",
        icon: SpeakersIcon,
        link: "/speakers",
    },
    {
        label: "Report",
        icon: ReportIcon,
        link: "/report",
      },
      {
        label: "Profile",
        icon: userCircleIcon,
        link: "/profile",
      },
  ];

export const revenueData = [
  { month: "January", revenue: 12000 },
  { month: "February", revenue: 15000 },
  { month: "March", revenue: 13000 },
  { month: "April", revenue: 16000 },
  { month: "May", revenue: 14000 },
  { month: "June", revenue: 17000 },
  { month: "July", revenue: 18000 },
  { month: "August", revenue: 16000 },
  { month: "September", revenue: 19000 },
  { month: "October", revenue: 20000 },
  { month: "November", revenue: 22000 },
  { month: "December", revenue: 24000 },
];

export const newsUpdates = [
  {
      "title": "Latest News & Updates",
      "text": "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.",
      "image": slideOneImg
  },
  {
      "title": "More News & Updates",
      "text": "Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
      "image": slideTwoImg
  },
  {
    "title": "More News & Updates",
    "text": "Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    "image": slideThreeImg
}
]

export const eventsProgram = [
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Marie Collins",
    status: "In Progress",
    date: "2024-01-25",
  },
  {
    title: "Cloud Innovation Summit",
    speaker: "Mr. Daniel Green",
    status: "In Progress",
    date: "2025-11-15",
  },
  {
    title: "Blockchain Revolution Conference",
    speaker: "Ms. Fiona Davis",
    status: "Completed",
    date: "2024-08-10",
  },
  {
    title: "AI in Healthcare Symposium",
    speaker: "Dr. Alice Thompson",
    status: "In Progress",
    date: "2024-12-20",
  },
  {
    title: "Future of Fintech Forum",
    speaker: "Mr. Eric Davis",
    status: "In Progress",
    date: "2025-01-05",
  },
  {
    title: "Data Analytics in Business",
    speaker: "Ms. Jennifer Lee",
    status: "Completed",
    date: "2024-07-05",
  },
  {
    title: "Sustainable Energy Expo",
    speaker: "Dr. Paul Miller",
    status: "Completed",
    date: "2024-10-15",
  },
  {
    title: "Web3 Interfaces Workshop",
    speaker: "Mr. Ahmed Khan",
    status: "In Progress",
    date: "2024-12-18",
  },
  {
    title: "Cybersecurity for Startups",
    speaker: "Dr. Karen Wright",
    status: "In Progress",
    date: "2024-12-29",
  },
  {
    title: "Smart Cities Forum",
    speaker: "Mr. Thomas Evans",
    status: "Completed",
    date: "2024-09-02",
  },
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Robert Cook",
    status: "Completed",
    date: "2024-10-14",
  },
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Robert Cook",
    status: "Completed",
    date: "2024-11-14",
  },
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Robert Cook",
    status: "In Progress",
    date: "2025-01-01",
  },
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Robert Cook",
    status: "In Progress",
    date: "2024-12-01",
  },
  {
    title: "Tech Safari Mixer",
    speaker: "Prof. Robert Cook",
    status: "Completed",
    date: "2024-08-14",
  },
  {
    title: "DevFest",
    speaker: "Mr Kamaldeen",
    status: "Completed",
    date: "2024-10-02",
  },
  {
    title: "Google Developer Meeting",
    speaker: "Prof. Aishat",
    status: "In Progress",
    date: "2025-05-19",
  },
  {
    title: "Polio Vaccine Eradication",
    speaker: "Prof. Kingley Ayelagba",
    status: "In Progress",
    date: "2025-03-12",
  },
  {
    title: "Women EmpowerMent",
    speaker: "Alh. Rukayat Cook",
    status: "Completed",
    date: "2024-02-13",
  },
  {
    title: "Young Shall Grow",
    speaker: "Alh. Bibire",
    status: "Completed",
    date: "2024-01-09",
  },
  {
    title: "Dj AnyMoney Mixer",
    speaker: "Dj. Kansogo",
    status: "In Progress",
    date: "2025-04-21",
  },
  {
    title: "Good Boy Entertainment",
    speaker: "Dj. Festival",
    status: "Completed",
    date: "2024-01-09",
  }
];
