// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 */
/**
 *
 * @param {*} maxEnergy
 * @param {*} currentEnergy
 * @returns {number} returne quantité d'énergie manquante
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  // TODO
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 */
/**
 *
 * @param {*} maxEnergy
 * @param {*} currentEnergy
 * @returns {number} retourne le pourcentage d'énergie disponible
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  // TODO
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 */
/**
 *
 * @param {*} currentEnergy
 * @param {*} recharge
 * @returns {number} returne l'énergie disponible après une recharge
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  // TODO
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
/**
 *
 * @param {number} currentEnergy
 * @returns {boolean} Indique si le générateur possède au moins 500 unités d'énergie
 */
export function isGeneratorReady(currentEnergy) {
  // TODO
  return currentEnergy >= 500;
}

/**
 * Construit le message d'état du générateur.
 */
/**
 *
 * @param {string} name
 * @param {number} currentEnergy
 * @returns {string} returne le message d'état du générateur
 */
export function generatorStatus(name, currentEnergy) {
  // TODO
  return `${name} possède ${currentEnergy} unités d'énergie.`;
}
