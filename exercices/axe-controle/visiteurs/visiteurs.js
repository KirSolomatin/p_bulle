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
 * @returns true si  UNIVERSITIES contient university
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
export function isTrusted(university, title) {
  // TODO
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  // TODO
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
export function allTrusted(universities, titles) {
  // TODO
}
