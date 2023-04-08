import { getBuffer, ArrayBufferConverter } from '../js/arraybuffer';

test('test instance have buffer', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('test instance have buffer', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  const convertToString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(convertToString).toBe(exampleString);
});
