import React from 'react';
import img1 from './Images/logo.png';
import { Link } from 'react-router-dom';

function Login(){
    return(
        
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 300px;
              margin: 100px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            input[type="text"],
            input[type="password"],
            input[type="submit"] {
              width: 100%;
              padding: 10px;
              margin: 5px 0;
              border: 1px solid #ccc;
              border-radius: 3px;
              box-sizing: border-box;
            }
            input[type="submit"] {
              background-color: #4caf50;
              color: #fff;
              cursor: pointer;
            }
            input[type="submit"]:hover {
              background-color: #45a049;
            }
            .new-user {
              margin-top: 10px;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .logo img {
              width: 200px;
            }
            label {
                text-align: left;
                display: block;
                }
            footer {
              position: absolute;
              bottom: 0;
              width: 100%;
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 2px 0;
              font-size: 9px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="logo">
            <img src={img1} alt="Logo" style={{ userSelect: 'none', cursor: 'text' }} />
          </div>
          <form action="home" method="GET">
          <label htmlFor="username" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
            <label htmlFor="username" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            <input type="submit" value="Sign In" />
          </form>
          <div className="new-user">
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>New User? <a href="#">Sign Up</a></p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Forgot Password? <a href="#">Reset Password</a></p>
          </div>
        </div>
        <footer>
          <p>
            &copy; <b>Turn-Key Cloud Platform for Academia, Research & Enterprises</b>
            <br />
            +91 9008488882 | cloud@pinakastra.com | www.pinakastra.com
            <br />
            ©2023 Pinakastra, Inc. All rights reserved. Pinakastra is a trademark of Pinakastra Computing Pvt Ltd.
            registered in India and other countries. All other brand names mentioned herein are for identification
            purposes only and may be the trademarks of their respective holder(s).
          </p>
        </footer>
      </body>
    </html>

)

}

export default Login;

    
