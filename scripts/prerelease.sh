#!/bin/bash
version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)

if [[ -z "$version" ]]; then
	echo "Version not found. Please run this command in the project root directory."
	exit 1
fi

echo "Current version: $version"
echo " 0  don't bump"
echo " 1  bump beta version"
echo " q  quit"
echo ""
read -p "Select version to publish (beta) " ans
case $ans in
	0  ) echo "Using current version" ;;
	1  ) npm version prerelease --preid=beta ;;
	"" ) npm version prerelease --preid=beta ;;
	q  ) exit ;;
	*  ) echo "What's that?" && exit ;;
esac

version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)
npm run changelog
npm run build
npm run pack
git add --all
git commit -am "pre-release $version" --no-verify
git push
npm publish --tag beta
echo "Pre-release $version published successfully."
