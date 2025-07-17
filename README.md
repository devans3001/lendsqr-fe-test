# Lendsqr Frontend Engineering Assessment

This is my submission for the Lendsqr frontend engineering assessment. The app is a user management dashboard built with React, TypeScript, SCSS, and a mock API.

## 🚀 Live Demo

🔗 [https://evans-diegbe-lendsqr-fe-test.vercel.app](https://evans-diegbe-lendsqr-fe-test.vercel.app)

📦 Tech Stack

    React + Next.js (App Router)

    TypeScript

    SCSS (SASS Modules)

    Jest + React Testing Library

    Mock API with 500 users (via @faker-js/faker)

    Vercel (for deployment)

## 📁 Features

- ✅ Login page with validation
- ✅ Dashboard with sidebar and top navigation
- ✅ Users page with:
  - Table of 500 mock users
  - Pagination, sorting, filtering
  - Row actions (View Details, Blacklist, etc.)
- ✅ User Details page with tabs
- ✅ Unit tests with positive and negative scenarios
- ✅ Responsive design (Mobile & Desktop)
- ✅ SCSS for styling

## 🧪 Testing

Unit tests were written using React Testing Library and Jest to ensure key components and features behave correctly under both positive and negative scenarios.
✅ Covered Tests:

    Login Page

        Validates form input (required fields)

        Simulates successful login flow (positive scenario)

    User Table

        filterUser: Ensures filtering users by input works as expected

        sortUser: Tests sorting logic when headers are clicked

        pagination: Verifies correct pagination behavior and page transitions

        userHeadArrow: Ensures sort arrow indicators update based on state

        userTable: Checks rendering of user data and fallback cases (empty or loading)

To run tests:

```bash
npm test
# or
yarn test


🛠 Installation

```bash
git clone https://github.com/lendsqr-fe-test.git
cd lendsqr-fe-test
npm install
npm run dev