/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Yoona Park (박윤아)",
  koreanName: "박윤아",
  role: "Service Planner",
  location: "Seoul, Korea",
  email: "pya6667@gmail.com",
  phone: "+82) 010-3179-8185",
  education: {
    school: "단국대학교",
    major: "모바일시스템공학과",
    minor: "바이오헬스디바이스융합전공",
    period: "2021.03 ~ 2026.08 (졸업예정)"
  },
  slogan: "아이디어를 구조화하여 실현 가능한 논리적 솔루션을 만드는 서비스 기획자",
  intro: "단국대학교 모바일시스템공학과에서 기술적 기반을 다지고, 비즈니스 가치를 극대화하는 실현 가능한 기획을 만듭니다. 복잡한 문제를 단순화하고, 데이터 기반의 논리 전략으로 최적화된 사용자 경험을 설계합니다.",
  socials: {
    github: "https://github.com/yoona-park",
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
    title: "Jobpang (취팡)",
    category: "AI 초개인화 커리어 매니지먼트",
    date: "2025.02 - 03",
    problem: "구직 활동 데이터가 여러 플랫폼에 파편화되어 있어, 본인의 강점과 공백을 객관적으로 파악하기 어렵고 막연한 불안감을 느끼는 구직자가 많음.",
    solution: "파편화된 구직 데이터를 통합 트래킹하고, AI를 통해 역량 공백을 진단하여 개인별 맞춤형 합격 로드맵과 시나리오를 제시하는 매니지먼트 플랫폼 기획.",
    outcome: "Figma 프로토타입 기반 A/B 테스트를 통해 직무 중심 모듈형 UX의 구직 탐색 효율성을 검증하고, 개인화 로드맵의 실무 가능성을 확보함.",
    contribution: [
      "구직 활동 트래킹을 통한 역량 공백 진단 및 단계별 맞춤 합격 시나리오 제공",
      "Figma 프로토타입 기반 A/B 테스트로 직무 중심 모듈형 UX 탐색 효율성 검증",
    ],
    image: "https://images.unsplash.com/photo-1454165833767-027ee3d61dfd?q=80&w=1000&auto=format&fit=crop",
    tags: ["서비스 기획", "AI 로드맵", "UX/UI"],
  },
  {
    id: "purple",
    title: "Purple",
    category: "사용자 분위기 분석 AI 향수 추천",
    date: "2023.10 - 12",
    problem: "개인의 이미지를 정량화하기 어렵고, 수많은 향수 중 자신에게 어울리는 향을 찾기 위해 과도한 시간과 비용을 소모함.",
    solution: "이미지 및 분위기 데이터를 분석하는 AI 모델과 향수 노트 데이터를 매칭하여, 사용자의 분위기에 최적화된 향수 추천 로직 설계.",
    outcome: "기존 2~3시간 소요되던 향수 선택 시간을 5~6분으로 95% 단축하였으며, 설문 참여자 83%로부터 높은 추천 의향을 확인받음.",
    contribution: [
      "68개 브랜드 향수 노트 구조화 및 70개 표준 노트/20가지 분위기 기준 AI 추천 로직 설계",
      "향수 선택 시간 약 95% 단축 (2~3시간 → 5~6분)",
      "설문 참여자 50명 중 83% 만족·재사용·추천 의향 확인",
    ],
    image: "https://images.unsplash.com/photo-1541643600914-722180c9704a?q=80&w=1000&auto=format&fit=crop",
    tags: ["PM", "백엔드 개발", "AI 추천"],
  },
  {
    id: "reader",
    title: "Reader",
    category: "AI 기반 문서 데이터화 및 챗봇",
    date: "2023.10 - 12",
    problem: "대량의 비정형 문서에서 필요한 데이터를 추출하고 관리하는 과정에 막대한 시간과 인적 오류(Human Error)가 발생함.",
    solution: "사용자 정의 필드를 기반으로 문서 내 핵심 정보를 자동 추출하고, 이를 시각화하거나 챗봇과 연동하여 질의응답이 가능한 시스템 구축.",
    outcome: "수작업 대비 문서 데이터 분석 시간을 80% 단축하였으며, 데이터 가시성 확보로 즉각적인 의사결정 인사이트를 도출함.",
    contribution: [
      "사용자 정의 필드 기반 자동 문서 데이터 추출 모델 기획 및 설계",
      "문서 데이터 분석 시간 약 80% 단축 및 즉각적 데이터 인사이트 확보 프로세스 구현",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
    tags: ["백엔드 개발", "자동화 워크플로우", "AI"],
  },
];

