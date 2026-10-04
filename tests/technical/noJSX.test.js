/**
 * No JSX Usage Test (1 point)
 * Tests if student avoided using JSX syntax
 */

const BaseTestHelper = require('../BaseTestHelper');

describe('No JSX Usage (1 point)', () => {
  let helper;
  let points = 0;
  const maxPoints = 1;

  beforeAll(async () => {
    helper = new BaseTestHelper();
    await helper.loadStudentCode();
  });

  test('Code does not use JSX syntax (1 point)', () => {
    const studentCode = helper.getStudentCode();
    
    expect(studentCode).toBeTruthy();

    // Remove comments to avoid false positives
    const codeWithoutComments = studentCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
    
    // Check for JSX patterns
    const hasJSXTags = codeWithoutComments.includes('<') && codeWithoutComments.includes('>') && 
                      (codeWithoutComments.includes('</') || codeWithoutComments.includes('/>'));
    
    expect(hasJSXTags).toBe(false);
    
    points += 1;
    console.log('✅ Code does not use JSX syntax (+1 point)');
  });

  test('Verify no common JSX patterns', () => {
    const studentCode = helper.getStudentCode();
    
    if (!studentCode) {
      console.log('❌ No student code found to analyze');
      return;
    }

    const jsxPatterns = [
      /<\w+[^>]*>/,     // Opening tags like <div>
      /<\/\w+>/,        // Closing tags like </div>
      /<\w+[^>]*\/>/    // Self-closing tags like <br/>
    ];

    let foundJSX = false;
    jsxPatterns.forEach((pattern, index) => {
      if (pattern.test(studentCode)) {
        foundJSX = true;
        console.log(`❌ Found JSX pattern ${index + 1}: ${pattern}`);
      }
    });

    if (!foundJSX) {
      console.log('✅ No JSX patterns detected in code');
      expect(foundJSX).toBe(false);
    } else {
      console.log('💡 Use React.createElement() instead of JSX tags');
      expect(foundJSX).toBe(false);
    }
  });

  afterAll(() => {
    console.log(`\n📊 No JSX Usage Score: ${points}/${maxPoints} points`);
    if (helper.hasErrors()) {
      console.log('Errors encountered:');
      helper.getErrors().forEach(error => console.log(`  - ${error}`));
    }
  });
});