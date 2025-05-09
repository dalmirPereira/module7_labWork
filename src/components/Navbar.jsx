//--------------- Module 7 - Lab Work Ex4 ----------------------

import React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import {
  AppBar,      // MUI component for the navigation bar (AppBar) with built-in styles
  Toolbar,     // Used to create a toolbar within the AppBar, holding the elements
  Typography,  // Used to display text with semantic and design variants
  Button,      // MUI styled clickable button component
  Box          // Box component for layout and spacing
} from '@mui/material';

function Navbar() {
  
  return (
    // AppBar component is used to create a top navigation bar
    // position="static": Keeps the AppBar fixed at the top (does not scroll with the page)
    // sx={{ mb: 3 }}: MUI's `sx` prop for styling, applying margin-bottom (spacing between AppBar and content below)
    <AppBar position="static" sx={{ mb: 3 }}> 
      {/* Toolbar: Container that wraps the content inside the AppBar */}
      <Toolbar>
        {/* Box: Used to wrap the elements inside the toolbar with flexbox for layout */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Typography: Used for the "Login" title */}
          {/* variant="h6": This controls the style and size of the text, "h6" is used for smaller headings */}
          {/* sx={{ flexGrow: 1 }}: flexGrow allows the Typography to take up available space, pushing the buttons to the right */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Link: React Router's Link component for navigation */}
            {/* The "to" prop specifies the path to navigate when clicked */}
            {/* style={{ textDecoration: 'none', color: 'white' }}: Ensures that the link text is white and has no underline */}
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
          </Typography>

          {/* Button components to navigate to different routes */}
          {/* color="inherit": Inherits the color from the parent, ensuring text color is white in the AppBar */}
          {/* Button elements are used here to style links with Material UI button styling (hover, active states, etc.) */}
          <Button color="inherit">
            <Link to="/dash" style={{ textDecoration: 'none', color: 'white' }}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/dash/exercise1" style={{ textDecoration: 'none', color: 'white' }}>
              Exercise 1
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/dash/exercise2" style={{ textDecoration: 'none', color: 'white' }}>
              Exercise 2
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/dash/exercise3" style={{ textDecoration: 'none', color: 'white' }}>
              Exercise 3
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
