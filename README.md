## Recap 1/23/2019

### Git Rebase

[Git- Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

In Git, there are 2 ways to integrate changes from one branch into another, `merge` and `rebase`.

#### Merge

Merge is the traditional and easier way to integrate branches. It performs a 3-way merge between the 2 latest branch snapshots and the most recent ancestor of the 2, creating a new snapshot.

```
$ git checkout master
$ git merge [enter branch name here]
```

![merge](git_merge.png)

#### Rebase

Rebasing, on the other hand will take any local changes you plan on applying to master and add it to the pre-existing linear history of the repo.

```
$ git checkout [enter branch name here]
$ git rebase master
```

![rebase](git_rebase.png)

then you would apply a fast-forward merge to make your repo concurrent.

```
$ git checkout master
$ git merge [enter branch name here]
```

![ff merge](git_ffmerge.png)

##### Caution

You should never rebase commits that exist outside your repo where people may have based work on them.

When you rebase code existing commits are abandoned, therefore if people are working on on those old commits locally, major issues occur when they merge with the master as well when you go to pull back locally updates.

### React Router

[React Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)

React Router is a routing library built on top of React js which is used to create declarative routing in React apps.

#### BrowserRouter

This is a router that uses the HTML5 history API to keep your UI in sync with the URL. This is the component that needs to wrap everything that you want routing to be applied to in your app. Generally this is included in your App.js file in the root directory.

Commonly you will see this aliased as `Router`

```
import { BrowserRouter as Router } from 'react-router-dom'

<Router>
  <App/>
</Router>
```

#### Route

The Route component is probably the most commonly used one in React Router. It's basic responsibility is to render some UI when a `location` (within history.location or this.props.location) matches the route's path.

```
<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/news" component={NewsFeed}/>
  </div>
</Router>
```

Here we can discuss the inclusion of a few of the inline functions:

- path: Passed any valid URL path or array of paths that can be understood.
- component: Self explanatory, we pass in the component that should be rendered when that route is invoked.
- exact: This is a boolean that will only match if the path matches the location.pathname exactly.

#### Link

Provides declarative, accessible navigation around your app. We do not use `a` tags when linking within our app because our routing will not coincide. We must use <Link> tags.

```
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
<Link to={`/profiles/${userId}`}>User Profile</Link>
<Link to="/product/:productId">Product of the Day</Link>
```

We must include the `to` function, this duplicates what a `href` attribute would do for an `a` tag. So we can pass our path either statically or dynamically with interpolation tags `{}`. We can also use colons to pass parameters to other components as with `:productId`.

#### NavLink

This is a special version of the <Link> tag that will add styling attributes to the rendered element when it matches the current URL.

By default, it will pass the `.active` class styling, by default, to an item in your navbar. So if you want a nav item to be highlighted when a user is on the component associated with it then use <NavLink> instead.

```
<NavLink to="/Home" >
  Home
</NavLink>
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

If you want apply a different class name for an active link then you pass the inline function of `activeClassName` which will let you customize the class.

## General Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Get Started

- Install Node at [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Navigate to this directory in your shell of choice
- Run the command 'npm install'
- Good to go!

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
