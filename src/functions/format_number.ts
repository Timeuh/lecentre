/**
 * Format a number to french format
 * ex : 5700 -> 5 700
 *
 * @param number {number} : the number to format
 */
export const formatNumber = (number: number): string => {
  return number.toLocaleString('fr-FR')
}
