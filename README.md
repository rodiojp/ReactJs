## Create new [split-screen] ReqactJs app

`npx create-react-app@latest split-screen --use-npm`

We suggest that you begin by typing:

- `cd split-screen`
-  `npm start`

You can now view split-screen in the browser. Local: http://localhost:3000

Note that the development build is not optimized. To create a production build, use `npm run build`.
#### Without @leatest you will get the Error
Error While Creating new React app(You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0))(https://stackoverflow.com/questions/70358474/error-while-creating-new-react-appyou-are-running-create-react-app-4-0-3-whi#answer-70358556)
- `npx clear-npx-cache` to clear your npx cache

or use `create-react-app@latest`

- `npx create-react-app@latest split-screen --use-npm`

#### Application structure
There are three top level sub-folders:

- **/node_modules** : Where all of the external libraries used to piece together the React app are located. You shouldn’t modify any of the code inside this folder as that would be modifying a third party library, and your changes would be overwritten the next time you run the npm install command.
- **/public** : Assets that aren’t compiled or dynamically generated are stored here. These can be static assets like logos or the robots.txt file.
- **/src** : Where we’ll be spending most of our time. The src, or source folder contains all of our React components, external CSS files, and dynamic assets that we’ll bring into our component files.

- **public\index.html** file, which is html entry point for the app
- **public\manifest.json** file, which is used with mobile phones. 
- **src\App.js** component, which is the root component for our blog, as well as the css and tests that go with it. 


#### Create new [SplitScreen] Component
- **src\components\SplitScreen.js**


Use [<React.Fragment> tag](https://reactjs.org/docs/fragments.html)

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
Use [<></> tag for short syntax ](https://reactjs.org/docs/fragments.html#short-syntax)
There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:


```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

#### Minimal React components
```js
import React from 'react';

const SplitScreen = () => { return <></> };

export default SplitScreen;
```


```js
import React from 'react';

const SplitScreen = () => { return <></> };

export default SplitScreen;
```

### Install [styled-components] package
[npm-install documentation](https://docs.npmjs.com/cli/v8/commands/npm-install)

`npm install` alias: `npm i`

`npm i styled-components`

This package contains type definitions for [styled-components](https://github.com/styled-components/styled-components).

`npm install --save @types/styled-components`



