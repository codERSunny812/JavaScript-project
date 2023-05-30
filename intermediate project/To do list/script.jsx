const title=document.getElementById("title");
const description=document.getElementById("description");
const form = document.querySelector("form");
const container=document.getElementById("container");

const  taskList=[];


function showAllTask(){
    taskList.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const para=document.createElement("p");
        para.innerText=value.Title;
        innerDiv.append(para);

        const span=document.createElement("span");
        span.innerText=value.Description;
        innerDiv.append(span);


        const btn = document.createElement("button");
        btn.setAttribute("id","deletionBtn");
        btn.innerText="-";

        div.append(btn);

        container.append(div);
        
    
    })
}


form.addEventListener("submit",(e)=>{
e.preventDefault();
taskList.push({
    Title:title.value,
    Description:description.value,   
})
showAllTask();
})
 