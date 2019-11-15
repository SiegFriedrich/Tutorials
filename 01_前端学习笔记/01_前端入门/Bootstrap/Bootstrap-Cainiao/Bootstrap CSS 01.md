# Bootstrap 介绍

- 基本结构：Bootstrap提供了一个带有网格系统，链接样式，背景的基本结构。
- 自带全局的CSS设置，定义基本的HTML元素样式，可扩展的class，以及一个先进的网格系统。
- Bootstrap包含了十几个可重用的组件，用于创建图像，下拉菜单，导航，警告框，弹出框等。
- JavaScript插件， Bootstrap包含十几个自定义的jQuery
插件，可以直接包含所有的插件，也可以逐个包含这些插件。
- 可以定制Bootstrap组件，LESS变量和jQuery插件来得到自己的版本。

# Bootstrap CSS

### Bootstrap 网格系统

- 行必须放在 .container class内，以便获得适当的对其和内边距。
- 内容应放置在列内，唯有列可以是行的直接子元素。
-

### 媒体查询

>/* 超小设备（手机，小于 768px） */
>
>/* Bootstrap 中默认情况下没有媒体查询 */
>
>/* 小型设备（平板电脑，768px 起） */
>
>@media (min-width: @screen-sm-min) { ... }
>
>/* 中型设备（台式电脑，992px 起） */
>
>@media (min-width: @screen-md-min) { ... }
>
>/* 大型设备（大台式电脑，1200px 起） */
>
>@media (min-width: @screen-lg-min) { ... }
>
>@media (max-width: @screen-xs-max) { ... }
>
>@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
>
>@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
>
>@media (min-width: @screen-lg-min) { ... }

### 网格选项

#|超小型设备|小型平板电脑 |中型台式 | 大型台式
:--:|:--:|:--:|:--:|--:
Class前缀|.col-xs-|.col-sm-|.col-md-|.col-lg-
列数量|12|12|12|12
最大列宽|Auto|60px|78px|95px

#### 基本的网格结构

```
<div class="container">
   <div class="row">
      <div class="col-*-*"></div>
      <div class="col-*-*"></div>      
   </div>
   <div class="row">...</div>
</div>
<div class="container">....
```

### 偏移列
.col-md-offset-*

*表示在1-11 区间

```
<div class="col-md-6 col-md-offset-3"></div>
```

### 列排序
.col-md-push-*
.col-md-pull-*

```
<div class="col-md-4 col-md-push-8"">
         我在左边
        </div>
        <div class="col-md-8 col-md-pull-4">
         我在右边
        </div>
</div>
```

### 排版

```
  <small>
  <strong>
  <em>

  text-left
  text-center
  text-right
  text-muted
  text-primary
  text-info
  text-warning
  text-danger
```
### 引用 Blockquote
```
<blockquote>
  这是一个带有源标题的引用。
  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
</blockquote>
```

### p标签的排版类
```
  .lead
  .small
  .text-left       .text-justify       .initialism
  .text-center     .text-nowrap        .text-capitalize
  .text-right      .text-lowercase     .text-uppercase
  ...
```

### Bootstrap 代码
```
<code>作为内联元素显示
<pre> 作为块级元素显示  多行代码带有滚动条 使用max-height类，超出会有滚动条
<var> 变量提示
<kbd> 按键提示
```

## Bootstrap 表格
```
<table>                       <tr>
<thead>                       <td>
<tbody>                       <th>
<caption>

.table                .table-condensed 精简表格
.table-striped        .table-bordered       .table-hover 鼠标悬停

<tr> <th> <td> 用的类
.active       .success        .info       .warning        .danger

.table-responsive 响应式表格 table表格放进 div当中
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tbody>
  </table>
</div>
```
## Bootstrap 表单

```
垂直表单（基本表单）
<form role="form">

内联表单
<form class="form-inline" role="form">

水平表单
<form class="form-horizontal" role="form">
```

- 把标签和控件放在一个带有 class .form-group 的 <div>中
- 向控件的标签添加 class .control-label
- 标签for控件的id  <-- 希望能理解哈

```
<div class="form-group">
    <label for="lastname" class="col-sm-2 control-label">姓</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="lastname" placeholder="请输入姓">
    </div>
</div>
```

