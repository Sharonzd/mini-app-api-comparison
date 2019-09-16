#!/usr/bin/env bash

vuepress build
mv output output_back
git checkout gh-pages
rm -rf assets
mv output_back/* .
rm -rf output_back
git add .
git commit -m 'publish'
git push origin gh-pages
git checkout master
echo '发布完成'
