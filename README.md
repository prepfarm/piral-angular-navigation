# Problems

1. Having defined routes in `my-pilet` (Angular), clicking on routes defined in Shell app will throw an error in console `Error: NG04002: 'route-name'` if that route is not defined in the Angular router.
2. Removing route definition from `my-pilet` will prevent the error above, but if you click on `Sample` and then click again on the same link, same error will be thrown.

---

# How to reproduce:

1. `$ npm run build` in `my-shell` directory
2. `$ npm run install` in `my-pilet` directory
3. From `my-nav-pilet` directory, run following commands:
    1. `$ npm run install` in `my-nav-pilet` directory
    2. `$ npm run build`
    3. `$ npx pilet pack`
4. Start `my-pilet` with `$ npm start`
5. In browser, using Piral Inspector, add `my-nav-pilet` tgz
6. Click on "Sample (Pilet)" button

_If you don't see error messages right away, you may have to wait for a second or two._
