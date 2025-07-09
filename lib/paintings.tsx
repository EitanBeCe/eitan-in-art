export interface PaintingCodable {
  slug: string;
  title: string;
  description: string;
  images: string[];
}

const paintings: PaintingCodable[] = [
  {
    slug: "am-israel-chai",
    title: "Am Israel Chai. Israel Lives on 23 languages",
    description: "alala",
    images: [
      "/amIsraelChai/amIsraelChai1.jpeg",
    ]
  },
]

export default paintings;
