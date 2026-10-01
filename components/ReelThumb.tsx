"use client";

import { useState } from "react";

function reelEmbedUrl(url: string) {
  const match = url.match(/instagram\.com\/(?:reel|reels|p)\/([^/?#]+)/);
  return match ? `https://www.instagram.com/reel/${match[1]}/embed/` : null;
}

export default function ReelThumb({
  url,
  thumbnail,
  alt,
}: {
  url: string;
  thumbnail?: string;
  alt: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const embed = reelEmbedUrl(url);
  const showImage = Boolean(thumbnail) && !imageFailed;

  return (
    <div className="thumb">
      <span className="crop crop-tl" aria-hidden />
      <span className="crop crop-tr" aria-hidden />
      <span className="crop crop-bl" aria-hidden />
      <span className="crop crop-br" aria-hidden />
      <div className="thumb-frame">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={alt}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : embed ? (
          <iframe
            src={embed}
            title={alt}
            loading="lazy"
            scrolling="no"
            allowTransparency
          />
        ) : (
          <p className="thumb-empty">썸네일을 public/thumbnails 폴더에 추가하세요</p>
        )}
      </div>
    </div>
  );
}
