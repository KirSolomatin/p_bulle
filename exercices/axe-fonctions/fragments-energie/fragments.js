// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 */
/**
 * 
 * @param  {...any} fragments 
 * @returns {number} la somme des fragments
 */
export function sumFragments(...fragments) {
  // TODO
  let sum = 0;
  for (let fragment of fragments) sum += fragment;

  return sum;
}

/**
 * Compte le nombre de fragments reçus.
 */
/**
 * 
 * @param  {...any} fragments 
 * @returns {number} le nimbre des fragments
 */
export function countFragments(...fragments) {
  // TODO
  let fNumber = 0;
  for (let fragment of fragments) fNumber++;

  return fNumber;
}

/**
 * Calcule la moyenne des fragments reçus.
 */
/**
 * 
 * @param  {...any} fragments 
 * @returns {number} la moyenne des fragments reçus
 */
export function averageFragments(...fragments) {
  // TODO
  let sum = 0;
  let fNumber = 0;
  for (let fragment of fragments) {
    sum += fragment;
    fNumber++;
  }
  return sum / fNumber;

}

/**
 * Ajoute la somme des fragments à une valeur de base.
 */
/**
 * 
 * @param {*} base valeur de base 
 * @param  {...any} fragments 
 * @returns la somme des fragments et d'une valeur de base
 */
export function totalWithBase(base, ...fragments) {
  // TODO
  let sum = 0;
  for (let fragment of fragments) sum += fragment;

  return base + sum;
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 */
/**
 * 
 * @param {*} name 
 * @param  {...any} values 
 * @returns retourne un libellé indiquant le nombre de valeurs
 */
export function formulaLabel(name, ...values) {
  // TODO
  let number = 0;
  for (let n of values) number++;

  return `${name} : ${number} valeurs`
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
/**
 * 
 * @param {*} name 
 * @param  {...any} values 
 * @returns retourne un résumé contenant la somme des valeurs
 */
export function prepareMixture(name, ...values) {
  // TODO
  let total = sumFragments(...values);

  return `${name} = ${total}`
}
