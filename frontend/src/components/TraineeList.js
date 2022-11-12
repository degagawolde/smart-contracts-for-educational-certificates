import { useState } from "react";
import Multiselect from "react-widgets/Multiselect";
import { TransactionButton } from "./Button.style";
const TraineeList = ({courses,title,handleTransfer}) => {
 
  const [value, setValue] = useState()

    return (  
        <div className="blog-list">
            <h1>{title}</h1>
            {courses.map(course => (
                <div className="blog-preview" key={course.id} >
                    <h2>{ course.title }</h2>
                    <p>Creator { course.author }</p>   
                    <p>Id: {course.id}</p>
                     <Multiselect 
                        data={course.address}
                        // value={value}
                        onChange={value =>setValue(value)}
                    />
                    <TransactionButton onClick={()=>handleTransfer(value)}>Transfer </TransactionButton>
                </div>
            ))}
        </div>
    );
}
 
export default TraineeList