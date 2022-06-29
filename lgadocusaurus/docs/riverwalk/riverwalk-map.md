---
sidebar_position: 2
title: Floor Map Module
---

# Introduction

The floor map module created for RiverWalk utilizes the HubSpot React Boilerplate template, and is uploaded via the 
HubSpot CLI tool. 

Because of the limited file size that HubSpot supports, Webpack must minimize this package and all included packages
before being uploaded to HubSpot. This is done automatically upon successfully running this package.

The container folder of this project is `HubSpotThreeJS`.


### Technology Used
- React
- ThreeJS
- HubSpot
- HubSpot CLI
- React Three Fiber
- React Three Drei
- JavaScript
- CSS

### Essential Links
- [HubSpot React CRM Boilerplate](https://github.com/HubSpot/cms-react-boilerplate)
- [HubSpot CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- [HubSpot Fields Documentation](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)
- [React-Three-Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [three.js Documentation](https://threejs.org/docs/)
- [React-Three-Drei Documentation](https://github.com/pmndrs/drei)

### Repository

https://github.com/lgaGit/HubSpotThreeJS

### Steps to Run

1. Download & Install HubSpot CLI. 
2. Log in to the RiverWalk account on HubSpot via HubSpot CLI.
3. Clone the GitHub Repository. `git clone https://github.com/thomaslanenh/HubSpotThreeJS`
4. Navigate via command line to the cloned repository.
5. Type `npm run`.

Changes to code will automatically be pushed to HubSpot.

## Project Structure

I believe everything is retained to the /src folder. There shouldn't be any components used in this project, but the
folder and some test components do exist within that folder. Essential files are listed below:

- /src
  - /images
  - /modules
    - fields.json
  - App.js
  - App.scss
  - Index.js

#### App.js

This is the heart and soul of the project. All logic is in here, including 3D calculations and retrieving data from
HubSpot. 

The custom module runs off of ThreeJS with the wrapper React based functionality in React-Three-Fiber. 

#### App.scss

The CSS file that controls stylization of the 3D plane and supporting apps.

#### Index.js

The basic structure of the React application. Provides the container for ThreeJS to latch onto and build upon.

#### /modules/fields.json

This sets up and makes live the points of data collection within HubSpot that can then be retrieved within the React
code. Field's are grouped per floor. To find out more information on how to set up fields or modify then, reference
the [HubSpot Fields Documentation](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields).

## Known Issues / Limitations

As of this moment, the module only supports a developer defined number of floors. Each additional floor needed has 
to be coded in to the state management within React & respective fields added to `fields.json` for manipulation by the
users on the front end.