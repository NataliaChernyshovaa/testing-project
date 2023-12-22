const path = require('path');
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  roots: ['<rootDir>/../tests/'],
  testMatch: ['**/*.spec.ts']
}

