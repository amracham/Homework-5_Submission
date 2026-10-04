/**
 * App Component Test (2 points)
 * Tests if student correctly implemented the main App component
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('App Component (2 points)', () => {
  let helper;
  let points = 0;
  const maxPoints = 2;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Component exists and is a function (1 point)', () => {
    const App = helper.getComponent('App');
    
    expect(App).not.toBeNull();
    expect(typeof App).toBe('function');
    
    points += 1;
    console.log('✅ App component exists and is a function (+1 point)');
  });

  test('Renders div with correct className "resume-container" (0.5 points)', () => {
    const App = helper.getComponent('App');
    
    expect(App).not.toBeNull();
    expect(typeof App).toBe('function');

    const element = App();
    
    expect(element).toBeDefined();
    expect(element.type).toBe('div');
    expect(element.props.className).toContain('resume-container');
    
    points += 0.5;
    console.log('✅ App renders div with className "resume-container" (+0.5 points)');
  });

  test('Contains child components (0.5 points)', () => {
    const App = helper.getComponent('App');
    
    expect(App).not.toBeNull();
    expect(typeof App).toBe('function');

    const element = App();
    
    expect(element).toBeDefined();
    expect(element.props.children).toBeDefined();
    
    points += 0.5;
    console.log('✅ App contains child components (+0.5 points)');
  });

  afterAll(() => {
    console.log(`\n📊 App Component Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});