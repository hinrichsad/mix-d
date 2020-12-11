var dranks = [];

$(document).ready(function() {

var searchDrink = function(drink){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        method: "GET",
        url: queryURL,
        }).then(function (response){
            console.log(response)

            var drinkDiv = $("<div class='responses'>");
            var drName = $("<h1>").text(response.drinks[0].strDrink);
            var type = $("<p>").text(response.drinks[0].strCategory);
            var howTo = $("<p>").text(response.drinks[0].strInstructions);

            var ingredients = $("<ul class= 'ingredient_list'>");
            var ing1 = $("<li>").text(response.drinks[0].strIngredient1);
            var ing2 = $("<li>").text(response.drinks[0].strIngredient2);
            var ing3 = $("<li>").text(response.drinks[0].strIngredient3);
            var ing4 = $("<li>").text(response.drinks[0].strIngredient4);
            var ing5 = $("<li>").text(response.drinks[0].strIngredient5);
            var ing6 = $("<li>").text(response.drinks[0].strIngredient6);
            var ing7 = $("<li>").text(response.drinks[0].strIngredient7);
            var ing8 = $("<li>").text(response.drinks[0].strIngredient8);
            var ing9 = $("<li>").text(response.drinks[0].strIngredient9);
            var ing10 = $("<li>").text(response.drinks[0].strIngredient10);
            var ing11 = $("<li>").text(response.drinks[0].strIngredient11);
            var ing12 = $("<li>").text(response.drinks[0].strIngredient12);
            var ing13 = $("<li>").text(response.drinks[0].strIngredient13);
            var ing14 = $("<li>").text(response.drinks[0].strIngredient14);
            var ing15 = $("<li>").text(response.drinks[0].strIngredient15);

            ingredients.append(ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9, ing10, ing11, ing12, ing13, ing14, ing15);
 
            var picSource = response.drinks[0].strDrinkThumb;
            var drinkPic = $("<img>").attr("src", picSource);
  

            drinkDiv.append(drName, type, howTo, ingredients, drinkPic)

            $("#sugList").prepend(drinkDiv);

        });
};

$("#search").on("click", function () {
    searchDrink();
});

});