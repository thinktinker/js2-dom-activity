// save temporary data to local storage
//  ----------- area to invoke the functions ----------- 

// temporary data
var data = [];


data = [
    { 
        id: 1, 
        title: "Software Engineering",
        content: "Web Development, Mobile Development, iOT, APIs",
        image: "images/course-software.jpg", 
    },
    {
        id: 2, 
        title: "Computer art",
        content: "Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation",
        image: "images/course-computer-art.jpg", 
    },
    { 
        id: 3, 
        title: "Design",
        content: "User Experience Design, User Research, Visual Design",
        image: "images/course-design.jpg", 
    },
    { 
        id: 4, 
        title: "Geography",
        content: "Visiting places less travelled",
        image: "images/information-campus-mobile.jpg", 
    },
]; 

/*
    {
        id: 5, 
        title: "Humanities",
        content: "Branches of knowledge that concern human beings, culture or analytic and critical methods of inquiry",
        image: "images/information-guest-lecture-mobile.jpg", 
    },
    { 
        id: 6, 
        title: "Information in Transit",
        category: "Online",
        content: "Learn about data that is transferred over a private network or the Internet",
        image: "images/information-orientation-mobile.jpg", 
    },
*/


// Initialize a new TaskManager with currentId set to 6 (number of elements in data)
const productsController = new Controller(6, data);
productsController.loadDataFromLocalStorage();