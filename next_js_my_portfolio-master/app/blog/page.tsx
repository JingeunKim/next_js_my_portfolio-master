import Navbar from "@/components/Navbar";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[50%] mx-auto mt-24">
        <div className="text-5xl font-bold mb-8">Blog</div>
        <div className="text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold mb-4">
            프론트엔드 개발자의 성장과 도전: 나의 여정과 경험
          </h3>
          <h3 className="text-xl font-semibold mb-4">
            1. 프론트엔드 개발의 시작
          </h3>
          <p className="mb-4">
            프론트엔드 개발은 웹 애플리케이션이나 웹사이트의 사용자
            인터페이스(UI)와 사용자 경험(UX)을 담당하는 분야입니다. 사용자가
            실제로 보고, 클릭하고, 상호작용하는 모든 부분을 구축하는 역할을
            맡습니다. 내가 프론트엔드 개발을 선택한 이유는 바로 사용자와의
            직접적인 상호작용을 통해 나의 코드가 실제로 어떻게 변화를 일으키는지
            실시간으로 볼 수 있다는 점에서 큰 매력을 느꼈기 때문입니다.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            2. 프론트엔드 개발자로서의 첫걸음
          </h2>
          <p className="mb-4">
            프론트엔드 개발을 처음 시작할 때, 기본적인 HTML, CSS, JavaScript부터
            배우기 시작했습니다. HTML은 웹 페이지의 구조를, CSS는 그 페이지의
            디자인과 레이아웃을 담당하며, JavaScript는 페이지 내에서 동적인
            기능을 구현하는 데 중요한 역할을 합니다. 처음에는 간단한 웹 페이지를
            만들며 실습을 했고, 이후 점차 복잡한 애플리케이션을 구현하면서 더
            많은 기술을 배우게 되었습니다. JavaScript를 잘 이해하려면 변수,
            함수, 조건문, 반복문 등의 기초적인 개념을 확실히 익히는 것이
            중요하다는 것을 깨달았습니다.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            3. 프론트엔드의 기술 스택 확장
          </h2>
          <h2 className="font-semibold">3.1 스타일링 및 UI 프레임워크</h2>
          <p className="mb-4">
            스타일링과 UI 프레임워크는 내가 프론트엔드 개발을 할 때 중요한
            역할을 합니다. 특히, 빠르게 개발할 수 있도록 돕고, 더 나은 사용자
            경험을 제공하는 데 큰 도움이 되었습니다.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Tailwind CSS:</strong> 나는 Tailwind CSS를 많이
              사용합니다. 이 유틸리티 퍼스트 CSS 프레임워크는 내가 빠르게
              스타일을 적용할 수 있게 해줍니다. 클래스 이름만으로 레이아웃을
              정의하고 스타일을 적용할 수 있어, CSS를 따로 작성할 필요 없이
              원하는 디자인을 손쉽게 구현할 수 있습니다. 특히, 반복되는 스타일을
              관리할 때 매우 유용합니다.
            </li>
            <li>
              <strong>Styled Components:</strong> React와 함께 사용하며
              styled-components로 CSS-in-JS 방식을 채택해봤습니다. 이 방식은
              JavaScript에서 직접 스타일을 정의할 수 있기 때문에, 스타일과
              로직을 한 곳에서 관리할 수 있어 매우 직관적이고 코드의 일관성을
              유지하는 데 유리합니다
            </li>
            <li>
              <strong>UI 프레임워크:</strong> UI 프레임워크로는 Ant Design과
              **Material UI(MUI)**를 많이 활용했습니다. Ant Design은 기업용
              애플리케이션에 적합한 컴포넌트들을 제공하고, MUI는 더 깔끔하고
              직관적인 디자인을 지원합니다. 이러한 UI 프레임워크는 기본적으로
              많은 컴포넌트와 스타일을 제공하여 빠르게 프로덕션 수준의 앱을 만들
              수 있게 도와줍니다.
            </li>
            <li>
              <strong>ShadCN UI:</strong> 최신 UI 프레임워크인 ShadCN UI도
              사용해봤습니다. 이 프레임워크는 빠르고 효율적인 디자인 시스템을
              제공하며, 나의 프로젝트에 더 세련된 UI를 적용하는 데 매우
              유용했습니다.
            </li>
          </ul>
          <h2 className="font-semibold">3.2 React, Next.js && TypeScript</h2>
          <p className="mb-4">
            프론트엔드 프레임워크 중에서는 React를 많이 사용합니다. React는
            컴포넌트 기반 아키텍처를 사용하여 UI를 구축하는데, 재사용 가능한
            컴포넌트를 만들 수 있어 효율적인 개발이 가능했습니다. 또한,
            Next.js를 활용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을
            통해 SEO를 최적화하고, 페이지 로딩 속도를 개선했습니다. Next.js는
            React의 기능을 확장하여 더 강력한 웹 애플리케이션을 구축할 수 있게
            도와줍니다. <br /> 또한, TypeScript는 내가 작성한 JavaScript 코드에
            타입을 추가하여 코드의 안정성을 높이고, 유지보수성을 강화할 수 있게
            해줍니다. 특히 팀 프로젝트에서 협업할 때 큰 장점이었습니다.
          </p>
          <h2 className="font-semibold">3.3 백엔드 기술 스택 확장</h2>
          <p>
            프론트엔드 기술 외에도 백엔드 기술을 배우고 있는 중입니다. Node.js와
            Express.js를 사용하여 서버를 구축하고, RESTful API를 만들 수 있게
            되었습니다. 특히, Node.js는 비동기 처리에 강력하여 실시간
            애플리케이션에 적합합니다. Express.js는 라우팅과 미들웨어 처리 등이
            간단하게 구현할 수 있어 매우 유용하게 사용했습니다.
          </p>
          <h2 className="text-xl font-semibold mt-4">
            4. 프론트엔드 개발에서의 실전 경험
          </h2>
          <h2 className="font-semibold mt-2">4.1 Git과 GitHub</h2>
          <p className="mb-4">
            버전 관리 시스템인 Git을 사용하여 코드 변경 사항을 관리하고, 협업할
            때 GitHub을 활용해 다른 개발자들과 협업했습니다. Git의 branch,
            merge, pull request 같은 기능을 잘 활용하면서, 코드 충돌을
            최소화하고 프로젝트의 일관성을 유지하는 방법을 배웠습니다.
          </p>
          <h2 className="font-semibold">4.2 코드 리뷰와 피드백</h2>
          <p className="mb-4">
            코드 리뷰는 내가 작성한 코드의 품질을 높이는 데 중요한 부분입니다.
            코드 리뷰를 통해 다른 개발자들의 피드백을 받고, 더 나은 코드를
            작성하는 방법을 배우게 되었습니다. 코드 리뷰는 단순히 버그를 찾는
            작업이 아니라, 코드의 구조와 가독성, 확장성을 고려하는 중요한
            과정입니다.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            5. 앞으로의 프론트엔드 개발자로서의 목표
          </h2>
          <p className="mb-4">
            프론트엔드 개발의 트렌드는 매우 빠르게 변화하고 있습니다. 새로운
            기술들이 계속해서 등장하고, 그에 따라 프론트엔드 개발자들은 계속해서
            새로운 도전과 학습을 이어가야 합니다. 앞으로는 프론트엔드 기술 뿐만
            아니라, 백엔드 기술도 배워 NestJS로 서버 측 기술도 다룰 계획입니다.
            프론트엔드 개발만이 아니라 백엔드까지 아우르는 풀스택 개발자로서의
            역량을 갖추기 위해 노력할 것입니다. API 설계, 데이터베이스 설계와
            같은 주제를 다루며, 프론트엔드와 백엔드를 잘 연동할 수 있는 시스템을
            구축하는 것이 제 목표입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
