## Javascript forEach()

> `Array.prototype.forEach()`

### 정의

`forEach()` 는 ECMAScript5부터 추가된 배열 순회 메서드

### 구문

```javascript
arr.forEach(callback[, thisArg]);
```

- **매개변수**
    - `callback` 에서는 세가지 인수를 받음, 아래의 예제를 콘솔 창에 실행해 보면 매개변수가 어떤 것들이 있는지 쉽게 이해가 가능함
        - 요소 값(currentValue)
        - 요소 인덱스(index) → Optional
        - 순회 중인 배열(array) → Optional

    ```javascript
    let arr = ['a','b','c','d']

    arr.forEach((...arg)=> {
    console.log(...arg)
    })

    ==== Output ====
    a 0 ["a", "b", "c", "d"] //첫 번째 요소
    b 1 ["a", "b", "c", "d"]
    c 2 ["a", "b", "c", "d"]
    d 3 ["a", "b", "c", "d"] //마지막 요소
    ```

    - `thisArg`는 callback을 실행할 때 `this`로 사용할 값
- **반환 값**

    - `undefined`

### 예제 및 설명

- callback을 활용하여 배열의 컨텐츠 출력

    ```javascript
    const foo = (element, index, array) => {
    console.log(`${index} 번째 인덱스의 값은 ${element}`)
    }
    
    ['a','b','c','d'].forEach(foo)
    
    ==== Output ====
    0 번째 인덱스의 값은 a
    1 번째 인덱스의 값은 b
    2 번째 인덱스의 값은 c
    3 번째 인덱스의 값은 d
    ```

- thisArg활용법

    ```javascript
    function Counter() {
      this.sum = 0;
      this.count = 0;
    }
    Counter.prototype.add = function(array) {
      array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
      // ^---- 주의
    };
    
    var obj = new Counter();
    obj.add([2, 5, 9]);
    obj.count// 3
    obj.sum// 16
    ```

- 일반적인 for문과의 동일 코드 실행 시간 비교

    ```javascript
    const range = l => {
       let res =[]
       let i = -1
       while(++i<l) {
           res.push(i)
       }
       return res
    }
    
    let arr = range(1000)
    let for_arr = []
    let foreach_arr = []
    console.time("for 문")
    for(let i = 0; i < arr.length; i++) {
       for_arr.push(arr[i])
    }
    console.timeEnd("for 문")
    
    console.time("forEach 문")
    arr.forEach((val) => {
       foreach_arr.push(val)
    })
    console.timeEnd("forEach 문")
    ```

    <img src="./time.png" width="400">



