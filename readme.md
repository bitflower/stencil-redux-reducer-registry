# Lazy loading of Redux reducer with StencilJS

This [StencilJS](https://stenciljs.com/) app demonstrates how to load Redux reducer on the fly when new components are loaded through routes.

It uses the npm module `redux-reducer-registry` you can find here: [link](https://github.com/bitflower/redux-reducer-registry)

## GIF preview

Here you can a component loaded lazy including the instantiation of a reducer:
![REdux reducer regstry](https://raw.githubusercontent.com/bitflower/stencil-redux-reducer-registry/master/stencil_redux.gif)

## Run it!

```bash
git clone https://github.com/bitflower/stencil-redux-reducer-registry.git stencil-redux-reducer-registry
cd https://github.com/bitflower/stencil-redux-reducer-registry
git remote rm origin
```

and run:

```bash
npm install
npm start
```