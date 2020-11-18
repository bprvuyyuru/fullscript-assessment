/////////////// App ///////////////////

import './App.css';
import { Heading } from './components/Heading';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Bhanu Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



function App() {
  return (
    <>
    <Heading />
    <Copyright />
    </>
  );
}

export default App;
