/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ghpages = require('gh-pages');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/anita8004/favQs-react.git'
}

const callback = err => {
  if (err) console.error(err);
  else console.log('publish success');
}

// eslint-disable-next-line no-undef
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);