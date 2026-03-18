const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let doctors = [
  { id:1, name:"Dr. Ayşe Yılmaz", branch:"Dermatoloji", gender:"Kadın", city:"İstanbul", hospital:"Acıbadem"},
  { id:2, name:"Dr. Mehmet Kaya", branch:"Kardiyoloji", gender:"Erkek", city:"Ankara", hospital:"Medical Park"}
];

app.get("/api/doctors", (req,res)=>{
  res.json(doctors);
});

app.post("/api/doctors",(req,res)=>{
  const doctor = req.body;
  doctor.id = doctors.length+1;
  doctors.push(doctor);
  res.json({success:true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("Server Started"));
