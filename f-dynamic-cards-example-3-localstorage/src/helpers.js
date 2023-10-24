// populate temporary data to local storage
// Refer to section (below): area to invoke the functions 
function storeDataToLocalStorage(data){
    if(!localStorage.getItem("productList") || localStorage.getItem("productList") !== null){
        const sampleItems = data;   
        localStorage.setItem("productList", JSON.stringify(sampleItems));
    }
}

// load data from local storage
function loadDataFromLocalStorage() {
    const storageItems = localStorage.getItem("productList")
    if (storageItems) {
        const products = JSON.parse(storageItems);

        // after data is loaded from localStorage
        // pass the values to displayCart() to display the contents in HTML
        displayCart(products);
    }
}

// displayCard() receives an array of JSON objects
function displayCart(data){
    
    // create an instance unorderedlist that references classname "all-cards-container"
    const unorderedList = document.querySelector(".all-cards-container");

    // A) in the event there are NO products
    if(!data.length){

        // reset the gridTemplateColumns of class "all-cards-container"
        unorderedList.style.gridTemplateColumns = "none";

        // Display feedback that there are no products at the moment
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span class=\"no-products\">There are no products at the moment.</span>`
        unorderedList.appendChild(listItem);

        // exit the function displayCart() prematurely
        return;
    }

    // B) in the event there are products
    // a for loop is used to iteratively populate class name "all-cards-container"
    // with a list of items representing each data

    for (let index = 0; index < data.length; index++) {
        let listItem = document.createElement("li");
        listItem.className = "card-container";
        listItem.innerHTML = `
            <div class="crop">
                <img src="${data[index].image}"/>
            </div>
            <h3>${data[index].title}</h3>
            <p>${data[index].content}</p>
        `
        unorderedList.appendChild(listItem);
    }

};

//  ----------- area to invoke the functions ----------- 

// temporary data
var data = [];

data = [
    { 
        image: "images/course-software.jpg", 
        title: "Software Engineering",
        content: "Web Development, Mobile Development, iOT, APIs",
    },
    {
        image: "images/course-computer-art.jpg", 
        title: "Computer art",
        content: "Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation",
    },
    { 
        image: "images/course-design.jpg", 
        title: "Design",
        content: "User Experience Design, User Research, Visual Design",
    },
    { 
        image: "images/information-campus-mobile.jpg", 
        title: "Geography",
        content: "Visiting places less travelled",
    },
    {
        image: "images/information-guest-lecture-mobile.jpg", 
        title: "Humanities",
        content: "Branches of knowledge that concern human beings, culture or analytic and critical methods of inquiry",
    },
    { 
        image: "images/information-orientation-mobile.jpg", 
        title: "Information in Transit",
        category: "Online",
        content: "Learn about data that is transferred over a private network or the Internet",
    },
];

// invoke function to store sample data into the web browser's localStorage
storeDataToLocalStorage(data);

// invoke function to load data retrieved from web browser's localStorage
// the data retrieved shall be stored in the global variable result
loadDataFromLocalStorage();

// invoke function displayCart(), pass in the data to populate the unordered list 
// displayCart(result)
