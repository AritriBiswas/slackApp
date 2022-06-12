import React from "react"
import {  Button } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
 import { Link, useNavigate } from "react-router-dom"
 import styled from "styled-components"
 import illust1 from "../assets/workspacepage.png"
 import logo from "../assets/slack-logo-icon.png"

export default function Workspaces() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const { googleSignIn } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
  //const history = useHistory()
  let navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    try{
      
      navigate("/Header")
    }catch(error){
      console.log(error.message);
    }

  }

  


  return (
    <Container>
      
        <Body className="d-flex">
          <img src= {logo}/>
          <h3 style = {{'font-size': '50px'}}className="text-center mb-4">slack</h3>
        </Body>


        <Body2>
          <Body3>
            <h1 style={{padding: '12px 17px 5px 91p'}} className="text-center mb-4">Set up your digital HQ</h1>
            <p style={{padding: '5px 66px -23px 0px'}} className="text-center mb-4">Slack gives your team a home – a place where they can talk and work together. To create a new workspace, click on the button below.</p>
          </Body3>
          <img src={illust1} alt="logo"/>
        </Body2>
          
          <submit  onClick={handleClick} style={{backgroundColor : 'purple', padding:'15px 37px 15px 37px', margin:'7px', color: 'white', 'border-radius': '4px', "font-weight": "bold"}} className="w-100 " type="submit">
              Create a workspace
          </submit>

          <p className="text-center mb-4">By continuing, you’re agreeing to our customer terms of service, user terms of service, privacy policy and cookie policy.</p>
          
          
        
    </Container>
  )
  }

  const Body = styled.div`
    
    display: flex;
    justify-content: center;

    >img{
      height: 50px;
      padding :44px 20px 38px 26px;
    }
  `;

  const Body2 = styled.div`
    display: flex;
  `;

  const Body3 = styled.div`
  display : flex;
  flex-direction : column;
  `;

  const Container = styled.div`
  margin: 100px;
  `