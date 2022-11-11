
const Navbar = () => {
    const logout=()=>{
      sessionStorage.removeItem('token');
    }
    return (
        <nav className='navbar'>
            <h1>Algorand Based Certificate Generation</h1>
            <div className="links">
                <a href="./Home" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px'
                }}> OptIn</a>
                <a href="/" onClick={logout}
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px' 
                    }}>Signout</a>
            </div>
        </nav>
      );
}
 
export default Navbar
