
// Menu Items
const menuItems = [
    { category: 'Appetizers', name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil, drizzled with balsamic glaze.', 
    price: '$8.99', image: '../Image/caprese_salad.jpg' },
    { category: 'Appetizers', name: 'Garlic Bread', description: 'Toasted Italian bread with garlic butter and herbs.', price: '$5.99', 
    image: '../Image/garlic_bread.jpg' },
    { category: 'Main Courses', name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with bacon, eggs, and Parmesan cheese.',
     price: '$12.99', image: '../Image/spaghetti_carbonara.jpg' },
    { category: 'Main Courses', name: 'Margherita Pizza', description: 'Traditional pizza topped with tomato sauce, fresh mozzarella, and basil.', 
    price: '$14.99', image: '../Image/margherita_pizza.jpg' },
    { category: 'Main Courses', name: 'Grilled Salmon', description: 'Fresh Atlantic salmon grilled to perfection, served with roasted vegetables.', 
    price: '$17.99', image: '../Image/grilled_salmon.jpg' },
    { category: 'Main Courses', name: 'Beef Tenderloin', description: 'Tender beef tenderloin steak cooked to your preference, accompanied by mashed potatoes.', 
    price: '$24.99', image: '../Image/beef_tenderloin.jpg' },
    { category: 'Desserts', name: 'Tiramisu', description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers.', 
    price: '$6.99', image: '../Image/tiramisu.jpg' },
    { category: 'Desserts', name: 'Cannoli', description: 'Sweet ricotta-filled pastry tubes, dusted with powdered sugar.', 
    price: '$4.99', image: '../Image/cannoli.jpg' },
    { category: 'Drinks', name: 'Espresso', description: 'Strong Italian coffee served in a small cup.', price: '$3.99', 
    image: '../Image/espresso.jpg' },
    { category: 'Drinks', name: 'Limoncello', description: 'Italian lemon liqueur, served chilled.', price: '$5.99', 
    image: '../Image/limoncello.jpg' }
];

// Function to generate menu items
function generateMenuItems() {
    const menuList = document.querySelector('.menu-list');
    menuList.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        menuList.appendChild(menuItem);
    });
}


// Call the function to generate menu items when the page loads
window.onload = generateMenuItems;
