import { Box, Button, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import blogImage from './BloggingWithoutBoundaries.png';

const Component =styled(Box)`
    width:400px;
    margin:auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
  width: 400,
  height: 200,
  display: 'flex',
  margin: 'auto',
  padding: '50px 0 0'
});

   const Wrapper = styled(Box)`
   padding: 25px 35px;
   display: flex;
   flex: 1;
   overflow: auto;
   flex-direction: column;
   & > div, & > button, & > p {
       margin-top: 20px;
   }
   `;   

   const LoginButton = styled(Button)`
   text-transform: none;
   background: black;
   color: #fff;
   height: 48px;
   border-radius: 2px;
`;

const SignupButton = styled(Button)`
   text-transform: none;
   background: #fff;
   color: #2874f0;
   height: 48px;
   border-radius: 2px;
   box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
   color: #878787;
   font-size: 16px;
`;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `

const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};





const Login = () => {

  const imageURL = blogImage;

   const[account,toggleAccount]= useState('login');
   const[signup,setSignup] = useState(signupInitialValues);
   

   const toggleSignUp= () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
   }

   const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });

   }


  return (
    <Component>
      <Box>
      <Image src={imageURL} alt="login" />
      {
        account === 'login' ?
            <Wrapper>
                <TextField variant='standard'  label="Enter username" />
                <TextField variant='standard' label="Enter password" />
                <LoginButton variant='contained'>Login</LoginButton>
                <Text style={{ textAlign:'center'}}>OR</Text>
                <SignupButton onClick={() => toggleSignUp()}>Create an Account</SignupButton>
            </Wrapper> :  
      <Wrapper>
          <TextField variant='standard' onChange={(e) => onInputChange()} name='name' label="Enter Name" />
          <TextField variant='standard' onChange={(e) => onInputChange()} name='username' label="Enter Username" />
          <TextField variant='standard' onChange={(e) => onInputChange()} name='password' label="Enter Password" />
          <SignupButton>Sign Up</SignupButton>
          <Text style={{ textAlign:'center'}}>OR</Text>
          <LoginButton variant='contained' onClick={() => toggleSignUp()}>Already have an Account</LoginButton>
      </Wrapper>
} 
      </Box>
    </Component>  
  )
}

export default Login;
