/* global AlgoSigner */
import TraineeList from "./TraineeList";
import  { useState, useRef } from "react";
import { TOKEN, ALGOD_SERVER, PORT, INDEXER_SERVER} from "./constants";
import algosdk from "algosdk";
const AssetActionView = () => {
    const [courses, setCourses] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
const handleOptin = (id)=>{
    const newCourses= courses.filter(course=>course.id !== id);
    setCourses(newCourses);
  }
const handleTransfer=(e)=>{
        console.log('click',e);
        setName('degaga');
    }

  const hanldeGetStatus =async () => {
      await AlgoSigner.connect();
      let indexerClient = new algosdk.Indexer(TOKEN, INDEXER_SERVER, PORT);
      try {
        indexerClient.searchForAssets()
          .limit(10)
          .name('10ATrainingCertificate')
          .do()
          .then((d) => {
            console.log(JSON.stringify(d));
          })
          .catch((e) => {
            console.error(e);
            console.log(JSON.stringify(e));
          });
      } catch (e) {
        console.error(e);
        console.log(JSON.stringify(e, null, 2));
      }
  }
  const handleConnectAlgoSigner = async () => {
    try {
      const r = await AlgoSigner.connect();
      console.log(JSON.stringify(r, null, 2));
    } catch (e) {
      console.error(e);
      console.log(JSON.stringify(e, null, 2));
    }
  }
  const  handleCheckAlgoSigner = () => {
    if (typeof AlgoSigner !== 'undefined') {
      alert("AlgoSigner is installed.");
    } else {
      alert("AlgoSigner is NOT installed.");
    }
  }

const [name, setName] = useState("dinka")
const [account ,setAccount] = useState("")


    return (  
        <div className='home'>
          <TraineeList courses={courses} title="Trainees" handleTransfer={handleTransfer} />
          <TraineeList courses={courses.filter((course) => course.author === 'mario')} title="Mario's Blogs" handleOptin={handleOptin} />
          <p>{account}</p>
            <button onClick={handleConnectAlgoSigner}> click me</button>
            <button onClick={hanldeGetStatus}>getAccount</button>
        </div>
    );
}
 
export default AssetActionView;