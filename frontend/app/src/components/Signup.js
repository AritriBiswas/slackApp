import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import { GoogleButton } from "react-google-button"

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
      console.log("Signup")
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      console.log("handlesubmit")
      await signup(emailRef.current.value, passwordRef.current.value)
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
      
        <Card.Body>
          <h4 className="text-center mb-4">slack</h4>
          <h3 className="text-center mb-4">First of all, Enter your Email address</h3>
          <p className="text-center mb-4">We suggest using the email you use at work</p>

          {error && <Alert variant="danger">{error}</Alert>}

          <GoogleButton className="g-btn d-flex align-item-center mb-4" onClick = {handleGoogleSignIn}>Continue with Google</GoogleButton>
          <p className="text-center">OR</p>

        
          <Form className="mb-4" onSubmit={handleSubmit}>
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
            </Form>
            <Button disabled={loading} style={{backgroundColor : 'purple', padding:'3px'}} className="w-100 " type="submit">
              Sign up
            </Button>
          
        </Card.Body>
      
      <div className="w-100 text-center mt-2">
        Already using Slack? 
        <div className="text-center">
          <Link to="/Signin">Sign In to an existing workspace</Link>
        </div>
      </div>
    </>
  )
  }