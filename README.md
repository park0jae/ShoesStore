# ShoesStore Project

### 📍 신발 쇼핑몰 프로젝트

리액트를 이용한 블로그 프로젝트 이후 조금 더 다양한 개념을 적용해보고자 진행한 프로젝트입니다.

<img width="752" alt="image" src="https://user-images.githubusercontent.com/84398970/216833459-929179bb-938d-407a-b228-a1d96fa2d369.png">


## 🔍 전반적인 흐름 살펴보기 

1) React-Bootstrap 을 이용한 효율적인 코딩

  - 필요한 Navbar 나 , Container 컴포넌트를 React-bootstrap을 import 하여 사용함으로써 조금 더 빠르고 효율적인 코드를 작성할 수 있었다.
  
  <br/>
  
  
  2) React Router를 이용한 페이지 셋팅
  
  - react-router-dom 라이브러리를 사용하여 상품 목록을 보여주는 메인 페이지로부터 각각 상품에 대한 상세 정보를 보여주는 Detail 페이지로의 이동이나, 장바구니 페이지로 이동 등 페이지 나누기 작업을 수행하였다.
  
  <br/>
  
  3) Lifecycle 과 useEffect 적용
  
  
  <img width="733" alt="image" src="https://user-images.githubusercontent.com/84398970/216833728-729095e8-6dd4-4fa0-a413-cf3b23f2eaf1.png">


  - 컴포넌트의 Lifecycle 을 이용하여 상세 페이지의 상단 부분에 "2초이내 구매시 할인" 이라는 문구를 페이지 로드시 띄웠다가 타이머 설정 함수를 통해 2초 뒤 컴포넌트를 없애주는 방식으로 작성하였다.
    
  <br/>
    
  4) ajax 를 통한 서버에 데이터 요청하기
    
  <img width="714" alt="image" src="https://user-images.githubusercontent.com/84398970/216833823-d8c99583-a679-435b-b06f-7041b05925ff.png">

    
axios 외부 라이브러리를 이용하여 서버로 부터 데이터를 요청하여 상품 목록 데이터를 받아와서 더보기 버튼을 클릭했을 때 받아온 데이터를 html 화면단에 보여주도록 state 변경함수를 이용하여 출력해주었다.

<br/>

5) Redux 사용하기


  <img width="829" alt="image" src="https://user-images.githubusercontent.com/84398970/216834110-f07300e7-3e41-4d87-80d9-172b02bfdca3.png">

 
  - 장바구니 페이지에 담고자 하는 상품의 상태와 수량을 저장하기 위해서는 메인 페이지인 App.js 내의 state를 Detail 컴포넌트로 props로 넘겨준 후에 다시 Detail 페이지에서 Cart.js 로 props를 통해 넘겨주어야 하는데 이 과정이 복잡하여 Redux라는 라이브러리를 사용해보고자 하였다.
  
  - Redux 사용으로 store.js 파일 내에 공유하고자 하는 변수를 createSlice 메소드 내에 추가해주었고, 추가한 변수를 등록하고 export 해주어 다른 파일에서 사용할 수 있도록 하여 장바구니 페이지를 만들게 되었다. 또한 redux 내의 state 변경 함수를 어떻게 작성하는지에 대해 학습하고 적용하여 장바구니 내의 물건 수량을 증가시키거나 감소시키는 기능도 구현해보았다.
  
    
    
