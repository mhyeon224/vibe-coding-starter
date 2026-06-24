# Vibe Coding Starter Skill

이 스킬은 비전공자 수강생용 자기소개 페이지 스타터를 수정할 때 사용한다.

## 작업 위치

- 프론트엔드 앱: `frontend/`
- 메인 화면: `frontend/src/app/page.tsx`
- DB 읽기 코드: `frontend/src/lib/db.ts`
- DB 초기 데이터: `frontend/scripts/init-db.sql`
- 프로필 이미지: `frontend/public/images/ohtani.jpeg`

## 수정 원칙

1. 수강생이 UI 수정을 요청하면 `frontend/src/app/page.tsx`의 Tailwind `className`을 먼저 수정한다.
2. 이름, 소속, 포지션, 소개 문구, 특징 문구는 `frontend/scripts/init-db.sql`의 기본 데이터를 먼저 확인한다.
3. 이미지 교체 요청은 `frontend/public/images/` 아래 파일을 사용하고, DB의 `image_path`는 `/images/파일명` 형식으로 맞춘다.
4. 첫 실습용 페이지이므로 폼, 인증, API, 배포 설정을 먼저 만들지 않는다.
5. 검증은 빌드보다 `cd frontend && npm run dev` 실행 후 브라우저 확인을 우선한다.

## 완료 보고

작업 완료 후에는 다음 3가지만 짧게 말한다.

1. 어떤 파일을 수정했는지
2. 브라우저에서 어디를 확인하면 되는지
3. 학생이 다음에 어떤 식으로 바꿔볼 수 있는지
