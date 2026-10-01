// ─────────────────────────────────────────────────────────────
// 리서치 내용은 이 파일만 수정하면 됩니다.
//
// 썸네일 넣는 법
//   1) 릴스 썸네일 이미지를 public/thumbnails/ 폴더에 넣고
//   2) 아래 thumbnail 값에 "/thumbnails/파일명.jpg" 처럼 적어주세요.
//   thumbnail을 비워두면 인스타그램 임베드 미리보기가 대신 표시됩니다.
// ─────────────────────────────────────────────────────────────

export type Finding = {
  /** 짧은 분류 태그 (예: B2B, 제작 과정) */
  tag: string;
  /** 조사한 내용 */
  summary: string;
  /** 릴스 URL */
  url: string;
  /** public 폴더 기준 썸네일 경로 (선택) */
  thumbnail?: string;
};

export type Service = {
  id: string;
  name: string;
  findings: Finding[];
};

export const pageInfo = {
  title: "굿즈 제작 서비스 릴스 리서치",
  description: "경쟁 서비스들이 인스타그램 릴스를 어떤 방식으로 만들고 있는지 정리했습니다.",
};

export const services: Service[] = [
  {
    id: "marpple",
    name: "마플",
    findings: [
      {
        tag: "B2B",
        summary: "B2B 용 릴스인 경우, 회사를 배경으로 릴스 업로드",
        url: "https://www.instagram.com/reel/DcaTTqGxlmx/",
        thumbnail: "",
      },
      {
        tag: "제작 과정",
        summary: "굿즈를 직접 제작하는 과정을 촬영 후 편집하여 릴스 업로드",
        url: "https://www.instagram.com/reel/DbsZI6ahLUr/",
        thumbnail: "",
      },
    ],
  },
  {
    id: "ohprintme",
    name: "오프린트미",
    findings: [
      {
        tag: "착용 컷",
        summary: "티셔츠/모자 제작 후, 실제 착용하고 있는 모습을 촬영하여 릴스 업로드",
        url: "https://www.instagram.com/reel/Dcil2TapNXM/",
        thumbnail: "",
      },
    ],
  },
];
