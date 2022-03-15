//==================================
// Name: Kenneth Chen
// Class: DAAA/1B/04
// Admin Number: P2100072
//==================================
class ExistingPromotionError extends Error {
	constructor(name) {
		super(`Cannot create duplicate promotion with name: ${name}`);
		this.name = this.constructor.name;
		this.response = `The promotion ${name} already exists`
		this.code = 422
		Error.captureStackTrace(this, this.constructor)
	}
}

module.exports = ExistingPromotionError;