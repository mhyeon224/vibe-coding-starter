import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  uniform_number: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "문지현",
  team: "부산대학교 경영학과 25학번",
  position: "AI 기반 지능형 정제",
  uniform_number: "ENFJ",
  tagline: "17만 건 한식 레시피 Raw 데이터를 표준화하고, 모호한 계측 단위를 g/ml로 정규화하는 데이터 정제 역할을 맡았습니다.",
  introduction:
    "안녕하세요. 식품 성분표 기반 한식 레시피 데이터 표준화 자동화 시스템 구축 프로젝트에서 AI 기반 지능형 정제 역할을 맡은 부산대학교 경영학과 문지현입니다. 웹페이지 제작과 GitHub 배포, Google Sheets API 기반 데이터 자동 정리, 유튜브 댓글 수집과 감정 분류 대시보드 제작을 경험했습니다. 또한 IBA에서 영국 중고차 데이터를 다루며 중복, 결측, 명칭과 단위 불일치를 도메인 기준으로 전처리했습니다. 이 경험을 바탕으로 비정형 재료명을 표준화하고 모호한 단위를 정확히 변환하는 정제 시스템을 만들겠습니다.",
  image_path: "/images/moon-jihyun.png",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "데이터 자동화 경험" },
  { id: 2, label: "도메인 기반 전처리" },
  { id: 3, label: "책임감 있는 실행력" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch {
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch {
    return defaultHighlights;
  }
}
