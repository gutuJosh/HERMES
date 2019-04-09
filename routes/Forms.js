const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const app = req.app.get('app'); 
    let page = '/forms';
    const pageInfo = {
        'page': 'forms',
        'title': 'Form Elements',
        'subcategory': ''
    }
    app.render(req, res, page, {pageInfo});
});


module.exports = router;