import React, { useRef, useState } from "react"
import { Form, Button,  Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link,useNavigate} from "react-router-dom"
import { GoogleButton } from "react-google-button"
import styled from "styled-components"
import illust2 from "../assets/slack-logo-icon.png"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const { googleSignIn } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  //const history = useHistory()

  async function handleSubmit(e) {

    e.preventDefault()
    

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("unmatch password")
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      console.log("handlesubmit")
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log("create")
      navigate("/Workspaces")
      

      
    } catch {
      setError("Failed to create an account")

    }
   

    setLoading(false)
  }

  async function handleGoogleSignIn(e) {
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/Workspaces")
    }catch(error){
      console.log(error.message);
    }

  }


  return (
    <>
      
        <CardBody>
          <Body>
            <img src={illust2}/>
            <h4 style={{"font-size": "30px" }}>slack</h4>
          </Body>
          <Body2>
          <h3 style={{"font-size": "40px" }}>First of all, Enter your Email address</h3>
          <p className="text-center mb-4">We suggest using the email you use at work</p>
          </Body2>
          {error && <Alert variant="danger">{error}</Alert>}
        
          <GoogleButton style = {{margin :'auto' }} className="g-btn d-flex align-item-center mb-4" onClick = {handleGoogleSignIn}>Continue with Google</GoogleButton>
          <p style={{ 'text-align' : 'center'}}>OR</p>

        <Formbody>
          
            <form id="email">
              
              <input style={{width: '260px'}} type="email" ref={ emailRef } required placeholder="name@work.com" />
            </form>
            <form id="password">
              <label>Password</label>
              <input style={{width: '260px'}} type="password" ref={ passwordRef} required />
            </form>
            <form id="password-confirm">
              <label>Password Confirmation</label>
              <input style={{width: '260px'}} type="password" ref={passwordConfirmRef} required />
            </form>
            
            <submit onSubmit={handleSubmit} disabled={loading} style={{backgroundColor : 'purple', padding:'12px',margin:' 14px 0px 34px 0px' ,"border-radius": "5px" , color:"white" }} type="submit">
              Sign up
            </submit>
           
          
        </Formbody>
          
        
        <div className="w-100 text-center mt-2" style={{"text-align":"center", padding: '10px'}}>
        Already using Slack? 
        <div className="text-center">
          <Link to="/Signin">Sign In to an existing workspace</Link>
        </div>
      </div>
      </CardBody>
    </>
  )
  }

  const Body = styled.div`
  display: flex;
  margin: auto;
    justify-content : center;

    >img {
      height: 50px;
      padding : 34px 14px 3px 14px;

    }

    

  `;

  const Body2 = styled.div`
  text-align : center;
  `


  const Formbody = styled.div`
    margin : auto;
    width : 270px;

    // >input{
    //   display:flex;
    //   align-item: center;
    // }

    >submit{
      display: flex;
      margin : 60px 59px 95px 101px;
      justify-content: center;
      cursor: pointer;
    }
  `;

  const CardBody = styled.div`
    font-family : 
  `
  
  