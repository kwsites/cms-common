const _ = require('lodash');

module.exports = {

   improve: 'apostrophe-assets',

   construct (self, options) {

      self.stylesheets.push(
         { name: 'kwsites/mixins', when: 'always' },
      );

   },

};
