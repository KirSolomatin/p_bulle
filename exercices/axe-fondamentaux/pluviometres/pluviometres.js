// @ts-check

/**
 * Convertit un relevé en nombre.
 */
/**
 * @param {*} value un relevé
 * @return {number} un relevé convertit en nombre
 */
export function readRainfall(value) {
  // TODO
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
/**
 * @param {*} morning un relevé de matin
 * @param {*} evening un relevé de soir
 * @return {number} des relevé de matin et de soir
 */
export function totalRainfall(morning, evening) {
  // TODO
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
/**
 * @param {number} hour
 * @return {boolean} return true si hour correspond à un relevé automatique
 */
export function isScheduledHour(hour) {
  // TODO
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
/**
 * @param {*} value la conversion du relevé
 * @return {boolean} return true si value est NaN
 */
export function isFaultyReading(value) {
  // TODO
  return isNaN(value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
/**
 * @param {*} manual 
 * @param {*} automatic
 * @return {boolean} return true si manual est égal à automatic
 */
export function isConfirmedReading(manual, automatic) {
  // TODO
  return Number(manual) === Number(automatic);
}
