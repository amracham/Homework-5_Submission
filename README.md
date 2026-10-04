# React.js Resume Builder Homework Assignment

## Overview
In this homework assignment, you will build a resume component using **React.js without JSX**. This exercise will help you understand how React works under the hood by using `React.createElement()` directly.

## Learning Objectives
By completing this assignment, you will:
1. Understand how React components work without JSX syntax sugar
2. Practice creating nested component structures
3. Learn about React props and component composition
4. Build a real-world application (resume layout)

## Assignment Requirements

### Task Description
Create a resume layout that matches the provided design with the following components:

1. **Title Component** - Displays "My Resume" at the top
2. **Experience Header Component** - Shows the job title and dates (e.g., "2025 Present, IT club leader")
3. **Experience Body Component** - Contains the detailed job description
4. **Experience Component** - Combines header and body for a complete experience entry

### Technical Requirements
- ✅ Use React CDN (no build tools)
- ✅ Write all components using `React.createElement()` (NO JSX)
- ✅ Create separate, reusable components
- ✅ Use props to pass data between components
- ✅ Include proper styling to match the design
- ✅ Make the layout responsive

### Component Structure Expected
```
App
├── Title
└── Experience (IT Club Leader)
    ├── ExperienceHeader
    └── ExperienceBody
└── Experience (Coffee Barista)
    ├── ExperienceHeader
    └── ExperienceBody
```

## Data to Display

### IT Club Leader Position
- **Title**: "2025 Present, IT club leader"
- **Description**: "An IT Club Leader oversees the planning and execution of technology-focused activities, manages team members, and promotes learning initiatives. They coordinate workshops, projects, and events to enhance technical skills, encourage collaboration, and foster innovation within the group."

### Coffee Barista Position
- **Title**: "2024-2025, Coffee Barista"
- **Description**: "A coffee barista prepares and serves coffee and other beverages, operates coffee-making equipment, maintains cleanliness, and provides customer service with knowledge of different coffee types and brewing techniques."

## Styling Requirements
- Use the color scheme from the provided design
- Include proper borders and spacing
- Make the layout visually appealing and readable
- Ensure text is properly formatted and aligned

## Getting Started
1. Open `index.html` in your browser
2. Start by creating the basic App component
3. Build each component one by one
4. Test your work frequently in the browser

## Submission Guidelines
- Complete all components as specified
- Ensure your code is clean and well-commented
- Test that everything works in the browser
- Your final submission should match the provided design

## Bonus Challenges (Optional)
1. Add more experience entries
2. Create additional sections (Education, Skills, etc.)
3. Make the resume data configurable through props
4. Add hover effects or animations

## Resources
- [React Documentation - React.createElement()](https://react.dev/reference/react/createElement)
- [React CDN Setup](https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page)

Good luck with your assignment! Remember, the goal is to understand how React works fundamentally, so focus on component structure and data flow.