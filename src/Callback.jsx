import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Callback({ auth }) {
  let location = useLocation();
  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }, [auth, location.hash]);
  return <h1>Loading...</h1>;
}

export default Callback;
