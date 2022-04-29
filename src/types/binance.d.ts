export type CoinsList = {
    e: string;
    E: number;
    s: string;
    p: string;
    P: string;
    w: string;
    x: string;
    c: string;
    Q: string;
    b: string;
    B: string;
    a: string;
    A: string;
    o: string;
    h: string;
    l: string;
    v: string;
    q: string;
    O: number;
    C: number;
    F: number;
    L: number;
    n: number;
    history: number[];
    token: string;
    asset: string;
};

export type TickerInfo = {
    e: string;
    E: number;
    s: string;
    U: number;
    u: number;
    a: string[];
    b: string[];
};

export type DepthSnapshot = {
    lastUpdateId: number;
    asks: string[][];
    bids: string[][];
};

export interface CoinsListCache {
    [key: string]: CoinsList;
}
