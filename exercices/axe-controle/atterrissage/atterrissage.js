// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 */
/**
 *
 * @param {*} wind la vitesse du vent
 * @returns returne la vitesse réelle
 */
export function verticalSpeed(wind) {
  // TODO
  return wind + DESCENT_SPEED;
}

/**
 * Calcule l'altitude suivante du drone.
 */
/**
 *
 * @param {*} altitude
 * @param {*} wind
 * @returns
 */
export function nextAltitude(altitude, wind) {
  // TODO
  return altitude + wind + DESCENT_SPEED >= 0
    ? altitude + wind + DESCENT_SPEED
    : 0;
}

/**
 * Génère une valeur aléatoire de vent.
 */
/**
 *
 * @returns vitesse aléatoire de vent
 */
export function randomWind() {
  // TODO

  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 */
/**
 *
 * @param {*} startAltitude
 * @returns
 */
export function landingDuration(startAltitude) {
  // TODO
  let secondesNumber = 0;
  while (startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    secondesNumber++;
  }
  return secondesNumber;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
/**
 *
 * @param {*} startAltitude
 * @param {*} battery
 * @returns
 */
export function hasGracefullyLanded(startAltitude, battery) {
  // TODO
  while (startAltitude > 0 && battery > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    battery--;
  }
  return startAltitude <= 0;
}
