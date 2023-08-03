@environment-safe/elements
============================
Because compatibility isn't useful if you still can't load the file. This makes WebComponents loadable so they can be included (both with JsDOM and without being instantiated).

Usage
-----

```javascript
import { 
    Element
    HTMLElement,
    customElements,
    document,
    window
} from '@environment-safe/elements';
```

Testing
-------

Run the es module tests to test the root modules
```bash
npm run import-test
```
to run the same test inside the browser:

```bash
npm run browser-test
```
to run the same test headless in chrome:
```bash
npm run headless-browser-test
```

to run the same test inside docker:
```bash
npm run container-test
```

Run the commonjs tests against the `/dist` commonjs source (generated with the `build-commonjs` target).
```bash
npm run require-test
```

Development
-----------
All work is done in the .mjs files and will be transpiled on commit to commonjs and tested.

If the above tests pass, then attempt a commit which will generate .d.ts files alongside the `src` files and commonjs classes in `dist`

