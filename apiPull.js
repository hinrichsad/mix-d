// const {
//     constants
// } = require("buffer");


// var drinkList = [];

// const searchDrink = (app) => {
//     var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//     $.ajax({
//         method: "GET",
//         url: queryURL,
//     }).then(function (response) {
//         console.log(response)

//         let ingredients = [{
//             ing1: response.drinks[0].strIngredient1,
//             ing2: response.drinks[0].strIngredient2,
//             ing3: response.drinks[0].strIngredient3,
//             ing4: response.drinks[0].strIngredient4,
//             ing5: response.drinks[0].strIngredient5,
//             ing6: response.drinks[0].strIngredient6,
//             ing7: response.drinks[0].strIngredient7,
//             ing8: response.drinks[0].strIngredient8,
//             ing9: response.drinks[0].strIngredient9,
//             ing10: response.drinks[0].strIngredient10
//         }]

//         const ingList = JSON.stringify(ingredients);
//         const name = response.drinks[0].strDrink;
//         const type = response.drinks[0].strCategory;
//         const instruction = response.drinks[0].strInstructions;

//         let drinkRes = [
//             name,
//             type,
//             instruction,
//             ingList,
//         ]

//         drinkList.push(drinkRes);
//     });

//     const saveDrinks = [new Set(drinkRes)];

//     module.exports(saveDrinks);
//     module.exports(searchDrink());
// };