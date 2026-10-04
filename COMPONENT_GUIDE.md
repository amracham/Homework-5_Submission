# Component Breakdown Guide

## Understanding React Components Without JSX

This guide explains how each component works in the resume builder and the concepts behind React.createElement().

## Component Hierarchy

```
App (Main container)
├── Title (Resume header)
└── Experience (Job entry container)
    ├── ExperienceHeader (Job title and dates)
    └── ExperienceBody (Job description)
```

## Component Analysis

### 1. Title Component
```javascript
function Title(props) {
    return React.createElement(
        'h1',              // HTML element type
        { className: 'title' },  // Props/attributes
        props.text         // Children (text content)
    );
}
```

**Purpose**: Displays the main resume title
**Props**: 
- `text`: The title text to display
**Key Concepts**:
- Simple functional component
- Uses props to receive data from parent
- Returns a single React element

### 2. ExperienceHeader Component
```javascript
function ExperienceHeader(props) {
    return React.createElement(
        'div',
        { className: 'experience-header' },
        props.title
    );
}
```

**Purpose**: Shows job title and date range
**Props**:
- `title`: The job title and date string
**Key Concepts**:
- Wrapper div with specific styling class
- Single text child element

### 3. ExperienceBody Component
```javascript
function ExperienceBody(props) {
    return React.createElement(
        'div',
        { className: 'experience-body' },
        props.description
    );
}
```

**Purpose**: Contains detailed job description
**Props**:
- `description`: The job description text
**Key Concepts**:
- Similar structure to ExperienceHeader
- Different CSS class for different styling

### 4. Experience Component (Composition)
```javascript
function Experience(props) {
    return React.createElement(
        'div',
        { className: 'experience' },
        React.createElement(ExperienceHeader, { title: props.title }),
        React.createElement(ExperienceBody, { description: props.description })
    );
}
```

**Purpose**: Combines header and body into a complete experience entry
**Props**:
- `title`: Passed down to ExperienceHeader
- `description`: Passed down to ExperienceBody
**Key Concepts**:
- **Component Composition**: Building larger components from smaller ones
- **Props Flow**: Data flows from parent to children
- **Multiple Children**: React.createElement can take multiple children

### 5. App Component (Main Component)
```javascript
function App() {
    const resumeData = {
        title: "My Resume",
        experiences: [...]
    };
    
    return React.createElement(
        'div',
        { className: 'resume-container' },
        React.createElement(Title, { text: resumeData.title }),
        ...resumeData.experiences.map((exp, index) => 
            React.createElement(Experience, {
                key: index,
                title: exp.title,
                description: exp.description
            })
        )
    );
}
```

**Purpose**: Root component that orchestrates the entire resume
**Key Concepts**:
- **Data Management**: Stores all resume data locally
- **Array Mapping**: Transforms data array into component array
- **Spread Operator**: `...` spreads array elements as separate children
- **Keys**: Unique identifiers for list items (required for arrays)

## React.createElement() Deep Dive

### Syntax
```javascript
React.createElement(type, props, ...children)
```

### Parameters
1. **type**: 
   - String for HTML elements: `'div'`, `'h1'`, `'p'`
   - Function for React components: `Title`, `Experience`

2. **props**: 
   - Object containing component properties
   - HTML attributes like `className`, `id`, `style`
   - Custom props for components

3. **children**: 
   - Any number of child elements
   - Can be strings, numbers, or other React elements

### Examples

#### Basic HTML Element
```javascript
React.createElement('h1', null, 'Hello World')
// Equivalent JSX: <h1>Hello World</h1>
```

#### Element with Props
```javascript
React.createElement('div', { className: 'container', id: 'main' }, 'Content')
// Equivalent JSX: <div className="container" id="main">Content</div>
```

#### Component with Props
```javascript
React.createElement(Title, { text: 'My Resume' })
// Equivalent JSX: <Title text="My Resume" />
```

#### Multiple Children
```javascript
React.createElement('div', null, 
    React.createElement('h1', null, 'Title'),
    React.createElement('p', null, 'Paragraph')
)
// Equivalent JSX:
// <div>
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </div>
```

## Common Patterns

### 1. Conditional Rendering
```javascript
function MyComponent(props) {
    return React.createElement('div', null,
        props.showTitle ? React.createElement('h1', null, 'Title') : null,
        React.createElement('p', null, 'Always shown')
    );
}
```

### 2. List Rendering
```javascript
function ItemList(props) {
    return React.createElement('ul', null,
        ...props.items.map((item, index) =>
            React.createElement('li', { key: index }, item)
        )
    );
}
```

### 3. Event Handlers
```javascript
function Button(props) {
    return React.createElement('button', {
        onClick: props.handleClick,
        className: 'btn'
    }, props.text);
}
```

## Why Learn Without JSX?

1. **Understanding**: See how React actually works under the hood
2. **Debugging**: Better error messages and stack traces
3. **Flexibility**: Can generate components programmatically
4. **Learning**: Deeper understanding of component structure
5. **Appreciation**: Understand why JSX was created

## Best Practices

1. **Component Names**: Start with capital letter (PascalCase)
2. **Props**: Use descriptive names
3. **Keys**: Always provide keys for array items
4. **Pure Functions**: Components should be pure (same input = same output)
5. **Single Responsibility**: Each component should have one clear purpose

This homework exercise teaches these fundamental concepts by building a real-world application without the convenience of JSX!