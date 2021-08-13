import json from './parser'; // Возвращает промис который резолвится с прочитанным ArrayBuffer
import read from './reader'; // Создает ArrayBuffer с данными пользователя
import GameSaving from './saving';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const objSave = await json(buffer);
    const objGameSaving = new GameSaving(JSON.parse(objSave));
    return objGameSaving;
  }
}
