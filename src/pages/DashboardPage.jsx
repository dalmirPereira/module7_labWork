//--------------- Module 7 - Lab Work Ex4 ----------------------

import { useNavigate, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography
} from "@mui/material";

export default function DashboardPage() {
  
  const navigate = useNavigate();

  return (
    // Box component is a wrapper that allows custom styles through the `sx` prop
    // The `sx` prop is used for custom inline styling, replacing traditional CSS classes
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Navbar /> {/* Custom navigation bar */}

      {/* Container component centers content and adds consistent horizontal padding */}
      {/* `py: 4` means 4 units of padding on the top and bottom */}
      <Container sx={{ py: 4 }}>
        {/* Typography is used for rendering styled text */}
        {/* variant="h4" specifies the text style as an h4 (larger heading), 
            `gutterBottom` adds bottom margin to create space below */}
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {/* Grid component is a flexbox-based layout system for responsive design */}
        {/* `container` is used to define the parent grid that holds the child grid items */}
        {/* `spacing={2}` defines the space between grid items */}
        {/* `sx={{ mb: 4 }}` applies margin-bottom to the grid container */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          
          {/* Grid item defines each individual component (like a button) inside the grid */}
          {/* xs={12} means the grid item will take up the full width on small screens */}
          {/* sm={6} means the grid item will take half the width on small screens */}
          {/* md={3} means the grid item will take 3/12 of the width on medium screens (1/4 width) */}
          <Grid item xs={12} sm={6} md={3}>
            {/* Button component is a styled Material UI button */}
            {/* `variant="contained"` gives the button a filled background */}
            {/* `fullWidth` makes the button expand to fill the width of the Grid cell */}
            {/* `color="primary"` applies the primary color of the MUI theme (typically blue) */}
            {/* `onClick={() => navigate("/dash/exercise1")}` defines the click event to navigate */}
            <Button
              variant="contained" 
              fullWidth 
              color="primary" 
              onClick={() => navigate("/dash/exercise1")}
            >
              Exercise 1
            </Button>
          </Grid>

          {/* Another button in the same format but with a different color and text */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              fullWidth
              color="success" // `color="success"` applies a green tone button
              onClick={() => navigate("/dash/exercise2")}
            >
              Exercise 2
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              fullWidth
              color="secondary" // `color="secondary"` typically applies a purple tone button
              onClick={() => navigate("/dash/exercise3")}
            >
              Exercise 3
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined" // `variant="outlined"` gives the button just a border without background
              fullWidth
              color="inherit" // `color="inherit"` gives a neutral button color (typically grey)
              onClick={() => navigate(-1)} // `navigate(-1)` goes back to the previous page
            >
              Back
            </Button>
          </Grid>
        </Grid>

          <Outlet /> {/* Outlet renders the nested route components inside the Paper */}
      
      </Container>
    </Box>
  );
}