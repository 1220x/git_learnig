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

## git log命令
- `git log --all`  查看所有分支的历史
- `git log --all  --graph` 查看图形化的log地址
- `git log --oneline` 查看单行的简洁历史
- `git log --oneline -n4` 查看最近的四条简洁历史
- `git log --oneline --al -n4 --graph` 查看所有分支,最近4条单行的图形化历史
- `git hepl --web log` 跳转到git log的帮助文档页面


## git分支
- `git branch -v` 查看本地分支信息
- `git checkout -b <分支名> <已有分支的某个commit号,依据此时的分支来创建新的分支>`

## tips
命令中,什么时候用 `--` 什么时候用 `-` 呢?
    详情参数使用`--`, 简化参数(如单字母)使用`-`
