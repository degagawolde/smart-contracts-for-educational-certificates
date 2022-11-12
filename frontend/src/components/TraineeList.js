const TraineeList = ({courses,title,handleTransfer}) => {
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
            {courses.map(course => (
                <div className="blog-preview" key={course.id} >
                    <h2>{ course.title }</h2>
                    <p>Written by { course.author }</p>
                    <button onClick={()=>handleTransfer(course.id)}>Transfer </button>
                </div>
            ))}
        </div>
    );
}
 
export default TraineeList