# React Homework - Modular Grading System

## Overview
**Modular 10-point grading system** with separate test files for each objective. Perfect for GitHub Actions automated grading!

## 📁 Test Structure

```
tests/
├── BaseTestHelper.js           # Shared utilities
├── summary.test.js             # Combined final grade
├── components/                 # Component tests (7 points)
│   ├── title.test.js          # Title Component (2 points)
│   ├── experienceHeader.test.js # ExperienceHeader (1 point)
│   ├── experienceBody.test.js   # ExperienceBody (1 point)
│   ├── experience.test.js       # Experience (2 points)
│   └── app.test.js             # App Component (1 point)
└── technical/                  # Technical tests (3 points)
    ├── reactCreateElement.test.js # React.createElement (1 point)
    └── noJSX.test.js             # No JSX usage (1 point)
```

## 🚀 Local Testing Commands

### Individual Component Tests
```bash
npm run test:title           # Title Component (2 points)
npm run test:header          # ExperienceHeader (1 point)
npm run test:body            # ExperienceBody (1 point)
npm run test:experience      # Experience (2 points)
npm run test:app             # App Component (1 point)
```

### Technical Requirement Tests
```bash
npm run test:create-element  # React.createElement usage (1 point)
npm run test:no-jsx          # No JSX usage (1 point)
```

### Grouped Tests
```bash
npm run test:components      # All component tests (7 points)
npm run test:technical       # All technical tests (3 points)
npm run test:all            # All tests
npm test                    # Final grade summary
```

## 🤖 GitHub Actions Grading

### Automatic Grading Workflow
The `.github/workflows/grade.yml` file runs:
- **7 separate jobs** for each test objective
- **Parallel execution** for faster grading
- **Individual feedback** for each component
- **Final grade summary** combining all results

### GitHub Actions Features
- ✅ **Parallel Testing**: All tests run simultaneously
- ✅ **Individual Feedback**: Each component gets separate results
- ✅ **Detailed Logs**: Students see exactly what failed
- ✅ **Grade Summary**: Final report with total score
- ✅ **Artifact Storage**: Test results saved for review

### Workflow Triggers
- Push to main/master branch
- Pull requests
- Manual workflow dispatch

## 📊 Sample Individual Test Output

### Title Component Test (2 points)
```
✅ Title component exists and is a function (+1 point)
✅ Title renders h1 element (+0.5 points)
✅ Title has correct className "title" (+0.5 points)

📊 Title Component Score: 2/2 points
```

### Failed Test Example
```
❌ ExperienceHeader component not found
💡 Hint: Make sure you have a function called ExperienceHeader

📊 ExperienceHeader Component Score: 0/1 points
```

## 🎯 Point Distribution (10 points total)

| Test File | Component | Points | Description |
|-----------|-----------|---------|-------------|
| `title.test.js` | Title | 2 | h1 element with correct className |
| `experienceHeader.test.js` | ExperienceHeader | 1 | div with experience-header class |
| `experienceBody.test.js` | ExperienceBody | 1 | div with experience-body class |
| `experience.test.js` | Experience | 2 | Composition component with children |
| `app.test.js` | App | 1 | Main component with resume-container |
| `reactCreateElement.test.js` | Technical | 1 | Uses React.createElement |
| `noJSX.test.js` | Technical | 1 | No JSX syntax used |

## 🔧 Setup for Instructors

### Grade Student Submissions
1. **Replace `index.html`** with student's file
2. **Push to GitHub** or run locally:
```bash
npm test  # Local grading
```