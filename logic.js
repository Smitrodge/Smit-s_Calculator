let str = "";
let btn = document.querySelectorAll("button");
let screen = document.querySelector("#input");
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML == '='){
            console.log("eue");
            screen.placeholder= eval(str);
        }

        else if(btn.innerHTML == 'AC'){
            console.log("clear");
            str="0";
            screen.placeholder = str;
        }
         
        else if(btn.innerHTML == 'DL'){
            console.log("delete");
            str = str.slice(0,str.length - 1);
            screen.placeholder = str;
        }
        else{
            console.log("else");
            str += btn.innerHTML
            screen.placeholder = str;
        }
    })
})

