'use-strict';

const fs = require('fs');

module.exports = function getPageContent(page){

  try{
    const contenu = fs.readFileSync('./pages.json', 'utf-8');
    const pagesList = JSON.parse(contenu);

    return pagesList.pages[0];
  }catch{
    console.error("File pages.json not found or invalid ! Did you correctly saved pages.json at the project's root folder ?");
    return undefined;
  }

}
