import React from "react";
import styled from "styled-components"


function Header(){
    return(
        <HeaderContainer style={{'background-color' : "purple"}}>
            <p style={{color:"black"}}>hello there</p>
            <HeaderLeft style={{'background-color' : "purple"}}>
                {/* <h1>hello</h1>
                <h2>hello there</h2> */}
            </HeaderLeft>

            <HeaderSearch>
                <input placeholder="Search"/>
            </HeaderSearch>

            <HeaderRight style={{'background-color' : "blue"}}>

            </HeaderRight>
        </HeaderContainer>

        // <div>Hello</div>

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
     bakground-color: purple;
     
    
`;

const HeaderLeft = styled.div`
     display : flex;
    

    flex : 0.3;
    baclkground-color : blue;
     align-items: center;
    display: flex;
    padding : 0 50px;
     margin-left : 20px;
`;

const HeaderSearch = styled.div`
display: flex;
flex:0.4;
opacity  1;
border-radius : 6px;
align-item: center;
 text-align: center;
 justify-content: center;
 

`;

const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

`

// const HeaderAvatar = styled(Avatar)`

// `;