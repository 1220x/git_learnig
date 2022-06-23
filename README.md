# README

## git 使用大致流程
- git add files  工作目录 -> 暂存区
- git commit 暂存区 -> 版本历史

## git命令
git add -u: 将文件的修改 文件的删除,添加到暂存区 (即 操作追踪过的文件)

git add . : 将文件的修改 文件的新建,添加到暂存区

git add -A : 将文件的修改 文件的删除 文件的新建,添加到暂存区

git reset --hard : 将暂存区 \ 工作目录下的内容都清空掉. 使得工作目录还原到最后一次commit的状态,也就是说.在最后一次commit之后`git add git rm`的操作以及在工作目录的修改都撤销了

## 文件重命名
- 直接修改文件名,git会提示,原文件被删除,有一个新的还没有跟踪过的文件
- 将新的文件git add添加到暂存区
- 原来的文件git rm <filename> 删除

终极解决方式:

`git mv <原文件名> <新的文件名>`

