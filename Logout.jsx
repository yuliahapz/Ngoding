import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");  // Redirects to the login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
