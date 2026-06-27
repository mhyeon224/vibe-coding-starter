DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '문지현',
  '부산대학교 경영학과 25학번',
  'AI 기반 지능형 정제',
  'ENFJ',
  '17만 건 한식 레시피 Raw 데이터를 표준화하고, 모호한 계측 단위를 g/ml로 정규화하는 데이터 정제 역할을 맡았습니다.',
  '안녕하세요. 식품 성분표 기반 한식 레시피 데이터 표준화 자동화 시스템 구축 프로젝트에서 AI 기반 지능형 정제 역할을 맡은 부산대학교 경영학과 문지현입니다. 웹페이지 제작과 GitHub 배포, Google Sheets API 기반 데이터 자동 정리, 유튜브 댓글 수집과 감정 분류 대시보드 제작을 경험했습니다. 또한 IBA에서 영국 중고차 데이터를 다루며 중복, 결측, 명칭과 단위 불일치를 도메인 기준으로 전처리했습니다. 이 경험을 바탕으로 비정형 재료명을 표준화하고 모호한 단위를 정확히 변환하는 정제 시스템을 만들겠습니다.',
  '/images/moon-jihyun.png'
);

INSERT INTO highlights (label) VALUES
  ('데이터 자동화 경험'),
  ('도메인 기반 전처리'),
  ('책임감 있는 실행력');
