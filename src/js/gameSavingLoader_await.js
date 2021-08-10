import json from './parser'; // Возвращает промис который резолвится с прочитанным ArrayBuffer
import read from './reader'; // Создает ArrayBuffer с данными пользователя

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    return json(buffer);
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});
