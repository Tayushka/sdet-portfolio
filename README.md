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
> `users.ts` contains real app accounts. `credentials.ts` contains 
> invalid input combinations used for negative testing.
> 
> In order to showcase test data files, user credentials are made public.
> Obviously, on a real project the solution is different.

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
- Add to Cart button updates cart icon counter
- Add to Cart button changes to Remove after item is added
- Click on product name redirects to product page
- Click on Cart icon redirects to Cart page

## What's Next
- Dashboard page tests
- Cart and checkout flows
- Refactoring: creation of BasePage
- Refactoring: login fixture to bypass login in beforeEach