## lisp 함수로 프로그래밍 짜기

- lisp 설치는 `brew`를 이용하면 손쉽게 할 수 있음

    ```bash
    brew install clisp
    ```

- 에디터로 `.lisp`파일을 생성하여 코드를 작성하고, 실행은 다음과 같음

    ```bash
    clisp 프로젝트명.lisp
    ```

- 먼저 문제와 예상 결과를 보며 코드를 어떻게 짤 것인지 생각해야 함
    - LISP 프로그래밍언어로 , 'hello 홍길동' 을 출력하는 hello.lisp프로그램을 만들기
    - 함수를 한가지 만들어야 함
    - 사용자 입력을 받아서, 화면에 출력

    ```bash
    clisp hello.lisp
    crorong
    hello crorong
    ```

- 이에 필요한 것을 먼저 나열하고 하나씩 찾아가며 완성해 나가려고 함
    - **함수**
    - **입력**
    - **출력**
    - **변수**
    - **문자열 합치기**
- 가장 먼저 **함수**를 만드는 법은 `defun`키워드로 시작하며 원하는 이름을 할당, 호출해서 사용함

```lisp
(defun HelloName())
(HelloName)
```

- **입력**의 경우 `read`키워드를 사용하여 쉽게 받아 올 수 있음

    ```lisp
    (read)
    ```

- **출력**의 경우 `print`키워드를 이용하여 출력하고자 하는 값을 출력가능

    ```lisp
    (print 출력하고자하는 값)
    ```

- **변수**는 `setq`키워드 + 변수명 + 값으로 값을 원하는 변수 명에 할당함

    ```lisp
    (setq 변수명 값)
    ```

- **문자열 합치기**는 `concatenate`키워드로 가능, 여기서 ``string`은 연속되는 문자열임을 나타내 줌, '문자열을 합칠거에요' 라는 말과 같음, A와 B를 합쳐줌, 2개고 3개고 다 됨

    ```lisp
    (concatenate 'string A B)
    ```

- 최종적으로 합쳐 보면 아래와 같음

    ```lisp  
    (defun HelloName()
    (setq name (read))
    (print (concatenate 'string "Hello " name)))
    (HelloName)
    ```
    - 하지만 이렇게 하면 오류가 발생, read의 경우 문자열을 하나씩 읽어 오기 때문에 문제가 발생하는 듯함 따라서 read-line을 사용하여 입력한 한 줄을 통째로 읽어 와야 함

        ```lisp
        (defun HelloName()
        (setq name (read-line))
        (print (concatenate 'string "Hello " name)))
        (HelloName)
        ```

    - 추가로 `print`의 경우 한 줄을 띄우고 코드를 출력하기 때문에 `princ`를 이용하여 코드를 바로 출력하고 escape문자를 출력하지 않도록 바꿈(`princ`는 escape문자를 출력하지 않음)
        ```lisp
        (defun HelloName()
        (setq name (read-line))
        (princ (concatenate 'string "Hello " name)))
        (HelloName)
        ```