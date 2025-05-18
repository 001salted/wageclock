type ItemUnit = '담배' | '뿌링클' | '아이스아메리카노';

const unitPrices: Record<ItemUnit, number> = {
  담배: 4500,
  뿌링클: 23000,
  아이스아메리카노: 3000,
};

export function convertToUnits(earned: number) {
  return {
    담배: +(earned / unitPrices['담배']).toFixed(1),
    뿌링클: +(earned / unitPrices['뿌링클']).toFixed(2),
    아이스아메리카노: +(earned / unitPrices['아이스아메리카노']).toFixed(1),
  };
}
