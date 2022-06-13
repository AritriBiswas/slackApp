import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components"
import Sidebar from "./Sidebar"
import SidebarOption from "./SidebarOption";
import { faUser } from "@fortawesome/free-solid-svg-icons"


function Header(){
    return(

        <>
        <HeaderContainer style={{'backgroundColor' : "rgb(66, 1, 66)"}}>
            <FontAwesomeIcon style={{color:'white'}} icon={faUser}></FontAwesomeIcon>
            {/* <p style={{color:"black"}}></p> */}
            <HeaderLeft style={{'backgroundColor' : "rgb(66, 1, 66)"}}>
                
            </HeaderLeft>

            <HeaderSearch>
                <input placeholder="Search"/>
            </HeaderSearch>

            <HeaderRight style={{'backgroundColor' : "rgb(66, 1, 66)"}}>

            </HeaderRight>
        </HeaderContainer>
            <Sidebar/>
            

        
        </>
    );
}

export default Header;
const HeaderContainer = styled.div`
     display : flex;
     padding : 10px 0;
    position: fixed;
     width : 100%;
     align-items : center;
     justify-content : space-between;
     bakground-color:rgb(66, 1, 66);
     
    
`;

const HeaderLeft = styled.div`
display : flex;
    

    flex : 0.3;
    baclkground-color : rgb(66, 1, 66);
     align-items: center;
    display: flex;
    padding : 0 50px;
    margin: 0px 0px 0px -7px;
`;

const HeaderSearch = styled.div`
display: flex;
flex:0.4;
opacity : 1;
border-radius : 9px;
border: 2px solid rgb(218, 136, 218);
align-item: center;
 text-align: center;
 justify-content: center;
 background-color: rgb(83, 1, 83);

 >input{
    background-color:transparent;
    border:none;
 }
`;

const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
`;

// const HeaderAvatar = styled(Avatar)`

// `;