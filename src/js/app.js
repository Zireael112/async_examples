import GameSavingLoader from './saving';

// GameSavingLoader.load().then((saving) => 'worked', (error) => {
//   throw new Error(`oops! - ${error}`);
// });

(async () => {
  try {
    await GameSavingLoader.load();
    return 'worked';
  } catch (error) { return error; }
})();
