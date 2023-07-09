import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Professional() {
  const [professionalData, setProfessionalData] = useState([]);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  const fetchProfessionalData = async () => {
    try {
      const response = await axios.get("http://localhost:8099/staff");
      setProfessionalData(response.data);
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };

  return (
    <div>
      {professionalData.map((el) => (
        <div className="card ms-7" style={{ margin: "10px" }} key={el.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={el.image} className="card-img" alt="fooditems" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{el.Brand}</h5>
                <p className="card-text">{el.year}</p>
                <p className="card-text">{el.model}</p>
                <p className="card-text">${el.kilometer}</p>
                <p className="card-text">${el.place}</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}