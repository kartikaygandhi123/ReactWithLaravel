import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function Edit(props) {
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = () => {
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2 className="d-flex justify-content-center">Edit User</h2>
      <div className=" row justify-content-center  ">
        <div className="col-sm-6 card p-4">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            value={inputs.email || ""}
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="form-control mb-2"
            value={inputs.password || ""}
            onChange={handleChange}
          />

          <button type="button" onClick={submitForm} className="btn btn-info">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
