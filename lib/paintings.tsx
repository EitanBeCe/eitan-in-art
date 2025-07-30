export interface PaintingCodable {
  slug: string;
  title: string;
  description: string;
  paint: string;
  size: string;
  colors: string;
  isSold: boolean;
  isPrintsAvailable: boolean;
  wasExhibited: boolean;
  price: number;
  bgBrightness: number;
  images: string[];
}

const paintings: PaintingCodable[] = [
  {
    slug: "am-israel-chai",
    title: "Am Israel Chai. Israel Lives in 23 languages",
    description: `🔴 ⚪️ ⚫️ "Israel Lives: iron dome, art of pure lines"

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
    colors: "⚫️ 🔴 ⚪️",
    isSold: false,
    isPrintsAvailable: false,
    wasExhibited: true,
    price: 20000,
    bgBrightness: 75,
    images: [
      '/amIsraelChai/amIsraelChai1.jpeg',
      '/amIsraelChai/amIsraelChai11.jpeg',
      '/amIsraelChai/amIsraelChai2.jpeg',
      '/amIsraelChai/amIsraelChai12.jpeg',
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
  {
    slug: "home-blessing-black-and-gold",
    title: "Home Blessing Black and Gold",
    description: `Home Blessing in Hebrew with a modern twist. This piece combines traditional Hebrew calligraphy with graffiti art, creating a unique and vibrant atmosphere for your home.
    
Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "100x80",
    colors: "⚫️ 🟡 ⚪️",
    isSold: true,
    isPrintsAvailable: true,
    wasExhibited: false,
    price: 3000,
    bgBrightness: 50,
    images: [
        '/homeBlessingBlackGold/homeBlessingBlackGold3.jpeg',
        '/homeBlessingBlackGold/homeBlessingBlackGold2.jpeg',
        '/homeBlessingBlackGold/homeBlessingBlackGold1.jpeg',
        '/homeBlessingBlackGold/homeBlessingBlackGold4.jpeg',
    ]
  },
  {
    slug: "home-blessing-black-and-blue",
    title: "Home Blessing Black and Blue",
    description: `Home Blessing in Hebrew with a modern twist. This piece combines traditional Hebrew calligraphy with graffiti art, creating a unique and vibrant atmosphere for your home.
    
Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "100x80",
    colors: "⚫️ 🔵 ⚪️",
    isSold: true,
    isPrintsAvailable: true,
    wasExhibited: false,
    price: 3000,
    bgBrightness: 50,
    images: [
        '/homeBlessingBlackBlue/homeBlessingBlackBlue1.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue3.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue2.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue4.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue5.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue6.jpeg',
    ]
  },
]

export default paintings;