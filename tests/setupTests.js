// Jest setup file - Minimal setup for Node.js environment

// Basic DOM mocks for testing
global.document = {
  querySelector: jest.fn(),
  querySelectorAll: jest.fn(() => []),
  createElement: jest.fn(),
  getElementsByTagName: jest.fn(() => [])
};

global.window = {
  document: global.document
};

global.navigator = {
  userAgent: 'test'
};