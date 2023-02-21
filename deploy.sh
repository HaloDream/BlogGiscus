#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

pnpm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

git init
git add -A
git commit -m 'first deploy'

### imporant 注意替换 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:HaloDream/BlogGiscus.git master:gh-pages

cd 
