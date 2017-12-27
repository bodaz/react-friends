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

[Ant Design](https://github.com/ant-design/ant-design) with SASS enabled

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
  + [components]
  - index.js
+ models
  + counter
  + status
  - index.js
+ pages
  + home
  - index.js
+ styles
  + core
  + theme
  - index.js
+ utils
```

Having `index.js` may seem like a lot boilerplates initially,
but when the list of `components` or `pages` grew bigger, this structure will allows us to import the items within easier

## TO-DO:

* Add CLI features like: `react-friends new my-app`

* Tests
