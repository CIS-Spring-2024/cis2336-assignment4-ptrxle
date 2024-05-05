const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('C:/Users/lepet/github-classroom/CIS-Spring-2024/cis-2336-assignment-1-ptrxle/cis-2336-assignmnet2-ptrxle/cis2336-assignment3-ptrxle/cis2336-assignment4-ptrxle/Frontend'));

app.get('/', (req, res) => {
   
    res.sendFile('C:/Users/lepet/github-classroom/CIS-Spring-2024/cis-2336-assignment-1-ptrxle/cis-2336-assignmnet2-ptrxle/cis2336-assignment3-ptrxle/cis2336-assignment4-ptrxle/Frontend/HTML/order.html');
});

app.post('/submit-order', (req, res) => {
    const formData = req.body;
    // Process form data
    const totalAmount = calculateTotalAmount(formData);
    res.send(`Your order total is $${totalAmount.toFixed(2)}`);
});

// calculate total amount
function calculateTotalAmount(formData) {
    let totalAmount = 0;
    // Add up the total amount of each item
    totalAmount += parseFloat(formData.appetizer.price) * parseInt(formData.appetizer.quantity);
    totalAmount += parseFloat(formData.mainCourse.price) * parseInt(formData.mainCourse.quantity);
    totalAmount += parseFloat(formData.dessert.price) * parseInt(formData.dessert.quantity);
    totalAmount += parseFloat(formData.drink.price) * parseInt(formData.drink.quantity);
    return totalAmount;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
