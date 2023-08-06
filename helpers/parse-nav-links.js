const parseNavLinks = (links) => {
  let nav = [];

  for (const key in links) {
    if (links.hasOwnProperty(key)) {
      if (key.startsWith('link-text')) {
        const index = parseInt(key.replace(/\D/g, ''), 10);
        const linkUrlKey = `link-url-${index}`;
        if (links.hasOwnProperty(linkUrlKey)) {
          const linkPair = {
            'text': links[key],
            'url': links[linkUrlKey]
          };
          nav.push(linkPair);
        }
      }
    }
  }

  return nav;
};

module.exports = parseNavLinks;