export default class GameSaving {
  constructor(obj) {
    this.id = obj.id;
    this.created = obj.created;
    this.userInfo = obj.userInfo;
    this.userInfo.id = obj.userInfo.id;
    this.userInfo.name = obj.userInfo.name;
    this.userInfo.level = obj.userInfo.level;
    this.userInfo.points = obj.userInfo.points;
  }
}
