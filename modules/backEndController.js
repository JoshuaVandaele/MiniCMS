const getPageContent = require('./jsonToPage.js');

module.exports = async(req, res, pageID)=>{
  //This module is supposed to get the request, answer and pageID.
  //This way, pageID can be edited directly by devs for testing purposes

  //So, the idea behind this module is to get the associated page in pages.json, and
  //send back the right template to the client.

  try{
    const pageContent = getPageContent(pageID);
    if(! pageContent)throw('not found!');

    res.render(pageContent.template+'/index.ejs', { page:pageContent });
  }catch{
    //Error with getPageContent... Is pageID invalid ? Let's send a 404
    res.status(404).render('404.ejs');
  }

}
