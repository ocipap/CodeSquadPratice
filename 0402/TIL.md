### UNIX 기본 명령어

#### cat

- 매개변수가 없는 경우 : 표준 입력 -> 표준 출력
- 매개변수가 있는 경우 : 매개변수로 받은 파일의 내용을 표준 출력

```bash
$ cat test.txt
hello
```



#### echo

매개변수로 받은 표준입력을 표준 출력으로 바꿈

```bash
$ echo "hello"
hello
```



#### > or < (Redirection)

- 입력 리다이렉션 : < 
- 출력 리다이렉션 : >

```bash
# 출력 리다이렉션
$ echo "hello" > test.txt
$ cat test.txt
hello
$ echo "hello 덮어쓰기" > test.txt
hello 덮어쓰기
$ echo "hello 추가하기" >> test.txt
hello 덮어쓰기
hello 추가하기
```

\> 를 이용하면 덮어쓰기,  \>> 는 추가할 수 있다.

```bash
# 입력 리다이렉션
$ cat < test.txt
hello
```



#### grep

표준 입력을 받아 매개변수로 받은 문자를 필터링하여 해당 문자를 표준 출력으로 변환

주로 파이프 (|) 와 함께 사용



#### | (Pipe)

앞 명령의 표준 출력을 표준 입력으로 변환

```bash
$ ls | grep test
test.txt
```



### vim

#### 모드

- 표준 모드
- 입력 모드
- 명령 모드

#### 명령어

- i - 현재 커서 입력 모드 전환
- a - 현재 커서 한탄 뒤 입력모드 전환 
- :w - 저장
- :q - 종료
- :wq - 저장하고 종료
- :q! - 강제 종료
- h, j, k, l - 순서대로 ←, ↓, ↑, →
- w - 단어의 시작위치를 단위로 이동
- e - 단어의 끝위치를 단위로 이동
- b - 단어의 시작위치를 단위로 역이동
- yy - 행 복사
- dd - 행 삭제
- x - 커서가 위치한 곳 문자 한개 삭제