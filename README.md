
# Appium Android + iOS Automation Framework

A professional mobile test automation framework using **Appium 3.4.2 + WebdriverIO (JavaScript)**.
Covers Android and iOS native app testing with Page Object Model, real device and emulator support.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Appium | 3.4.2 |
| WebdriverIO | Latest |
| Language | JavaScript |
| Android Emulator | Pixel 2 Android 11 |
| Demo App | Sauce Labs Swag Labs APK |

---

## Project Structure

```
appium-android-ios-proj/
├── .github/          # GitHub Actions CI/CD workflows
├── config/           # WebdriverIO config files (Android + iOS)
├── src/              # Page Object Models and test specs
├── test-data/        # Test data and fixtures
├── package.json
└── README.md
```

---

## Features

- Page Object Model (POM) architecture
- Android emulator and real device support
- iOS simulator support
- Accessibility ID selectors
- CI/CD with GitHub Actions

---

## How to Run

```bash
npm install
npx wdio run config/wdio.android.conf.js
```

---