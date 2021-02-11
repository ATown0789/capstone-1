<h1>The Problem Solving Framework : 'UPER'</h1>

- U = "Understand"
- P = "Plan"
- E = "Execute"
- R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>

- Design
  - Welcome Page
    - Simple and inviting
  - Buy Music Page
    - Contain both physical and digital media options
      - Option to buy entire album digitally or individual songs
      - On-click of album art, show detail view that includes songs on album as well as all other pertant information.
  - About page
    - Simple about with CTA at bottom
  - Upcomming Shows page
    - Contain a calendar of events ideally from reverbnation
  - Contact Page
    - Contain a form and maybe a calendly calendar
  - Photos Page
  - Videos Page
  - Shopping Cart Page
    - Allow customers to see what has been purchased, edit contents of cart, and buy.
  - Easy navigation

<h2>
    2. Planning the Solution
</h2>

- Use Figma for prototyping/designing layout.
- Use React to build SPA
  - Use routes for page views
  - Create components for each product and fill with necessary information
  - Create button component for add to cart, preview song, and buy now functionality
  - Create component for pop-out modals when click on album art.
- Search functionality (I have no idea).
- Use SCSS for styling
- Animations if I have time

<h2>
    3. Executing the Plan
</h2>

- Learn and use Figma for wireframe/designing overall layout and look of site
- Use exercise 2 as a starting point to get structure and routes/views setup quickly
- Write a data.json to store all of my product information
- Write Product component to display main album information
  - Get album info from data.json and store in product array
  - Map through array and use each album's info as props to product component.
- Write ProductModal Component to display product detail and individual song options.
  - Research how to make modals
  - Get product info from data.json
- Make add to cart button
  - Add item to state cart array
- Make Shopping Cart Page
  - Shopping cart component
  - Item component that takes in each item via mapped cart array
  - +/- buttons to incrament or decrament amount to buy
  - delete button to remove item from cart
  - buy now button to purchase items
- Make search function to filter through albums
  - I assume the .filter method would be used but I'm not 100% on the implementation. My initial thought is to filter through the product array and then map through the new array and use product component to display filtered products.
- Figure out integration with paypal
- Style as necessary to get MVP
- Refine style once functional

<h2>
    4. Reflection / Refactor
</h2>
*
*
*
*
*
*
*
*
