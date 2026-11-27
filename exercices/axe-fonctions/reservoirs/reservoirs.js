// @ts-check

import { calculateOutput } from "../catalyseur/catalyseur";

// TODO : importer calculateOutput depuis ../catalyseur/catalyseur.js
/**
 * Crée un réservoir vide.
 */
/**
 * 
 * @param {*} name 
 * @param {*} capacity 
 * @returns retourne un objet avec l'histoire vide
 */
export function createReservoir(name, capacity) {
  // TODO
  return { name: name, capacity: capacity, level: 0, history: [] };
}

/**
 * Remplit un réservoir sans dépasser sa capacité.
 * Le réservoir reçu est modifié.
 * La fonction **modifie** le réservoir reçu :
 */
/**
 * 
 * @param {*} reservoir 
 * @param {*} amount 
 * @returns retourne la quantité réellement ajoutée
 */
export function fillReservoir(reservoir, amount) {
  // TODO
  if (amount > 0) {
    if (reservoir.level + amount <= reservoir.capacity) {
      reservoir.level += amount;
      reservoir.history.push(amount);
      return amount;
    } else {
      let diff = reservoir.capacity - reservoir.level;
      if(reservoir.level != 100) reservoir.history.push(diff)
      reservoir.level = reservoir.capacity;
      return diff;
    } 
  } else throw new Error("Quantité invalide");
}

/**
 * Vide un réservoir sans descendre sous zéro.
 * Le réservoir reçu est modifié.
 */
/**
 * 
 * @param {*} reservoir 
 * @param {*} amount 
 * @returns retourne la quantité réellement retirée
 */
export function drainReservoir(reservoir, amount) {
  // TODO
  if (amount > 0) {
    if (reservoir.level - amount >= 0) {
      reservoir.level -= amount;
      reservoir.history.push(-amount);
      return amount;
    } else {
      let diff = reservoir.level;
      if(reservoir.level != 0) reservoir.history.push(-diff)
      reservoir.level = 0;
      return diff;
    } 
  } else throw new Error("Quantité invalide");
}

/**
 La fonction reçoit un **tableau** de réservoirs et retire `loss` à chacun d'eux.

- calculez le nouveau niveau avec `calculateOutput(...)` ;
- le niveau ne peut pas descendre sous `0` ;
- la perte réelle est enregistrée dans `history` (nombre négatif), seulement si elle est supérieure à `0`.

La fonction **ne retourne rien** : son seul effet est de modifier les réservoirs.

 */
/**
 * 
 * @param {*} reservoirs 
 * @param {*} loss 
 */
export function applyLeak(reservoirs, loss) {
  // TODO
  for (let reservoir of reservoirs) {
    if (calculateOutput(reservoir.level, loss) >= 0) {
      reservoir.level = calculateOutput(reservoir.level, loss);
      reservoir.history.push(-loss);
    } else {
      let diff = reservoir.level;
      if(reservoir.level != 0) reservoir.history.push(-diff)
      reservoir.level = 0;
    } 
  }
}

/**
 * Transfère de l'énergie d'un réservoir à un autre.
 * Les deux réservoirs sont modifiés.
 */
/**
 * 
 * @param {*} source 
 * @param {*} target 
 * @param {*} amount 
 * @returns La fonction retourne la quantité réellement transférée ou 0 si rien ne peut être transféré
 */
export function transferEnergy(source, target, amount) {
  // TODO
  if (source.level === 0 || source === target) return 0;
  if (source.level > amount) {
    return fillReservoir(target, drainReservoir(source, amount));
  } else {
    return drainReservoir(source, fillReservoir(target, source.level));
  }
}

/**
 * Remet un réservoir à zéro et retourne ce même réservoir.
 */
/**
 * 
 * @param {*} reservoir 
 * @returns resevoir modifié
 */
export function resetReservoir(reservoir) {
  // TODO
  reservoir.level = 0;
  reservoir.history = [];
  return reservoir;
}
