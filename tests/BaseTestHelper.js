/**
 * Base Test Helper for Student Code Evaluation
 * Shared utilities for all test modules
 */

const fs = require('fs');
const path = require('path');

class BaseTestHelper {
  constructor(htmlFilePath = null) {
    this.htmlFilePath = htmlFilePath || path.join(process.cwd(), 'index.html');
    this.components = {};
    this.studentCode = '';
    this.errors = [];
  }

  /**
   * Load and parse student HTML file
   */
  async loadStudentCode() {
    try {
      const htmlContent = fs.readFileSync(this.htmlFilePath, 'utf8');
      
      if (!this.extractStudentCode(htmlContent)) {
        return false;
      }

      this.setupReactMock();
      this.evaluateCode();
      
      return true;
    } catch (error) {
      this.errors.push(`Failed to load student code: ${error.message}`);
      return false;
    }
  }

  /**
   * Extract JavaScript code from HTML
   */
  extractStudentCode(htmlContent) {
    try {
      const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
      let matches;
      let allCode = '';
      
      while ((matches = scriptRegex.exec(htmlContent)) !== null) {
        const scriptContent = matches[1];
        if (scriptContent && !scriptContent.includes('unpkg.com') && !scriptContent.includes('cdn')) {
          allCode += scriptContent + '\n';
        }
      }
      
      this.studentCode = allCode;
      
      if (!this.studentCode.trim()) {
        this.errors.push('No JavaScript code found in HTML file');
        return false;
      }
      
      return true;
    } catch (error) {
      this.errors.push(`Error extracting code: ${error.message}`);
      return false;
    }
  }

  /**
   * Setup React mock for testing
   */
  setupReactMock() {
    global.React = {
      createElement: function(type, props, ...children) {
        return {
          type: type,
          props: {
            ...(props || {}),
            children: children.length === 1 ? children[0] : children
          }
        };
      }
    };
    
    global.ReactDOM = {
      createRoot: function() {
        return { render: function() {} };
      }
    };
  }

  /**
   * Safely evaluate student code
   */
  evaluateCode() {
    try {
      const func = new Function('React', 'ReactDOM', 'document', 'window', `
        ${this.studentCode}
        
        return {
          Title: typeof Title !== 'undefined' ? Title : null,
          ExperienceHeader: typeof ExperienceHeader !== 'undefined' ? ExperienceHeader : null,
          ExperienceBody: typeof ExperienceBody !== 'undefined' ? ExperienceBody : null,
          Experience: typeof Experience !== 'undefined' ? Experience : null,
          App: typeof App !== 'undefined' ? App : null
        };
      `);
      
      this.components = func(global.React, global.ReactDOM, global.document, global.window);
      
    } catch (error) {
      this.errors.push(`Error evaluating code: ${error.message}`);
    }
  }

  /**
   * Get component by name
   */
  getComponent(name) {
    return this.components[name] || null;
  }

  /**
   * Check if student code has errors
   */
  hasErrors() {
    return this.errors.length > 0;
  }

  /**
   * Get all errors
   */
  getErrors() {
    return this.errors;
  }

  /**
   * Get student code
   */
  getStudentCode() {
    return this.studentCode;
  }
}

module.exports = BaseTestHelper;