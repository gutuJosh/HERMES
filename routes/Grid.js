const express = require('express');
const router = express.Router();

router.get('/:type', async(req, res) => {
    const app = req.app.get('app'); 
    const gridType = decodeURIComponent(req.params.type);
    let page = `/${gridType}`;
    const pageInfo = {
        'page': 'grid',
        'title': 'Grid system',
        'subcategory': gridType
    }
    app.render(req, res, page, {pageInfo});
});


module.exports = router;