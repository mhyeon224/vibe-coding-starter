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
  '오타니 쇼헤이',
  'LA 다저스',
  '투수 / 지명타자',
  '17번',
  '투수와 타자를 모두 소화하는 세계적인 야구 선수입니다. 강한 타격, 빠른 주루, 압도적인 경기 영향력으로 많은 팬들에게 사랑받고 있습니다.',
  '안녕하세요. 저는 오타니 쇼헤이입니다. 현재 LA 다저스에서 뛰고 있으며, 매 경기 팀에 도움이 되는 선수가 되기 위해 최선을 다하고 있습니다.',
  '/images/ohtani.jpeg'
);

INSERT INTO highlights (label) VALUES
  ('강한 홈런 파워'),
  ('빠른 주루'),
  ('이도류 플레이');
