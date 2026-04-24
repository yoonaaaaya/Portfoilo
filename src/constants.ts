/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Yoona Park",
  koreanName: "박윤아",
  role: "Service Planner",
  location: "Yongin, Korea",
  email: "pya6667@gmail.com",
  phone: "+82) 010-3179-8185",
  education: {
    school: "단국대학교",
    major: "모바일시스템공학과",
    minor: "바이오헬스디바이스융합전공",
    period: "2021.03 ~ 2026.08 (졸업예정)"
  },
  slogan: "아이디어를 구조화하여 실현 가능한 논리적 솔루션을 만드는 서비스 기획자",
  intro: "기술적 기반과 비즈니스 가치를 결합한 실현 가능한 기획을 추구합니다. 복잡한 문제를 단순화하고 데이터 기반의 논리적 전략을 통해 사용자 경험을 최적화하여 설계합니다.",
  socials: {
    github: "https://github.com/yoonaaaaya",
    linkedin: "https://linkedin.com/in/yoona-park",
    instagram: "https://instagram.com/yoona_p",
  }
};

export const STATS = [
  { label: "실무 경험", value: "3+" },
  { label: "고객 유지율", value: "95%" },
  { label: "만족도", value: "83%+" },
  { label: "프로젝트 수행", value: "10+" },
];

