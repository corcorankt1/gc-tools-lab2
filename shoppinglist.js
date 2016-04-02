var items = [
	{
		name: "Milk",
		price: 3.00
	},
	{
		name: "Bread",
		price: 2.50
	},
	{
		name: "Eggs",
		price: 1.25
	},
	{
		name: "Ice Cream",
		price: 5.00
	},
]

var total = 0;

items.forEach(function(element){
	var newLi = document.createElement('li');
	var listItem = document.getElementById("item");
	newLi.innerHTML = element.name + " $" + element.price.toFixed(2);
	listItem.appendChild(newLi);
	total += element.price;
});

var newP = document.createElement('p');
newP.id = "total"
newP.innerHTML = "Total: $" + total.toFixed(2);
document.body.appendChild(newP);

function addItem(){
	var itemName = document.getElementById("itemName").value;
	var itemPrice = document.getElementById("price").value;
	var numPrice = Number(itemPrice);
	var x = {name: itemName, price: numPrice};
	items.push(x);
	document.getElementById("itemName").value = "";
	document.getElementById("price").value = "";
	var newLi = document.createElement('li');
	var listItem = document.getElementById("item");
	newLi.innerHTML = itemName + " $" + numPrice.toFixed(2);
	listItem.appendChild(newLi);
	total += numPrice;
	console.log(total);
	newP.innerHTML = "Total: $" + total.toFixed(2);
};
