const percent = 0.05:
const minsale = 10000;
export function calculateBonus(sales) {
    let bonus = 0;
    for (const sale of sales) {
        if (sale > minsale) {
            bonus += bonus = (sale - minsale) * percent;
        }
    }
    return bonus;
}
