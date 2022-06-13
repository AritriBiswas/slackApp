import React from "react";
import styled from "styled-components"
import { storage,db } from "../firebase"
// import FontawesomeIcons from "./FontawesomeIcons";
// import { FontawesomeIcons } from "@fortawesome/react-fontawesome"
import { faCoffee, faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import SidebarOption from "./SidebarOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordIcon"


function Sidebar(){

    async function handleClick(e) {
        e.preventDefault();
        try{
          
        //   navigate("/Header")
        }catch(error){
          console.log(error.message);
        }
    
      }

    return(
        <SidebarContainer style={{"backgroundColor": "rgb(66, 1, 66)"}}>
            <SidebarHeader>
                <Sidebarinfo>
                    
                    <h2>GLUG</h2>
                    <h3>Aritri Biswas</h3>
                
                </Sidebarinfo>
            </SidebarHeader>


        <Body>
            <Body2>
            <FontAwesomeIcon  style={{padding:"12px 0px 0px 11px"}} icon = {faCoffee} title="coffee time"></FontAwesomeIcon>
            <p style={{padding: '12px', margin:"-2px 0px 0px -2px", cursor:"pointer"}}>Browse Slack</p>
            </Body2>
            
            <Body2>
                
                    <FontAwesomeIcon style={{padding:"12px 0px 0px 11px"}} icon = {faAngleRight} ></FontAwesomeIcon>
                    <p style={{padding: '12px', margin:"-2px 0px 0px -2px", cursor:"pointer"}}>Channels</p>
                    </Body2>

                    <Body2>
                    <FontAwesomeIcon  style={{padding:"12px 0px 0px 11px"}} icon = {faPlus} ></FontAwesomeIcon>
                    <p style={{padding: '12px', margin:"-2px 0px 0px -2px", cursor:"pointer"}}>Add Channel</p>
                    </Body2>
            

            </Body>

        <hr></hr>

        

            


            

        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
    backgroundColor: rgb(66, 1, 66);
    flex: 0.3;
    max-width: 250px;
    min-height: 800px;
    // border-top: 1px solid black;
    color : white;
    margin:-8px 90px 0px -8px;


`;

const SidebarHeader = styled.div`
dispaly: flex;
// border-bottom : 1px solid black;
padding: 13px;

`;


const Sidebarinfo = styled.div`
flex: 1;
>h2{
    font-size: 15px;
    font-weight : 900;
    margin:39px 41px 6px 1px;
}
 
>h3{
    display:flex;
    font-size: 13px;
    font-weight: 400;
    align-items: ceter;
}
`;

const Body = styled.div`
   

// display: flex;
// flex-direction: row;



`;

const Body2 = styled.div`
    display:flex;

    :hover{
        backgroundColor: red;
    }
`;