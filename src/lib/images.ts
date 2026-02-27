export type ImageItem = {
  src: string;
  alt: string;
  category: "hair" | "coffee";
  aspect?: "portrait" | "square" | "landscape";
};

// ============================================================
// HAIR PHOTOS
// ============================================================
export const hairImages: ImageItem[] = [
  { src: "/images/hair/mens-perm-textured.png", alt: "メンズパーマ", category: "hair", aspect: "portrait" },
  { src: "/images/hair/bob-sleek.png", alt: "ボブ ストレート", category: "hair", aspect: "portrait" },
  { src: "/images/hair/long-straight-after.png", alt: "ロング ストレート", category: "hair", aspect: "portrait" },
  { src: "/images/hair/bob-highlight.png", alt: "ボブ ハイライト", category: "hair", aspect: "portrait" },
  { src: "/images/hair/mens-perm-back.png", alt: "メンズパーマ バック", category: "hair", aspect: "portrait" },
  { src: "/images/hair/short-curly.png", alt: "ショート パーマ", category: "hair", aspect: "portrait" },
  { src: "/images/hair/short-curly-natural.png", alt: "ショート ナチュラルカール", category: "hair", aspect: "portrait" },
  { src: "/images/hair/perm-rods-process.png", alt: "パーマ 施術中", category: "hair", aspect: "portrait" },
  { src: "/images/hair/long-straight-before.png", alt: "ロング カット前", category: "hair", aspect: "portrait" },
];

// ============================================================
// COFFEE PHOTOS
// ============================================================
export const coffeeImages: ImageItem[] = [
  { src: "/images/coffee/coffee.png", alt: "珈琲豆パッケージ", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/roasting-fresh-beans.png", alt: "焙煎したての豆", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/green-beans-sorting.png", alt: "生豆の選別", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/tasting-cups.png", alt: "テイスティング", category: "coffee", aspect: "square" },
  { src: "/images/coffee/bean-sampler-box.png", alt: "豆のサンプラーセット", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/packaged-bags.png", alt: "パッケージ一覧", category: "coffee", aspect: "landscape" },
];

// ============================================================
// ABOUT SECTION IMAGES
// ============================================================
export const aboutImages = {
  hair: "/images/hair/bob-sleek.png",
  coffee: "/images/coffee/coffee.png",
};

// Combined gallery
export const allGalleryImages: ImageItem[] = [...hairImages, ...coffeeImages];
