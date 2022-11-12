import { useState, useEffect } from "react";
import CourseList from "./CourseList";

const Trainee = () => {
    const [name, setName] = useState("dinka")
    const [courses, setCourses] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const handleOptin = (id)=>{
    const newCourses= courses.filter(course=>course.id !== id);
    setCourses(newCourses);
  }
  const logout=()=>{
      sessionStorage.removeItem('token');
    }
  useEffect(()=>{
     console.log('use effect run');
  },[name]);
    return (
      <>
        <nav className='navbar'>
          <h1>Algorand Based Certificate Generation</h1>
          <div className="links">
            <a href="./Home" style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: '8px'
            }}> Create</a>
            <a href="/" onClick={logout}
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'
              }}>Signout</a>
          </div>
        </nav>
      <div className='home'>
          <CourseList courses={courses} title="All Courses" handleOptin={handleOptin} />
          <CourseList courses={courses.filter((course) => course.author === 'mario')} title="Mario's Blogs" handleOptin={handleOptin} />
        </div>
        </>
      );
}
 
export default Trainee
