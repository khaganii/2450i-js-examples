document.addEventListener("DOMContentLoaded",loadCategories());

async function loadCategories(){

    const reguest = await fetch("https://fakestoreapi.com/products/categories");
    let data = await reguest.json();

    let cats = ``;
    data.forEach(element => {
       cats += `<div class="div_cat" category="${element}" onClick="showProdsByCat('${element}')"><span class="cat_name">${element}</span></div><br>`;
    });
    document.getElementById("all_cats").innerHTML = cats;
}

async function showProdsByCat(catName) {
    const reguest = await fetch("https://fakestoreapi.com/products/category/" + catName);
    let data = await reguest.json();
    console.log(data)
    let prs = ``;
    data.forEach(element => {
        prs += `<div class="grid-item">
                    <div class="card">
                        <img src="${element.image}" style="width:100%">
                        <h1>${element.title}</h1>
                        <p class="price">${element.price}</p>
                        <p>${element.description}</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                </div`;
    });

    document.getElementById("pordsByCat").innerHTML = prs;
    document.getElementById("h2Catname").innerHTML = catName;
}