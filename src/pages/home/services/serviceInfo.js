import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { shades } from "../../../theme/theme";

const iconStyle = {
  color: shades.info[300],
  fontSize: "3rem",
};

export const serviceList = [
  {
    serviceName: "Fast and Free Delivery",
    serviceIcon: <LocalShippingOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Offer free and fast shipping to customers who purchase laptops from your website.",
  },
  {
    serviceName: "Help When You Need It",
    serviceIcon: <HeadsetMicOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      " Provide round-the-clock customer service support to assist customers with their laptop purchases and technical issues.",
  },
  {
    serviceName: "Peace of Mind Guaranteed",
    serviceIcon: <GppGoodOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Offer an extended warranty on laptops to give customers peace of mind and protection against potential damages.",
  },
  {
    serviceName: "No Hassle Returns",
    serviceIcon: <HistoryOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Allow customers to return laptops easily if they are not satisfied with their purchase or if there are any issues with the product.",
  },
  {
    serviceName: "Tailored to You",
    serviceIcon: <PersonOutlineOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Offer personalized laptop recommendations based on customers' preferences, needs, and usage patterns.",
  },
  {
    serviceName: "Flexible Payment Plans",
    serviceIcon: <CreditCardOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Provide financing options to help customers purchase laptops without having to pay the full price upfront.",
  },
  {
    serviceName: "Find the Best Laptop",
    serviceIcon: <CompareArrowsOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Allow customers to compare different laptop models side-by-side to help them make informed purchase decisions.",
  },
  {
    serviceName: "Earn While You Shop",
    serviceIcon: <CardGiftcardOutlinedIcon sx={iconStyle} />,
    serviceExplanation:
      "Implement a rewards program that allows customers to earn points or discounts for every laptop purchase they make on your website.",
  },
];
