# vmqadmin-ui
This is an open source admin UI for the awesome VerneMQ MQTT broker.

The project extends the vmq-admin command line utility via a AngularJS-based UI. Features supported currently

* API-Key Management
* Simple Dashboard showing the status page of the cluster
* Live configuration
* Plugin management
* Listener management
* Cluster metrics

## Coming up
* MQTT client managament - adding users and password
* Advanced listener configurations
* Probable prometheus integration
* Docker and K8s files for use on containerised setups
* UI re-design

## Some thing to know about the express API server
* It is being created as a sort of extra busineless logic layer for cool things in the future (user groups, ACL for user groups etc, build managing MQTT clients)
* it currently also reverse proxies the vernemq endpoints for the angular app to safely consume the APIs (i didnt know where to enable CORS in vernemq REST API) 

## Quick start guide

# Build angular app
* Please ensure that you have angular 8 or above installed and ready on the system
* Also ensure that vernemq is running on port 9999 (can be changed to your installation in  config/default.json)
* cd to the ui directory and execute ng build --prod

# Run express server
* return to the project root and execute node server.js
* the UI will be available at http://127.0.0.0:7777


## The project is currently in BETA and hence author holds no responsibility for usage of this software in production environments. Please use at your own risk. 

This project is released under the Apache 2.0 license. Feel free to modify and use. 


