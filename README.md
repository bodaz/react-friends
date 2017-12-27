# React Friends

React & friends boilerplate

* Create React App
* SASS
* Ant Design
* Redux
* React Router v4
* Folder Structure
* ...

## Quick Start

```sh
$ git clone https://github.com/bodaz/react-friends.git my-app
$ cd my-app/
$ yarn
$ yarn run start
```

## What's included?

### - Create React App

Latest [Create React App]() featuring React v16

### - Styles

Popular Ant Design framework with SASS enabled

### - Redux

Initial state:

```
{
  status: "hello world",
  counter: 0
}
```

Extras:

* [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)

### - React Router

React Router v4

### - Folder Structure

Inside of `src/`:

```
+ components
  + [non-capitalised]
    - [capitalised]
    - index.js
  - index.js
+ models
  + counter
  + status
+ pages
  + home
  - index.js
+ styles
  - index.scss
+ utils
```

The benefits of having `index.js` within our `components`, `pages` and `styles` folder is because later we can do this:

```js
// instead of
import Button from "./components/button"
import Card from "./components/card"
import Form from "./components/form"
...

// we can do it in one line
import { Button, Card, Form } from "./components";
```

## TO-DO:

* Add CLI features

like: `react-friends new my-app`

* Tests
