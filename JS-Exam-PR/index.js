let Form = document.querySelector("#addrecipe");
let EditForm = document.querySelector("#editrecipe");

let EditTitle = document.querySelector("#edittitle");
let EditImg = document.querySelector("#editimg");
let EditIngredients = document.querySelector("#editingredients");
let EditPrice = document.querySelector("#editprice");

let editIndex = null;

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let Title = document.querySelector("#title").value;
    let Img = document.querySelector("#img").value;
    let Ingredients = document.querySelector("#ingredients").value;
    let Price = document.querySelector("#price").value;
    
    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    
    let newrecipe = {
        Title: Title,
        Img: Img,
        Ingredients: Ingredients,
        Price: Price
    };
    
    Recipe.push(newrecipe);
    localStorage.setItem("Recipe", JSON.stringify(Recipe));
    Form.reset();
    alert("Recipe added successfully!");
    DisplayRecipe();
});


// Display Recipe

function DisplayRecipe() {
    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    let container = document.getElementById("recipeContainer");
    
    container.innerHTML = "";
    
    Recipe.forEach((item, index) => {
        let card = document.createElement("div");
        
        card.innerHTML = `
        <div class="recipe-card">
        <h3>${item.Title}</h3>
        <img src="${item.Img}" alt="${item.Title}" style="width:100%; max-width:300px; height:auto; border-radius:8px;">
        <p><strong>Ingredients:</strong> ${item.Ingredients}</p>
        <p><strong>Price:</strong> ₹${item.Price}</p>
        <button onclick="editRecipe(${index})">Edit</button>
        <button onclick="deleteRecipe(${index})">Delete</button>
        </div>
        `;
        
        container.appendChild(card);
    });
}

// Delete Recipe 

function deleteRecipe(id) {
    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    Recipe.splice(id, 1);
    localStorage.setItem("Recipe", JSON.stringify(Recipe));
    DisplayRecipe();
}

// Edit Recipe

function editRecipe(id) {
    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    let data = Recipe[id];
    
    Form.style.display = "none"
    EditForm.style.display = "block"
    
    EditTitle.value = data.Title;
    EditImg.value = data.Img;
    EditIngredients.value = data.Ingredients;
    EditPrice.value = data.Price;
    
    editIndex = id;
}

// Update Recipe after Edit

EditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    
    Recipe[editIndex] = {
        Title : EditTitle.value,
        Img : EditImg.value,
        Ingredients : EditIngredients.value,
        Price : EditPrice.value
    }
    
    localStorage.setItem("Recipe", JSON.stringify(Recipe));
    EditForm.reset();
    DisplayRecipe();
    
    editIndex = null;
    Form.style.display = "block"
    EditForm.style.display = "none"
    
    alert("Recipe Updated successfully!");
})


// Search Recipe 

let SearchRecipe = document.querySelector("#searchrecipe");

SearchRecipe.addEventListener('click', () => {
    let title = document.querySelector("#searchtitle").value;
    let price = document.querySelector("#searchprice").value;

    let Recipe = JSON.parse(localStorage.getItem("Recipe")) || [];
    let container = document.getElementById("recipeContainer");
    container.innerHTML = "";
    
    let result = Recipe.filter(item => item.Title === title && item.Price === price);

    if(result.length == 0){
        alert("Invalid Recipe Data!!");
    }
    
    result.forEach(item => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="recipe-card">
        <h3>${item.Title}</h3>
        <img src="${item.Img}" alt="${item.Title}" style="width:100%; max-width:300px; height:auto; border-radius:8px;">
        <p><strong>Ingredients:</strong> ${item.Ingredients}</p>
        <p><strong>Price:</strong> ₹${item.Price}</p>
        </div>
        `;
        container.appendChild(card);
    });
})

// Search btn 

let Search = document.querySelector("#search");

Search.addEventListener('click', () => {
    let SearchForm = document.querySelector("#searchform");

    SearchForm.style.display = "block"
    Form.style.display = "none"

    document.getElementById("recipeContainer").innerHTML = "";
})