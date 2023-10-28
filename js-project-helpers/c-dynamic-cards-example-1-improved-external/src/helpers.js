
// temporary data
const data = [
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
]

// displayCard() receives an array of JSON objects
function displayCart(data){

    // a for loop is used to iteratively populate class name "all-cards-container"
    // with a list of items representing each data
    const unorderedList = document.querySelector(".all-cards-container")

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
        unorderedList.appendChild(listItem)
    }

};

//  ----------- area to invoke the functions here ----------- 

// invoke function displayCart(), pass in the data to populate the unordered list 
displayCart(data)
