import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import { GoogleButton } from "react-google-button"
import "./Signin.css"
import logo from "../assets/slack-logo-icon.png"

export default function Signin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { googleSignIn } = useAuth()


  
  const { signin } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  //const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()

    try{
        setError("")
        setLoading(true)
        console.log("create")
        await signin(emailRef.current.value,passwordRef.current.value)
        console.log("create")
        navigate("/Workspaces")
    }catch{
        setError("Failed to signin")
    }
    }

    async function handleGoogleSignIn(e) {
      e.preventDefault();
      try{
        console.log("create")
        await googleSignIn();
        navigate("/Workspaces")
      }catch(error){
        console.log(error.message);
      }
  
    }
  


  return (
    <>
      
        <Body>
          <Portion>
            <img src={logo} alt="logo"/>
            <h4>slack</h4>
          </Portion>
          <Body>
          <h3 className='content'>Sign into Slack</h3>
          
          </Body>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}

          <GoogleButton style={{ margin : 'auto'}}className="content" onClick = {handleGoogleSignIn}>Continue with Google</GoogleButton>
          <p className="content">OR</p>

        <FormBody>
          <form className="content" onSubmit={handleSubmit}>
            {/* <Form.Group id="email"> */}
              {/* <Form.Label></Form.Label> */}
              <input className="content" type="email" ref={emailRef} required placeholder="name@work.com" />
            {/* </Form.Group> */}
            <input id="password"/>
              <label className="content">Password</label>
              <input className='content' type="password" ref={passwordRef} required />
            {/* </Form.Group> */}
            
            
            <submit className='content' disabled={loading} style={{backgroundColor : 'purple',margin:"20px", padding:'3px'}} 
             type="submit">
              Sign in with Email
            </submit>
          </form>
          </FormBody>
       
      
      <div style={{ padding: "20px"}} className='content'>
        Already using Slack? 
        <div className='content'>
          <Link to="/login">Sign In to an existing workspace</Link>
        </div>
      </div>
      
      </Body>
    </>
  )
  }

const newLocal = `
     display:flex;
    margin: auto;
    justify-content: center;


    >img {
      height: 40px;
      padding : 10px;

    }
  `
  const Portion = styled.divnewLocal;

  const Body = styled.div`
    text-align : center;
    
`;
const FormBody = styled.div`
margin : auto;
width : 178px;
`;




