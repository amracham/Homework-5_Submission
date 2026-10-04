/**
 * React.createElement Usage Test (1 point)
 * Tests if student used React.createElement instead of JSX
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('React.createElement Usage (1 point)', () => {
  let helper;
  let points = 0;
  const maxPoints = 1;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Code uses React.createElement (1 point)', () => {
    const studentCode = helper.getStudentCode();
    
    expect(studentCode).toBeTruthy();

    // Remove comments to avoid false positives
    const codeWithoutComments = studentCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
    
    expect(codeWithoutComments).toContain('React.createElement');
    
    points += 1;
    console.log('✅ Code uses React.createElement (+1 point)');
  });

  test('Verify React.createElement is used properly', () => {
    const studentCode = helper.getStudentCode();
    
    expect(studentCode).toBeTruthy();

    // Remove comments to avoid false positives
    const codeWithoutComments = studentCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
    
    // Count occurrences of React.createElement
    const createElementMatches = (codeWithoutComments.match(/React\.createElement/g) || []).length;
    
    expect(createElementMatches).toBeGreaterThan(0);
    console.log(`✅ Found ${createElementMatches} uses of React.createElement`);
  });

  afterAll(() => {
    console.log(`\n📊 React.createElement Usage Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});