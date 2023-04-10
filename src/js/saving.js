import read from './reader';
import json from './parser';
import GameSaving from './createChar';

export default class GameSavingLoader {
  static async load() {
    const readed = await read();
    const parsed = await json(readed);
    const deparsed = new GameSaving(JSON.parse(parsed));
    return deparsed;
  }
}
