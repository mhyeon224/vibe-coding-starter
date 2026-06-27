const missions = [
  {
    eyebrow: "Mission 01",
    title: "표준 재료명 치환",
    body: "비정형 재료명을 식품 성분표 기준의 공식 명칭과 연결해 분석 가능한 데이터로 정리합니다.",
    stat: "Ingredient Map",
  },
  {
    eyebrow: "Mission 02",
    title: "계측 단위 정규화",
    body: "큰술, 작은술, 약간처럼 모호한 표현을 재료 특성과 맥락에 맞춰 g/ml 기준으로 변환합니다.",
    stat: "g/ml Normalize",
  },
  {
    eyebrow: "Mission 03",
    title: "샘플링 검수와 개선",
    body: "AI 결과를 그대로 믿지 않고 예외 케이스를 검수해 오팔 노드와 프롬프트 로직에 다시 반영합니다.",
    stat: "Review Loop",
  },
];

export default function MissionConsole() {
  return (
    <section id="mission" className="scroll-mt-24 bg-parchment-canvas px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[28px] border border-fog bg-bone p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-iris">Refinement Roadmap</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.027em] text-ink sm:text-5xl">
                AI 기반 지능형 정제 로드맵
              </h2>
              <div className="mt-8 rounded-3xl bg-ink p-6 text-bone">
                <p className="text-sm font-medium text-lavender-chip">Core Message</p>
                <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.022em]">
                  복잡한 레시피 Raw 데이터를 기준 있는 정제 시스템으로 바꿉니다.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {missions.map((mission, index) => (
                <article key={mission.title} className="group rounded-3xl border border-fog bg-parchment-canvas p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-iris">{mission.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.022em] text-ink">
                        {mission.title}
                      </h3>
                      <p className="mt-3 text-base font-medium leading-7 text-graphite">{mission.body}</p>
                    </div>
                    <div className="shrink-0 rounded-full border border-iris px-4 py-2 text-sm font-medium text-iris">
                      {mission.stat}
                    </div>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-fog">
                    <div className="h-full rounded-full bg-iris" style={{ width: `${(index + 1) * 33.34}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
