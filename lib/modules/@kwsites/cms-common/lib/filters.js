module.exports = (self, options) => {

   const filters = {
      keys (source) {
         return (source && typeof source === 'object') ? Object.keys(source) : `Not an object: ${ JSON.stringify(source) }`;
      }
   };

   if (typeof options.filters === 'object' && options.filters) {
      Object.assign(filters, options.filters);
   }

   self.apos.templates.addFilter(filters);


};
