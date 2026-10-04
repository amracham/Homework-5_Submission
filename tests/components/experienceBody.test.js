/**
 * ExperienceBody Component Test (1 point)
 * Tests if student correctly implemented the ExperienceBody component
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('ExperienceBody Component (1 point)', () => {
  let helper;
  let points = 0;
  const maxPoints = 1;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Component exists and is a function (0.5 points)', () => {
    const ExperienceBody = helper.getComponent('ExperienceBody');
    
    expect(ExperienceBody).not.toBeNull();
    expect(typeof ExperienceBody).toBe('function');
    
    points += 0.5;
    console.log('✅ ExperienceBody component exists and is a function (+0.5 points)');
  });

  test('Renders div with correct className "experience-body" (0.5 points)', () => {
    const ExperienceBody = helper.getComponent('ExperienceBody');
    
    expect(ExperienceBody).not.toBeNull();
    expect(typeof ExperienceBody).toBe('function');

    const element = ExperienceBody({ description: 'Test job description text' });
    
    expect(element).toBeDefined();
    expect(element.type).toBe('div');
    expect(element.props.className).toContain('experience-body');
    
    points += 0.5;
    console.log('✅ ExperienceBody renders div with className "experience-body" (+0.5 points)');
  });

  afterAll(() => {
    console.log(`\n📊 ExperienceBody Component Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});