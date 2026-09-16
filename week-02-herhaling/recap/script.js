 let output = document.getElementById("output");
 let input =document.getElementById("input");
 let btn =document.getElementById("btn");

 btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
    output.textContent = input.value;
    output.style.color = "green";
    input.value = "";
 });

 let input2 = document.getElementById("input2");
 let input3 = document.getElementById("input3");
 let button2 = document.getElementById("button2");
 let paragraph = document.getElementById("output2");

    button2.addEventListener("click", function(){
      
      paragraph.textContent = input2.value * input3.value;
      paragraph.style.color = "blue";
      input2.value = "";
      input3.value = "";
    })
