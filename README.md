# VanillaBank
- vanilla js와 MobX 학습에 집중한 가계부 프로젝트

## ✨ 서버

## ✍️ 개발 내용 정리
<details>
<summary>BE</summary>

#### Day1

- [x] 초기 환경 설정 
    - [x] 모듈 단위로 폴더 나누기
    - [x] eslint, prettier 설정
    - [x] commit에 자동 이슈 넘버 부여 설정
- [x] 이슈 등록
- [x] ERD 생성
![스크린샷 2020-10-05 오후 11 47 05](https://user-images.githubusercontent.com/43772082/95094642-14622600-0765-11eb-8b6c-a0380eb0d11e.png)

#### Day2
- [x] api 설계
![스크린샷 2020-10-05 오후 11 49 29](https://user-images.githubusercontent.com/43772082/95094959-715ddc00-0765-11eb-80fb-f3e83cbc17ac.png)
- [x] JWT 기반의 토큰 인증 방식 
    - [x] 로그인
    - [x] token이 유효한가 확인
- [x] Sequelize ORM를 사용하여 디비 구축
- [x] bulk insert를 통한 디비 대용량 데이터 추가

#### Day3
- [x] 결제내역 추가, 삭제, 수정, 조회 api 구현

#### Day4
- [x] 카테고리 조회 
- [x] 결제수단 생성, 삭제, 조회
- [x] 결제 내역 모델에 (user, date)로 복합 인덱스 생성
    
#### Day5
- [x] passport local, jwt를 통한 인증

</details>




