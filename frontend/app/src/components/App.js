
import React from "react"
import Signup from "./Signup"
import Signin from "./Signin"
//import Workspaces from "./Workspaces"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router,  Route,Routes } from "react-router-dom"
//import Dashboard from "./Dashboard"
//import Login from "./Login"
//import PrivateRoute from "./PrivateRoute"
//import ForgotPassword from "./ForgotPassword"
//import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" element={<Signup/>} />
              
              <Route path="/signin" element={<Signin/>} />
              {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App