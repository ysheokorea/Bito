# Incentive Community, Bito

![](./images/bito.png)

## 프로젝트 소개

<center>
1. Home: 글을 쓰고, 포스팅을 할 수 있으며 follow 작업을 할 수 있다.

![home.png](images/bito_home.png)

2. Login: google OAuth 이용한 로그인.

    ![explore.png](images/bito_login.png)

3. TokenDetail: NFT 작품의 상세 정보를 확인하고 거래를 할 수 있다.  

4. Create: 이미지를 NFT로 민팅할 수 있다.    

5. Profile: 현재 계정의 정보와 소유한 NFT 작품을 확인할 수 있다.

</center>

## Project flow

![](./images/flow.png)

## Architecture

![](./images/01_architecture.png)

## 힘들었던 점
 - Truffle 프레임워크에서 Unit Test를 처음 진행해봄

![](images/contract-test.png)


## 기술 스택

![](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![](https://img.shields.io/badge/Ethereum-3C3C3D.svg?style=for-the-badge&logo=Ethereum&logoColor=white)
![](https://img.shields.io/badge/Solidity-363636.svg?style=for-the-badge&logo=Solidity&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/Web3.js-F16822.svg?style=for-the-badge&logo=web3dotjs&logoColor=white)
![](https://img.shields.io/badge/Mocha-8D6748.svg?style=for-the-badge&logo=Mocha&logoColor=white)
![](https://img.shields.io/badge/Chai-A30701.svg?style=for-the-badge&logo=Chai&logoColor=white)


## 질문

**Q React를 사용한 이유**
- SPA를 사용할 수 있어, Server에서 필요한 데이터를 Ajax 요청으로도 충분한 UI 구성이 가능하다고 판단함.
- Front에서 Hook API를 통해 효율적인 데이터 관리가 용이하다고 판단

**Q No-SQL을 사용한 이유**
- RDB에 비해 속도가 빠름
- 프로젝트에서 테이블간 엄격한 관계를 설정할 필요 없음.
- MongoDB Atlas 사용으로 팀원간 빠른 파일럿 제작 가능

## 팀원

|이름|Role|
|---|----|
|박기백 [@parkkibaek](https://github.com/parkkibaek)|팀장|
|김병일 [@DevUreak](https://github.com/DevUreak)|Front|
|서경근 [@Sapphire52000](https://github.com/Sapphire52000)|Front|
|허윤석 [@ysheokorea](https://github.com/ysheokorea)|Backend + Contract|


