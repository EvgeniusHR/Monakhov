import {calculateBonus} from "../lib";

test("should calculate bonus", () => {
   const sales = [12000, 8000, 10000, 15000, 2000];
    const expected = 350;

    const result = calculateBonus(sales);

    expect(result).toBe(expected);
});
