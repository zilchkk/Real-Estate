import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";

const data = [
  {
    icon: <HiShieldCheck />,
    heading: "What is an Accordion?",
    detail:
      "An accordion is a UI component that allows content to expand and collapse, making it easier to manage large amounts of information.",
  },
  {
    icon: <MdCancel />,
    heading: "How should I use it ?",
    detail:
      "To use an accordion, import the component into your React project, and pass the appropriate props for the icon, heading, and detail.",
  },
  {
    icon: <MdAnalytics />,
    heading: "What are the features?",
    detail:
      "The accordion component supports toggling between open and closed states and can contain any type of content in the detail section.",
  },
];


export default data;