import React, { useState, useEffect } from "react";

export default function Private({ auth }) {
  let [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/private", {
      headers: {
        Authorization: `Bearer ${auth.getAccessToken()}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response is not Ok");
      })
      .then((response) => {
        setMessage(response.message);
      });
  }, [message, auth]);

  return <p>{message}</p>;
}
