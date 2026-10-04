/**
 * Experience Component Test (2 points)
 * Tests if student correctly implemented the Experience composition component
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('Experience Component (2 points)', () => {
  let helper;
  let points = 0;
  const maxPoints = 2;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Component exists and is a function (1 point)', () => {
    const Experience = helper.getComponent('Experience');
    
    expect(Experience).not.toBeNull();
    expect(typeof Experience).toBe('function');
    
    points += 1;
    console.log('✅ Experience component exists and is a function (+1 point)');
  });

  test('Renders div with correct className "experience" (0.5 points)', () => {
    const Experience = helper.getComponent('Experience');
    
    expect(Experience).not.toBeNull();
    expect(typeof Experience).toBe('function');

    const element = Experience({ 
      title: 'Test Job Title', 
      description: 'Test Description' 
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe('div');
    expect(element.props.className).toContain('experience');
    
    points += 0.5;
    console.log('✅ Experience renders div with className "experience" (+0.5 points)');
  });

  test('Contains child components (header and body) (0.5 points)', () => {
    const Experience = helper.getComponent('Experience');
    
    expect(Experience).not.toBeNull();
    expect(typeof Experience).toBe('function');

    const element = Experience({ 
      title: 'Test Job Title', 
      description: 'Test Description' 
    });
    
    expect(element).toBeDefined();
    expect(element.props.children).toBeDefined();
    
    points += 0.5;
    console.log('✅ Experience contains child components (+0.5 points)');
  });

  afterAll(() => {
    console.log(`\n📊 Experience Component Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});