#!/bin/bash
version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)

if [[ -z "$version" ]]; then
	echo "Version not found. Please run this command in the project root directory."
	exit 1
fi


echo "Current version: $version"
echo " 0  don't bump"
echo " 1  major"
echo " 2  minor"
echo " 3  patch"
echo " q  quit"
read -p "Select version to publish (patch): " ans
case $ans in
	0  ) echo "Using current version" ;;
	1  ) npm version major ;;
	2  ) npm version minor ;;
	3  ) npm version patch ;;
	"" ) npm version patch ;;
	q  ) exit ;;
	*  ) echo "Whats that?" && exit ;;
esac

version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)
git add --all
git commit -am "release $version" --no-verify
git push
npm run build
if npm publish --access public; then
    echo "Release $version published successfully."
fi
