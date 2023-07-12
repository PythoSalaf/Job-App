import { BiSearch, BiCloudUpload, BiUser, BiSolidMessage } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { icon } from "../Assets";


export const OfferData = [
    {
        id: 1,
        avatar: icon,
        job: "frontend developer",
        company: "goggle",
        salary: 2500,
        location: "united state of america",
    },
    {
        id: 2,
        avatar: icon,
        job: "backend developer",
        company: "twitter",
        salary: 3000,
        location: "united kingdom",
    },
    {
        id: 3,
        avatar: icon,
        job: "ui/ux designer",
        company: "goggle",
        salary: 2000,
        location: "united state of america",
    },
    {
        id: 4,
        avatar: icon,
        job: "data analytist",
        company: "amazon",
        salary: 2000,
        location: "united state of america",
    }
]

export const AlwaysData = [
    {
        id: 1,
        avatar: <HiArrowTrendingUp color= "#fff" size={30}  />,
        content: "enhance your career",
        text: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        id: 2,
        avatar: <BiSolidMessage  color= "#fff" size={30} />,
        content: "communicate with others",
        text: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        id: 3,
        avatar: <IoMdCheckmarkCircleOutline  color= "#fff" size={30} />,
        content: "find jobs with good career",
        text: "Lorem ipsum dolor sit amet consectetur."
    },
]

export const StepData = [
    {
        id: 1,
        title: "search job",
        icon: <BiSearch />,
        content: "First You've to search for job here",
    },
    {
        id: 2,
        title: "cv/resume",
        icon: <BiCloudUpload />,
        content: "You've to upload your cv/resume here",
    },
    {
        id: 3,
        title: "Create account",
        icon: <BiUser  />,
        content: "You've to have an account with us",
    },
    {
        id: 4,
        title: "Apply them",
        icon: <GiCheckMark />,
        content: "Start applying for jobs that match your resume/cv",
    },
]