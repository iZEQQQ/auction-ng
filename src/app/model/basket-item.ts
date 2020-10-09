export class BasketItem {

  private _basketElementId: number;

  private _auctionName: string;

  private _quantity: number;

  private _price: number;

  get wholePrice(): number {
    return this._quantity * this._price;
  }

  get basketElementId(): number {
    return this._basketElementId;
  }

  set basketElementId(value: number) {
    this._basketElementId = value;
  }

  get auctionName(): string {
    return this._auctionName;
  }

  set auctionName(value: string) {
    this._auctionName = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
