const data = [

{
id:"CMP-2026-001",
name:"Consent to Operate",
authority:"WB Pollution Control Board",
due:"31 Dec 2026",
status:"Compliant"
},

{
id:"CMP-2026-002",
name:"Factory License Renewal",
authority:"Directorate of Factories",
due:"15 Apr 2026",
status:"Due Soon"
},

{
id:"CMP-2026-003",
name:"Fire Safety Certificate",
authority:"Fire Department",
due:"01 Mar 2026",
status:"Overdue"
},

{
id:"CMP-2026-004",
name:"Monthly PF Return",
authority:"EPFO",
due:"15 Mar 2026",
status:"Due Soon"
}

];

function loadData(){

let table = document.getElementById("tableData");

table.innerHTML="";

data.forEach(item=>{

let statusClass="";

if(item.status=="Compliant") statusClass="status-green";
if(item.status=="Due Soon") statusClass="status-yellow";
if(item.status=="Overdue") statusClass="status-red";

table.innerHTML += `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.authority}</td>
<td>${item.due}</td>
<td class="${statusClass}">${item.status}</td>
</tr>
`;

});

document.getElementById("total").innerText=data.length;
document.getElementById("compliant").innerText=data.filter(d=>d.status=="Compliant").length;
document.getElementById("due").innerText=data.filter(d=>d.status=="Due Soon").length;
document.getElementById("overdue").innerText=data.filter(d=>d.status=="Overdue").length;

}

function searchData(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#tableData tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input) ? "" : "none";

});

}

loadData();
