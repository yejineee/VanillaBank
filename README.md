# javascript-w5-accountbook
스프린트 5-6주차 웹 프로젝트 - 가계부

## ✨ 서버
http://101.101.208.133/

## ✍️ 개발 내용 정리
### <BE>
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

### <FE>

#### Day6 
- [x] 라우팅 학습
- [x] observer pattern 학습
- [x] 상태관리와 immutable 학습

#### Day7
- [x] observer pattern 구상 및 구현
- [x] 로그인 구현
- [x] 네비게이션 Html 렌더링
- [x] 결제내역 입력 폼 Html 렌더링

#### Day8
- [x] observer pattern 수정 및 구현
- [x] 결제내역 모델 상태 관리 구현
- [x] 결제내역 및 유틸리티 함수 테스트 코드 작성

#### Day9 
- [x] 결제 내역 리스트 구현
- [x] 결제 내역 필터링 구현
- [x] 결제 내역 생성 폼에서 수입, 지출에 따라 다른 카테고리 보여주는 것 구현
- [x] observer pattern 사용하여 탭 구현