### 静态控件

```
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="请输入密码">
    </div>
  </div>
</form>
```

### 表单控件
```
<fielset disabled>
  里面的所有控件都会被禁用
  <input></input>
  <select>
    <option></option>
  </selelct>
</fieldset>

<input disabled> 该控件无法使用 </input>
```

表单帮助文本

```
  <input class='form-control' type='text'></input>
  <span class='help-block'>是一个帮助文本，可以根据设备的宽度自适应</span>
```

## Bootstrap 按钮

```
以下样式可用于 <a> <button> <input>元素上

  .btn        .btn-default        .btn-primary        .btn-success
  .btn-info   .btn-warning        .btn-danger         .btn-link
  .btn-lg     .btn-sm             .btn-xs             .btn-block
  .active     .disabled
```

### 按钮组
- btn-group

```
<div class='btn-group'>
  <button type='button' class='btn btn-primary'>1</button>
  <button type='button' class='btn btn-primary'>2</button>
  <button type='button' class='btn btn-primary'>3</button>
</div>

<div class='btn-group-justified'>
  <button type='button' class='btn btn-primary'>1</button>
  <button type='button' class='btn btn-primary'>2</button>
  <button type='button' class='btn btn-primary'>3</button>
</div>

<div class='btn-group btn-group-lg'>
  <button type='button' class='btn btn-primary'>1</button>
  <button type='button' class='btn btn-primary'>2</button>
  <button type='button' class='btn btn-primary'>3</button>
</div>

<div class='btn-group btn-group-vertical'>
  <button type='button' class='btn btn-primary'>1</button>
  <button type='button' class='btn btn-primary'>2</button>
  <button type='button' class='btn btn-primary'>3</button>
</div>

```
### 内嵌下拉菜单的按钮组

```
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Sony <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">Tablet</a></li>
      <li><a href="#">Smartphone</a></li>
    </ul>
  </div>
```

### Bootstrap 图片
```
<img src="/wp-content/uploads/2014/06/download.png" class="img-rounded">
<img src="/wp-content/uploads/2014/06/download.png" class="img-circle">
<img src="/wp-content/uploads/2014/06/download.png" class="img-thumbnail">
<img src="/wp-content/uploads/2014/06/download.png" class="img-responsive">
```
### Bootstrap的辅助类
类|描述
:--|:--
.pull-left|元素浮动到左边
.pull-right|元素浮动到右边
.cneter-block|元素设置为display：block 并居中显示
.clearfix|清除浮动
.show|强制元素显示
.hidden|强制元素隐藏
.sr-only|除了屏幕阅读器外，其他设备上隐藏元素
.sr-only-focusable|与 .sr-only 类结合使用，在元素获取焦点时显示(如：键盘操作的用户)
.text-hide|将页面元素所包含的文本内容替换为背景图

```
<p>插入符实例
  <span class="caret"></span>
</p>
```



Bootstrap3 是移动设备优先

通常情况下，maximum-scale=1.0 与 user-scalable=no 一起使用。这样禁用缩放功能后，用户只能滚动屏幕，就能让您的网站看上去更像原生应用的感觉。
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,
                          　　maximum-scale=1.0, user-scalable=no">
```
### 响应式图片
```
<img src="..." class="img-responsive" alt="响应式图像">
```
如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。


&nbsp;名称|超小屏幕手机 (<768px)	|小屏幕平板 (≥768px)	|中等屏幕桌面 (≥992px)	| 大屏幕桌面(≥1200px)
----:|:--:|:--:|:--:|:--:|:--:
.visible-xs-*	| 可见	|   隐藏	|   隐藏	|   隐藏
.visible-sm-*	| 隐藏	| 	可见	|   隐藏	|   隐藏
.visible-md-*	| 隐藏	| 	隐藏	| 	可见	| 	隐藏
.visible-lg-*	| 隐藏	| 	隐藏	| 	隐藏	| 	可见
.hidden-xs	| 	隐藏	| 	可见	| 	可见	| 	可见
.hidden-sm	| 	可见	| 	隐藏	| 	可见	| 	可见
.hidden-md	| 	可见	| 	可见	| 	隐藏	| 	可见
.hidden-lg	| 	可见	| 	可见	| 	可见	| 	隐藏
