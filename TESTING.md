# Testing Instructions for React Resume Homework

## Overview
This testing suite automatically evaluates student React implementations to ensure they meet all homework requirements.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Student Work
Place the student's completed `index.html` file in the root directory and run:

```bash
npm test
```

### 3. Watch Mode (for development)
```bash
npm run test:watch
```

### 4. Coverage Report
```bash
npm run test:coverage
```

## What the Tests Check

### Component Existence ✅
- All required components are defined: `Title`, `ExperienceHeader`, `ExperienceBody`, `Experience`, `App`
- Components are functions (not classes)

### React.createElement Usage ✅
- No JSX syntax used (no `<` or `>` in component code)
- Proper use of `React.createElement()`
- Correct element types (h1, div, etc.)

### Component Structure ✅
- **Title**: Renders `h1` with `className="title"`
- **ExperienceHeader**: Renders `div` with `className="experience-header"`
- **ExperienceBody**: Renders `div` with `className="experience-body"`
- **Experience**: Renders `div` with `className="experience"` containing header and body
- **App**: Renders main container with `className="resume-container"`

### Props Handling ✅
- Components accept and use props correctly
- `Title` displays `props.text`
- `ExperienceHeader` displays `props.title`
- `ExperienceBody` displays `props.description`
- `Experience` passes props to child components

### Content Requirements ✅
- Resume title displays "My Resume"
- IT Club Leader experience included with correct text
- Coffee Barista experience included with correct text
- Proper composition of components

### CSS Classes ✅
- All required CSS classes are present
- Elements have correct class names for styling

## Test Output Explanation

### PASSED Tests ✅
- Component is correctly implemented
- Meets all requirements for that section

### FAILED Tests ❌
- Shows specific issues found
- Lists what needs to be fixed

### Sample Output
```
=== STUDENT TEST RESULTS ===
Total tests: 8
Passed: 7
Failed: 1

Title Component: PASSED
ExperienceHeader Component: PASSED
ExperienceBody Component: FAILED
  - ExperienceBody should have className "experience-body"
Experience Component: PASSED
App Component: PASSED
React.createElement Usage: PASSED
Component Composition: PASSED
Props Handling: PASSED
```

## Grading Rubric

| Component | Points | Requirements |
|-----------|---------|-------------|
| Title | 15 | Function component, h1 element, title class, displays prop |
| ExperienceHeader | 15 | Function component, div element, header class, displays prop |
| ExperienceBody | 15 | Function component, div element, body class, displays prop |
| Experience | 20 | Composition component, combines header/body, passes props |
| App | 20 | Main component, renders all parts, correct data |
| React.createElement | 10 | No JSX, proper createElement usage |
| CSS Classes | 5 | All required classes present |

**Total: 100 points**

## Common Issues and Solutions

### Issue: "Component not found"
**Solution**: Ensure component function is defined and named correctly

### Issue: "Should not use JSX syntax"
**Solution**: Replace `<div>` with `React.createElement('div', ...)`

### Issue: "Component does not return valid React element"
**Solution**: Ensure `React.createElement()` is used and returned

### Issue: "Missing className"
**Solution**: Add `className` prop to React.createElement calls

### Issue: "Props not handled correctly"
**Solution**: Use `props.propertyName` to access passed data

## Manual Testing
Students can also test their work by:
1. Opening `index.html` in a browser
2. Checking that the layout matches the design
3. Verifying all text content appears correctly
4. Ensuring styling is applied properly

## Files in Test Suite
- `package.json` - Dependencies and test scripts
- `src/setupTests.js` - Jest configuration
- `src/resume.test.js` - Main component tests
- `src/studentCodeTester.js` - HTML file parser and tester
- `src/studentTest.test.js` - Student implementation test runner

## Running Individual Tests
```bash
# Test specific file
npx jest src/resume.test.js

# Test with verbose output
npx jest --verbose

# Test and watch for changes
npx jest --watch
```