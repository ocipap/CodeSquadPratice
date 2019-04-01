# forEach

> Array.prototype.forEach()

### 정의

`forEach`() 는 ECMAScript5부터 추가된 배열 순회 메서드



### 구문

```
arr.forEach(callback)
```

callback 에서는 세가지 인수를 받는다.

- 요소 값
- 요소 인덱스
- 순회 중인 배열

```javascript
let arr = ['a','b','c','d']


arr.forEach((...arg)=> {
    console.log(...arg)
})

==== Output ====
a 0 (4) ["a", "b", "c", "d"]
b 1 (4) ["a", "b", "c", "d"]
c 2 (4) ["a", "b", "c", "d"]
d 3 (4) ["a", "b", "c", "d"]
```



### 예제

```js
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

