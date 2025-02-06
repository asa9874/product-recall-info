# Node.js 20.15.0 기반 이미지 사용
FROM node:20-alpine

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. 프로젝트 파일을 컨테이너로 복사
COPY package.json package-lock.json /app/

# 4. 종속성 설치
RUN npm install

# 5. 나머지 파일을 컨테이너로 복사
COPY . /app/

# 6. 빌드 명령어 실행
RUN npm run build

# 7. Vite 개발 서버 실행 명령어 설정 (빌드 후)
CMD ["npm", "run", "dev", "--", "--host"]

# 8. 컨테이너가 사용할 포트 노출
EXPOSE 5173