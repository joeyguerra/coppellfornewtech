#!/bin/bash
set -e
npm version patch --no-git-tag-version
VERSION=$(node -p "require('./package.json').version")
sed -i '' -e "s|local/coppellfornewtech-website:[0-9]*\.[0-9]*\.[0-9]*|local/coppellfornewtech-website:$VERSION|g" charts/web/deployment.yaml
docker build -t local/coppellfornewtech-website:$VERSION .
k3d image import local/coppellfornewtech-website:$VERSION -c local
