## Python解释器

当我们编写Python代码时，我们得到的是一个包含Python代码的以.py为扩展名的文本文件。要运行代码，就需要Python解释器去执行.py文件。

CPython
当我们从Python官方网站下载并安装好Python 3.x后，我们就直接获得了一个官方版本的解释器：CPython。这个解释器是用C语言开发的，所以叫CPython。在命令行下运行python就是启动CPython解释器。

CPython是使用最广的Python解释器。教程的所有代码也都在CPython下执行。

IPython
IPython是基于CPython之上的一个交互式解释器，也就是说，IPython只是在交互方式上有所增强，但是执行Python代码的功能和CPython是完全一样的。好比很多国产浏览器虽然外观不同，但内核其实都是调用了IE。

CPython用>>>作为提示符，而IPython用In [序号]:作为提示符。

## Python 程序
### Python交互模式
命令行内敲python便进入交互模式了，敲 exit() 便退出。

在.py文件的当前目录下 输入 python hello.py  该python文件将会被执行。

记住 print后面直接跟着括号，没有空格！

```
print('hey u r bitch!')
```

### 直接运行py文件
有同学问，能不能像.exe文件那样直接运行.py文件呢？在Windows上是不行的，但是，在Mac和Linux上是可以的，方法是在.py文件的第一行加上一个特殊的注释：
```
#!/usr/bin/env python3

print('hello, world')
```

然后，通过命令给hello.py以执行权限：就可以直接运行了
```
$ chmod a+x hello.py
```

### 输入和输出
input() 函数相当于等待屏幕输入，可以在括号里写提示

```
>>>name = input('please input your name:')
print('hello,',name, 'you\'re so bitch')
```


## Python基础
Python讲究缩进，不能像Java可以格式化代码，而且大小写敏感。#用于注释
缩进将使用4个空格而不是tab键。

### 数据类型
- 整数，浮点数，字符串

- 如果字符串内部有很多换行，用\n写在一行里不好阅读，为了简化，Python允许用'''...'''的格式表示多行内容
```
  >>> print('''line1
  ... lorl
  ... borik
  ... sdfaoaidjfao''')
  line1
  lorl
  borik
  sdfaoaidjfao
```

- 布尔值 True, False 运算符 and or not
```
>>>False and False
False
>>> True or False
True
```

- 常量 习惯上用大写去写，但是Python没有机制保证常量不变，所以你依然可以改变常量值。
- / 除法 结果永远是浮点数  // 地板除法 结果永远是整数， 浮点数的结果也是截取整数部分的   % 取余


### 字符编码

由于Python的字符串类型是str，在内存中以Unicode表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把str变为以字节为单位的bytes。

Python对bytes类型的数据用带b前缀的单引号或双引号表示：
```
x = b'ABC'
```

如果bytes中包含无法解码的字节，decode()方法会报错：

```
>>> b'\xe4\xb8\xad\xff'.decode('utf-8')
Traceback (most recent call last):
  ...
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 3: invalid start byte
```

如果bytes中只有一小部分无效的字节，可以传入errors='ignore'忽略错误的字节：
```
>>> b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore')
'中'
```

### 计算字符个数
要计算str包含多少个字符，可以用len()函数：
```
>>> len('ABC')
3
>>> len('中文')
2
```
len()函数计算的是str的字符数，如果换成bytes，len()函数就计算字节数：
```
>>> len(b'ABC')
3
>>> len(b'\xe4\xb8\xad\xe6\x96\x87')
6
>>> len('中文'.encode('utf-8'))
6
```

### 输出格式化字符串

在Python中，采用的格式化方式和C语言是一致的，用%实现，举例如下：

```
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'
```

你可能猜到了，%运算符就是用来格式化字符串的。在字符串内部，%s表示用字符串替换，%d表示用整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略。

```
print('%2d-%02d' % (3, 1))
print('%.2f' % 3.1415926)

3-01
3.14
```
format()
另一种格式化字符串的方法是使用字符串的format()方法，它会用传入的参数依次替换字符串内的占位符{0}、{1}……，不过这种方式写起来比%要麻烦得多：

```
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```
