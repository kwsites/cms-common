
# @kwsites/cms-common

Utilities depended upon by many of the `@kwsites/cms-*` modules.

## Getting Started

Initialise the module in your `app.js` before any other `@kwsites/cms-` modules:

```javascript
apostrophe({
  modules: {
    '@kwsites/cms-common': {},
      
    // ... other @kwsites/cms-* modules
  }
});
```

The `@kwsites/cms-common` module uses the moog bundle option to  `improve` some of the apostrophe internal modules to add the
features other modules then depend upon. Full details below:

## apostrophe-assets

`@kwsites/cms-common` adds variables and mixins for use in the `.less` files of your application or the modules it imports.

Most importantly, this module adds the variables used in layouts, to override these values set their values in your own
project as `lib/modules/apostrophe-assets/public/css/kwsites/mixins.less`:

```css
/* pixel widths to use to determine the @media queries for mobile, tablet, desktop
   and not-mobile (which covers both tablet and desktop) */
@website-width:            1200px;
@mobile-site-width:        414px; 

/* padding to use in components, the small/large padding variants are set as being
   a half / double the default padding size unless explicitly specified */
@padding-size:             1rem;

@padding-size-s:           @padding-size / 2;
@padding-size-l:           @padding-size * 2;
```



