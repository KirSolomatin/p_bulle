// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
/**
 * 
 * @param {*} numberOfRounds 
 * @returns {number} returne la somme des numéros de 1 à numberOfRounds
 */
export function sumRounds(numberOfRounds) {
  // TODO
  let sum = 0;
  for (let i = 1; i <= numberOfRounds; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Compte le nombre de caractères d'un code.
 */
/**
 * 
 * @param {*} code 
 * @returns {number} returne le nombre de caractères d'un code
 */
export function countSymbols(code) {
  // TODO
  let numberOfChacaters = 0;
  for (let character of code) {
    numberOfChacaters++;
  }
  return numberOfChacaters;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
/**
 * 
 * @param {*} code 
 * @returns {number} return le nombre de caractères `X` dans un code
 */
export function countX(code) {
  // TODO
  let numberOfX = 0;
  for (let char of code) {
    if (char == "X") {
      numberOfX++;
    }
  }
  return numberOfX;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
/**
 * 
 * @param {*} energy 
 * @param {*} consumption perte d'énergie par tour
 * @returns {number} retourne le nombre de tours complets possibles
 */
export function turnsBeforeEmpty(energy, consumption) {
  // TODO
  let numberOfCycles = 0;
  while (energy - consumption >= 0) {
    energy -= consumption;
    numberOfCycles++;
  }
  return numberOfCycles;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
/**
 * 
 * @param {number} limit 
 * @returns retourne la première ronde pour laquelle le total dépasse une limite
 */
export function firstRoundAbove(limit) {
  // TODO
  let rondeNumber = 1;
  let rondeSum = 0;
  while (rondeSum < limit) {
    rondeSum += rondeNumber;
    rondeNumber++;
  }
  return rondeNumber;
}
