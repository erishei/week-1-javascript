const cats = [
    {
        name : "Mochi",
        age : 2
    },
    {
        name : "Titti",
        age : 4
    },
    {
        name : "Dodo",
        age : 5
    }
];

function getName(list){
    for (let i = 0; i < list.length; i ++){
        console.log(list[i].name);
    }
}

// for(let i = 0; i < cats.length; i++) {
//     console.log(cats[i].name);
// } // NO NEED FOR THIS WITH THE FUNCTION

getName(cats);

const dogs = [
    {
        name : "Bebo",
        age : 2
    },
    {
        name : "Lulu",
        age : 4
    },
    {
        name : "Mimi",
        age : 5
    }
];

getName(dogs);
getName(dogs);
getName(dogs);

function createShoppingList (shoppingList){
    let myShoppingListItem = "";
    for (let i = 0; i < shoppingList.length; i++) {
        myShoppingListItem += `
        <div>
            <h2> ${shoppingList[i].name} </h2>
            <h3> ${shoppingList[i].price} </h3>
        </div>
        `
    }
    return myShoppingListItem
}

let lineShoppingList = [
    {
        name : "orange juice",
        price : "200 kr"
    },
    {
       name : "cheese",
       price : 250
    }
];


