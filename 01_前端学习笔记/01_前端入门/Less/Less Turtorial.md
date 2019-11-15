# Less Tutorial

## Introduction


## Grammar
### Variables
```
@nice-blue:#5B83AD;
@light-blue: @nice-blue + # 111;

#header{
  color:@light-blue;
}
```
Outputs:
```
#header {
  color: #6c94be;
}
```

### Mixins
```
.screen-color {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }
  @media tv {
    color: black;
  }
}
```
```
.bordered{
  border-top:dotted 1px black;
  border-bottom:solid 2px black;
}

#menu a{
  color:#111;
  .bordered;
}
.post a{
  color:red;
  .bordered;
}
```
outputs:
```
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```
带参数混合
```
  .backgrounder(@val){
    background-color:@val;
  }

  #header{
    .backgrounder(blue);
  }
```
```
.border-radius (@radius: 5px) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}

#header{
  .border-radius; //默认为5px
}

.container{
  .border-radius(20%);
}
```

```
  .wrap(){
    text-wrap:wrap;
    white-space:pre-wrap;
    white-space:-moz-pre-wrap;
    word-wrap:break-word;
  }
  pre{.wrap}
```

@arguments包含了所有传递进来的参数. 如果你不想单独处理每一个参数的话就可以像这样写:

```
.box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
  box-shadow: @arguments;
  -moz-box-shadow: @arguments;
  -webkit-box-shadow: @arguments;
}
.box-shadow(2px, 5px);
```
outputs

```
box-shadow: 2px 5px 1px #000;
-moz-box-shadow: 2px 5px 1px #000;
-webkit-box-shadow: 2px 5px 1px #000;
```

### Parametric Mixins
```
  .border-radius(@radius){
    -webkit-border-radius:@radius;
       -moz-border-radius:@radius;
            border-radius:@radius;
  }
```
```
  #header{
    .border-radius(4px);
  }

  .border-style{
    .border-radius(6px);
  }
```
Parametric mixins can also have default values for their parameters:
```
.border-radius(@radius:5px){
  -webkit-border-radius:@radius;
     -moz-border-radius:@radius;
          border-radius:@radius;
}
```
We can invoke it like this
```
  #header{
    .border-radius;
  }
```
Model II
```
  .wrap(){
    text-wrap:wrap;
    white-space:-moz-pre-wrap;
    white-space:pre-wrap;
    word-wrap:break-word;
  }

  pre{.wrap}
```
which would output:
```
  pre{
    text-wrap:wrap;
    white-space:-moz-pre-wrap;
    white-space:pre-wrap;
    word-wrap:break-word;
  }
```

Mixins with Multiple Parameters
```
.mixin(@color) {
  color-1: @color;
}
.mixin(@color; @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color; @padding; @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
```
Outputs
```
.some .selector div{
  color-1:#008000;
  color-2:#008000;
  padding-2:2;
}
```
Named Parameters

```
  .mixin(@color:black; @margin:10px;@padding:20px){
    color:@color;
    margin:@margin;
    padding:@padding;
  }
  .class1{
    .mixin(@margin:20px;@color:#33acfe);
  }
  .class2{
    .minxin(#efca44;@padding:40px);
  }
```
outputs:
```
  .class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
  }
  .class2 {
  color: #efca44;
  margin: 10px;
  padding: 40px;
  }
```
The arguments Variables
```
.box-shadow(@x:1px;@y:1px;@blur:2px;@color:#000){
  -webkit-box-shadow:@arguments;
  -moz-box-shadow:@arguments;
  box-shadow:@arguments;
}
.big-block{
  .box-shadow(2px;5px);
}
```
otuputs
```
  .big-block{
    -webkit-box-shadow: 2px 5px 1px #000;
       -moz-box-shadow: 2px 5px 1px #000;
            box-shadow: 2px 5px 1px #000;
  }
```






### Nesting

# IDEA 的永久注册码 赶紧回去注册激活
MNQ043JMTU-eyJsaWNlbnNlSWQiOiJNTlEwNDNKTVRVIiwibGljZW5zZWVOYW1lIjoiR1VPIEJJTiIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IklJIiwiZmFsbGJhY2tEYXRlIjoiMjAxOS0wNC0wNSIsInBhaWRVcFRvIjoiMjAyMC0wNC0wNCJ9XSwiaGFzaCI6IjEyNjIxNDIwLzAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-tltrJHc5lqCKLnza1bcLhMzDkfJeBqhRWbvcrPF9Gqo+X+iFWeKQXoEUOlrG38uSzzmX05ph//PgXgyVfP5RXKsaRMfrv/thoouS5sA0aTemm3z6uRiFirTDj60KSGr5XZoP/WAXO4nuti6SRKZUbr/VSAtRPQRiCJvevq+3gWPDGu2aZ0AemiNLq4qIVWH3wxTN7lK2h5uJssZsyy35Yy9O703c5PFU0fxCj2HRgXq7H/91X+ZNLvvAZAVU9B7bOqnY4ZzNNV/cjY8B5gNo53Lo6s2szEV7DsZ+8e7k8P4Yo81DKxneCBoe4wiZmRaCIT6wK3/27KrtQTFMcGeZMA==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxcQkq+zdxlR2mmRYBPzGbUNdMN6OaXiXzxIWtMEkrJMO/5oUfQJbLLuMSMK0QHFmaI37WShyxZcfRCidwXjot4zmNBKnlyHodDij/78TmVqFl8nOeD5+07B8VEaIu7c3E1N+e1doC6wht4I4+IEmtsPAdoaj5WCQVQbrI8KeT8M9VcBIWX7fD0fhexfg3ZRt0xqwMcXGNp3DdJHiO0rCdU+Itv7EmtnSVq9jBG1usMSFvMowR25mju2JcPFp1+I4ZI+FqgR8gyG8oiNDyNEoAbsR3lOpI7grUYSvkB/xVy/VoklPCK2h0f0GJxFjnye8NT1PAywoyl7RmiAVRE/EKwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQAF8uc+YJOHHwOFcPzmbjcxNDuGoOUIP+2h1R75Lecswb7ru2LWWSUMtXVKQzChLNPn/72W0k+oI056tgiwuG7M49LXp4zQVlQnFmWU1wwGvVhq5R63Rpjx1zjGUhcXgayu7+9zMUW596Lbomsg8qVve6euqsrFicYkIIuUu4zYPndJwfe0YkS5nY72SHnNdbPhEnN8wcB2Kz+OIG0lih3yz5EqFhld03bGp222ZQCIghCTVL6QBNadGsiN/lWLl4JdR3lJkZzlpFdiHijoVRdWeSWqM4y0t23c92HXKrgppoSV18XMxrWVdoSM3nuMHwxGhFyde05OdDtLpCv+jlWf5REAHHA201pAU6bJSZINyHDUTB+Beo28rRXSwSh3OUIvYwKNVeoBY+KwOJ7WnuTCUq1meE6GkKc4D/cXmgpOyW/1SmBz3XjVIi/zprZ0zf3qH5mkphtg6ksjKgKjmx1cXfZAAX6wcDBNaCL+Ortep1Dh8xDUbqbBVNBL4jbiL3i3xsfNiyJgaZ5sX7i8tmStEpLbPwvHcByuf59qJhV/bZOl8KqJBETCDJcY6O2aqhTUy+9x93ThKs1GKrRPePrWPluud7ttlgtRveit/pcBrnQcXOl1rHq7ByB8CFAxNotRUYL9IF5n3wJOgkPojMy6jetQA5Ogc8Sm7RG6vg1yow==