export const PROJECTS = [
  {
    id: "jobpang",
    title: "취팡",
    category: "AI 초개인화 커리어 매니지먼트",
    date: "2025.02 - 03",
    summary: "AI 데이터 선순환 구조를 통해 개인에게 최적화된 합격 경로를 즉시 제안하며, 구직자의 실행력을 끌어올리는 올인원 취업 솔루션 설계",
    problem: "구직자의 파편화된 여정으로 인해 지원 데이터가 축적되지 않아 경험 재활용이 어렵고, 부족한 피드백으로 다음 지원으로의 연결이 미흡함",
    solution: "AI 기반 '진단-매칭-지원-피드백' 의 4단계 선순환 커리어 사이클과 실행 중심의 데일리 '취팡 미션'을 통한 취업 성공률 극대화",
    keyActions: [
      {
        title: "AI 데이터 선순환 구조 설계",
        desc: "사용자의 검색/지원/피드백 데이터가 데이터베이스에 축적되어 추천 정확도를 높이는 피드백 루프 로직 설계"
      },
      {
        title: "커리어 대시보드 기획",
        desc: "시즌별 합격률과 전형별 상태를 드래그 앤 드롭으로 관리하여 구직 프로세스를 통합 트래킹하는 인터페이스 설계"
      },
      {
        title: "실행 중심 취팡 미션 정의",
        desc: "부족한 역량을 보완하기 위한 데일리 액션(산업 리서치, 자소서 구조화 등)을 루틴화하여 구직자의 일회성 방문을 지속적인 실행으로 전환"
      }
    ],
    outcome: "합격 대시보드 및 AI 데이터 선순환 구조 설계를 통한 구직 탐색 효율 최적화 및 사용자 리텐션 강화 전략 수립",
    contribution: [
      "팀 '취트키'의 기획자로서 산업 리서치, 서비스 기획, 와이어프레임 및 유저 플로우 작성 주도",
      "15년 합격 데이터를 활용한 AI 진단 로직 및 개인화된 합격 로드맵 시나리오 구체화",
      "실행 중심의 ‘취팡 미션’ 루틴화 서비스 기획 및 Figma 프로토타입 기반 UX 검증"
    ],
    image: "https://github.com/yoonaaaaya/Portfoilo_Image/blob/6e61bcb912fd2e45b356f7d8b93121fe6bc7d9e0/%EC%B7%A8%ED%8C%A1_%ED%91%9C%EC%A7%80.png?raw=true",
    tags: ["서비스 기획", "AI 로드맵", "팀 프로젝트"],
  },
  {
    id: "data-safety",
    title: "2024 데이터안심구역 활용 공동 경진대회",
    category: "공모전 수상 (우수상)",
    date: "2024.08 - 11",
    summary: "공공 및 민간 데이터(KCB, 전력 사용량 등)의 결합 분석을 통해 지방 소멸 및 빈집 문제 해결을 위한 데이터 기반 지역 맞춤형 비즈니스 모델 제안",
    problem: "지방 인구 감소와 청년층 유출로 인한 빈집 증가 및 지역 경제 활력 저하 문제의 데이터 기반 실질적 분석 부재",
    solution: "전력 사용량 기반 빈집 정밀 타겟팅 시각화와 지역별 산업/유동인구 데이터 결합 분석을 통한 '수요·공급 맞춤형 빈집 활용 전략' 수립",
    keyActions: [
      {
        title: "데이터 융합 분석 및 타겟팅",
        desc: "KCB 신용 데이터와 전국·광주시 전력 사용량 데이터를 결합하여 빈집의 정량적 비율을 시각화하고 우선 전략 지역 도출"
      },
      {
        title: "산업·매출 기반 모델 제안",
        desc: "지역별 업종 활성도 및 매출 트렌드 분석을 기반으로, 단순 철거가 아닌 지역 경제 활성화를 위한 맞춤형 비즈니스 모델 기획"
      },
      {
        title: "기획 및 전략 로직 설계",
        desc: "수집된 데이터 인사이트를 서비스 가치로 연결하는 전략적 프레임워크 구축 및 서비스 유저 시나리오 설계"
      }
    ],
    outcome: "우수상 (KCB CEO상) 수상 — 데이터 간 상관관계 분석의 논리적 타당성 및 제안 모델의 시장 실현 가능성 인정",
    contribution: [
      "팀 '브다히어로'의 기획자로서 데이터 안심구역 내 비공개 데이터(KCB 등) 분석 및 서비스 전략 도출 주도",
      "전력 데이터 기반 빈집 시각화 분석 및 지역별 산업 구조 차이에 따른 전략 수립 근거 제언",
      "데이터 분석 결과를 비즈니스 언어로 가공하여 실효성 있는 기대 효과 및 구현 시나리오 작성"
    ],
    image: "https://github.com/yoonaaaaya/Portfoilo_Image/blob/01788631337ec4fff3b0cbf7838eec5e1f0ba3fa/%EC%88%98%EC%83%81_%ED%91%9C%EC%A7%80.png?raw=true",
    tags: ["공모전 수상", "데이터 시각화", "데이터 분석", "Python", "Tableau"],
  },
  {
    id: "purple",
    title: "Purple",
    category: "AI 이미지 분석 기반 분위기 맞춤 향수 추천 서비스",
    date: "2023.05 - 06",
    summary: "사용자의 얼굴 이미지를 AI로 분석하여 고유의 분위기를 도출하고, 이에 어울리는 최적의 향수 노트를 매칭해주는 서비스",
    problem: "자신의 이미지와 어울리는 향수를 찾고 싶지만, 단순 리뷰나 직접 시향만으로는 본인에게 어울리는 향수를 찾는 데 어려움이 존재",
    solution: "ResNet 기반 이미지 분류 모델을 통한 분위기 진단 및 향수 데이터베이스 기반 분위기-노트 매칭 알고리즘을 통한 맞춤형 추천",
    keyActions: [
      {
        title: "분위기 맞춤 향수 매칭 로직 설계",
        desc: "이미지 분석으로 도출된 분위기(20종)와 향수 노트(70종) 간의 상관관계를 정의하고 가중치 기반 매칭 알고리즘 설계"
      },
      {
        title: "사용자 피드백 기반 UX 개선",
        desc: "추천 결과의 납득도를 높이기 위해 심리테스트형 결과 UI를 도입하고, 텍스트로 향을 입체적으로 묘사하는 '글로 시향하기' 기능 기획"
      },
      {
        title: "향수 검색 및 상세 정보 시스템 구축",
        desc: "분위기별 카테고리 검색 기능과 향수별 상세 노트 정보 및 구매 연결까지 포함된 올인원 서비스 경험 구축"
      }
    ],
    outcome: "사용자 만족도 84% 달성 및 심리테스트형 UI 도입을 통한 추천 결과 신뢰도 향상",
    contribution: [
      "분위기별 어울리는 향수 매칭 로직 설계 및 데이터베이스 구조 기획",
      "사용자 분위기 및 향수 검색 기능 개발 주도",
      "추천 결과 납득을 위한 심리테스트형 결과 페이지 및 '글로 시향하기' 기능 기획 및 UI 설계"
    ],
    image: "https://github.com/yoonaaaaya/Portfoilo_Image/blob/fb23e12b647ef6e7f8fffe2d5ec601d69ad52193/Purple_%ED%91%9C%EC%A7%802.png?raw=true",
    tags: ["UI/UX 기획", "AI 매칭", "서비스 개발", "Spring Boot"],
  },
  {
    id: "reader",
    title: "Reader",
    category: "AI 기반 데이터 문서화 및 분석 챗봇 서비스",
    date: "2024.03 - 06",
    summary: "비정형 문서 이미지에서 주요 정보를 자동 추출하여 디지털화하고, 챗봇을 통해 데이터 분석 및 시각화 결과를 제공하는 AI 솔루션",
    problem: "종이 문서의 수동 입력으로 인한 낮은 업무 생산성과 데이터 접근성 저하",
    solution: "OCR과 사용자별 맞춤형 AI 모델 학습을 통한 데이터 추출 자동화 및 LLM 기반 데이터 분석 챗봇 구축",
    keyActions: [
      {
        title: "사용자별 맞춤형 AI 모델 학습 설계",
        desc: "소량의 데이터(5장)로도 정확도를 확보하는 데이터 증강 기술과 미세 조정 방식을 도입하여 도메인별 최적화 실현"
      },
      {
        title: "다중 모델 기반 분석 파이프라인 구축",
        desc: "양식 분류, 정보 추출, 질문 답변 모델을 독립적으로 운영하는 마이크로서비스 아키텍처 구조 설계"
      },
      {
        title: "데이터 시각화 챗봇 엔진 구현",
        desc: "추출된 Excel 데이터를 인식하여 매출 변동 등 통계 지표를 그래프로 시각화하고 자연어로 답변하는 분석 인터페이스 개발"
      }
    ],
    outcome: "분석 시간 획기적 단축 (모델 생성 2시간, 자동 추출 6분 내외)",
    contribution: [
      "Spring Boot 기반 회원 관리 시스템 구축 및 기술/API 명세서 작성 주도",
      "Docker 기반 통합 서버 환경 구축 및 배포 관리 (AWS, MySQL, Spring Boot, React)",
      "Notion을 활용한 작업 프로세스 자산화 및 일정 관리 문서화"
    ],
    image: "https://github.com/yoonaaaaya/Portfoilo_Image/blob/fb23e12b647ef6e7f8fffe2d5ec601d69ad52193/Reader%20%ED%91%9C%EC%A7%80.png?raw=true",
    tags: ["백엔드 개발", "Spring Boot", "Docker", "AI"],
  },
];

