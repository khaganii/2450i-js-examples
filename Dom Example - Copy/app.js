let select = document.getElementById("cars");
select.setAttribute("onchange", "func()")
let contentDiv = document.getElementById("content");

const arr = [
    "no info",
    "Bmw info andksjdbghsd  wjhcveghf c",
    "Hunadai info 3hjebhuedbchuebdchu",
    "Mersedes info wjdcjwdcvjw dffvdhv",
    "Vaz info whdcvwhdvcwdvgqdvcgvgwcqgwdvc",
];
function func(){
    let option = select.options[select.selectedIndex];

    const h2 = document.createElement("h2");
    h2.innerHTML = option.innerText;
    h2.style.textAlign = "center"; 

    const info = document.createElement("p");
    info.style.textAlign = "center";
    let information = arr[option.value];
    info.innerText = information;
    
    contentDiv.innerHTML = "";
    contentDiv.appendChild(h2);
    contentDiv.appendChild(info);
}