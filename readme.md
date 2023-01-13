# E-Commerce With API

If you are grading this, please see bottom!

This is a small e-commerce front end built for the React 103 module of the Devslopes Web Academy. The focus of the project was to practice fetching data from an API within a React app.

CommerceJS was used for all back end functionality, since back end development is not yet taught at this stage of the academy. About 40-50 imaginary products were created, each with a number of custom attributes.

The products showcased are imaginary, as is the 3D asset brand, Vee3D. The project was designed to be as flexible as possible, so that the products, brand, and look of the site can be easily changed.

## Project Requirements

These are the relevant requirements for the project as defined by Devslopes Web Academy.

> **Front-end**
> 1. Build a homepage that shows product images, titles, and prices
> 1. Each item should have an Add to Cart button
> 1. There should be a navigation bar with a cart icon
> 1. The cart icon should update based on how many items are in it (ie 3, 5, 10)
> 1. Menu item for Login/Signup
> 1. User can sign up and log in
> 1. Each item should have a details page that has an Image, Title, Description, and Price. A user can add to the cart as well as change the quantity.
>
> **Full-Stack**
> 1. You must get your front-end to "talk" to CommerceJS's API. This means fetching products, parsing the JSON, and displaying those items in the UI of the app.
> 1. You CANNOT use their SDK or CDN. You must use a standard HTTP library such as Fetch or Axios and you must parse the JSON yourself. All HTTP request examples can be found in the documentation.
>
> **End Result:** A user should be able to use your front end just as they might use Amazon.com.

## Main Features

The site has many of the fundamental features you would expect to see in an E-Commerce platform, including a fair few that I wasn't required to include. I feel that including these "extra" features strengthens the project as a whole.

- Landing Page
- Product Browsing Page
    - Search Bar
    - Sorting Options
    - Filter Sidebar
    - Product Modals
- Checkout Process
    1. View Cart
    1. Shipping Info
    1. Payment Info
    1. Confirmation
- Sign In/Create Account
- Easy Customization
- Mobile Responsiveness
- Fast, React Router-Like Navigation

## Project Structure

React Router was not allowed for this project, so I implemented a similar (and very simplified) navigation system myself.

Components with the suffix "Hub" are responsible for conditionally rendering child components based on the page the user requested, and for distributing props that need to be shared among those components.

Only one immediate child of these "Hub" components is rendered at any given time.

- **AppHub**
    - **AccountManagementHub**
        - SignIn
        - CreateAccount
    - **BrowsingHub**
        - MainPage (landing page)
        - BrowsingPage
    - **OrderStepHub**
        - Cart
        - ShippingInfo
        - PaymentInfo
        - OrderConfirmation

A few JavaScript files are stored directly in the `src` folder. These mainly contain logic and data that I saw fit to separate from the components. 

## Customization

A number of key aspects of the site can be customized easily, with minimal coding knowledge required.

- **Text**: To change some of the site's text, follow these steps. 
    1. Open `src/constants.js` in a code editor or text editor of your choice. 
    1. After the imports, find three strings, named `brandName`, `mainPageHookText`, and `mainPageGoButtonText`. 
    1. Change these strings to whatever you want. This allows you to quickly change the brand name displayed throughout the site, as well as the text featured at the center of the landing page.
- **Images**: Most of the images on the site will come from the product data you define on CommerceJS. But you can easily change the main page hero image by following the steps above, and instead changing the `mainPageHeroImg` string to your desired image URL.
- **Colors**: To change the site's color palette, follow these steps.
    1. Open `src/App.css` in a code editor or text editor of your choice.
    1. Find the color values listed under `:root`. E.g. `--color-alpha`, `--color-beta`, etc.
    1. Change these color values to whatever you want. Most of the site's colors are stored here, so just a few changes can drastically change the site's overall look.
- **Products**: This site relies on CommerceJS to store and provide all of its product data. 
    - To showcase your own products, you'll need to create a new CommerceJS store and populate it with products and related data.
    - This process has a slight learning curve that is outside the scope of this documentation. You can find plenty of instructions elsewhere on how to do this.
- **Product Filters**: Unfortunately, I was unable to find a way to make this part friendly to non-programmers. See the Limitations section below.

**IMPORTANT**: To access your own CommerceJS store, you will need to create a file named `.env` in the root directory of the project. This file will need the following contents:

```
VITE_PUBLIC_KEY=*your key here*
VITE_SECRET_KEY=*your key here*
```

Replace `*your key here*` with the public key and secret key that come with the CommerceJS store you create.

## Limitations

All software has limitations. This site has quite a few, partly because of my level of experience, and partly because its main purpose was as an academy assignment, not a truly viable e-commerce platform.

### **The product filtering is not very flexible.**

The implementation of product filtering depends heavily on your products and their unique data. For example, the imaginary company I used, Vee3D, sells 3D models. Every 3D model has a polygon count. 

But this type of data is specific to 3D models; it's not applicable if you're selling clothing or herbal tea. Likewise, filters for fabric type or tea flavor would make no sense in Vee3D's store.

The filters' functionality also depends on what you want to do with each piece of data. Want to include a filter for clothing in a specific size range? Or for teas with a steep time less than certain number? This is fairly simple logic, but it is still unique to your data, and therefore requires a custom implementation.

This is why a programmer who is competent in JavaScript will need to implement your filters based on your unique needs. They will need to take a look at the `filterProducts` function in `src/components/Browsing/ProductList/ProductList.jsx`, take note of the patterns used, and alter as needed.

### **Many back end features are missing.**

For example, while it may appear as if you are able to create an account and sign in with it, this is purely front end trickery. No data is sent or stored anywhere. If you refresh the page, the "account" you created will be lost.

Also, no functionality is provided for actually processing payments or shipping products. I believe CommerceJS provides this type of functionality, but for security and project scope reasons, I didn't look into it.

## Other Details

To the grader: Use these example credentials to test log in functionality.

Email: person@example.com
Password: password1