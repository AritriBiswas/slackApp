import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import { GoogleButton } from "react-google-button"

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
      
        <Card.Body>
          <h4 className="text-center mb-4">slack</h4>
          <h3 className="text-center mb-4">Sign into Slack</h3>
          

          {error && <Alert variant="danger">{error}</Alert>}

          <GoogleButton className="g-btn d-flex align-item-center mb-4" onClick = {handleGoogleSignIn}>Continue with Google</GoogleButton>
          <p className="text-center">OR</p>

        
          <Form className="mb-4" onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label></Form.Label>
              <Form.Control type="email" ref={emailRef} required placeholder="name@work.com" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            
            
            <Button disabled={loading} style={{backgroundColor : 'purple', padding:'3px'}} className="w-100 " type="submit">
              Sign in with Email
            </Button>
          </Form>
          
        </Card.Body>
      
      <div className="w-100 text-center mt-2">
        Already using Slack? 
        <div className="text-center">
          <Link to="/login">Sign In to an existing workspace</Link>
        </div>
      </div>
    </>
  )
  }