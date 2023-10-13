const input = document.getElementById('noOfWords');
const cont =document.getElementById("container");
let numOfWords;

const getData = () =>{
    console.log(typeof(input.value));
    numOfWords=Number(input.value);

    const para=document.getElementById("mypara");
    console.log(para);
   
    let data =" ";

    for(let i=0;i<numOfWords;++i){
        var randomNumber =(Math.random()*15).toFixed(0);
        data+=generateWord(randomNumber);
        data+=" ";

    }
    para.innerText=data;
    
    
}

const generateWord =(n) =>{
let text =" ";
const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0;i<n;++i){
    var random =(Math.random()*(letter.length-1)).toFixed(0);

    text+=letter[random];

}
return text;
}