# git? github?

git : DVCS(분산 버전 관리 시스템)  
github : git repogitory 를 인터넷에에서 제공하는 단순한 호스팅 서비스

# git 의 대표적인 저장소 4가지

-   working tree (작업 디렉토리)
-   stage
-   local repository
-   remote repository

# git repository 만들기

1.  git init 명령어
2.  git clone \[remote repository address\]  
    하면 `.git` 폴더가 생김

# git add

working tree 에 있는 파일을 stage 에 올리는 작업

# git commit

stage에 변경사항을 local repository 에 옮기는 작업

# git patch

remote repository와 local repository 동기화

# git pull

working tree, stage, local repository 동기화

# git checkout

HEAD의 위치를 바꿈

# git merge

두 커밋을 합침

# git rebase

해당 브렌치의 commit 를 통째로 이어 붙임

# 오늘 중요한 내용

1.  커밋을 하면 무조건 남는다.
2.  브렌치는 단순 참조이다.

# pull request

오늘 이해를 하려고 꽤 애를 먹었던 pull request 에 대해 작성해 보려고 한다.

### 필요성

-   깔끔한 업무를 가능하게함
-   merge 전 code review 가능
-   권한이 없는 repository 에 자신의 코드를 반영하고 싶을때

### 방법

쉽게 설명하기 위해 정의를 하겠다.  
PR : pull request  
원본 레포지토리 : 자신이 PR 하고 싶은 레포지토리 (내꺼 아님)  
원격 저장소 : 원본 레포지토리에서 fork한 레포지토리 (자기 소유)  
로컬 저장소 : 원격 저장소 clone 한 로컬 저장소 (내 컴퓨터)

1.  원본 레포지토리를 fork 한다.
2.  fork 한 원격 저장소를 로컬 저장소로 clone 한다.  
    \- 현재 remote -v은 origin 이라는 별명으로 원격 저징소의 주소가 연결 되어 있다.
3.  원본 레포지토리의 주소를 remote 에 추가시킨다. (단, origin 이라는 별명은 원격저장소가 사용하고 있으니 다른 것을 이용한다.)
4.  로컬저장소에서 개발단위로 branch를 생성해 개발한다.
5.  개발이 끝나면 해당 개발 branch의 내용을 원격 저장소에 commit, push 한다.
6.  원격 저장소의 개발 branch에서 원본 레포지토리로 pull request 를 날린다.
7.  원본 레포지토리에서 해당 변경사항을 merge 혹은 reject 한다.
8.  만약 merge를 했다면 해당 변경사항을 로컬 저장소로 pull 받는다.
9.  자신의 원격 저장소에도 변경사항을 push 한다.