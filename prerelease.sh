#!/bin/bash
version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)
echo "Current version: $version"
echo "Enter - bump beta version and release"
echo "c - use current version and release"
echo "q - quit"
read -p "Pre-release? " ans
case $ans in
	"" ) npm version prerelease --preid=beta ;;
	c | C | no | NO ) echo "Using current version" ;;
    q  ) exit ;;
    *  ) echo "What's that?" && exit ;;
esac

exit

npm run changelog
npm run build
npm run pack
git add --all
git commit -am "pre-release $version" --no-verify
git push
npm publish --tag beta
echo "Pre-release $version published successfully."
