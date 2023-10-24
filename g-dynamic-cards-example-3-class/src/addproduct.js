
// Initialize a new ItemsController with currentId set to 0
const productsController = new Controller();

// Select the New Item Form
const newProductForm = document.querySelector('#productForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newProductTitle = document.querySelector('#productTitle');
    const newProductContent = document.querySelector('#productContent');
    const newProductImageUrl = document.querySelector('#productImageUrl');    

    // Get the values of the inputs
    const title = newProductTitle.value;
    const content = newProductContent.value;
    const image = newProductImageUrl.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    productsController.addProduct(title, content, image);


    // Run BootStrap4's toast to show the activity is complete.
    $('.toast').toast('show');

    // Clear the form
    newProductTitle.value = '';
    newProductContent.value = '';   
    newProductImageUrl.value = '';    
});

// Eventhandler in jQuery for Bootstrap4's toast. 
// Opens the products listed in another page after the [x] is clicked
$('.toast').on('hidden.bs.toast', function () {
    
    // basic way of opening a new page in javascript
    // document.location.href='cards.html';
    
    // open a page in a new tab
    // window.open('cards.html', '_blank');
    window.open("cards.html", "productlistwindow");
})
