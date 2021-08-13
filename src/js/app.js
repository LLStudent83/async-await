import GameSavingLoader from './gameSavingLoader_await';


(async () => {
  try {
    const objGameSaving = await GameSavingLoader.load();
    console.log(objGameSaving);
  } catch (e) {
    console.log(`Произошла ошибка - ${e.message}`);
  }
})();
