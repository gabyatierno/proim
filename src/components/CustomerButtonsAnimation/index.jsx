import React from "react";
import { Button } from "./styles";

export const CustomerButtonsAnimation = (props) => {
    return (
        <Button deg={props.deg}>
            {props.children}
        </Button>
    );
}