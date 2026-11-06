// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 *
 * @param {*} value
 * @returns le type JavaScript de la valeur
 */
export function valueType(value) {
  // TODO
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 */
/**
 *
 * @param {*} value
 * @returns {boolean} returne si la valeur est undefined
 */
export function isUndefined(value) {
  // TODO
  return typeof value === "undefined";
}

/**
 * Indique si la valeur est null.
 */
/**
 *
 * @param {*} value
 * @returns {boolean} indique si la valeur est null
 */
export function isNull(value) {
  // TODO
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
/**
 *
 * @param {*} value
 * @returns {boolean} returne true si une valeur est connue
 */
export function hasKnownValue(value) {
  // TODO
  return typeof value !== "undefined" && value !== null;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
/**
 *
 * @param {*} energy
 * @param {*} minimumEnergy
 * @returns {boolean} returne true si energy est plus grand que minimumEnergy
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  // TODO
  return parseInt(energy) >= parseInt(minimumEnergy);
}

/**
 * Compare strictement le nom de la zone attendue.
 */
/**
 *
 * @param {*} zone
 * @param {*} expectedZone
 * @returns {boolean} returne true si zone === expectedZone
 */
export function isCorrectZone(zone, expectedZone) {
  // TODO
  return zone === expectedZone;
}
