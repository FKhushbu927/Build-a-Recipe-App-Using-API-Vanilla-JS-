const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));

}


const displayMeals = meals =>{
    const mealContainer = document.getElementById('mealContainer');
    //display all meal

    meals.forEach( meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <h6 class="">${meal.strCategory}</h6>

          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button id="show-details" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        
        `;
        mealContainer.appendChild(mealDiv);


    });

}

const searchMeal = () => {
    const searchText = document.getElementById('searchInputField').value;
    loadMeals(searchText);
}







