# Bongosian.com Web Site

This project builds and installs the [bongosian.com](https://bongosian.com) web site.

## Overview

Bongosian.com is a Gatsby project, which staticly builds a React application, and ultimately depends on Node.js to manage dependencies, testing, and development runtime. The production site is hosted on Netlify, and deployed through triggers on GitHub.

### References

Obviously, I'm not going to explain Node, React, and Gatsby in this document.  Here are some pointers, though.

* [Learn Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [Learn React](https://react.dev/learn)
* [Learn Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/)

## Install bongosian-web

**Install Node.js** : If you don't already have it, [install Node.js](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/) as your first step.

**Clone The Repository** : You can clone this project using `git clone git@github.com:slashingweapon/bongosian-web.git`.  

Alternatively, you can visit the [project site](https://github.com/slashingweapon/bongosian-web) and download an archive.  

The live site is on the `production` branch.

**Install Dependencies** : Open a terminal, change directory to the repo directory, and run `npm install`.  Node will download all the remaining dependencies, including React and Gatsby and all their required plugins.

## Build (Development)

Testing and playing with the applicaiton is easy. Change directory to the project directory and run Gatsby's development server.

```
$ cd bongosian-web
$ gatsby develop
```

You will see a lot of logs about building the site. Gatsby will run a local server you can use to test the web site, available on [http://localhost:8000](http://localhost:8000) .

When you use the development server, your saved changes will be compiled and available immediately, without restarting the server.

A GraphQL explorer is also made available on [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Deployment

Bongosian.com is deployed through the [Bongosian Press Netlify Site](https://app.netlify.com/sites/bongosian-press/overview).

The following deployments are made automatically:
* Any commit to `production` will deploy the live site.
* Any commit to `master` will deploy a preproduction site.
* Any merge request for the `master` branch will create a test deployment. Any commit to the working branch will deploy a new test site.

I only have 300 minutes of free build time, so don't spam pushes to a branch with an open merge request to `master`. I typically do frequent pushes, so when I'm working on this project I'll defer making a merge request until I'm ready to deploy the test site on Netlify. That lets me keep doing frequent pushes to the issue branch without eating up my build minutes.

## Version Control & Deployment

### Work Branches

Branches for larger feature sets get a human-readable label ending in "-feature" (eg: `bootstrap-feature`). They are always branched from `master`.

Branches intended for a single issue are named with the issue ID. (eg: `PR15-dev`, `PR99-fix`). They can be branched from `master` or from a feature branch.

The code-test-debug loop happens on the developer's local machine.

### Test Before You Merge

Even though production has its own branch, we don't want to deploy anything seriously broken onto `master`. Having Netlify do automatic test deployments from merge requests turns out to be very useful in this regard. This is where missing dependencies and incompatibilities show up.

When a branch is ready to be tested on the Netlify server, create a merge request to `master`.  Netlify will create a test deployment.  Use the [Bongosian Press Builds](https://app.netlify.com/teams/slashingweapon/builds) page to find out what url to use to access the deployed site.

Test.  Anything new you push onto the working branch will trigger a new test deployment. This is an awesome feature, but try not to overuse it.

If the change set is well and truly done (or whatever I decide is "done enough" to close the issue) then merge.

Then, test the preproduction site to make sure nothing untoward happened.

### Deploy To Production

The production site is build from the `production` branch. Whatever is committed and pushed there will end up on the live web site.

Pushes from `master` to `production` are always a fast-forward, at least they are if I'm doing my job right. I typically just pull both branches, merge `master` onto `production`, and then push production. 

You can do this entirely from the UI by creating a merge request, if you don't mind spinning up a superfluous test build.
