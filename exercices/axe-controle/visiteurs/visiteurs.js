// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
/**
 *
 * @param {*} university
 * @returns {boolean } true si  UNIVERSITIES contient university
 */
export function isKnownUniversity(university) {
  // TODO
  for (let uni of UNIVERSITIES) {
    if (uni === university) return true;
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 */
/**
 *
 * @param {*} title
 * @returns Convertit un titre en niveau numérique
 */
export function titleLevel(title) {
  // TODO
  switch (title) {
    case "Bachelor":
      return 1;

    case "Master":
      return 2;

    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 */
/**
 *
 * @param {*} university
 * @returns Indique si une université exige un Master
 */
export function requiresMaster(university) {
  // TODO
  return MASTER_REQUIRED.includes(university);
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */

/**
 * 
 * @param {*} university 
 * @param {*} title 
 * @returns {boolean} retourne true si un visiteur est fiable
 */
export function isTrusted(university, title) {
  // TODO
  if (isKnownUniversity(university) && ((!requiresMaster(university) && titleLevel(title) >= 1) || (requiresMaster(university) && titleLevel(title) === 2))) {
    return true;
  }
  return false;
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
/**
 * 
 * @param {*} university 
 * @param {*} title 
 * @returns retourne la décision
 */
export function welcomeMessage(university, title) {
  // TODO
  if (!isKnownUniversity(university)) {
    return "Université inconnue";
  } else if (titleLevel(title) !== 1 && titleLevel(title) !== 2) {
    return "Titre inconnu";
  } else if (requiresMaster(university) && titleLevel(title) !== 2) {
    return "Master requis";
  } else {
    return "Bienvenue dans la Citadelle";
  }
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
/**
 * 
 * @param {*} universities 
 * @param {*} titles 
 * @returns {boolean} retourne true si tous les visiteurs sont fiables
 */
export function allTrusted(universities, titles) {
  // TODO
  for (let i = 0; i < universities.length; i++)
    if (!isTrusted(universities[i], titles[i])) return false;

  return true;
}
