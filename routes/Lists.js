const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const app = req.app.get('app'); 
    let page = `/lists`;
    const pageInfo = {
        'page': 'lists',
        'title': 'Standard typeface',
        'subcategory': ''
    }
    app.render(req, res, page, {pageInfo});
});


module.exports = router;