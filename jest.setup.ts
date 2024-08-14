import '@testing-library/jest-dom';

beforeEach(() => {
  global.fetch = jest.fn(async () => Promise.resolve()) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});
