export interface PaintingCodable {
  slug: string;
  title: string;
  description: string;
  paint: string;
  size: string;
  colors: string;
  price: number;
  images: string[];
}

const paintings: PaintingCodable[] = [
  {
    slug: "am-israel-chai",
    title: "Am Israel Chai. Israel Lives on 23 languages",
    description: `23 languages of Am Israel Chai 🔴⚪️⚫️
"Israel Lives: iron dome, art of pure lines"

Israel
1. Eng: Lives (2 times)
2. He: עַם יִשְׂרָאֵל חַי
3. Ukr: народ Iзраїлю живий
4. Arabic: إسرائيل تحيا
5. Belorussian: жыве
6. Japanese: イスラエルは生きる (Isuraeru wa ikiru)
7. Hindi: इजराइल रहता है
8. Georgian: ისრაელი ცხოვრობს
9. German: lebt
10. Yiddish: לעבט
11. Spanish: vive
12. Portuguese: vive
13. Italian: vive
14. French: vit
15. Swedish: lever
16. Norwegian: lever
17. Netherlands: leeft
18. Chinese: 居住
19. Amharic: እስራኤል ይኖራሉ
20. Language of numbers: 18 times חַי on the sides. Lives equals 18 by the gematria.
21. Language of symbols: Menorah and Mogen David
22. Morse: .. ... .-. .- . .-.. / .-.. .. ...- . ...
23. Russian: Израиль Жив: Iron Dome, искусство чистых линий`,
    paint: "Acrylic on Canvas",
    size: "40x40",
    colors: "⚫ 🔴 ⚪️",
    price: 20000,
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