export const WORK_EXPERIENCE = [
  {
    company: "핫와이드",
    team: "개발부",
    role: "개발부 인턴",
    period: "2025.06 - 12",
    projects: [
      {
        title: "해외 상표 무단선점 조사 자동화 프로세스 구축",
        period: "2025.08 ~ 2025.12",
        outcome: "데이터 기반 운영 리팩토링으로 검수 리드타임 30% 단축 및 병목 현상 근본 원인 해결",
        contributions: [
          "데이터 전처리 → 필터링 → 검수까지 end-to-end 프로세스 재정의",
          "검수 전 단계에서 데이터 클리닝 로직을 선제 적용하여 불필요 작업 제거",
          "28단계 필터링 자동 처리 로직 및 멀티 프로세싱 도입으로 처리 속도 50% 개선",
          "처리 효율을 고려한 로직 구조 설계 및 운영 관련 내용을 노션(Notion)에 문서화하여 인수인계 및 안정적인 로직 추가 프로세스 구축"
        ],
        skills: ["Python", "MongoDB", "PHP", "Notion"]
      },
      {
        title: "내부 운영 시스템 데이터 구조 개선",
        period: "2025.07 ~ 2025.12",
        outcome: "데이터 관리 방식 개선으로 운영 효율 및 안정성 향상",
        contributions: [
          "텍스트 및 하드코딩 기반 데이터 관리 구조의 비효율 문제 정의",
          "MongoDB 기반 데이터 구조 설계로 유연한 데이터 관리 환경 구축",
          "웹 페이지 내 실시간 데이터 조회 및 수정 기능 기획 및 구현",
          "검색 필터 내 검색 연산자 추가를 통한 데이터 탐색 효율 최적화"
        ],
        skills: ["MongoDB", "PHP"]
      }
    ]
  },
  {
    company: "알체라",
    team: "Business Development",
    role: "Assistant",
    period: "2024.09 - 11",
    projects: [
      {
        title: "‘웍플’(AI 근태관리 솔루션) 사용자 모집 방안 기획 및 운영",
        period: "2024.10 ~ 2024.11",
        outcome: "5개 채널별 타겟팅 전략으로 40여 개 사업장에 솔루션 안착 및 운영 안정화 기여",
        contributions: [
          "배송 일정, 단가, 사양을 종합적으로 고려한 태블릿 기기 비교 견적 검토 및 도입 프로세스 수립",
          "실기기 기반 서비스 구동 테스트를 직접 수행하고, 검수 완료된 태블릿의 택배 발송",
          "5개 채널별 타겟팅 전략으로 40여 개 사업장에 솔루션을 안착시키고, 전화·카카오톡 CS 대응을 통해 운영 안정화 기여"
        ],
        skills: ["서비스 운영", "기획", "CS"]
      },
      {
        title: "AI 시장·경쟁사 시장조사 및 보고자료 작성",
        period: "2024.09 ~ 2024.11",
        outcome: "주간 리포트 14회 작성 및 공유를 통해 의사결정 인사이트 전달",
        contributions: [
          "주간 IT·AI 뉴스 및 경쟁사 동향을 정리해 주간 회의에서 공유(14회)",
          "주요 기업의 AI/LLM 도입 여부, 모델 구축 방식, 외부 데이터 활용 구조를 조사하여 보고자료 작성",
          "기술 사양 및 요구사항 정리를 통한 개발팀과의 소통용 Confluence 문서 구축"
        ],
        skills: ["Market Research", "Reporting", "Confluence"]
      },
      {
        title: "LLM 학습용 데이터셋 구축 지원 및 품질 관리",
        period: "2024.10",
        outcome: "프롬프트 가이드라인 수립 및 고도화로 서비스 품질 개선 지원",
        contributions: [
          "고객사 RFP 분석을 통해 작업자가 참고할 수 있는 프롬프트 작성 가이드라인 수립",
          "고객사 피드백을 반영한 프롬프트 재설계 및 데이터 고도화 수행으로 서비스 품질 개선 지원"
        ],
        skills: ["LLM", "Prompting", "Data Quality"]
      }
    ]
  },
  {
    company: "데이원컴퍼니",
    team: "기획운영팀",
    role: "기획운영팀 인턴",
    period: "2024.07",
    projects: [
      {
        title: "주니어 개발자 이직 설명회 기획 및 운영",
        period: "2024.07",
        outcome: "60명 이상의 타겟 참여자 확보 및 실질적 만족도 제고",
        contributions: [
          "시장 니즈 분석을 통해 '경험 기반 커리어 전환'을 테마로 설정하고, 강연자 섭외부터 타임라인 구성까지 설명회 전 과정 주도",
          "단순 정보 전달이 아닌 합격 이력서 분석 및 포트폴리오 사례 중심의 실질적 콘텐츠를 기획하여 60명 이상의 타겟 참여자 확보"
        ],
        skills: ["Contents Planning", "Event Management"]
      },
      {
        title: "PM 현직자 인터뷰 콘텐츠 기획 및 배포",
        period: "2024.07",
        outcome: "사내 채널 인터뷰 콘텐츠 배포를 통한 지식 공유 환경 기여",
        contributions: [
          "인터뷰 콘텐츠 기획, 수행, 배포 전 과정 담당",
          "인터뷰 자료 콘텐츠화를 통해 사내 채널에 배포"
        ],
        skills: ["Contents Planning", "Interviewing"]
      }
    ]
  }
];

