##### 使用ctrl+shift+m 显示markdown格式预览

## Git 学习笔记


---

#####  初始化本地仓库

名字 SiegFriedrich
邮箱 siegevremondes@gmail.com

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"

    穿件私钥 公钥

$ ssh-keygen -t rsa -C ‘xxx@xx.xxx’
```
建立一个文件夹，并使其成为一个新的仓库
```
$ mkdir siegworkspace
$ git init
```
在文件夹里添加一个文件，例如 readme.md 并添加到仓库里
```
$ git add readme.md
$ git commit -m "a readme file"
```
同时添加多个文件
```
$ git add 1.txt 2.txt
$ git commit -m "add 2 files"
```
---

##### 时光穿梭

- git staus 可以查看当前仓库状态
- git diff 可以查看文件差异
- git log 可以查看提交的历史信息

```
$ git log
commit d73cbe95651101a03ff1243d6cbafc2ef378e8a7 (HEAD -> master)
Author: SiegFriedrich <siegevremondes@gmail.com>
Date:   Fri Apr 5 14:37:45 2019 +0900

    add Deutsch version

commit 7eb2e0fe013145c9c6ff0d10e11698e9841699f3
Author: SiegFriedrich <siegevremondes@gmail.com>
Date:   Fri Apr 5 13:56:20 2019 +0900

    add modified txt

commit c0bb8bd28f73928eebc651d03e2148825e303e04
Author: SiegFriedrich <siegevremondes@gmail.com>
Date:   Fri Apr 5 13:49:30 2019 +0900

    add 2 files

```
### 版本回退
- git reset --hard HEAD^ 退回到当前版本的上一个版本(别忘记这个小尖尖)
- git reset --hard commitid 回到制定版本

```
$ git reset --hard d73c
```
回到指定的版本，后面跟着版本号就行，可以随意输入版本号的前几位，git会自己去找

cat [filename] 查看文件内容

```
$ cat 1.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Und ich moechte also eines Text schreiben.
net3buturyu09@NET4C110 MINGW64 ~/Desktop/github/gitTutorialDemo (master)
```
- git reflog 可以用来记录每一个之前使用过的命令

```
$ git reflog
d73cbe9 (HEAD -> master) HEAD@{0}: reset: moving to d73c
7eb2e0f HEAD@{1}: reset: moving to HEAD^
d73cbe9 (HEAD -> master) HEAD@{2}: reset: moving to HEAD
d73cbe9 (HEAD -> master) HEAD@{3}: reset: moving to HEAD
d73cbe9 (HEAD -> master) HEAD@{4}: commit: add Deutsch version
7eb2e0f HEAD@{5}: commit: add modified txt
c0bb8bd HEAD@{6}: commit (initial): add 2 files
```

- 撤销修改

git checkout -- filename

```
git checkout -- readme.txt
```

一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

- git reset HEAD <file\>

<file><file>可以把暂存区的修改撤销掉（unstage），重新放回工作区, git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。



```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   readme.txt

$ git reset HEAD readme.txt
Unstaged changes after reset:
M    readme.txt

$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt

//丢弃掉工作区的修改

$ git checkout -- readme.txt

$ git status
On branch master
nothing to commit, working tree clean    

```

- 删除文件

```
$ git rm test.txt
```
