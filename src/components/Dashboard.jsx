import { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate, redirect } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      localStorage.removeItem("token");
      return navigate("/login");
    } catch (err) {
      setError("Failed to logout");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;

export const loader = () => {
  if (!localStorage.getItem("token")) {
    return redirect("/login");
  }
  return null;
};
