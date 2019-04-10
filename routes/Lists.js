const express = require('express');
const router = express.Router();

const pageInfo = {
    'page': 'lists',
    'title': 'Lists and media',
    'subcategory': ''
}

router.get('/', (req, res) => {
    const app = req.app.get('app'); 
    let page = `/lists`;
    app.render(req, res, page, {pageInfo});
});


router.get('/page-info', (req, res) => {
    res.json({
        status: 200,
        info: pageInfo
    });
});


module.exports = router;