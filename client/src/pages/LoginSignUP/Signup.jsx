import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { Button, Grid, TextField } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import signup from "../../static/images/images/SignUp_image.jpg";
import axios from "axios";
import { publicRequest } from "../../requestMethods";
// import useNavigate from 'react-dom';
function Signup() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cnfPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   console.log(user);
//   const register = () => {
//     const { name, email, password, cnfPassword } = user;
//     if (name && email && password && password === cnfPassword) {
//       axios
//         .post("http://localhost:5000/api/auth/register", user)
//         .then((res) => console.log(res));
//     } else {
//       alert("invalid");
//     }
//   };

const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword:""
});
const [error, setError] = useState("");
// const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:5000/api/auth/register";
        const { data: res } = await axios.post(url, data);
        // navigate("/login");
        console.log(res.message);
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};

  return (
    <div className='login-container'>
      <div className='login-content'>
        <Grid container columns={12}>
          <Grid item lg={6} md={6} sm={12} className='img-grid'>
            <div className='login-img'>
              <img src={signup} alt='' />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} className='form-grid'>
            <div className='login-form-container'>
              <p className='link'>
                <a href='#'>Back to home page</a>
              </p>
              <div className='login-form'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                  <div className='form-login'>
                    <label className='login-label'>Name</label>
                    <TextField
                      id='name'
                      name='name'
                      value={data.name}
                      type='text'
                      className='form-control'
                      label='Name'
                      variant='outlined'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-login'>
                    <label className='login-label'>Email Address</label>
                    <TextField
                      id='email'
                      name='email'
                      value={data.email}
                      type='email'
                      className='form-control'
                      label='Email Address'
                      variant='outlined'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-login'>
                    <label className='login-label'>Password</label>
                    <TextField
                      id='password'
                      name='password'
                      value={data.password}
                      type='password'
                      className='form-control'
                      label='Password'
                      variant='outlined'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-login'>
                    <label className='login-label'>Confirm Password</label>
                    <TextField
                      id='confPass'
                      name='cnfPassword'
                      value={data.cnfPassword}
                      type='password'
                      className='form-control'
                      label='Confirm Password'
                      variant='outlined'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-login'>
                    <Button variant='contained' type="submit">
                      Sign up &nbsp; <TrendingFlatIcon />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
