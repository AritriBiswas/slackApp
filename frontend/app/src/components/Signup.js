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
          <form className="mb-4"  onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label></Form.Label>
              <Form.Control type="email" ref={ emailRef } required placeholder="name@work.com" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={ passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            
            <Button disabled={loading} style={{backgroundColor : 'purple', padding:'3px',margin:'10px' ,"border-radius": "5px" , color:"white" }} className="w-100 " type="submit">
              Sign up
            </Button>
           
          </form>
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
    width : 178px;
  `;

  const CardBody = styled.div`
    font-family : 
  `
  
  