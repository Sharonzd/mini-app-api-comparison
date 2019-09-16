#!/usr/bin/env bash

vuepress build
mv output output_back
git checkout gh-pages
mv output_back/* .
rm -rf outout_back
git add .
git commit -m 'publish'
git push --set-upstream origin gh-pages
