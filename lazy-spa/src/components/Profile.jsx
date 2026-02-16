import React from "react";
// import myPhoto from "../resume_photo.png";

export default function Profile() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      
      {/* <img 
        src={myPhoto} 
        alt="Sushmita Barman" 
        width="150" 
        style={{ borderRadius: "10px" }} 
      /> */}

      <h2>Sushmita Barman</h2>
      <p>AI & Machine Learning Engineer</p>

      <h3 style={{ marginTop: "30px" }}>Projects</h3>

      <p><b>Safe Sound AI:</b> ML-driven pre-accident audio detection system.</p>
      <p><b>AI Waste Classifier:</b> Classified waste using YOLOv8 and OpenCV.</p>
      <p><b>Fraud Detection:</b> Achieved 99.43% accuracy with Logistic Regression.</p>
      <p><b>Train Bridge Security:</b> Prototype using Arduino and sensors.</p>

    </div>
  );
}
