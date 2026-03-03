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
  { src: "/images/hair/IMG_1235.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1238.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1239.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1241.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1242.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1245.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1246.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1247.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1248.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1249.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1250.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1258.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
];

// ============================================================
// COFFEE PHOTOS
// ============================================================
export const coffeeImages: ImageItem[] = [
  { src: "/images/coffee/IMG_1233.JPG", alt: "珈琲", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_1234.JPG", alt: "珈琲", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_1240.JPG", alt: "珈琲", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/green-beans-sorting.png", alt: "生豆の選別", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/tasting-cups.png", alt: "テイスティング", category: "coffee", aspect: "square" },
  { src: "/images/coffee/bean-sampler-box.png", alt: "豆のサンプラーセット", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/packaged-bags.png", alt: "パッケージ一覧", category: "coffee", aspect: "landscape" },
];

// ============================================================
// ABOUT SECTION IMAGES
// ============================================================
export const aboutImages = {
  hair: "/images/hair/IMG_1258.JPG",
  coffee: "/images/coffee/IMG_1233.JPG",
};

// Combined gallery
export const allGalleryImages: ImageItem[] = [...hairImages, ...coffeeImages];
