import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //   const handleClick = () => {
  //     window.location.replace(
  //       "https://membri.poliradio.it/oauth/doLogin.php?noredirect"
  //     );
  //   };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        target="_blank"
        href="https://membri.poliradio.it/oauth/doLogin.php?noredirect"
      >
        {/* <Button variant="contained"></Button> */}
        LOGIN
      </a>
    </div>
  );
};

export default Login;
