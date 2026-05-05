# History

## created at 2011 by ( faceBook & Jorden walk)

- 2012 <------- faceBook created intagram

- 2013 <--------- React open source

- 2014 <-------- react

- 2015 <--------- react Nativ (ios + Anroid )

- 2016 --------- fiber architecture

- 2019 ----------- react introduced hooks

- 2022 ----------- react-18 - React Concurrent mode - Automatic Batching

- 2025 ------------- react-19.2 -useEffect + Event
  -Activity commonent

## Why i use react ?

        -  Automatic ui Update
        - reusabel component
        - handles large apps Easily
        - vertulal dom == bettor performance
        - state Managemet
        - industry Standered
        - rich eco system

# What is ract and what is feature ?

react is a free open source javascript base library built by facebook in 2013 for building user interfaces or UI components

## What is package.json file ?
package.json is a file that contains metadata about the project and its dependencies. It is used by npm to manage the project's dependencies and scripts.

## What is defferient between dependencies and devdependency ?

''dependecies'' are the packages that are required for the application to run in production. They are installed when you run npm install.
 ex - next , react , react-dom;

''devdependency''  are the packages that are only required for development purposes. They are not installed when you run npm install --production.
 ex - eslint, webpack;

---
## Globlae package installation
```
npm install -g packageName
```

## local package installation
```
npm i axios
```

## temporary package install --
```
npx nodemon
```

# couk ai;

# Q - what is node module ?
ans - node modules is a folder that contains all the dependencies of the project. It is created when you run npm install.

# Q - what is eslint.config.js?
ans - eslint.config.js is a configuration file for eslint. It is used to specify the rules and settings for eslint. It is created when you run npm install eslint --save-dev and it is located in the root directory of the project.

# in Sort eslint.config.js



## Q - waht is package.json?
ans - package.json is a file that contains metadata about the project and its dependencies. It is used by npm to manage the project's dependencies and scripts. It is created when you run npm init and it is located in the root directory of the project.

## Q - what is package-lock.json ?
ans - package-lock.json is a file that contains the exact versions of all dependencies installed in the project. It is created when you run npm install and it is located in the root directory of the project.

## Q - what is readme.md?
ans - a markdown file that

## Q vite.config.js 
configution file for vite (build tool & dev server).



# DATE: 28-04-2026
## Q11 what is synthetic event
ans - Synthetic event in react is a cross-browser wrapper around the browser's native event object

## Q12 what is vertual dom
ans - Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation. The virtual DOM allows React to efficiently update the real DOM by only re-rendering the components that have changed, rather than re-rendering the entire DOM tree. This results in better performance and a smoother user experience.

## Q13 what is reconcilliation


## Q14 waht is deffing algorithem?

##defferient between state and props

#props

## Props are immutable

props are used for passing data from one component to another component

##waht is hooks
--hooks are special builtin functuons in react that allow to use state and another other react in functional components
feature
-hoook introdused in react 16.8
-hook allow functional comaponet to be state full
-hooks start with "use"
-Enable better code reuse;

## what is useState hook ?
useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. You can use it like this:

```import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
``` 

## what is Batching ?
Batching is a technique used by React to optimize the performance of updates to the DOM. When multiple state updates are made in a single event loop, React batches them together and applies them in a single update to the DOM. This reduces the number of times the DOM needs to be updated, which can improve performance and reduce the likelihood of layout thrashing. Batching is enabled by default in React 18 and later versions.
