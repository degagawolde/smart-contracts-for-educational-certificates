import Navbar from './components/Navbar';
import Home from './components/Trainee'
import Login from './components/Login'
function App() {
   const token = sessionStorage.getItem("token");
  return (
    <div className="App">
      {(token && token!=="" && token!==undefined?
      <>
      <Navbar />
      <div className='content'>
         <Home />
      </div>
      </>
      :
       <div className='content'>
        <Login />
        </div>
        )}
    </div>
  );
}

export default App;
