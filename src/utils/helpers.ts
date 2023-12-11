export const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en', { minimumFractionDigits: 2 })
}
