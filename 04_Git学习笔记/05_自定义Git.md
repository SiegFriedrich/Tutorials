### 自定义Git

---

#### 忽略特殊文件

在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

不需要从头写.gitignore文件，GitHub已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：https://github.com/github/gitignore

忽略文件的原则是：

- 忽略操作系统自动生成的文件，比如缩略图等；
- 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
- 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。

.gitignore文件
```
Thumb.db
ehthumbs.db
Destop.insertion
```
忽略Python,Java编译产生的.pyc, .pyo, dist, .class等文件或目录：
```
#Python
*.py[cod]
*.so
*.class
*.temp
```
最后一步就是把 .gitignore也提交到Git上，就OK了。

##### 小结

- 忽略某些文件时，需要编写.gitignore；

- .gitignore文件本身要放到版本库里，并且可以对.gitignore做版本管理！

#### 配置别名

配置一个git last，让其显示最后一次提交信息：

```
$ git config --global alias.last 'log -1'
```

甚至还有人丧心病狂地把lg配置成了：
```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
结果
```
$ git lg
* 2c29ff5 - (HEAD -> dev) add new files (3 hours ago) <SiegFriedrich>
* 0f5674f - (origin/dev) add file and changes (3 days ago) <SiegFriedrich>
* fc35510 - finish 03MD (3 days ago) <SiegFriedrich>
* 2252e74 - little modify (3 days ago) <SiegFriedrich>
* 156f210 - (origin/master, origin/HEAD, master) add contents (3 days ago) <SiegFriedrich>
* b17ae66 - file modify #201904081009 (3 days ago) <SiegFriedrich>
* 34c35e1 - 02-MD file deleted (3 days ago) <SiegFriedrich>
*   a89820a - files modified (3 days ago) <SiegFriedrich>
|\
| *   a9afa26 - add branch management (5 days ago) <SiegFriedrich>
| |\
| | * c5c8e5e - add brnach management (5 days ago) <SiegFriedrich>
| * |   c02c2ed - add changes to merge (5 days ago) <SiegFriedrich>
| |\ \
| | |/
| | * 7b891c4 - dev changes (5 days ago) <SiegFriedrich>
| * | 35b5df4 - add conflicts (5 days ago) <SiegFriedrich>
| * |   4b36f72 - Merge branch 'dev' (5 days ago) <SiegFriedrich>
| |\ \
| | |/
| | * 1af0787 - add conflicts (5 days ago) <SiegFriedrich>
| * | ebc9d36 - master change (5 days ago) <SiegFriedrich>
:...skipping...
```

#### 搭建Git服务器

我不搭，我不搭
等我开公司再搭建吧。
