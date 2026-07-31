# Saucedemo UI Test Suite

End-to-end test suite for [saucedemo.com](https://www.saucedemo.com) -  
a practice e-commerce platform built for automation testing.

## Tech Stack
- Playwright
- TypeScript

## Project Structure
- `pages/` — Page Object Model classes
- `tests/` — Test specs
- `fixtures/` — Test data and interfaces

> As the project is small, interfaces and test data are kept together 
> in `fixtures/`. In a larger project these would be separated into 
> dedicated `types` and `helpers` folders.
> 
> `Checkout.spec.ts` file contains three describe suites, because those tests
> cover one functionality (checkout) across three pages.
> On a bigger project, there will be three separate files for each checkout
> page.
>
> `users.ts` contains real app accounts. `credentials.ts` contains 
> invalid input combinations used for negative testing.
> 
> In order to showcase test data files, user credentials are made public.
> Obviously, on a real project the solution is different.
>
> There are no separate `Header.ts`/`Footer.ts` files because for the project of this size
> it's more rational to create a direct BasePage.

## How to Run

Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npx playwright test
```

Run in headed mode:
```bash
npx playwright test --headed
```

## Test Coverage

### Login Page
- Successful login with valid credentials
- Login with locked out user
- Login with incorrect username
- Login with incorrect password
- Login with empty username
- Login with empty password
- Login with empty fields

### Dashboard Page
- Product card displays name, price and image (showcasing loop through all 6 products)
- Sorting by price in ascending order
- Add to Cart button updates cart icon counter and changes the button to Remove
- Click on product name redirects to product page
- Click on Cart icon redirects to Cart page

### Cart Page
- Remove button removes an item from the cart
- Continue shopping button redirect to the Dashboard without removing the items from the cart
- Checkout button redirects to the checkout page

### Checkout Page - Personal Info
- User proceeds to checkout overview with valid personal info
- Cancel button redirects to cart page
- Error message when first name field is empty
- Error message when last name field is empty
- Error message when postal code field is empty

### Checkout Page - Overview
- Finish button redirects to checkout complete page
- Cancel button redirects to dashboard without clearing cart
- Total price is correctly calculated as sum of subtotal and tax

### E2E Flow
- Complete full purchase flow (login → add to cart → checkout → order complete → back to dashboard)

## What's Next
- Refactoring: login fixture to bypass login in beforeEach
- Cart setup fixture to bypass UI cart setup