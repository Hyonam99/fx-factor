import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./quick-action.scss";

const actions = [
    {
        icon: (
            <Link to="mailto:trade.fxfactor@gmail.com">
                <IoMailOutline size={20} />
            </Link>
        ),
        name: "email"
    },
    {
        icon: (
            <Link to="tel:08100905654">
                <MdOutlineWifiCalling3 size={20} />
            </Link>
        ),
        name: "call"
    },
    {
        icon: (
            <Link to="https://wa.link/6qt9k3">
                <FaWhatsapp size={20} />
            </Link>
        ),
        name: "message"
    }
];

const QuickAction = () => {
    return (
        <Box sx={{ height: 12, transform: "translateZ(0px)" }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: "absolute", bottom: 0, right: 8 }}
                className="quick-action"
                icon={<RiCustomerService2Fill size={22} />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        className="quick-actions-buttons"
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};

export default QuickAction;
