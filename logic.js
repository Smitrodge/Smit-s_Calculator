let str = "";
let btn = document.querySelectorAll("button");
let screen = document.querySelector("#input");
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML == '=') {

            try {
                screen.placeholder = eval(str);
            }
            catch (error) {
                screen.placeholder = "Error";
            }
        }

        else if (btn.innerHTML == 'AC') {
            str = "0";
            screen.placeholder = str;
        }

        else if (btn.innerHTML == 'DL') {
            str = str.slice(0, str.length - 1);
            screen.placeholder = str;
        }
        else {
            str += btn.innerHTML;
            screen.placeholder = str;
        }
    })
})

