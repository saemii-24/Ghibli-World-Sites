# 🎆Ghibli World
#### **<a href="https://saemii-24.github.io/project_2/" target="_blank">:point_right:<u>배포페이지 바로가기</u></a>**
지브리는 국내에서도 많은 사랑을 받는 애니메이션 제작사이며, 애니메이션 뿐 만 아니라 다양한 사업을 진행하고있습니다.  실제 국내 포털 사이트에서도 지브리 애니메이션의 OST, 감독, 성우, 전시회 등 지브리에 관련된 다양한 것들이 함께 검색되는 양상을 보입니다.
이러한 지브리의 다양한 정보를 한번에 모아 볼 수 있도록 Ghibli World 란 '스튜디오 지브리 사이트'를 기획하게 되었습니다.


## 목차
- [개요](#개요)
- [사용된 기술](#사용된-기술)
- [주요 기능](#주요기능)
- [기능별 설명](#기능별-설명)
- [후기](#후기)


## 개요
- **프로젝트 이름**: Ghibli World🎆 (스튜디오 지브리 사이트 제작)
- **제작기간**: 23.07.12 - 23.08.12
- **기여도**: 개인작업 / 100%


## 사용된 기술
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">


## 주요기능
<table>
  <tr>
    <th style="width:300px">메인 이미지 스크롤 이벤트</th>
    <th style="width:300px">pagination</th>
    <th style="width:300px">가로 스크롤 카드</th>
  </tr>
  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/289ca4f5-10d0-4b9d-8670-42eea3e84d68" alt="메인 이미지 스크롤 이벤트"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/61337bd2-4d74-4d43-9ddd-84f1df4788c3" alt="pagination"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/3f2e5da9-2542-451a-bd44-9ad95d574d61" alt="가로 스크롤 카드"></td>
  </tr>
</table>

<table>
  <tr>
    <th style="width:300px">드래그 카드 이동</th>
    <th style="width:300px">youtubeAPI 활용 팝업창</th>
    <th style="width:300px">data를 이용한 태그 생성</th>
  </tr>
  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/849ba8f5-c6e4-49fa-9450-7687c111e33a" alt="드래그 카드 이동"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/301f1101-397c-4b81-8439-ab53b49f2875" alt="youtubeAPI 활용 팝업창"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/7947258c-8159-4d52-89d6-8a4ebb2b19a1" alt="data를 이용한 태그 생성"></td>
  </tr>
</table>

## 기능별 설명
1. **메인 이미지 스크롤 이벤트**
   scrollEvent를 이용해 스크롤에 따라 이미지가 화면을 채우도록 고성했습니다. 이때 이미지로 인해 헤더가 잘 보이지 않을 수 있어 헤더의 컬러도 적절히 변경해 주었습니다.
    <br/>
2. **pagination**
   대표 애니메이션 각각의 section으로 이동할 수 있는 pagination을 만들었습니다. 클릭하면 해당 section으로 이동합니다. 클릭이 아닌 스크롤 해서, 해당 애니메이션이 화면에 들어오면 pagination을 컬러가 변경됩니다.
    <br/>
3. **가로 스크롤 카드**
   CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 맞춰 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover 하면 연관 있는 지브리 애니메이션 작품을 보여줍니다.
    <br/>
4. **드래그 카드 이동**
 input type='range'의 값과 시놉시스 카드들의 움직임을 연동했습니다. 사용자가 input 박스를 드래그하거나 클릭해서 조정하면 그 값을 받아 시놉시스 section이 움직입니다.
    <br/>
1. **youtubeAPI 활용 팝업창**
    간단한 youtube API를 이용해 팝업창에서 원하는 영상이 재생 될 수 있도록 구성했습니다. 화면 비율을 고려하여 작은 사이즈에서는 팝업이 아닌 해당 영상의 youtube site로 이동합니다.
    <br/>
2. **data를 이용한 태그 생성**
    각 캐릭터의 정보 구조와 HTML 태그 구조가 동일하기 때문에 data.js 파일에 캐릭터 정보를 분리하고 JavaScript에서 태그를 만들어 주었습니다. 궁금한 캐릭터를 클릭하면 캐릭터의 정보와 사진이 등장하며, 사진을 클릭해 캐릭터의 다른 사진을 확인하거나 버튼을 눌러 다음 캐릭터로 이동할 수 있습니다.

## 후기
처음으로 세 가지 사이즈에 대응하는 반응형 사이트를 제작하며, 각 사이즈에 적절한 레이아웃을 설정하고, PC 사이즈에서 다양한 스크롤 애니메이션을 넣고자 했습니다. 

MOBILE 사이즈를 작업할 때 내용이 많거나
모바일에서 대응하기 어렵다고 판단되는 경우에는 애니메이션을 삭제하거나 대체했습니다.

이때 세 가지 사이즈를 제작하며 각 사이즈에 적절한 구조를 만들고자 태그를 추가하다 보니, 태그가 지나치게 많아져 코드를 수정하거나 이해하기 어렵다는 것을 깨달았습니다. 이를 제대로 분리하지 못했다는 것이 아쉬웠지만, 이후 프로젝트부터 어떻게 하면 코드를 줄일 수 있는지 고민해 볼 수 있는 계기가 되었습니다.
