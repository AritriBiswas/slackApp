import React from "react";
import styled from "styled-components"
// import {app, db} from "../firebase"

// import { faCoffee } from "@fortawesome/free-solid-svg-icons"
// import Sidebar from "./Sidebar";

function SidebarOptions(Icon ,title){

    

    return(

        <SidebarOptionContainer>
            {/* {Icon && <Icon fontSize = "small" style={{padding : 10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            ) } */}
        </SidebarOptionContainer>
    );
}

export default SidebarOptions;

const SidebarOptionContainer = styled.div`
display : flex;
font-size: 12px;
align-item: center;
padding-left: 12px;
cursor: pointer;

:hover{
    opacity: 0.9;
    background-color: red;

}


`;

const SidebarOptionChannel = styled.div`

`