# 굿즈 제작 서비스 릴스 리서치

Next.js 15 (App Router, TypeScript) 기반 정적 페이지입니다.

## 실행
```bash
npm install
npm run dev   # http://localhost:3000
```

## 내용 수정
- 리서치 내용, URL, 태그: `data/research.ts`
- 썸네일: 이미지를 `public/thumbnails/`에 넣고 `thumbnail: "/thumbnails/파일명.jpg"`로 지정
  - 비워두면 인스타그램 임베드 미리보기가 표시됩니다.
- 서비스 추가: `services` 배열에 객체 하나를 더 추가

## Vercel 배포
GitHub에 push 후 Vercel에서 Import → Framework는 Next.js로 자동 인식, 설정 변경 없이 Deploy.
