const fs = require('fs');
const rp = require('request-promise');
const request = require('request');
const cheerio = require('cheerio');

String.prototype.insertAt = function (index, str) {
  return this.slice(0, index) + str + this.slice(index)
}

async function getImage(url) {
  return await urlRequest(url)
  .then(body => {
    const $ = cheerio.load(body);
    var image = $('.product-image-content img').attr('src');
    
    if(image != null) {
      return image;
    }

    return $('img.book__cover-image').attr('src');
  })
}

async function createObj($, elem) {
  var id = $(elem).attr('data-id'); //.find('.product-item--row')
  var name = $(elem).find('.product-title').text();
  var url = `${$(elem).find('a.product-image').attr('href')}`;
  
  var productPrice = $(elem).find('.promo-price').text().replace(/\s+/g, "").replace(/(\r\n|\n|\r)/gm, "");
  productPrice = productPrice.insertAt(productPrice.length - 2, ',');
  if (id == null)
    return null;

  return {
    id: id,
    name: name,
    url: url,
    price: productPrice,
    image: await getImage(url)
  };
}

async function getItems(url, top = 10) {
  let items = [];
  let elems = [];
  
  await urlRequest(url)
  .then(body => {
    const $ = cheerio.load(body);
    $('.product-list li').each(function (i, elem) {
      elems.push({$:$, elem:elem})
    })
  });



  for (const elem of elems) {
    var obj = await createObj(elem.$, elem.elem);
    if (obj != null) {
      items.push(obj);

      if(items.length == top) {
        return items;
      }
    }
  }
}

function urlRequest(path) {
  const options = { headers: { 'user-agent': 'node.js' }, timeout: 100000 };
  return rp(`https://www.bol.com${path}`, options);
}

function writeFile(data, filename) {
  const exportData = JSON.stringify(data);
  const exportName = `${filename}.json`

  fs.writeFile(exportName, exportData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

async function getData() {    
  const data = {
    books: await getItems('/nl/ra/boeken-topdeals/23708/N/8299'),
    games: await getItems('/nl/ra/games-topdeals/23708/N/3135'),
    toys: await getItems('/nl/ra/speelgoed-topdeals/23708/N/7934')
  }
  
  writeFile(data, 'bolTopDealsResult')
}
  
getData();