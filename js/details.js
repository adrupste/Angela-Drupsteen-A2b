
// HAMBURGER MENU

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
})

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
})


// DETAILS PAGE JAVASCRIPT

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'jvviswqqb7hz',
    accessToken: 'eQmpUVapcidx4GdlJSM9YVSdQCQRbk9ZoJuozWufeO8',
  });

var product = document.getElementById('product');

var productImage = document.getElementById('product-image');

var productCart = document.getElementById('add-to-cart');

client.getEntry(id).then(function (entry) {
    
    var mainImage = document.createElement('img');
    mainImage.classList.add('product-image');
    if (entry.fields.mainImage){
        mainImage.src = entry.fields.mainImage.fields.file.url;
    }

    console.log(entry.sys);
    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;

    var description = document.createElement('p');
    description.classList.add('product-description');
    description.innerHTML = entry.fields.description;

    var price = document.createElement('p');
    price.classList.add('product-price');
    price.innerHTML = entry.fields.price;

    var ingredientsName = document.createElement('h4');
    ingredientsName.classList.add('ingredients-name');
    ingredientsName.innerHTML = entry.fields.ingredientsName; 

   var ingredientsList = document.createElement('ul');
   entry.fields.ingredients.forEach(function(ingredient){
       var ingredientLi = document.createElement('li');
       ingredientLi.innerHTML = ingredient;
       ingredientsList.appendChild(ingredientLi);
    });

    productImage.appendChild(mainImage);
    product.appendChild(name);
    product.appendChild(description);
    product.appendChild(price);
    product.appendChild(ingredientsName);
    product.appendChild(ingredientsList)
    product.appendChild(productCart);
});


var ingredientsList = document.createElement('ul');
entry.fields.ingredients.forEach(function(ingredient){
    var ingredientLi = document.createElement('li');
    ingredientLi.innerHTML = ingredient;
    ingredientsList.appendChild(ingredientLi);
});
productDiv.appendChild(ingredientsList);