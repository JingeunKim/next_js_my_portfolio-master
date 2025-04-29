"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
import React, { MouseEvent } from "react";
// ========== ImageSectionOne ==========
const ImageSectionOne = () => (
  <section className="w-full py-12">
    <div className="max-w-screen-xl mx-auto flex justify-center">
      <img 
        src="/images/procedure.jpg"  // public/images/procedure.jpg에 파일이 있어야 함
        alt="Image One"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </section>
);

// ========== ImageSectionTwo ==========
const ImageSectionTwo = () => (
  <section className="w-full py-12">
    <div className="max-w-screen-xl mx-auto flex justify-center">
      <img 
        src="/images/comission.png"  // public/images/comission.png에 파일이 있어야 함
        alt="Image Two"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </section>
);


const Navbar = () => {
  const pathname = usePathname();
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === "/";
  const navbarJustify = isHomePage ? "justify-between" : "justify-center";

  // 스무스 스크롤 처리 함수
  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 p-4 flex items-center h-[70px] overflow-hidden ${navbarJustify} bg-white shadow-md`}>
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 z-0"></div>
      {isHomePage && (
        <div className="text-2xl font-semibold z-10 pl-20" style={{ fontFamily: "Poppins, sans-serif" }}>
          FF 택스
        </div>
      )}
      <div className="flex space-x-8 z-10 pr-20 font-bold">
        <Link href="/" onClick={handleHomeClick}>Home</Link>
      </div>
    </div>
  );
};

// ========== FirmTitleSection ==========
const FirmTitleSection = () => (
  <section className="w-full bg-gradient-to-r from-[#F5F6FA] to-[#ECEFF4] py-48 mb-0 relative">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
      <h1
        className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-4 drop-shadow-lg"
        style={{ letterSpacing: "0.05em", fontFamily: "Poppins, sans-serif" }}
      >
        종합소득세 신고를 위해 두명의 세무사가 뭉쳤다!
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 font-medium text-center mt-2">
      종합소득세 신고, 혼자 준비하려면 신경 쓸 것도, 챙길 것도 많습니다.<br />
      매출 자료부터 경비 정리, 공제 항목까지 제대로 챙겨야 불필요한 세금 없이 깔끔하게 신고할 수 있습니다.<br />
      두 명의 전문 세무사가 처음부터 끝까지 함께합니다.<br />
      지금 바로 상담 신청해보세요.<br />
      </p>
      <a
        href="http://pf.kakao.com/_xfmxnwn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full shadow-lg transition-colors duration-200 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" fill="#3C1E1E" />
          <path
            d="M12 7c-3.314 0-6 1.985-6 4.433 0 1.393 1.005 2.63 2.573 3.437-.088.31-.567 2.001-.617 2.207-.096.396.145.393.305.286.125-.083 1.974-1.3 2.78-1.849.315.045.641.069.959.069 3.314 0 6-1.985 6-4.433S15.314 7 12 7z"
            fill="#FFF"
          />
        </svg>
        카카오톡 채널 바로가기
      </a>
    </div>
    <div className="absolute left-0 right-0 bottom-0 w-full h-8 bg-[#F8F9FB]"></div>
  </section>
);



// ========== TaxAccountants ==========
const TaxAccountants = () => (
  <section className="px-0 py-14 bg-white -mt-4">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
        <img 
          src="/images/semu2.jpeg" 
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg"
          alt="이지운 세무사"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4"
              style={{ fontFamily: "'Montserrat', 'Noto Sans KR', sans-serif" }}>
            이지운
          </h3>
          <ul className="space-y-2 text-base md:text-lg text-gray-800">
            <li>세무사자격시험합격</li>
            <li>現 청목세무회계 대표세무사</li>
            <li>現 법무법인 명도 세무 자문위원</li>
            <li>現 중기이코노미기업지원단 국세환급센터1 센터장</li>
            <li>前 세무그룹 한별 근무</li>
            <li>前 무지개세무회계연구소, 무지개세무회계 근무</li>
            <li>前 세무법인 동안 근무</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-md p-6 w-full md:w-1/2">
        <img
          src="/images/semu1.jpeg"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg"
          alt="김민진 세무사"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4"
              style={{ fontFamily: "'Montserrat', 'Noto Sans KR', sans-serif" }}>
            김민진
          </h3>
          <ul className="space-y-2 text-base md:text-lg text-gray-800">
            <li>세무사자격시험합격</li>
            <li>現 진우세무회계 대표세무사</li>
            <li>前 NH투자증권 TAX센터 근무</li>
            <li>前 무지개세무회계연구소, 무지개세무회계 근무</li>
            <li>前 세무법인 스타시아 근무</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ========== FreeConsultSection ==========
const FreeConsultSection = () => (
  <section className="w-full bg-[#F5F6FA] pt-14 pb-16 -mt-4">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
      <h2
        className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4"
        style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.03em" }}
      >
        종합소득세 신고 신청
      </h2>
      <a
        href="http://pf.kakao.com/_xfmxnwn/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full shadow-lg transition-colors duration-200 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" fill="#3C1E1E" />
          <path
            d="M12 7c-3.314 0-6 1.985-6 4.433 0 1.393 1.005 2.63 2.573 3.437-.088.31-.567 2.001-.617 2.207-.096.396.145.393.305.286.125-.083 1.974-1.3 2.78-1.849.315.045.641.069.959.069 3.314 0 6-1.985 6-4.433S15.314 7 12 7z"
            fill="#FFF"
          />
        </svg>
        카카오톡 상담하기
      </a>
    </div>
  </section>
);

// ========== FooterSection ==========
const FooterSection = () => (
  <footer className="w-full bg-[#ECEFF4] py-8 border-t border-gray-200 -mt-4">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-row flex-wrap justify-center items-center text-center text-gray-700 text-sm">
      <div className="mx-1 my-1">
        <span className="font-semibold">팩스</span> | 0504-443-8171
      </div>
      <div className="mx-1 my-1">
        <span className="font-semibold">전화번호</span> | 010-4126-8171
      </div>
      <div className="mx-1 my-1">
        <span className="font-semibold">대표자</span> | 김민진
      </div>
      <div className="mx-1 my-1">
        <span className="font-semibold">사업자등록번호</span> | 236-04-03526
      </div>
      <div className="mx-1 my-1">
        <span className="font-semibold">주소</span> | 서울시 중랑구 동일로157길19 3층
      </div>
      <div className="mx-1 my-1">
        <span className="font-semibold">카카오톡</span> | <a href="http://pf.kakao.com/_xfmxnwn" target="_blank" rel="noopener noreferrer" className="text-yellow-700 underline hover:text-yellow-900">채널 바로가기</a>
      </div>
      <div className="basis-full h-0" />
      <div className="text-xs text-gray-500 mt-2 w-full text-center">&copy; {new Date().getFullYear()} FF TAX. All rights reserved.</div>
    </div>
  </footer>
);

// ========== HomePage ==========
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[70px]">
        <FirmTitleSection />
        <ImageSectionOne />
        <ImageSectionTwo />
        <TaxAccountants />
        <FreeConsultSection />
        <FooterSection />
      </div>
    </div>
  );
}