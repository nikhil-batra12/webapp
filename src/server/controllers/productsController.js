const productsList = (req, res) => {
    res.end(JSON.stringify(require('../responses/products/productsList.json')));
}
const sliderImages = (req, res) => {
    res.end(JSON.stringify(require('../responses/products/sliderImages.json')));
}

exports.sliderImages = sliderImages;
exports.productsList = productsList;
