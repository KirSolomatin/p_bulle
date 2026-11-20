// @ts-check

/**
 * Valide une quantité d'énergie.
 */
/**
 *
 * @param {*} energy
 * @returns si energe <= 0 lance une erreur
 */
export function validateEnergy(energy) {
  // TODO
  if (energy >= 0) {
    return energy;
  } else {
    throw new Error("Énergie invalide");
  }
}

/**
 * Vérifie une énergie sans propager l'exception.
 */
/**
 *
 * @param {*} energy
 * @returns si energe <= 0 lance une erreur
 */
export function safeEnergyCheck(energy) {
  // TODO
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 */
/**
 *
 * @param {*} code
 * @returns lance une erreur si un code n'est pas juste
 */
export function validateGateCode(code) {
  // TODO
  switch (code) {
    case "ALPHA":
      return "ALPHA";
    case "BETA":
      return "BETA";
    case "OMEGA":
      return "OMEGA";
    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
/**
 *
 * @param {*} code
 * @returns retourne "Code accepté" si code est juste et "Code refusé" si non
 */
export function safeGateCheck(code) {
  // TODO
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
/**
 *
 * @param {*} text
 * @returns retourne le nombre de tentatives valides
 */
export function countValidAttempts(text) {
  // TODO
  let counter = 0;
  for (let letter of text) {
    if (letter === "A" || letter === "B") counter++;
  }
  return counter;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
/**
 *
 * @param {*} sequence
 * @returns
 */
export function attemptsBeforeLock(sequence) {
  // TODO
  let counter = 0;
  let attempts = 0;
  for (let letter of sequence) {
    if (counter < 3) {
      if (letter === "X") {
        counter++;
        attempts++;
      } else {
        attempts++;
      }
    }
  }
  return attempts;
}
