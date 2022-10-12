const food = [
    {
        name: "Orange",
        price: 2.25
    },
    {
        name: "Peanut",
        price: 0.25
    },
    {
        name: "Banana",
        price: 5.25
        // banana prices are crazy right now
    }
]
for (let products of food) {
    let item = document.createElement("li");
    const mainlist = document.getElementById("foods");
    mainlist.appendChild(item);
    item.textContent = products.name + " $" + products.price;
                                // this plus is used to concat the strings. Concat means to join two or more strings.
};

// A forOf loop is used here to iterate over each item in the food array. 
// This then creates a new <li> element for each item, appends that element to an already existing <ul> element 
// This then sets the text content of the <li> to the name property of the individual item in the food array