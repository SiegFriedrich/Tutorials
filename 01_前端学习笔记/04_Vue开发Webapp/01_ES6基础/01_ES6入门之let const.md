# let const 详解

ECMAScript6

浏览器对新标准的支持  
http://kangax.github.io/compat-table/es6/

### let

```
var age = 5;
console.log(window.age);  //实际是在window上挂了一个全局对象
//但是这种方式会对全局对象进行污染

```

let 可将声明的变量放在块级作用域当中 var则不受其影响

```
{
  let a = 1;
  {
    console.log(a);  //1
    let b = 2;
  }
  console.log(b);  // undefined
}
-------------------
if(true){
  var a = 1;
  let b = 2;
}

console.log(a);  //1
console.log(b);  //undefined

```

let 不可重复声明

```
let ap = 'tees';
console.log(ap);  //tees
let ap;
console.log(ap);  //uncaght syntax .... has been already declared.

```

let 不存在变量提升

```
console.log(x); //undefined
var x = 23;

console.log(y); //报错!
let y = 5;   

```

let 在块级作用域及从属会计作用域里 不能重复定义 否则获取不到值
```
let sun = '太阳';
{
  console.log(sun);    //报错
  let sun = '☀️太阳!';
}
console.log(sun);  //报错

```


### const

不能重复
不存在提升
只在当前作用域内有效

常量为引用类型时,可以修改引用类型的值

```
const BILL = {
  age : 17,
  sex : male
}

BILL.age = 20;  //OK的

--------------------

BILL = {};      //报错, 因为地址变了

```

如果防止常量为引用类型时被修改呢???

使用 Object.freeze()方法

```
const BILL = {
  age : 17,
  sex : male
}
Object.freeze(BILL);
----------数组也同样适用-----------
const arr = [1,2];
Object.freeze(arr);

arr.push(3);    //报错,不可以被扩展

```
