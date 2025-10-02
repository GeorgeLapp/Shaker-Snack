/**
 * @typedef {Object} ProductMatrixItemDTO
 * @property {string} id
 * @property {string} cellNumber
 * @property {string} rowNumber
 * @property {number} price
 * @property {string} imageUrl
 * @property {string} brand
 * @property {string} title
 * @property {string} [description]
 * @property {Object.<string, string|number>} [nutrition]
 */

/**
 * @typedef {Object} ProductMatrixResponseDTO
 * @property {ProductMatrixItemDTO[]} items
 */

/**
 * @typedef {Object} StartSaleRequestDTO
 * @property {string} cellNumber
 */

/**
 * @typedef {Object} StartSaleResponseDTO
 * @property {boolean} success
 */

/**
 * @typedef {Object} IssueProductRequestDTO
 * @property {string} cellNumber
 */

/**
 * @typedef {Object} IssueProductResponseDTO
 * @property {boolean} success
 */

module.exports = {};
