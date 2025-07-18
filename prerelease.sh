#!/bin/bash
version=$(cat package.json | grep '"version"' | cut -d '"' -f 4)
echo "Current version: $version"
echo "Enter - pre-release"
echo "q - quit"
read -p "Pre-release? " ans
case $ans in
    "" ) ;;
    q  ) exit ;;
    *  ) echo "What's that?" && exit ;;
esac

npm run changelog
npm run build
git add --all
git commit -am "pre-release $version" --no-verify
git push
npm publish --tag beta
echo "Pre-release $version published successfully."
