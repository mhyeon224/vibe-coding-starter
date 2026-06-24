# Vibe Coding Starter

비전공자 수강생이 AI 에이전트에게 명령하면서 직접 수정해보는 자기소개 페이지 스타터야.
처음 화면은 오타니 쇼헤이 소개 페이지로 만들어져 있고, 이름/소속/사진/색상/문구를 바꿔보는 실습에 쓰면 돼.
기본 데이터는 SQLite 파일인 `local.db`에 들어가고, 화면은 그 데이터를 읽어서 보여줘.

## 실행 방법

```bash
cd frontend
npm install
npm run db:init
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 돼.
수업 중에는 `npm run build`가 아니라 `npm run dev`만 쓰는 걸 추천해.

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- SQLite `frontend/local.db`
- 정적 이미지 파일: `frontend/public/images/ohtani.jpeg`

## 실습 아이디어

- 메인 화면 자기소개 문구 바꾸기
- 오타니 쇼헤이 정보를 본인 이름과 소속으로 바꾸기
- `frontend/public/images/ohtani.jpeg`를 다른 사진으로 바꾸기
- Tailwind 클래스로 배경색, 글자 크기, 카드 디자인 바꾸기
- `frontend/scripts/init-db.sql`에서 기본 자기소개 데이터 바꾸기

## 폴더 구조

```text
.
├── .agents/                  # AI 에이전트용 추가 지시와 스킬
├── frontend/                 # Next.js 자기소개 페이지 앱
│   ├── src/app/page.tsx       # 메인 자기소개 화면
│   ├── src/lib/db.ts          # SQLite 읽기 코드
│   ├── scripts/init-db.sql    # 기본 DB 데이터
│   ├── public/images/         # 프로필 이미지
│   └── local.db               # 실습용 SQLite DB 파일
├── AGENTS.md                 # 레포 전체 AI 작업 규칙
└── README.md
```

## DB 구조

### `profile`

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| `id` | INTEGER | 기본키 |
| `name` | TEXT | 이름 |
| `team` | TEXT | 소속 |
| `position` | TEXT | 포지션이나 역할 |
| `uniform_number` | TEXT | 등번호 |
| `tagline` | TEXT | 상단 소개 문구 |
| `introduction` | TEXT | 자기소개 본문 |
| `image_path` | TEXT | 프로필 이미지 경로 |

### `highlights`

| 컬럼 | 타입 | 설명 |
| --- | --- | --- |
| `id` | INTEGER | 기본키 |
| `label` | TEXT | 특징 문구 |
