// @ts-check

// TODO : importer stabilizeEnergy depuis ../catalyseur/catalyseur.js
// TODO : importer formatResult depuis ../assemblage-modulaire/messages.js
import { formatResult } from "../assemblage-modulaire/messages.js";
import { stabilizeEnergy } from "../catalyseur/catalyseur.js";

/**
 * Calcule les ingrédients qui manquent pour réaliser une recette.
 */
export function missingIngredients(stock, recipe) {
  // TODO
  let missing = {};
  for (let key in recipe.needs) {
    if (!(key in stock)) stock[key] = 0;
    if (stock[key] < recipe.needs[key]) { 
      missing[key] = recipe.needs[key] - stock[key];
    }
  }
  return missing;
}

/**
 * Indique si une recette peut être réalisée avec le stock.
 */
export function canCraft(stock, recipe) {
  // TODO
}

/**
 * Réalise une recette : consomme le stock et retourne le produit obtenu.
 */
export function craft(stock, recipe, factor = 1) {
  // TODO
}

/**
 * Calcule le stock restant après une recette, sans modifier le stock reçu.
 */
export function previewStock(stock, recipe) {
  // TODO
}

/**
 * Réalise une recette plusieurs fois, tant que le stock le permet.
 */
export function craftBatch(stock, recipe, quantity) {
  // TODO
}

/**
 * Construit le rapport d'une production.
 */
export function batchReport(recipe, batch) {
  // TODO
}
