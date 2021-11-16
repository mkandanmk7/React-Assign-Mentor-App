// import { Button } from "react-bootstrap";
import "./App.css";
import MentorForm from "./Components/MentorForm";
import AssignMentorProvider from "./Context/AssignMentors";

function App() {
  return (
    <div className="container">
      <h2
        style={{ textAlign: "center", color: "seagreen", marginBottom: "2rem" }}
      >
        Zen Mentors
      </h2>
      <AssignMentorProvider>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <MentorForm />
            {/* <StudentForm />
            <AssignorChangeMentor />
            <AssignStudentsToMentor />
            <ShowMentorStudents />  */}
          </div>
        </div>
      </AssignMentorProvider>
    </div>
  );
}

export default App;