export const SKILLS = [
  { category: "Service Planning", skills: ["Desk Research", "Data Analysis", "IA Planning"] },
  { category: "Tools", skills: ["Excel", "PowerPoint", "Figma"] },
  { category: "Data Analysis", skills: ["SQL", "Python", "Tableau", "Spreadsheets"] },
  { category: "Development", skills: ["Spring Boot", "MySQL", "Docker", "AWS"] },
  { category: "Collaboration", skills: ["Notion", "Slack", "Swit"] },
];

export const PROCESS = [
  {
    step: "01",
    title: "현상 분석 (Discovery)",
    description: "목표 및 장기적 비전 심층 분석, 경쟁사 리서치와 시장 트렌드 파악을 통한 핵심 문제 정의",
  },
  {
    step: "02",
    title: "전략 기획 (Strategy)",
    description: "분석 데이터를 바탕으로 한 서비스 로직 설계, 사용자 여정(User Journey) 정의 및 구조 최적화",
  },
  {
    step: "03",
    title: "구체화 (Design & Build)",
    description: "기획안 기반의 직관적인 UI 및 효율적 시스템 구축, 사용자 중심의 디테일 설계를 통한 서비스 완성",
  },
  {
    step: "04",
    title: "운영 및 최적화 (Optimize)",
    description: "런칭 후 사용자 피드백 모니터링 및 가설 검증, 지속적인 데이터 분석을 통한 서비스 고도화 진행",
  },
];

export const CERTIFICATIONS = [
  { name: "OPIC IH", date: "2025.06" },
  { name: "정보처리기사", date: "2024.06" },
  { name: "SQLD (SQL 개발자)", date: "2023.10" },
  { name: "ADsP (데이터분석 준전문가)", date: "2023.09" },
  { name: "컴퓨터활용능력 1급", date: "2022.02" },
];

export const ACTIVITIES = [
  { name: "빅데이터분석학회 SQL 연습반 수료", period: "2024.09 - 25.02" },
  { name: "빅데이터분석학회 데이터 전처리 적용반 수료", period: "2024.03 - 08" },
  { name: "美 해외선진사업연수 - CES2024 참여", period: "2024.01" },
  { name: "대학내 전공알림단 활동", period: "2023.03 - 05" },
  { name: "대학·기업 협력형 사업 아카데미 ‘TABA’ 8기 수료", period: "2023.09 - 12" },
  { name: "단국산학협력아카데미 이수", period: "2022.06 - 08" },
  { name: "과학생회 홍보부원/홍보부장", period: "2021 - 22" },
];

export const AWARDS = [
  { name: "데이터 안심구역 공동 경진대회 우수상", date: "2024.11" },
];
