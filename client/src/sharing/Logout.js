import {useNavigate} from "react-router-dom";





const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

  return (
    <div>
       <button onClick={handleLogout}>
           Logout
       </button>

      {/* non-functional */}
    </div>
  );
};

export default Logout;
