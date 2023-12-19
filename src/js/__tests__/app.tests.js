import ErrorRepository from '../app';

test('receive code to error', () => {
  const received = new ErrorRepository();
  expect(received.translate(1)).toBe('Error number 1');
});

test('Unknown error', () => {
  const received = new ErrorRepository();
  expect(() => received.translate(5)).toThrow('Unknown error');
});