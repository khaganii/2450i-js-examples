let select = document.getElementById("cars");
select.setAttribute("onchange", "func()")
let contentDiv = document.getElementById("content");
document.addEventListener("DOMContentLoaded", loadSpans);

const arr = [
    {
        info: "no info",
        image: ""
    },
    {
        info: "Bmw info andksjdbghsd  wjhcveghf c",
        image: "https://www.google.com/imgres?q=bmwlogo&imgurl=https%3A%2F%2Flistcarbrands.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBMW-Logo-1963.png&imgrefurl=https%3A%2F%2Flistcarbrands.com%2Fbmw-logo%2F&docid=_MXZBu92EXjazM&tbnid=Z021pvIlYGNBrM&vet=12ahUKEwiJl5WNn6aJAxV4QfEDHZd-OWwQM3oECGAQAA..i&w=3840&h=2160&hcb=2&ved=2ahUKEwiJl5WNn6aJAxV4QfEDHZd-OWwQM3oECGAQAA"
    },
    {
        info: "Hyundai info 3hjebhuedbchuebdchu",
        image: "https://di-uploads-pod5.dealerinspire.com/triplejsaipan/uploads/2018/05/HyundaiLogoStacked_4cblk-1024x659-1024x659.gif"
    },
    {
        info: "Mersedes info wjdcjwdcvjw dffvdhv",
        image:"https://blog.logomaster.ai/hs-fs/hubfs/Mercedes-Benz%20logo-1926.jpg?width=672&height=454&name=Mercedes-Benz%20logo-1926.jpg"
    },
    {
        info: "Vaz info whdcvwhdvcwdvgqdvcgvgwcqgwdvc",
        image: "https://www.google.com/imgres?q=vazlogo&imgurl=https%3A%2F%2Fcdn.worldvectorlogo.com%2Flogos%2Fvaz-1.svg&imgrefurl=https%3A%2F%2Fworldvectorlogo.com%2Fru%2Flogo%2Fvaz-1&docid=g6zzepflnlB4YM&tbnid=jW4CWMQkM2N5cM&vet=12ahUKEwjD5oypn6aJAxWAefEDHRojACoQM3oECH4QAA..i&w=2500&h=2500&hcb=2&ved=2ahUKEwjD5oypn6aJAxWAefEDHRojACoQM3oECH4QAA"
    }   
];

const spans = [
    "tag1wjbcbwjdc",
    "tag2sdb;skdnswv",
    "tag3skdvbskldvbskdbvc",
    "tag4qmbf kansd v",
    "tag5JBSdcvjsdvfhwd",
    "tag3skdvbskldvbskdbvc",
    "tag4qmbf kansd v",
    "tag5JBSdcvjsdvfhwd",
    "tag3skdvbskldvbskdbvc",
    "tag4qmbf kansd v",
    "tag5JBSdcvjsdvfhwd"
];

function func(){
    let option = select.options[select.selectedIndex];

    const h2 = document.createElement("h2");
    h2.innerHTML = option.innerText;
    h2.style.textAlign = "center"; 

    const info = document.createElement("p");
    info.style.textAlign = "center";
    let information = arr[option.value].info;
    info.innerText = information;

    const imageElement = document.createElement("img");
    imageElement.setAttribute("width", "200");
    imageElement.setAttribute("height", "200");
    imageElement.setAttribute("src", arr[option.value].image);
    
    contentDiv.innerHTML = "";
    contentDiv.appendChild(h2);
    contentDiv.appendChild(info);
    contentDiv.appendChild(imageElement);
}

function loadSpans(){
    let tags = ``;
    for (let i = 0; i < spans.length; i++) {
        let s = `<span id="spanID${i}" class="spans">${spans[i]}&nbsp;&nbsp;<i onClick="deleteSpan('spanID${i}')" class="fa">&#xf00d;</i></span> &nbsp;&nbsp;&nbsp;`;
        tags += s;
    }
    document.getElementById("additional").innerHTML = tags;
}

function deleteSpan(id){
    let element = document.getElementById(id);
    element.remove();
}
