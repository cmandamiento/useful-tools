import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <div>
        <Button component={Link} to="/whatsapp" variant="outlined">
          Whatsapp
        </Button>
      </div>
    </div>
  );
}

export default App;
