#!/bin/bash
echo "Current version: $(cat package.json | grep '"version"' | cut -d '"' -f 4)."
echo "0. don't bump"
echo "1. major"
echo "2. minor"
echo "3. patch"
echo "q. quit"
read -p "Select version to publish (patch): " ans
case $ans in
    0  ) v=none ;;
    1  ) v=major ;;
    2  ) v=minor ;;
    3  ) v=patch ;;
    "" ) v=patch ;;
    q  ) exit ;;
    *  ) echo "Whats that?" && exit ;;
esac

if [ $v != none ]; then
	npm version $v
fi
npm run changelog
npm run dist
git add --all
git commit -am 'release' --no-verify
git push
npm publish --access public
