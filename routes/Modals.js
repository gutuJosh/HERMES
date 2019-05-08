const express = require('express');
const router = express.Router();

const pageInfo = {
    'page': 'modals',
    'title': 'Modals and alerts labels',
    'subcategory': ''
}

router.get('/', (req, res) => {
    const app = req.app.get('app'); 
    let page = `/modals`;
    app.render(req, res, page, {pageInfo});
});


router.get('/page-info', (req, res) => {
    res.json({
        status: 200,
        info: pageInfo
    });
});


module.exports = router;