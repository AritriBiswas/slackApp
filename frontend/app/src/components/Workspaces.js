import React from "react"
import {  Button, Card } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link } from "react-router-dom"


export default function Signup() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const { googleSignIn } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
  //const history = useHistory()

  


  return (
    <>
      
        <Card.Body className="d-flex">
          <h3 className="text-center mb-4">slack</h3>
          <h1 className="text-center mb-4">Create a new Slack workspace</h1>
          <p className="text-center mb-4">Slack gives your team a home – a place where they can talk and work together. To create a new workspace, click on the button below.</p>
          <Button style={{backgroundColor : 'purple', padding:'3px'}} className="w-100 " type="submit">
              Sign up
          </Button>

          <p className="text-center mb-4">By continuing, you’re agreeing to our customer terms of service, user terms of service, privacy policy and cookie policy.</p>

          
        </Card.Body>
    </>
  )
  }