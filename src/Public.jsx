import React, { useState, useEffect } from "react";

export default function Public() {
  let [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/public")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response is not Ok");
      })
      .then((response) => {
        setMessage(response.message);
      });
  }, [message]);

  return <p>{message}</p>;
}
