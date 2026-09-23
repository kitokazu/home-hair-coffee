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
  { src: "/images/hair/IMG_7718.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1248.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1249.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_7720.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_1250.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_7721.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },
  { src: "/images/hair/IMG_7722.JPG", alt: "ヘアスタイル", category: "hair", aspect: "portrait" },  { src: "/images/hair/IMG_7736.JPG", alt: "店主とお客さま", category: "hair", aspect: "portrait" },
];

// ============================================================
// COFFEE PHOTOS
// ============================================================
export const coffeeImages: ImageItem[] = [
  // Green beans → roasting → drip → products
  { src: "/images/coffee/IMG_7727.JPG", alt: "生豆の選別", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7728.JPG", alt: "生豆", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7734.JPG", alt: "生豆を洗っています", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7729.JPG", alt: "焙煎豆", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7732.JPG", alt: "焙煎度合いの見本", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7735.JPG", alt: "コーヒーミル", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7731.JPG", alt: "ドリップ", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7733.JPG", alt: "アームズ珈琲のパッケージ", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_1233.JPG", alt: "珈琲", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_1234.JPG", alt: "珈琲", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/IMG_7726.JPG", alt: "店頭の珈琲豆", category: "coffee", aspect: "portrait" },
  { src: "/images/coffee/packaged-bags.png", alt: "パッケージ一覧", category: "coffee", aspect: "landscape" },
];

// ============================================================
// ABOUT SECTION IMAGES
// ============================================================
export const aboutImages = {
  hair: "/images/hair/IMG_1258.JPG",
  coffee: "/images/coffee/coffee-machine.jpg",
};

// Combined gallery
export const allGalleryImages: ImageItem[] = [...hairImages, ...coffeeImages];
