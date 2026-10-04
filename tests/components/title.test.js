/**
 * Title Component Test (2 points)
 * Tests if student correctly implemented the Title component
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('Title Component (2 points)', () => {
  let helper;
  let points = 0;
  const maxPoints = 2;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Component exists and is a function (1 point)', () => {
    const Title = helper.getComponent('Title');
    
    expect(Title).not.toBeNull();
    expect(typeof Title).toBe('function');
    
    points += 1;
    console.log('✅ Title component exists and is a function (+1 point)');
  });

  test('Renders h1 element with correct className (0.5 points)', () => {
    const Title = helper.getComponent('Title');
    
    expect(Title).not.toBeNull();
    expect(typeof Title).toBe('function');

    const element = Title({ text: 'Test Title' });
    
    expect(element).toBeDefined();
    expect(element.type).toBe('h1');
    
    points += 0.5;
    console.log('✅ Title renders h1 element (+0.5 points)');
  });

  test('Has correct className "title" (0.5 points)', () => {
    const Title = helper.getComponent('Title');
    
    expect(Title).not.toBeNull();
    expect(typeof Title).toBe('function');

    const element = Title({ text: 'Test Title' });
    
    expect(element).toBeDefined();
    expect(element.props).toBeDefined();
    expect(element.props.className).toContain('title');
    
    points += 0.5;
    console.log('✅ Title has correct className "title" (+0.5 points)');
  });

  afterAll(() => {
    console.log(`\n📊 Title Component Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});