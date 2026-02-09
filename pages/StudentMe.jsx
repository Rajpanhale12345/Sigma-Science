import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentMe() {
  const [me, setMe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/students/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setMe)
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/students/login");
      });
  }, [navigate]);

  if (!me) return <p>Loading...</p>;

  return (
    <>
    {me &&(
      <div>
        <p><b>ID:</b> {me.id}</p>
        <p><b>Username:</b> {me.username}</p>
      </div>
    )}
    </>
  );
}
