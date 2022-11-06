import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function View(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center">Edit User</h2>
      <div className=" row justify-content-center  ">
        <div className="col-sm-6 card p-4">
          <h4>Name</h4>
          <p>{inputs.name}</p>
          <h4>Email</h4>
          <p>{inputs.email}</p>
        </div>
      </div>
    </div>
  );
}
