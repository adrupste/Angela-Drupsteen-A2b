// HAMBURGER MENU

document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("menu").classList.toggle("active");
})

document.getElementById("close-menu").addEventListener("click", function() {
  document.getElementById("menu").classList.remove("active");
})

// MAIN PAGE JAVASCRIPT

var client = contentful.createClient({
    space: 'jvviswqqb7hz',
    accessToken: 'eQmpUVapcidx4GdlJSM9YVSdQCQRbk9ZoJuozWufeO8',
  });


var productsDiv = document.getElementById('products');

client.getEntries({content_type:'assignment2'}).then(function (entries) {

    entries.items.forEach(function (entry) {

        var productDiv = document.createElement('div');
        productDiv.classList.add('product');

        var nameH3 = document.createElement('h3');
        nameH3.classList.add('product-name');
        nameH3.innerHTML = entry.fields.name;

        //IMAGES:
        var mainImage = document.createElement('img');
         mainImage.classList.add('product-image');
  
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id; 
        linkToDetails.appendChild(mainImage);


        productDiv.appendChild(nameH3);
        productDiv.appendChild(linkToDetails);
        productsDiv.appendChild(productDiv);


    });
  });