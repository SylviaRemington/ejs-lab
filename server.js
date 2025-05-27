/*
In this lab, you’ll construct a dynamic website for 
a fictional restaurant, “The Green Byte Bistro.” 
This hands-on experience is designed to solidify 
your understanding of using EJS templates with an Express.js application.

What You’ll Build
You’re going to create a vibrant, interactive website for The Green Byte Bistro. This website will feature:

Homepage: Displays key details of the bistro - name, address, and contact info.
Nav Bar: Includes links to various sections of the site.
Menu Page: Showcases the menu, sorted into mains, desserts, and sides.
Category Page: Generates pages for each menu type, using route parameters for content rendering.
*/

//set up
const express = require('express');
const app = express();

//lab exercise set up
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

//route
// app.get('/', (req, res) => {
//   res.send('Hello There!');
// });

app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: 'Welcome to the home page'
  });
});

app.listen(3000);





/*
For question one notes -- so I better understand what exercise is asking of me:
This question is asking you to change the code in your web application 
(likely written in Node.js with the Express framework) so that when someone 
visits the homepage of your website (the / route), it displays the home.ejs 
template file instead of whatever it was showing before.

In plain English:
"Change the part of your code that controls what shows up on your website's main page. 
Make it display the home.ejs file (which contains an <h1>Home Page</h1> heading) 
instead of whatever it was showing previously. 
After you make this change, when you refresh your browser on the homepage, 
you should see 'Home Page' as a large heading."

Key things you'd need to do:
Find the route in your code that handles the / URL (the homepage)
Modify it to use res.render('home.ejs') instead of whatever response it was sending before
Ensure you have a home.ejs file in your views folder that contains <h1>Home Page</h1>
This is a basic task in web development where you're connecting a URL to a specific template/view file.
*/