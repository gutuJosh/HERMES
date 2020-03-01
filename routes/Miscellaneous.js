const express = require('express');
const router = express.Router();

const pageInfo = {
    'page': 'miscellaneous',
    'title': 'Badges, tips and more miscellaneous stuff',
    'subcategory': ''
}

router.get('/', (req, res) => {
    const app = req.app.get('app'); 
    let page = `/miscellaneous`;
    app.render(req, res, page, {pageInfo});
});


router.get('/page-info', (req, res) => {
    res.json({
        status: 200,
        info: pageInfo
    });
});


module.exports = router;