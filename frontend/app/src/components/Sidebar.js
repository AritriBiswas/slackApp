import React from "react";
import styled from "styled-components"
import SidebarOption from "./SidebarOption";


function Sidebar(){
    return(
        <SidebarContainer>
            <SidebarHeader>
                <Sidebarinfo>
                    <h2>GLUG</h2>
                    <h3>Aritri</h3>
                </Sidebarinfo>
            </SidebarHeader>



        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
background-color: blue;
flex: 0.3;
max-width: 260px;
border-top: 1px solid black;

margin-top: 60px;


`;

const SidebarHeader = styled.div`
dispaly: flex;
border-bottom : 1px solid black;
padding: 13px;

`;


const Sidebarinfo = styled.div`
flex: 1;
>h2{
    font-size: 15px;
    font-weight : 900;
    margin-bottom : 5px;
}

>h3{
    display:flex;
    font-size: 13px;
    font-weight: 400;
    align-items: ceter;
}
`