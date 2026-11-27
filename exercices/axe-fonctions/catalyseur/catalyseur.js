// @ts-check

/**
 * Double une charge.
 */
/**
 * 
 * @param {number} charge 
 * @returns {number} charge doublé
 */
export function doubleCharge(charge) {
  // TODO
  return charge * 2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 */
/**
 * 
 * @param {number} base 
 * @param {number} multiplier 
 * @returns {number} une puissance à partir d'une base
 */
export function forgePower(base, multiplier) {
  // TODO
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 */
/**
 * 
 * @param {number} energy 
 * @param {number} factor par défaut = 2 
 * @returns {number} energy multiplié par factor
 */
export function stabilizeEnergy(energy, factor = 2) {
  // TODO
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 */
/**
 * 
 * @param {string} element 
 * @param {string} prefix 
 * @returns {string} un message avec un element et un prefix
 */
export function forgeMessage(element, prefix = 'Forge') {
  // TODO
  return `${prefix} : ${element}`;
}

/**
 * Calcule l'énergie restante après une perte.
 */
/**
 * 
 * @param {*} energy 
 * @param {*} loss une perte
 * @returns l'énergie restante après une perte
 */
export function calculateOutput(energy, loss) {
  // TODO
  return energy - loss;
}

/**
 * Calcule puis amplifie l'énergie restante.
 */
/**
 * 
 * @param {*} energy 
 * @param {*} loss une perte
 * @param {*} factor 
 * @returns Calcule puis amplifie l'énergie restante
 */
export function boostedOutput(energy, loss, factor = 2) {
  // TODO
  return stabilizeEnergy(calculateOutput(energy, loss), factor);
}
