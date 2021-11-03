var arey=[];
function submit(){
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;


    arey.push(name1);
    arey.push(name2);
    arey.push(name3);
    arey.push(name4);


    console.log(arey);
    document.getElementById("display_names").innerHTML=arey;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    arey.sort();
    console.log(arey);
    document.getElementById("display_names").innerHTML=arey;
}