import "./index.css"
import image from "./img/images.png"
const root = document.getElementById("root")
const h1=document.createElement("h1")
h1.innerHTML="TODO ASSIGNMENT unit-5-day-1(webpack)"
h1.setAttribute("class","head")
root.appendChild(h1)

const imag=document.createElement("img")
imag.src=image
imag.setAttribute("class","png")
root.appendChild(imag)
const form=document.createElement("form")

form.addEventListener("submit",sub);
const input=document.createElement("input")
input.setAttribute("class","add")
input.setAttribute("placeholder","Enter here, Your all task")
const submit=document.createElement("input")
submit.setAttribute("class","sub")
submit.setAttribute("type","submit")
form.appendChild(input)
form.appendChild(submit)
root.appendChild(form)

const table=document.createElement("table")
const thead=document.createElement("thead")
const tr1=document.createElement("tr")
const th1=document.createElement("th")
th1.innerHTML="Task"

const th2=document.createElement("th")
th2.innerHTML="delete"
const tbody=document.createElement("tbody")
tr1.appendChild(th1)
tr1.appendChild(th2)

thead.appendChild(tr1)
table.appendChild(thead)
root.appendChild(table)





var taskarr=JSON.parse(localStorage.getItem("task"))||[];
displayarr(taskarr);
function sub(event){
    event.preventDefault();
    const data=input.value
    console.log(data)
    const obj={
        task:data
    }
    taskarr.push(obj)
    console.log(taskarr)
    localStorage.setItem("task",JSON.stringify(taskarr))
   displayarr(taskarr)
}

function displayarr(arr,index){
tbody.innerHTML=""
    arr.map(function(elem,index){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.textContent=elem.task
        var td2=document.createElement("td");
        td2.textContent="delete"
        td2.addEventListener("click",function(){
            deleteTask(index)
        });

    tr.appendChild(td1)
    tr.appendChild(td2)
tbody.appendChild(tr)
table.appendChild(tbody)
root.appendChild(table)
    })
}
function deleteTask(index){
    taskarr.splice(index,1)
    localStorage.setItem("task",JSON.stringify(taskarr));
    //console.log(arr)
    displayarr(taskarr)

}