export const WORK_EXPERIENCE = [
  {
    company: "핫와이드",
    role: "개발부 인턴",
    period: "2025.06 - 12 (7개월)",
    projects: [
      {
        title: "해외 상표 무단선점 조사 자동화 프로세스 구축",
        period: "2025.08 ~ 2025.12",
        outcome: "데이터 기반 운영 리팩토링으로 검수 리드타임 30% 단축 및 병목 현상 근본 원인 해결",
        contributions: [
          "데이터 전처리 → 필터링 → 검수까지 end-to-end 프로세스 재정의",
          "검수 전 단계에서 데이터 클리닝 로직을 선제 적용하여 불필요 작업 제거",
          "28단계 필터링 자동 처리 로직 및 멀티 프로세싱 도입으로 처리 속도 50% 개선",
          "처리 효율을 고려한 로직 구조 설계 및 운영 안정성 확보"
        ],
        skills: ["Python", "MySQL", "PHP", "Notion"]
      },
      {
        title: "내부 운영 시스템 데이터 구조 개선",
        period: "2025.07 ~ 2025.12",
        outcome: "데이터 관리 방식 개선으로 운영 효율 및 안정성 향상",
        contributions: [
          "텍스트 및 하드코딩 기반 데이터 관리 구조의 비효율 문제 정의",
          "MongoDB 기반 데이터 구조 설계로 유연한 데이터 관리 환경 구축",
          "웹 페이지 내 실시간 데이터 조회 및 수정 기능 기획 및 구현"
        ],
        skills: ["MongoDB", "PHP"]
      }
    ]
  },
  {
    company: "알체라",
    role: "Business Development팀 Assistant",
    period: "2024.09 - 11 (3개월)",
    projects: [
      {
        title: "LLM 데이터 품질 개선 및 프롬프트 설계",
        period: "2024.10",
        outcome: "프롬프트 가이드라인 정립으로 데이터 품질 일관성 개선",
        contributions: [
          "고객사 RFP를 기반으로 요구사항을 작업 기준으로 해석 및 정리",
          "작업자 간 결과 편차 문제를 해결하기 위해 프롬프트 가이드라인 설계 및 샘플 데이터셋 구축",
          "고객사 피드백을 반영한 프롬프트 재설계 및 품질 개선 적용"
        ],
        skills: ["LLM", "프롬프트 설계", "데이터 품질 관리", "Excel"]
      },
      {
        title: "AI·LLM 시장 및 경쟁사 분석 리포트 작성",
        period: "2024.09 ~ 2024.11",
        outcome: "주간 리포트 14회 작성 및 공유를 통해 AI 시장 동향 및 경쟁사 전략 파악 지원",
        contributions: [
          "AI 및 LLM 시장 트렌드와 주요 기업 동향 리서치 수행",
          "사업 진출 가능성 검토를 위해 기업별 모델 구축 방식 및 데이터 활용 구조 분석",
          "경쟁사 연간 사업 방향을 기반으로 자사 진출 가능 영역 도출",
          "주간 단위 리포트 작성 및 회의 공유를 통해 의사결정 인사이트 전달"
        ],
        skills: ["시장조사", "Confluence", "구글 스프레드시트"]
      },
      {
        title: "AI 근태관리 서비스 사용자 확보 전략 수립 및 운영",
        period: "2024.10 ~ 2024.11",
        outcome: "5개 채널 기반 전략으로 40개 이상 사업장 사용자 확보 및 초기 서비스 운영 안정화",
        contributions: [
          "타겟 고객군 분석을 기반으로 채널별 유입 전략 수립 및 실행",
          "자영업자 커뮤니티, DM, 제휴 등 5개 채널을 활용한 사용자 확보",
          "실기기 기반 서비스 테스트 및 배포 전 검수 수행",
          "사용자 문의 대응"
        ],
        skills: ["서비스 운영"]
      }
    ]
  },
  {
    company: "데이원컴퍼니",
    role: "기획운영팀 인턴",
    period: "2024.07 (1개월)",
    projects: [
      {
        title: "주니어 개발자 대상 이직 설명회 기획 및 운영",
        period: "2024.07",
        outcome: "60명 이상 참여자 확보 및 만족도 80% 이상 달성",
        contributions: [
          "개발자 이직 시장 니즈 분석을 기반으로 ‘경험 기반 커리어 전환’ 주제 기획",
          "타겟 참여자 정의 및 강연자 섭외, 세션 구성 등 전체 기획 과정 주도",
          "합격 이력서 및 포트폴리오 사례 중심 콘텐츠로 참여자 실질 만족도 향상"
        ],
        skills: ["콘텐츠 기획", "운영", "커뮤니케이션"]
      }
    ]
  }
];

