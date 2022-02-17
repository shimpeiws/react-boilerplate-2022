import LRU from "lru-cache";

class LRUClass {
  private static _instance: LRUClass;
  private static _cache: LRU<unknown, unknown>;

  private constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._cache = new LRU({
      max: 500,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._cache.set(
      "items",
      JSON.stringify([
        { id: 1, name: "Foo", description: "Foo Description" },
        { id: 2, name: "Bar", description: "Bar Description" },
      ])
    );
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get cache() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this._cache;
  }
}

export const cache = LRUClass.Instance.cache;
