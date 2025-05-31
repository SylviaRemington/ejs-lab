// EJS LAB - DUE 6/2/2025
/*
In this lab, you’ll construct a dynamic website for 
a fictional restaurant, “The Green Byte Bistro.” 
This hands-on experience is designed to solidify 
your understanding of using EJS templates with an 
Express.js application.

What You’ll Build
You’re going to create a vibrant, interactive website for The Green Byte Bistro. 
This website will feature:

Homepage: Displays key details of the bistro - name, address, and contact info.
Nav Bar: Includes links to various sections of the site.
Menu Page: Showcases the menu, sorted into mains, desserts, and sides.
Category Page: Generates pages for each menu type, using route parameters for content rendering.
*/

//Set Up
const express = require('express');
const app = express();
const port = 3000;

//Lab Exercise Set Up
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

//Route
// app.get('/', (req, res) => {
//   res.send('Hello There!');
// });

app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: 'Welcome to the home page'
  });
});

//Listening on Port 3000
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


/*
INFO ABOUT EJS FROM CHATGPT:

🔴 That’s the difference.
With EJS: the page is ready before it gets to you.
With DOM: the page is not ready until your computer builds it.
That’s why the timing (“before” vs. “after”) matters.

❓Why does this matter?
Because it changes how fast the page shows up and how much can go wrong.

✅ When the server builds the page first (EJS):
You see the full page right away
You don’t have to wait for anything else to load
Even if your internet is slow, the full page comes through
If JavaScript is broken or turned off, the page still works

❓Why use EJS?
Because it saves you time when you have a lot of stuff to show on a web page.

🧍 Imagine this:
You own a store.
You want to show all your shoes on your website.

You have 3 shoes today:

Birkenstocks

Air Jordans

Utility Boots

Next week you’ll have 20 shoes.

Then 100 shoes.

❌ If you use plain HTML:
You have to type this by hand for every shoe:
<h2>Birkenstocks - $50</h2>
<h2>Air Jordans - $500</h2>
<h2>Utility Boots - $20</h2>
Then again next week with 20 new lines.
Then again the week after with 100 new lines.
Over and over.

✅ If you use EJS:
You write one single template (a blank form) that says:

“For every shoe, show its name and price.”

You only write this one time, like this:

<h2><%= shoe.name %> - $<%= shoe.price %></h2>
Then your website fills in the blanks using your list of shoes.

So when you add or remove shoes, the page updates by itself.

You don’t touch the page again.

🧾 So the real answer is:
Yes. EJS is used because it helps you show a lot of changing data without typing everything manually.

It is faster. It saves work. It is for pages that change often.

That’s the only reason people use it.


------------------------------------------------

❓Your question:
Why use EJS? Why not just do it all in JavaScript?

🔹 What EJS does
EJS lets you:

Write a page layout using HTML

Fill in changing data (like names, products, scores)

Send the complete page to the browser — already filled in

You do this on the server using Node and Express.

🔹 What JavaScript (DOM) does
Regular JavaScript in the browser can:

Grab page elements after the page loads

Add or change content using the DOM (like .innerText, .appendChild)

Needs separate code to request data from the server

This runs after the page is already shown.

🔹 Why use EJS instead of all JS
Option A: All JavaScript (DOM)
You:

Send a blank HTML page

Use JavaScript to fetch the data

Use document.createElement or .innerHTML to add stuff

This requires:

An extra request for the data (API call)

Writing extra DOM code

More time to load content

Option B: EJS
You:

Build the page on the server using EJS

Fill in data before sending it

Send one full, complete page to the user

This requires:

No DOM code to build the page

No extra data requests

Less loading time


🔹 When people use EJS
You have data (like products, posts, users)

You want the page to load already filled in

You are using Express on the server


*/