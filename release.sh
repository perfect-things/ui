#!/bin/bash
npm run dist
git add --all
git commit -am 'bump'
npm version patch
git push
npm publish
