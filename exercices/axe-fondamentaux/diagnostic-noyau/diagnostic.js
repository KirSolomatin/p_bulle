// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 *
 * @param {*} value
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
 */
export function isCorrectZone(zone, expectedZone) {
  // TODO
  return zone === expectedZone;
}