export const SKILLS = [
  { category: "Service Planning", skills: ["Desk Research", "Data Analysis", "IA Planning"], level: 90 },
  { category: "Tools", skills: ["Excel", "PowerPoint", "Figma"], level: 95 },
  { category: "Data Analysis", skills: ["SQL", "Python", "Spreadsheets"], level: 85 },
  { category: "Collaboration", skills: ["Notion", "Slack", "Swit"], level: 90 },
];

export const PROCESS = [
  {
    step: "01",
    title: "현상 분석 (Discovery)",
    description: "목표와 장기적 비전을 심층 분석합니다. 경쟁사 리서치와 시장 트렌드를 통해 해결해야 할 문제를 정의합니다.",
  },
  {
    step: "02",
    title: "전략 기획 (Strategy)",
    description: "분석된 데이터를 바탕으로 로직을 설계합니다. 사용자 여정(User Journey)을 정의하고 서비스 구조를 최적화합니다.",
  },
  {
    step: "03",
    title: "구체화 (Design & Build)",
    description: "기획안을 바탕으로 직관적인 UI와 효율적인 시스템을 구축합니다. 사용자 중심의 디테일을 완성합니다.",
  },
  {
    step: "04",
    title: "운영 및 최적화 (Optimize)",
    description: "서비스 런칭 후 피드백을 모니터링하고 가설을 검증합니다. 지속적인 데이터 기반 고도화를 진행합니다.",
  },
];

export const CERTIFICATIONS = [
  { name: "영어 회화 OPIC IH", date: "2025.06" },
  { name: "정보처리기사 실기 합격", date: "2024.06" },
  { name: "SQLD (SQL 개발자)", date: "2023.10" },
  { name: "ADsP (데이터분석 준전문가)", date: "2023.09" },
  { name: "컴퓨터활용능력 1급", date: "2022.02" },
];

export const ACTIVITIES = [
  { name: "빅데이터 분석 학회 SQL 분반 분반장", period: "2024.09 - 25.02" },
  { name: "CES 2024 글로벌 비즈니스 프로그램", period: "2024.01" },
  { name: "TABA 8기 산학연계 아카데미 (대상)", period: "2023.09 - 12" },
  { name: "대학교 전공 알림단 활동", period: "2023.03 - 05" },
];

export const AWARDS = [
  { name: "데이터 안심구역 공동 경진대회 우수상", date: "2024.11" },
];
