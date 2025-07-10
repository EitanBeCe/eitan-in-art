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
    description: "alalaавыоалоывлаофывоалыфвоаофывофавыоалджфывоалдфыволао",
    images: [
      '/amIsraelChai/amIsraelChai1.jpeg',
      '/amIsraelChai/amIsraelChai2.jpeg',
      '/amIsraelChai/amIsraelChai3.jpeg',
      '/amIsraelChai/amIsraelChai4.jpeg',
      '/amIsraelChai/amIsraelChai5.jpeg',
      '/amIsraelChai/amIsraelChai6.jpeg',
      '/amIsraelChai/amIsraelChai7.jpeg',
      '/amIsraelChai/amIsraelChai8.jpeg',
      '/amIsraelChai/amIsraelChai9.jpeg',
      '/amIsraelChai/amIsraelChai10.jpeg',
    ]
  },
]

export default paintings;
