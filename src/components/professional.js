import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Professional() {
  const [professionalData, setProfessionalData] = useState([]);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  const fetchProfessionalData = async () => {
    try {
      const response = await axios.get("http://localhost:8099/Staff");
      setProfessionalData(response.data);
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };

  return (
    <div className="card-deck">
      {professionalData.map((el) => (
        <div className="card" key={el.id}>
          <img src={el.image} className="card-img-top" alt="Staff name" />
          <div className="card-body">
            <h5 className="card-title">*{"id : " + el.id}</h5>
            <h5 className="card-title">*{"Name : " + el.name}</h5>
            <p className="card-text">*{"Email : " + el.email}</p>
            <p className="card-text">*{"Mobile : " + el.mobile}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      ))}
    </div>
  );
}
