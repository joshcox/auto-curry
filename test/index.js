import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { transformFileSync } from 'babel-core';

const fixtures = path.join(__dirname, 'fixtures');

const getExpected = directory => fs.readFileSync(path.join(directory, 'expected.js')).toString();

const autoCurryIt = directory =>
  transformFileSync(path.join(directory, 'actual.js'), {
    babelrc: false,
    plugins: [path.resolve('./src/index.js')]
  }).code;

describe('Auto curry that shit!', () => {
  fs.readdirSync(fixtures).forEach(fixture => {
    it(fixture, () => {
      const directory = path.join(fixtures, fixture);
      const actual = autoCurryIt(directory);
      const expected = getExpected(directory);
      expect(actual.trim()).to.equals(expected.trim());
    });
  });
});
