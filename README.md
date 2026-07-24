# 🎭 Playwright TypeScript Automation Framework

A robust End-to-End (E2E) automation framework built using **Playwright** and **TypeScript**. This project demonstrates modern web automation practices, including locator strategies, assertions, screenshots, fixtures, HTML reporting, cross-browser testing, and test organization.

---

# 🚀 Project Overview
This project automates critical user workflows of the TodoMVC React Application, showcasing:

Resilient Locator Strategies using getByRole and getByTestId
Atomic Test Design principles
Page Interventions (Input, Click, Filter, Check)
State Verification & Assertions

---

# 🛠 Tech Stack

| Tool | Technology |
|------|------------|
| Automation | Playwright |
| Language | TypeScript |
| Runtime | Node.js |
| IDE | Visual Studio Code |
| Version Control | Git |
| Repository | GitHub |

---
📂 Test Scenarios Covered
The project includes atomic tests (todo.spec.js) covering:

✅ Task Creation: Adding multiple Todo items dynamically
✅ Task Management: Marking items as completed
✅ Filtering: Verifying 'Active' vs 'Completed' filters
✅ Verification: Asserting visibility and state of todo items

# 📂 Project Structure

```
playwright-typescript-framework
│
├── .github
│   └── workflows
│
├── tests
│   ├── example.spec.ts
│   └── todo.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ▶️ Installation

Clone the repository

```bash
git clone https://github.com/shipra1402/playwright-typescript-framework.git
```

Move into the project

```bash
cd playwright-typescript-framework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run headed mode

```bash
npx playwright test --headed
```

Run UI mode

```bash
npx playwright test --ui
```

Run Chromium

```bash
npx playwright test --project=chromium
```

Run Firefox

```bash
npx playwright test --project=firefox
```

Run WebKit

```bash
npx playwright test --project=webkit
```

Run Sanity tests

```bash
npx playwright test --grep "@sanity"
```

---

# 📊 HTML Report

Generate the Playwright HTML Report

```bash
npx playwright show-report
```

---

# 🌍 Supported Browsers

- Chromium
- Firefox
- WebKit

---

# 📌 Future Enhancements

- Page Object Model (POM)
- Data Driven Framework
- API Testing
- Environment Configuration
- GitHub Actions CI/CD
- Allure Reports
- Excel Data Reader
- Custom Fixtures

# 🤝 Contribution
Feel free to fork this project and submit PRs! Open to discussions on improving test patterns.

Created by Shipra - SDET / QA Engineer
