export function calculateBonus(sales) {
    let bonus = 0;
    for (const sale of sales) {
        if (sale > 10000) {
            bonus += bonus = (sale - 10000) * 0.05
        }
    }
    return bonus
}
