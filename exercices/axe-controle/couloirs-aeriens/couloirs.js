// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 */
/**
 *
 * @param {*} altitude la valeur de l'atitude
 * @returns returne l'altitude si l'altidude est 50, 100 ou 150 et lance une erreur si non
 */
export function validateAltitude(altitude) {
  // TODO
  switch (altitude) {
    case 50:
      return altitude;

    case 100:
      return altitude;

    case 150:
      return altitude;

    default:
      throw new Error(`Altitude interdite : ${altitude} m`);
  }
}

/**
 * Compte les drones présents à une altitude.
 */
/**
 * @param {*} altitudes tableau des drones
 * @param {number} altitude l'altitude nécessaire
 * @returns {number} Compte les drones présents à une altitude.
 */
export function countAtAltitude(altitudes, altitude) {
  // TODO
  let counter = 0;
  for (let drone of altitudes) {
    drone === altitude ? counter++ : (counter = counter);
  }
  return counter;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 */
/**
 *
 * @param {*} altitudes tableau des drones
 * @param {number} altitude l'altitude nécessaire
 * @returns  Compte les drones présents à une altitude. lance une erreur s'il y a plus que 5 drones
 */
export function checkCorridor(altitudes, altitude) {
  // TODO
  let counter = 0;
  for (let drone of altitudes) {
    drone === altitude ? counter++ : (counter = counter);
    if (counter > MAX_DRONES_PER_CORRIDOR)
      throw new Error(`Collision à ${drone} m`);
  }
  return counter;
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 */
/**
 *
 * @param {*} altitudes tableau des drones
 * @returns retourne `"Espace aérien sûr"` si aucune erreur n'a été levée
 */
export function checkAirspace(altitudes) {
  // TODO
  for (let altitude of altitudes) {
    validateAltitude(altitude);
  }

  for (let altitude of altitudes) {
    checkCorridor(altitudes, altitude);
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 */
/**
 *
 * @param {*} altitudes tableau des drones
 * @returns retourne `"Espace aérien sûr"` si aucune erreur n'a été levée
 */
export function airspaceReport(altitudes) {
  // TODO
  try {
    return checkAirspace(altitudes);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Alerte : ${error.message}`);
      return `Alerte : ${error.message}`;
    }
  }
}
