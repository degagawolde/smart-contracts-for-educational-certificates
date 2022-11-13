import { useState } from "react";
import Multiselect from "react-widgets/Multiselect";
import { TransactionButton } from "./Button.style";
const AssetList = ({courses,title,handleTransfer}) => {
 
  const [recipient, setRecipient] = useState()
  const [note,setNote] = useState('conrgratulation')
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
            {courses.map(course => (
                <div className="blog-preview" key={course.id} >
                    <h2>{ course.title }</h2>
                    <p>Creator: { course.author }</p>   
                    <p>Asset ID: {course.id}</p>
                     <a href={course.url}>{course.url}</a>  
                     <Multiselect 
                        data={course.address}
                        // value={value}
                        onChange={value =>setRecipient(value)}
                    />
                    <TransactionButton onClick={()=>handleTransfer(course.author,recipient,course.id,note)}>Transfer </TransactionButton>
                </div>
            ))}
        </div>
    );
}
 
export default AssetList