
module.exports = {

   alias: 'cms_common',

   filters: true,

   construct (self, options) {

      if (options.filters !== false) {
         require('./lib/filters')(self, options);
      }

   }
};
