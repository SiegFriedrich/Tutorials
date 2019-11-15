# Bootstrap 布局组件

### 字体图标
下面的CSS构成glyphico class

```
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -moz-osx-font-smoothing: grayscale;
}
```
实例:

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Bootstrap 实例 - 如何使用字形图标（Glyphicons）</title>
	<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
	<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<p>
	<button type="button" class="btn btn-default">
		<span class="glyphicon "></span>
	</button>
	<button type="button" class="btn btn-default">
		<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
	</button>
	<button type="button" class="btn btn-default">
		<span class="glyphicon glyphicon-sort-by-order"></span>
	</button>
	<button type="button" class="btn btn-default">
		<span class="glyphicon glyphicon-sort-by-order-alt"></span>
	</button>
</p>
<button type="button" class="btn btn-default btn-lg">
	<span class="glyphicon glyphicon-user"></span> User
</button>
<button type="button" class="btn btn-default btn-sm">
	<span class="glyphicon glyphicon-user"></span> User
</button>
<button type="button" class="btn btn-default btn-xs">
	<span class="glyphicon glyphicon-user"></span> User
</button>


</body>
</html>

```

### 下拉菜单

下拉菜单，需要在class .dropdown 内加上下拉菜单：

```
<div class="dropdown">
    <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">主题
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">Java</a>
        </li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据挖掘</a>
        </li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据通信/网络</a>
        </li>
        <li role="presentation" class="divider"></li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">分离的链接</a>
        </li>
    </ul>
</div>
```

### 按钮组
```
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <button type="button" class="btn btn=default">1</button>
      <button type="button" class="btn btn=default">2</button>
    </div>
  </div>
```

### 按钮下拉菜单

```
<div class="btn-group">
    <button type="button" class="btn btn-default">默认</button>
    <button type="button" class="btn btn-default dropdown-toggle"
        data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">切换下拉菜单</span>
    </button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">功能</a></li>
        <li><a href="#">另一个功能</a></li>
        <li><a href="#">其他</a></li>
        <li class="divider"></li>
        <li><a href="#">分离的链接</a></li>
    </ul>
</div>
```

### 输入框组
输入框模板
```
  <div class='input-group'>
    <span class='input-group-addon'>@</span>
    <input type='text' class='form-control' placeholder='twittermessage'>
  </div>
```
输入框组的大小 ： 通过向 .input-group 添加后缀改变大小，.input-group-lg, .input-group=sm

按钮插件  .input-group-btn
```
  <div class='row'>
    <div class='col-md-6'>
      <div class='input-group'>
        <input type='text' class='form-control'>
        <span class='input-group-btn'>
          <button class='btn btn-default' type='button'>search</button>
        </span>
      </div>
    </div>
  </div>
```

#### 带有下拉菜单的按钮

创建一个标签式的导航菜单
- 带有class .nav 的无序列表开始
- 添加 class .nav-tabs

- 胶囊式导航菜单
- 将 .nav-tabs 替换成 .nav-pills

- 垂直的胶囊式导航菜单
- 在 .nav-pills 后面添加 class .nav=stacked

- 两端对齐的导航

- nav-justified e.g. <ul class="nav nav-pills nav-justified">

-禁用链接
- class .disabled

### 导航元素

- 有下拉菜单的标签
```
<p>带有下拉菜单的标签</p>
<ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">SVN</a></li>
  <li><a href="#">iOS</a></li>
  <li><a href="#">VB.Net</a></li>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
      Java <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li><a href="#">Swing</a></li>
      <li><a href="#">jMeter</a></li>
      <li><a href="#">EJB</a></li>
      <li class="divider"></li>
      <li><a href="#">分离的链接</a></li>
    </ul>
  </li>
  <li><a href="#">PHP</a></li>
</ul>
```

- 动态标签

```
<p><strong>提示:</strong> 与 .tab-pane 和 data-toggle="tab" (data-toggle="pill" ) 一同使用, 设置标签页对应的内容随标签的切换而更改。</p>
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">首页</a></li>
  <li><a data-toggle="tab" href="#menu1">菜单 1</a></li>
  <li><a data-toggle="tab" href="#menu2">菜单 2</a></li>
  <li><a data-toggle="tab" href="#menu3">菜单 3</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <h3>首页</h3>
    <p>菜鸟教程 —— 学的不仅是技术，更是梦想！！！</p>
  </div>
  <div id="menu1" class="tab-pane fade">
    <h3>菜单 1</h3>
    <p>这是菜单 1 显示的内容。这是菜单 1 显示的内容。这是菜单 1 显示的内容。</p>
  </div>
  <div id="menu2" class="tab-pane fade">
    <h3>菜单 2</h3>
    <p>这是菜单 2 显示的内容。这是菜单 2 显示的内容。这是菜单 2 显示的内容。</p>
  </div>
  <div id="menu3" class="tab-pane fade">
    <h3>菜单 3</h3>
    <p>这是菜单 3 显示的内容。这是菜单 3 显示的内容。这是菜单 3 显示的内容。</p>
  </div>
</div>
</div>

```

### 导航栏
#### 默认的导航栏创建步骤如下
- 向<nav>标签添加 class .navbar, .navbar-default
- 向上面的元素添加role='navigation', 有助于增加可访问性。
- 向<div> 元素添加一个标题 class .navbar-header, 内部包含了带有class .navbar-brand的<a>元素. 这会让文本看起来更大一号.
- 为了向导航栏添加链接,只需要简单地添加带有class .nav, .navbar-nav的无序列表即可.

#### 结合图标的导航链接


### 面包屑导航
```
  <ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">2013</a></li>
    <li class="active">十一月</li>
  </ul>
```

### 分页
### 标签
### 徽章
### 超大屏幕
### 页面标题
### 缩略图
### 警告
### 进度条
### 多媒体对象
### 列表组
### 面板
### Wells

## 创建一个网页
