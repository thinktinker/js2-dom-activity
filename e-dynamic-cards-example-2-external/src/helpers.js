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

// create an unordered list element with the classname "all-cards-container"
const unorderedList = document.createElement("ul")
unorderedList.className = "all-cards-container"

// 1. invoke function displayCart(), pass in the list items to unordered list element 
// 2. append the updated unordered list element to element with classname "placeholder" - found in cards.html
unorderedList.innerHTML = displayCart(data)
document.getElementsByClassName("placeholder")[0].appendChild(unorderedList)

// displayCard() receives an array of JSON objects
// and uses method map() iteratively to return a list of items from parameter data
function displayCart(data){
    return data.map((item, key) => `
        <li class="card-container">
            <div class="crop">
                <img src="${item.image}"/>
            </div>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        </li>`).join('');
};


