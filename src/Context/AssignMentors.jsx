import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AssignMentorsContext = createContext();

const AssignMentorProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);

  const BaseURL = `https://muthu-assign-mentor-api.herokuapp.com`;

  const fetchData = async () => {
    const studentsRes = await axios.get(`${BaseURL}/mentors`);
    const mentorsRes = await axios.get(`${BaseURL}/students`);

    console.log(studentsRes, mentorsRes);

    setStudents(studentsRes.data);
    setMentors(mentorsRes.data);

    // await axios.get(`https://zen-assign-mentors.herokuapp.com/Mentors`)
    // .then(response => setMentors(response.data)).then(() => console.log(mentors));

    // await axios.get(`https://zen-assign-mentors.herokuapp.com/Students`)
    // .then((response) => setStudents(response.data)).then(() => console.log(students))
  };
  useEffect(() => {
    console.log("mounted in context");
    fetchData();
  }, []);

  return (
    <>
      {console.log(mentors, students)}
      <AssignMentorsContext.Provider
        value={[mentors, setMentors, students, setStudents]}
      >
        {children}
      </AssignMentorsContext.Provider>
    </>
  );
};

export default AssignMentorProvider;
