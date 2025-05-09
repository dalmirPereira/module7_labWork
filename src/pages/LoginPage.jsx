//--------------- Module 7 - Lab Work Ex4 ----------------------


//--------------mock users data -----------------------
const users = [
    {
        name: "User1",
        password: "password1"
    },
    {
        name: "User2",
        password: "password2"
    }
]
//--------------------------------------------------------

import React, { useState } from 'react';
import { useAuthContext } from "../contex/AuthenticationContex/AuthContext";
import { useNavigate } from 'react-router-dom';

// MUI components
import {
  Container,   // Provides centered, responsive layout
  TextField,   // Styled input field
  Button,      // Styled clickable button
  Typography,  // Text with semantic and design variants
  Box,         // Layout component with spacing/styling
  Alert        // Feedback message component
} from "@mui/material";

function LoginPage() {
  // Local state for form fields and error display 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook for navigation
  const { handleIsAuthenticated } = useAuthContext(); // Function from context to update login state

  // Handles form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on submit
    setError(''); // Clear any previous errors

    if (!name) {
      setError('Name is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    // Check if name and password match a user
    const userFound = users.find(
      (user) => user.name === name && user.password === password
    );

    if (!userFound) {
      setError('User does not exist or wrong password.');
      return;
    }

    // Set auth state and navigate to dashboard
    handleIsAuthenticated(name);
    alert('Login successful!');
    navigate('/dash');
  };

  return (
    // Container: centers content horizontally and adds maxWidth
    <Container maxWidth="sm"> {/* maxWidth="sm" means maximum width is 600px on larger screens */}

      {/* Box: wrapper with margin, padding, border radius, and shadow */}
      <Box
        mt={5}            // mt = margin-top → adds vertical space above
        p={3}             // p = padding on all sides → adds inner space
        boxShadow={3}     // boxShadow adds elevation/depth effect (3 is a moderate shadow)
        borderRadius={2}  // borderRadius rounds corners slightly (2 = 16px)
      >
        {/* Typography: styled heading */}
        <Typography
          variant="h4"    // variant controls text size and style, h4 is large and bold
          gutterBottom    // adds margin-bottom below the text
        >
          Login
        </Typography>

        {/* Alert: shows error message if there is one */}
        {error && (
          <Alert severity="error"> {/* severity="error" makes the alert red with an error icon */}
            {error}
          </Alert>
        )}

        {/* Form element using Box with form behavior */}
        <Box
          component="form"     // Makes this Box behave like a <form> element
          onSubmit={handleSubmit} // Handles form submission logic
          mt={2}               // Adds margin-top spacing
        >
          {/* TextField for username */}
          <TextField
            label="Name"         // Floating label shown inside input
            variant="outlined"  // Outlined style gives a rectangular border
            fullWidth           // Expands input to fill the container width
            margin="normal"     // Adds vertical margin (top and bottom)
            value={name}        // Controlled input bound to state
            onChange={(e) => setName(e.target.value)} // Updates state on change
          />

          {/* TextField for password */}
          <TextField
            label="Password"
            type="password"      // Hides input characters for security
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Submit Button */}
          <Button
            type="submit"        // Makes the button submit the form
            variant="contained"  // "contained" makes the button solid (filled)
            color="primary"      // Uses the theme's primary color (default: blue)
            fullWidth            // Makes the button stretch the full width
            sx={{ mt: 2 }}       // sx is MUI's inline styling → adds margin-top of 2 spacing units
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;