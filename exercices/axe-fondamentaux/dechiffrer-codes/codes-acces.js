// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 *
 * @param {*} value
 * @returns {number} convertit une valeur en nombre
 */
export function convertCode(value) {
  // TODO
  return parseInt(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 */
/**
 *
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean} returne true si value1 est égale à value2
 */
export function sameCodeLoose(value1, value2) {
  // TODO
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 */
/**
 *
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean} returne true si value1 est égale à value2 et ils sont du même type
 */
export function sameCodeStrict(value1, value2) {
  // TODO
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 */
/**
 *
 * @param {*} code
 * @returns {boolean} true si code est un nombre pair
 */
export function isEvenCode(code) {
  // TODO
  return code % 2 == 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
/**
 *
 * @param {*} value
 * @returns {boolean} returne true si value est un nombre
 */
export function isInvalidCode(value) {
  // TODO
  return isNaN(parseInt(value));
}
