import GameSavingLoader from '../js/saving';
import GameSaving from '../js/createChar';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('create new character', () => {
  const char = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(char).toEqual(result);
});

test('current data load()', async () => {
  const result = await GameSavingLoader.load();
  const expected = new GameSaving(JSON.parse(data));
  expect(expected).toEqual(result);
});

test('take error of load()', async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toBe('Error parsing');
  }
});
