/**
 * ExperienceHeader Component Test (1 point)
 * Tests if student correctly implemented the ExperienceHeader component
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('ExperienceHeader Component (1 point)', () => {
  let helper;
  let points = 0;
  const maxPoints = 1;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Component exists and is a function (0.5 points)', () => {
    const ExperienceHeader = helper.getComponent('ExperienceHeader');
    
    expect(ExperienceHeader).not.toBeNull();
    expect(typeof ExperienceHeader).toBe('function');
    
    points += 0.5;
    console.log('✅ ExperienceHeader component exists and is a function (+0.5 points)');
  });

  test('Renders div with correct className "experience-header" (0.5 points)', () => {
    const ExperienceHeader = helper.getComponent('ExperienceHeader');
    
    expect(ExperienceHeader).not.toBeNull();
    expect(typeof ExperienceHeader).toBe('function');

    const element = ExperienceHeader({ title: 'Test Job Title' });
    
    expect(element).toBeDefined();
    expect(element.type).toBe('div');
    expect(element.props.className).toContain('experience-header');
    
    points += 0.5;
    console.log('✅ ExperienceHeader renders div with className "experience-header" (+0.5 points)');
  });

  afterAll(() => {
    console.log(`\n📊 ExperienceHeader Component Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});