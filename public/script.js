async function loadDoctors(){
const branch = branchFilter.value;
const res = await fetch("/api/doctors");
const data = await res.json();

const filtered = branch ? data.filter(d=>d.branch===branch) : data;

doctorList.innerHTML="";
filtered.forEach(d=>{
doctorList.innerHTML+=`
<div class="card">
<h3>${d.name}</h3>
<p>${d.branch}</p>
<p>${d.hospital}</p>
</div>
`;
});
}

loadDoctors();
