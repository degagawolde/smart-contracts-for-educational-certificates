import {TransactionButton} from './Button.style'
const CourseList = ({courses,title,handleOptin,account}) => {
    // const blogs = props.blogs
    // const title = props.title
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
            {courses.map(course => (
                <div className="blog-preview" key={course.id} >
                    <h2>{ course.title +" "+course.status}</h2>
                    <p>Creator: { course.author }</p>
                     <p>Asset ID: {course.id}</p>
                     <a href={course.url}>{course.url}</a>  
                    {/* <TransactionButton onClick={()=>handleOptin(course.id)}>OptiN</TransactionButton> */}
                </div>
            ))}
        </div>
    );
}
 
export default CourseList