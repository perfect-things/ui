#!/bin/bash
echo "0. don't bump"
echo "1. major"
echo "2. minor"
echo "3. patch"
echo "q. quit"
read -p "Select version to publish (patch): " ans
case $ans in
    1  ) v=major ;;
    2  ) v=minor ;;
    q  ) v=patch ;;
    "" ) v=patch ;;
    *  ) echo "Whats that?" ;;
esac

npm run dist
git add --all
git commit -am 'release'
npm version $v
git push
npm publish
