# Saucedemo UI Test Suite

End-to-end test suite for [saucedemo.com](https://www.saucedemo.com) — 
a practice e-commerce platform built for automation testing.

## Tech Stack
- Playwright
- TypeScript

## Project Structure
- `pages/` — Page Object Model classes
- `tests/` — Test specs
- `fixtures/` — Test data and interfaces

> As the project is small, interfaces and test data are kept together 
> in `fixtures/users.ts`. In a larger project these would be separated 
> into dedicated `types` and `helpers` folders.

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

## What's Next
- Login with invalid credentials
- Dashboard page tests
- Cart and checkout flows