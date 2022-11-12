const CourseList = ({courses,title,handleOptin}) => {
    // const blogs = props.blogs
    // const title = props.title
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
            {courses.map(course => (
                <div className="blog-preview" key={course.id} >
                    <h2>{ course.title }</h2>
                    <p>Written by { course.author }</p>
                    <button onClick={()=>handleOptin(course.id)}>OptiN</button>
                </div>
            ))}
        </div>
    );
}
 
export default CourseList