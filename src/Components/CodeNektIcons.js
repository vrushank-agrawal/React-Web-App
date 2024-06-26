// ----------------- Material UI Icons -----------------
import AddIcon from '@mui/icons-material/Add';

const DEFAULT_MUI_SIZE = "medium";

// export const CodeNektAdd = (props) => {
//     return (
//         <AddIcon
//             fontSize={props.size ?? DEFAULT_MUI_SIZE}
//             color={props.color}
//         />
//     )
// }

// -------------------- React Icons --------------------

import { AiOutlineSearch } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GiBeveledStar } from "react-icons/gi";
import { TbHexagons } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsChevronLeft } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoCarSportSharp } from 'react-icons/io5';
import { BsBellFill } from 'react-icons/bs';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineEuroCircle } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { GrMap } from 'react-icons/gr';
import { AiOutlineQuestion } from 'react-icons/ai';
import { IoSettings } from 'react-icons/io5';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import {MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { FaRegSnowflake } from 'react-icons/fa';

import { BLACKCN, WHITECN } from '../utils/colors';
const DEFAULT_SIZE = 15;

export const CodeNektHiver = (props) => {
    return (
        <FaRegSnowflake size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektEte = (props) => {
    return (
        <BiSun size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektSearchIcon = (props) => {
    return (
        <AiOutlineSearch size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektCross = (props) => {
    return (
        <ImCross size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektHexagons = (props) => {
    return (
        <TbHexagons size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektStar = (props) => {
    return (
        <GiBeveledStar size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektAdd = (props) => {
    return (
        <MdAdd size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektEdit = (props) => {
    return (
        <FiEdit2 size={props.size ?? DEFAULT_SIZE/1.6}/>
    )
}

export const CodeNektDoubleArrowRight = (props) => {
    return (
        <MdKeyboardDoubleArrowRight size={props.size ?? DEFAULT_SIZE} color={props.color ?? WHITECN} />
    )
}

export const CodeNektDoubleArrowLeft = (props) => {
    return (
        <MdKeyboardDoubleArrowLeft size={props.size ?? DEFAULT_SIZE} color={props.color ?? WHITECN} />
    )
}

export const CodeNektPersonFill = (props) => {
    return (
        <BsFillPersonFill size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektCar = (props) => {
    return (
        <IoCarSportSharp size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektBellFill = (props) => {
    return (
        <BsBellFill size={props.size ?? DEFAULT_SIZE} style={{color: props.color}} />
    )
}

export const CodeNektDocument = (props) => {
    return (
        <TiDocumentText size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektEuro = (props) => {
    return (
        <AiOutlineEuroCircle size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektLeaf = (props) => {
    return (
        <BiLeaf size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektMap = (props) => {
    return (
        <GrMap size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektQuestion = (props) => {
    return (
        <AiOutlineQuestion size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektSettings = (props) => {
    return (
        <IoSettings size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektSignIn = (props) => {
    return (
        <FaSignInAlt size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektSignOut = (props) => {
    return (
        <FaSignOutAlt size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektDashboard = (props) => {
    return (
        <AiOutlineDashboard size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektThreeDots = (props) => {
    return (
        <BsThreeDots size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektLeft = (props) => {
    return (
        <BsChevronLeft size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektProfile = (props) => {
    return (
        <CgProfile
            size={props.size ?? DEFAULT_SIZE}
            style={props.style}
        />
    )
}

export const CodeNektEye = (props) => {
    return (
        <ImEye size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektEyeBlocked = (props) => {
    return (
        <ImEyeBlocked size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektCheckCircle = (props) => {
    return (
        <BsCheckCircle size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektDelete = (props) => {
    return (
        <RiDeleteBin6Line size={props.size ?? DEFAULT_SIZE} />
    )
}

export const CodeNektBell = (props) => {
    return (
        <CiBellOn size={props.size ?? DEFAULT_SIZE} />
    )
}
