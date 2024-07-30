# 연결된 레퍼지토리 확인
git remote -v

# 레퍼리토리 연결 "레퍼지토리 주소"
git remote add origin ""

# 모든 폴더&파일 업로드
git add .

# 업로드 한 파일 커밋메세지 작성
git commit -m ""

# 연결 된 "main" 브랜치에 올리기
git push origin main

# 연결 된 저장소 지우기
git remote remove origin 

# 폴더 내에 있는 모든 파일 및 폴더 확인 
ls -al

# .git 이라는 폴더가 있으면 (캐시느낌이라 지워줘야 한다.)
rm -rf .git

# git init 했을 경우 아래처럼 나와야 초기 커밋으로 올릴 수 있음
Initialized empty Git repository in /Users/dahye/Documents/html/.git/

# git init 시 아래처럼 나오면 rm -rf .git 해줘야함
Reinitialized existing Git repository in /Users/dahye/Documents/html/.git/ 