	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false
	},
	{
		name: "Chocolate Bar",
		vegetarian: true,
		glutenFree: true,
		price: 2.45,
		organic: true
	},
	{
		name: "Beef Steak",
		vegetarian: false,
		glutenFree: false,
		price: 17.00,
		organic: true
	},
	{
		name: "Coconut",
		vegetarian: true,
		glutenFree: true,
		price: 8.55,
		organic: false
	},
	{
		name: "Pad Thai",
		vegetarian: true,
		glutenFree: false,
		price: 18.45,
		organic: false
	},
	{
		name: "Pretzel",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false
	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: false,
		price: 5.99,
		organic: true
	}
	,
	{
		name: "Hazels",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: true
	},
	{
		name: "Chicken Breast",
		vegetarian: false,
		glutenFree: false,
		price: 5.99,
		organic: false
	}
	,
	{
		name: "Shrimp",
		vegetarian: false,
		glutenFree: true,
		price: 5.99,
		organic: true
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vege, glut, org) {
	
	let product_names = [];

	prods.sort(function(a,b){return a.price-b.price});

	for (let i=0; i<prods.length; i+=1) {
		if ((vege == "Vegetarian") && (prods[i].vegetarian == true)){
			if ((glut == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "All")){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
			}
			else if ((glut == "None")){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "All")){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
			}
		}
		else if ((vege == "None")){
			if ((glut == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "All")){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
			}
			else if ((glut == "None")){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
				else if ((org == "All")){
					product_names.push("$"+prods[i].price.toFixed(2)+" - "+prods[i].name);
				}
			}

		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {

		label = "$"+products[i].price.toFixed(2)+" - "+products[i].name;

		if (chosenProducts.indexOf(label) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
