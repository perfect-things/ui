#!/bin/bash
npm run dist
git add --all
git commit -am 'bump'
npm version bump
git push
npm publish
