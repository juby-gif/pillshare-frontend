#!/bin/bash
# This script will build the react application and then deploy it to `surge.sh` service
# which will host the static files in their CDN.
npm run build:prod
cd build
mv index.html 200.html
surge ./ pillshare.app