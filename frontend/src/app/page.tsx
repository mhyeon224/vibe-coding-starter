import Image from "next/image";
import MissionConsole from "./mission-console";
import { getHighlights, getProfile } from "@/lib/db";

const profileFields = [
  { label: "이름", key: "name" },
  { label: "소속", key: "team" },
  { label: "역할", key: "position" },
  { label: "MBTI", key: "uniform_number" },
] as const;

const experiences = [
  {
    title: "웹페이지 제작과 GitHub 배포",
    description: "데이터 수집부터 웹페이지 제작, GitHub 배포까지 직접 경험하며 프로젝트 흐름 전체를 익혔습니다.",
  },
  {
    title: "Google Sheets API 자동 정리",
    description: "사용자 의견을 수집하고 성명, 내용, 일자를 실시간으로 엑셀 DB에 정리하는 시스템을 구축했습니다.",
  },
  {
    title: "댓글 데이터 수집과 감정 분류",
    description: "크롤링과 API 연동으로 유튜브 댓글 데이터를 수집하고 감정을 분류해 대시보드로 시각화했습니다.",
  },
  {
    title: "IBA 중고차 데이터 전처리",
    description: "영국 중고차 데이터의 중복, 결측, 명칭과 단위 불일치를 확인하고 도메인 기준으로 정제했습니다.",
  },
];

const processSteps = [
  {
    title: "패턴 추출",
    description: "17만 건 Raw 데이터에서 자주 등장하는 비정형 재료명과 계측 표현을 먼저 추출합니다.",
  },
  {
    title: "정제 기준 설계",
    description: "재료명, 조리 상태, 수량, 단위를 분리하고 표준 재료명 사전과 연결합니다.",
  },
  {
    title: "검수와 개선",
    description: "AI 처리 결과를 샘플링 검수하며 예외 케이스를 오팔 노드에 반영합니다.",
  },
];

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-parchment-canvas text-ink">
      <div className="bg-aubergine px-6 py-3 text-center text-sm font-medium text-bone">
        식품 성분표 기반 한식 레시피 데이터 표준화 자동화 시스템
      </div>

      <nav className="sticky top-0 z-20 border-b border-fog bg-bone/86 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <a className="text-sm font-medium text-ink" href="#top">
            Moon Jihyun
          </a>
          <div className="flex items-center gap-2">
            <a className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-fog" href="#mission">
              로드맵
            </a>
            <a className="whitespace-nowrap rounded-lg border border-iris px-3 py-2 text-sm font-medium text-iris hover:bg-bone" href="#work">
              경험
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero-dusk relative isolate min-h-[calc(100vh-88px)] scroll-mt-24 overflow-hidden px-6 py-16 text-bone">
        <div className="absolute left-[8%] top-[18%] hidden h-24 w-72 rounded-full glass-panel md:block" />
        <div className="absolute bottom-[18%] right-[8%] hidden h-20 w-64 rounded-full glass-panel lg:block" />

        <div className="mx-auto grid min-h-[calc(100vh-220px)] max-w-[1200px] gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:items-center">
          <div>
            <div className="glass-panel w-fit rounded-full px-4 py-3 text-sm font-medium text-white/90">
              AI Data Refinement · ENFJ
            </div>
            <h1 className="mt-8 max-w-4xl text-6xl font-semibold leading-[0.96] tracking-[-0.028em] sm:text-7xl md:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a className="gradient-ring z-0 rounded-lg bg-bone px-6 py-3 text-base font-medium text-ink" href="#mission">
                로드맵 보기
              </a>
              <a className="rounded-lg border border-white/70 px-6 py-3 text-base font-medium text-bone hover:bg-white/10" href="#process">
                진행 방식
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-3">
              <Image
                src={profile.image_path}
                alt={`${profile.name} 프로필 일러스트`}
                width={680}
                height={820}
                priority
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-5 left-5 right-5 rounded-2xl p-4">
              <p className="text-xs font-medium uppercase text-white/64">Current Role</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.014em]">{profile.position}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment-canvas px-6 py-14">
        <div className="mx-auto grid max-w-[1200px] gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-fog bg-bone p-6 sm:p-8">
            <p className="text-sm font-medium text-iris">Profile Snapshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {profileFields.map((field) => (
                <div key={field.key} className="rounded-2xl bg-parchment-canvas p-5">
                  <p className="text-xs font-medium leading-5 text-graphite">{field.label}</p>
                  <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.014em] text-ink">{profile[field.key]}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] bg-ink p-6 text-bone sm:p-8">
            <p className="text-sm font-medium text-lavender-chip">Opening Line</p>
            <p className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.022em]">
              저는 데이터를 그냥 정리하는 사람이 아니라, 기준을 세워 다시 쓸 수 있게 만드는 사람입니다.
            </p>
          </aside>
        </div>
      </section>

      <MissionConsole />

      <section id="intro" className="stage-panel scroll-mt-24 px-6 py-16 text-bone">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[300px_1fr]">
          <div>
            <p className="text-sm font-medium text-lavender-chip">About</p>
            <h2 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.027em] sm:text-5xl">
              정제 로직을 끝까지 파고드는 사람
            </h2>
          </div>
          <div>
            <p className="text-lg font-medium leading-9 text-white/78">{profile.introduction}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.id} className="glass-panel rounded-2xl p-5">
                  <p className="text-xl font-semibold leading-tight tracking-[-0.014em] text-bone">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 bg-parchment-canvas px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-iris">Experience</p>
              <h2 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.027em] text-ink sm:text-5xl">
                프로젝트에 연결되는 경험
              </h2>
            </div>
            <a className="w-fit rounded-lg border border-iris px-4 py-3 text-sm font-medium text-iris hover:bg-bone" href="#top">
              맨 위로
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <article key={experience.title} className="rounded-[24px] border border-fog bg-bone p-6 hover:border-iris">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium text-iris">Evidence 0{index + 1}</p>
                  <span className="rounded-full bg-fog px-3 py-1 text-xs font-medium text-graphite">ready</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.022em] text-ink">{experience.title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-graphite">{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-parchment-canvas px-6 pb-20 pt-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[28px] border border-fog bg-bone p-6 sm:p-8 md:grid-cols-[300px_1fr]">
          <div>
            <p className="text-sm font-medium text-iris">Process</p>
            <h2 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.027em] text-ink sm:text-5xl">
              앞으로의 진행 방식
            </h2>
          </div>
          <div className="grid gap-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-parchment-canvas p-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-bone">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.014em] text-ink">{step.title}</h3>
                    <p className="mt-2 text-base font-medium leading-7 text-graphite">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-aubergine px-6 py-10 text-bone">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-lg font-semibold tracking-[-0.014em]">문지현 · AI 기반 지능형 정제</p>
          <p className="text-sm font-medium text-white/70">복잡한 데이터를 기준 있는 시스템으로 정리합니다.</p>
        </div>
      </footer>
    </main>
  );
}
