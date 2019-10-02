module.exports = function multiply(first, second) {
    let product = (BigInt(first) * BigInt(second));
    return product.toString();
}