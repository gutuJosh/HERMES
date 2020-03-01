const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const zip=require('adm-zip');
const zipper = new zip();

const pageInfo = {
    'page': 'download',
    'title': 'Download css library',
    'subcategory': ''
}

router.get('/', (req, res) => {
    let downloadPath = path.join(__dirname, "../static/sccss/style-guide/");
    fs.readdir(downloadPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // add to zip  
            zipper.addLocalFile(downloadPath + file);
        });
        const downloadName = `hermes-css-pattern-library.zip`;
        const data = zipper.toBuffer();
        res.set('Content-Type','application/octet-stream');
        res.set('Content-Disposition',`attachment; filename=${downloadName}`);
        res.set('Content-Length',data.length);
        res.send(data);
    });
});

module.exports = router;