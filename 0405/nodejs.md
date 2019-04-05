# Compiled & Intepretered

-   Compiled : Code -> 기계어, 컴퓨터가 이해할 수 있는 언어롱 변경해서 실행(기계어로 컴파일), 속도가 빠름
-   intepretered : Code를 한줄한줄 해석해가면서 실행, 속도가 느림

**intepretered 언어라고 해서 컴파일을 안하는 것이 아니라 한줄한줄 컴파일하는 것이다.**

# Node.js

Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임  
v8 엔진에 관한 내용은 조사를 해서 다음 포스팅에서 좀 더 자세히 다뤄보겠다.

**일단 단순하게 생각하면 브라우져에서만 동작하던 javascript 엔진을 다른 환경에서 사용할 수 있게 해준 것**

**nodejs != server**

# VS Code Debugging

일단 간단한 예제 파일을 작성하여 살펴보겠다.

```javascript
'use strict';

var bar = function(){
    var bar = "bar func"
    console.log(bar)
}

var foo = function(name) {
    var greeting = `hello, ${name}`
    bar()
    return greeting
}

console.log(foo('PAPICO'))
```

![](http://cfile5.uf.tistory.com/image/99D03D415CA6E930031655)

VS Code 라인을 나타내는 숫자 옆에를 누르면 해당 라인에 breakpoint 를 걸 수 있다.

> breakpoint

흔히 중단점 이라고 부르는 breakpoint는 프로그램을 중단 시켜 중단 시킬때 당시의 스택의 모습과 변수들의 값 등을 볼 수 있게 해준다.

이제 이 프로그램을 실행시켜 보겠다. `f5` 키를 누르면 해당 프로그램을 node.js 로 실행시킬 수있다.

![](http://cfile21.uf.tistory.com/image/99C519435CA6ED113D77C7)

좌측에 보면 3개의 탭이 보일 것이다. variables, watch, call stack 이라는 탭이 보이는 데 해당 탭들의 보이는 값들은 실행을 시켜보면서 설명하겠다.

일단 상단에 있는 버튼의 기능은

![](http://cfile24.uf.tistory.com/image/990E8D355CA6EFB30E4ACF)  
코드를 다음 breakpoint 까지 실행 재개.

![](http://cfile29.uf.tistory.com/image/992C623D5CA6F0022B17F9)  
다음 라인 명령 실행. 함수가 있어도 건너뛰고 다음 라인 실행

![](http://cfile8.uf.tistory.com/image/995C81385CA6F061415A7D)  
함수 안으로 들어가서 함수의 첫줄을 실행

![](http://cfile6.uf.tistory.com/image/9971874E5CA6F091146190)  
함수 밖으로 빠져나와 다음 명령문을 실행

> variables

현재 프로그램에 선언된 함수에서의 변수를 보여준다. local, closure, global 에서 사용하는 변수와 변수에서 할당된 값을 직관적으로 볼 수 있다.

> watch

원하는 변수의 값을 추적할 수 있다. 추적을 원하는 변수를 추가시키면 해당 변수에 값이 할당 된것을 바로바로 확인할 수 있다.

> call stack

호출 스택의 상황을 볼수 있다. 현재 중단점에서 해당 함수들이 어떤 구조로 쌓여 있는지 시각적으로 볼 수 있어서 좋은 기능 같다.

# NodeJS 의 Module

nodejs 에서는 export와 require 라는 기능이 존재한다.

예를 들어 더하기/빼기를 하는 프로그램이 있다고 가정하자.

```javascript
// calc.js
val calc = {
  add : function(a, b) {
      return a + b
  },
  sub : function(a, b) {
      reutrn a - b
  }
}
```

이 더하기/빼기 기능을 다른 프로젝트에서 사용하고 싶어 해당 기능을 내보낸다고 하면 `export` 를 사용하여 해당 정보를 내보내면 된다.

```javascript
export.modules = {
  add : function(a, b) {
      return a + b
  },
  sub : function(a, b) {
      reutrn a - b
  }
}
```

내보낸 더하기/빼기 기능을 다른 파일에서 사용하기 위해서 `require` 문을 사용한다.

```javascript
var calc = require('calc')

console.log(calc.add(1, 2)) // 3
```

해당 `require` 문에서 확장자를 빼서 사용하면 일단 해당 프로젝트에서 `calc.js` 라는 파일을 찾고, 만약 없다면 `calc` 라는 디렉토리를 찾아 해당 디렉토리의 `index.js` 파일을 찾아본다.