import "./App.css";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import EnquiryForm from "./pages/EnquiryForm";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import StudentDetailsview from "./pages/StudentDetailsview";
import Addnewquire from "./pages/Addnewquire";
import AllStudent from "./pages/AllStudent";
import ComingSoon from "./pages/ComingSoon";
import AddFaculty from "./component/form/AddFaculty";
import Faculty from "./pages/Faculty/Faculty";
import FacultyDetails from "./component/form/FacultyDetails";
import AllStudents from "./pages/AllStudents";
import LastMonthLead from "./pages/LastMonthLead";
import AllCourse from "./pages/Course/AllCourse";
import AddCourse from "./component/form/AddCourse";
import AddBatch from "./component/form/AddBatch";
import Batch from "./pages/Batch/Batch";
import Test from "./component/learn/Test";

import "react-toastify/dist/ReactToastify.css";
import EditCourse from "./component/form/EditCourse";
import EditBatch from "./component/form/EditBatch";
import Studentdatatest from "./component/form/Studentdatatest";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function App() {
  const User = () => {
    const token = localStorage.getItem("token") == null ? false : true;
    return (
      <>
        <div>{token ? <Outlet /> : <Navigate to="/" />}</div>
      </>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/newform" exact element={<User />}>
          <Route path="/newform" exact element={<EnquiryForm />} />
        </Route>
        <Route path="/dashbord" exact element={<User />}>
          <Route path="/dashbord" exact element={<Dashboard />} />
        </Route>
        <Route path="/student-details" exact element={<User />}>
          <Route
            path="/student-details/:_id"
            exact
            // element={<StudentDetails />}
            element={<Studentdatatest />}
          />
        </Route>

        <Route path="/student-view" exact element={<User />}>
          <Route
            path="/student-view/:_id"
            exact
            element={<StudentDetailsview />}
          />
        </Route>
        <Route path="/addnew-quiry" exact element={<User />}>
          <Route path="/addnew-quiry" exact element={<Addnewquire />} />
        </Route>
        <Route path="/all-student" exact element={<User />}>
          <Route path="/all-student" exact element={<AllStudent />} />
        </Route>
        <Route path="/coming-soon" exact element={<User />}>
          <Route path="/coming-soon" exact element={<ComingSoon />} />
        </Route>
        <Route path="/add-faculty" exact element={<User />}>
          <Route path="/add-faculty" exact element={<AddFaculty />} />
        </Route>
        <Route path="/all-faculty" exact element={<User />}>
          <Route path="/all-faculty" exact element={<Faculty />} />
        </Route>
        <Route path="/faculty-edit-form/:_id" exact element={<User />}>
          <Route
            path="/faculty-edit-form/:_id"
            exact
            element={<FacultyDetails />}
          />
        </Route>
        <Route path="/all-students-list" exact element={<User />}>
          <Route path="/all-students-list" exact element={<AllStudents />} />
        </Route>
        <Route path="/this-month-lead" exact element={<User />}>
          <Route path="/this-month-lead" exact element={<LastMonthLead />} />
        </Route>
        <Route path="/all-courses" exact element={<User />}>
          <Route path="/all-courses" exact element={<AllCourse />} />
        </Route>
        <Route path="/add-courses" exact element={<User />}>
          <Route path="/add-courses" exact element={<AddCourse />} />
        </Route>
        <Route path="/edit-course" exact element={<User />}>
          <Route path="/edit-course/:_id" exact element={<EditCourse />} />
        </Route>
        <Route path="/edit-batch" exact element={<User />}>
          <Route path="/edit-batch/:_id" exact element={<EditBatch />} />
        </Route>
        <Route path="/add-batch" exact element={<User />}>
          <Route path="/add-batch" exact element={<AddBatch />} />
        </Route>
        <Route path="/batchs" exact element={<User />}>
          <Route path="/batchs" exact element={<Batch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
