import React, { useState, useEffect } from "react";

export default function Courses({ auth }) {
  let [courses, setCourses] = useState([""]);
  useEffect(() => {
    fetch("/courses", {
      headers: {
        Authorization: `Bearer ${auth.getAccessToken()}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response is not Ok");
      })
      .then((response) => {
        setCourses(response.courses);
      });
  }, []);

  return (
    <ul>
      {courses.map((course) => {
        return <li key={course.id}>{course.description}</li>;
      })}
    </ul>
  );
}
