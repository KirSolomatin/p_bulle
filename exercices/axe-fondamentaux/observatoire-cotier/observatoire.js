// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 */
/**
 *
 * @param {*} value
 * @returns type de value
 */
export function dataType(value) {
  // TODO
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 *
 * @param {*} count
 * @returns true si count est undefined
 */
export function isNotTransmitted(count) {
  // TODO
  return typeof count === "undefined";
}

/**
 * Indique si le comptage vaut null.
 *
 *@param {*} count
 *@returns true si count est null
 */
export function isOffline(count) {
  // TODO
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 *
 */

/**
 *
 * @param {*} count
 * @returns true si un comptage est disponible
 */
export function hasBirdCount(count) {
  // TODO

  return typeof count !== "undefined" && count !== null;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 */
/**
 *
 * @param {*} northCount 1 comptage
 * @param {*} southCount 2 comptage
 * @returns returne somme de 2 comptages
 */
export function totalBirds(northCount, southCount) {
  // TODO
  if (!hasBirdCount(northCount)) northCount = 0;
  if (!hasBirdCount(southCount)) southCount = 0;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 */
/**
 *
 * @param {*} height
 * @returns
 */
export function isValidWaveHeight(height) {
  // TODO
  return typeof height === "number" && !isNaN(height);
}
