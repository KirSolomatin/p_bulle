// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 *
 * @param {*} value
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
 */
export function isInvalidCode(value) {
  // TODO
  return isNaN(parseInt(value));
}
