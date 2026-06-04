# Appium Android + iOS Automation Framework

Mobile test automation framework using Appium 3.4.2 and WebdriverIO (JavaScript).
Tests the Sauce Labs Swag Labs demo app on Android and iOS using Page Object Model architecture.

---

## Tech Stack

| Tool | Details |
|------|---------|
| Appium | 3.4.2 |
| WebdriverIO | Latest |
| Language | JavaScript |
| Android | Pixel 2 Emulator, Android 11 |
| iOS | Sauce Labs iOS Simulator |
| Demo App | Sauce Labs Swag Labs |
| CI/CD | GitHub Actions |

---

## Project Structure

```
appium-android-ios-automation/
├── .github/
│   └── workflows/
│       └── mobile-ci.yml     # GitHub Actions CI/CD
├── config/
│   ├── wdio.android.conf.js  # Android config
│   ├── wdio.ios.conf.js      # iOS config
│   └── wdio.shared.conf.js   # Shared config
├── src/
│   ├── apps/                 # APK and iOS app files
│   ├── pages/                # Page Object Models
│   └── tests/                # Test specs
├── test-data/                # Test data and fixtures
├── package.json
└── README.md
```

---

## Features

- Page Object Model (POM) architecture
- Android emulator and real device support
- iOS simulator support
- Accessibility ID selectors
- Reusable test data management
- CI/CD with GitHub Actions
- Daily automated smoke tests

---

## How to Run Locally

Install dependencies:

```bash
npm install
```

Run Android tests:

```bash
npx wdio run config/wdio.android.conf.js
```

Run iOS tests:

```bash
npx wdio run config/wdio.ios.conf.js
```

Run smoke tests only:

```bash
npx wdio run config/wdio.android.conf.js --mochaOpts.grep @smoke
```

---

## CI/CD

Automated with GitHub Actions on every push to master.
Workflow installs dependencies and executes the test suite.

Smoke tests run automatically every day at 5am Chicago time.
This simulates a real production health check workflow.

| Trigger | What runs |
|---------|-----------|
| Push to master | Full test suite |
| Daily 5am cron | Smoke tests only |

Note: Mobile emulator tests require a local environment.
GitHub Actions is configured for dependency validation and future cloud device integration.

---

## Portfolio Roadmap

Part of a two-project QA automation portfolio testing the same Sauce Labs Swag Labs application
across mobile and web platforms.

| Project | Tool | Status |
|---------|------|--------|
| Mobile automation (this repo) | Appium 3.4.2 + WebdriverIO | In progress |
| Web automation | Playwright + JavaScript | Coming soon |

---

## Author

Nara Bayaraa | QA Automation Engineer | Chicago, IL

- GitHub: https://github.com/Nara-Bayaraa
- LinkedIn: https://linkedin.com/in/Nara-Bayaraa
- Email: narab.qa@gmail.com

## License

This project is for portfolio and educational purposes.

---

**Happy Testing! 🚀**