# node-red-contrib-keymetrics

[![Dependency Status](https://gemnasium.com/vergissberlin/node-red-contrib-keymetrics.svg)](https://gemnasium.com/vergissberlin/node-red-contrib-keymetrics) [![Build Status](https://api.travis-ci.org/vergissberlin/node-red-contrib-keymetrics.png?branch=master)](https://travis-ci.org/vergissberlin/node-red-contrib-keymetrics) [![Inline docs](http://inch-ci.org/github/vergissberlin/node-red-contrib-keymetrics.svg?branch=master)](http://inch-ci.org/github/vergissberlin/node-red-contrib-keymetrics) [![Issues](http://img.shields.io/github/issues/vergissberlin/node-red-contrib-keymetrics.svg)]( https://github.com/vergissberlin/node-red-contrib-keymetrics/issues "GitHub ticket system") [![npm version](https://img.shields.io/npm/v/node-red-contrib-keymetrics.png)](https://npmjs.org/package/node-red-contrib-keymetrics "View this project on npm") [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/vergissberlin/node-red-contrib-keymetrics?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

---

[![Inline docs](docs/node-600.png)](http://inch-ci.org/github/vergissberlin/node-red-contrib-keymetrics)


**If you are using**

- the fantastic program [Node-RED](http://nodered.org), 
- running it with [PM2](https://github.com/Unitech/pm2) <sup>[1](#glossary)</sup> and 
- monitor with [keymetrics.io](http://keymetrics.io) <sup>[2](#glossary)</sup>, 

**that node is made for you!**

---
## Features

- Send all input messages to *Keymetrics* as event or metrics
- The Debug node can be connected to the output of any node. It can be used to push the output of any message property to the *Keymetrics* dashbord. The default is to display **msg.payload**.
- The button to the right of the node will toggle its output on and off so you can de-clutter the debug window.
- Optionally can show the complete **msg** object.
- Alerts are also displayed as alerts in Keymetrics.

## Installation

### PM2 & Keymetrics
- To run *Node-RED* with *PM2* have a look on [Node-RED documentation](http://nodered.org/docs/getting-started/running.html)
- To integrate *Keymetrics* register and after that may look at [this](https://github.com/Unitech/pm2).
- Check whether *Keymetrics* receives data.

### Node package

- Then we can install the new node, and restart *Node-RED*: 
```bash
cd ~/.node-red
npm install node-red-contrib-keymetrics
pm2 restart node-red
```
Open your *Node-RED* Frontend and you will find the new node under the group *output*. **Happy wiring!**

---
###### Glossary <a id="glossary"></a>
1. *[PM2](https://github.com/Unitech/pm2) is a process manager for [Node.js](https://nodejs.org). It makes it easy to run applications on boot and ensure they are restarted if necessary.*
- *[keymetrics.io](http://keymetrics.io) makes it easy to monitor and manage apps accross servers.*


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/vergissberlin/node-red-contrib-keymetrics/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Greenkeeper badge](https://badges.greenkeeper.io/vergissberlin/node-red-contrib-keymetrics.svg)](https://greenkeeper.io/)

