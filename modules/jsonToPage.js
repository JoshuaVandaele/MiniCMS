'use-strict';

const fs = require('fs');

module.exports = function getPageContent(page){

  try{
    const content = fs.readFileSync('./pages.json', 'utf-8');
    const pagesList = JSON.parse(content);

    const extractedContent = pagesList.pages[page];
    if(! extractedContent)throw 'not found !';

    return extractedContent;

    return ;
  }catch{
    console.error("File pages.json not found or invalid ! Did you correctly saved pages.json at the project's root folder ?");
    return undefined;
  }

}
