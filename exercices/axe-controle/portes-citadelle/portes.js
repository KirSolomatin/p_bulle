// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 */
/**
 * @param {number} level
 * @returns {string} returne Accès autorisé si level est plus grand que 5 et Accès refusé si non
 */
export function accessMessage(level) {
  // TODO
  if (level >= 5) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}

/**
 * Retourne l'état textuel d'une porte.
 */
/**
 * @param {boolean} isOpen l'état d'une porte
 * @returns {string} returne Ouverte si isOpen vaut true et Fermée si non
 */
export function doorStatus(isOpen) {
  // TODO
  return isOpen ? "Ouverte" : "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
/**
 * 
 * @param {string} code code d'une zone
 * @returns {string} returne le nom correspondant à un cod
 */
export function zoneName(code) {
  // TODO
  switch (code) {
    case "N":
      return "Les Fondations";

    case "E":
      return "Les Archives";

    case "SE":
      return "La Forge";

    case "SO":
      return "La Citadelle";

    case "O":
      return "La Faille";

    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
/**
 * 
 * @param {number} energy  l'énergie disponible
 * @returns {string} returne le niveau d'alerte selon l'énergie disponible
 */
export function alertLevel(energy) {
  // TODO
  if (energy < 20) {
    return "CRITIQUE";
  }

  else if (energy >= 20 && energy <= 49) {
    return "FAIBLE";
  }

  else if (energy >= 50 && energy <= 79) {
    return "STABLE";
  }

  else {
    return "OPTIMAL";
  }
}