/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import { Button } from "@mui/material";
import "./custom-button.scss";

interface CustomButtonProps {
    title: string;
    size?: "small" | "medium" | "large" | undefined;
    outlined?: boolean;
    onClick?: () => void
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    className?: string | ''
    type?: "button" | "reset" | "submit"
    disabled?: boolean
}

const CustomButton = (props: CustomButtonProps): React.JSX.Element => {
    const { title, size, outlined, onClick, color, className, type, disabled } = props;

    return (
        <Button
            variant={outlined === true ? "outlined" : "contained"}
            color={color}
            size={size}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`custom-button ${className}`}
        >
            {title} 
        </Button>
    );
};

export default CustomButton;
