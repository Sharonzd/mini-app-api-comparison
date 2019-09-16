#!/usr/bin/env bash

vuepress build
mv output output_back
git checkout gh-pages
mv output_back/* .
mv output_back/assets .
rm -rf output_back
git add .
git commit -m 'publish'
git push --set-upstream origin gh-pages
