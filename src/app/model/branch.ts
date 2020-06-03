export class Branch {

  private _id: number;

  private _name: String;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }


}
