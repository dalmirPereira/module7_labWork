//--------------- Module 7 - Lab Work Ex4 ----------------------

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Go back to <Link to="/">Login</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;
