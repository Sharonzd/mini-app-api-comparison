#!/usr/bin/env bash

vuepress build
mv output output_back
git checkout gh-pages
mv output_back ..
git add .
git commit -m 'publish'