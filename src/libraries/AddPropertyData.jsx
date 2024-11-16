import { IoBed, IoPerson } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { GiWashingMachine, GiCctvCamera, GiDesk, GiBathtub } from 'react-icons/gi';
import { FaParking, FaSwimmingPool, FaTv, FaFirstAid, FaSnowflake, FaFire, FaKey } from 'react-icons/fa';

export const RoomType = [
    {
        id: 1,
        label: "Single Room",
        icon: <IoBed />
    },
    {
        id: 2,
        label: "Sharing Room",
        icon: <FontAwesomeIcon icon={faPeopleRoof} />
    },
    {
        id: 3,
        label: "Bachelor Room",
        icon: <IoPerson />
    }
];

export const AdditionalOffer = [
    {
        label: "Bath Tub",
        icon: <GiBathtub />
    },
    {
        label: "Washing Machine",
        icon: <GiWashingMachine />
    },
    {
        label: "TV",
        icon: <FaTv />
    },
    {
        label: "Workspace",
        icon: <GiDesk />
    },
    {
        label: "Security Cameras",
        icon: <GiCctvCamera />,
    },
    {
        label: "First Aid",
        icon: <FaFirstAid />
    },
    {
        label: "Air Conditioning",
        icon: <FaSnowflake />
    },
    {
        label: "Heating",
        icon: <FaFire />
    },
    {
        label: "Pool",
        icon: <FaSwimmingPool />
    },
    {
        label: "Parking lot",
        icon: <FaParking />
    },
    {
        label: "Self check-in",
        icon: <FaKey />
    },
];
