import React from "react";
import styled from "styled-components"


function SidebarOptions(props){
    return(
        <SidebarOptionContainer>
            {Icon && <Icon fontSize = "small" style={{padding : 10}}/>}
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