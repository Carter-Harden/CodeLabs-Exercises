// Grabbing the Elements from the DOM
// WHO
const input = document.querySelector("#name-data");
const button = document.querySelector("button");
const unorderedList = document.querySelector("#name-list");
let localStorageList = localStorage.getItem("NameData") || []
if (typeof localStorageList === "string")
  localStorageList = JSON.parse(localStorageList);

function addNameToList() {
    // Build the li element
    const item = document.createElement("li");
    item.innerText = input.value;
    unorderedList.appendChild(item);

    addToLocalStorage(item);
    if (localStorageList.length > 0) {
        localStorageList.forEach((item) => {
          unorderedList.innerHTML = unorderedList.innerHTML + item;
        });
      }

    // Save to Local Storage
}
function addToLocalStorage(listItem) {
    localStorageList.push(listItem.outerHTML);
    // localStorage.setItem("NameData", listItem.outerHTML);
    console.log(localStorageList);
    localStorage.setItem("NameData",JSON.stringify(localStorageList));
}
// WHEN
// Event Listeners
button.addEventListener("click", addNameToList);

s

// function addNameToList() {
//   // Build the Li element
//   const item = document.createElement("li");
//   item.innerText = input.value;
//   unorderedList.appendChild(item);

//   // Save data to Local Storage
//   addToLocalStorage(item);
// }

// function addToLocalStorage(listItem) {
//   localStorageList.push(listItem.outerHTML);
//   console.log(localStorageList);
//   localStorage.setItem("NameData", JSON.stringify(localStorageList));
// }

// // event listeners
// button.addEventListener("click", addNameToList);
