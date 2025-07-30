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
    price: 5000,
    images: [
        '/homeBlessingBlackBlue/homeBlessingBlackBlue1.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue3.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue2.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue4.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue5.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue6.jpeg',
        '/homeBlessingBlackBlue/homeBlessingBlackBlue7.jpeg',
    ]
  },
  {
    slug: "home-blessing-gold",
    title: "Home Blessing Pure Gold",
    description: `Home Blessing in Hebrew with a modern twist. This piece combines traditional Hebrew calligraphy with graffiti art, creating a unique and vibrant atmosphere for your home.
    
Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "100x80",
    colors: "🟡 ⚪️ ⚫️",
    isSold: true,
    isPrintsAvailable: true,
    wasExhibited: false,
    price: 3000,
    images: [
        '/homeBlessingGold/homeBlessingGold5.jpeg',
        '/homeBlessingGold/homeBlessingGold1.jpeg',
        '/homeBlessingGold/homeBlessingGold2.jpeg',
        '/homeBlessingGold/homeBlessingGold3.jpeg',
        '/homeBlessingGold/homeBlessingGold4.jpeg',
        '/homeBlessingGold/homeBlessingGold6.jpeg',
    ]
  },
  {
    slug: "hillel-said",
    title: "Hillel often said",
    description: `Hillel used to say: "If I am not for myself, who is for me? But if I am for my own self, what am I? And if not now, when?". Blending traditional Bible wisdom with contemporary graffiti art. The vibrant colors and dynamic composition create a striking visual impact, inviting viewers to reflect on the importance of taking action in the present moment.
    
Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "30x20",
    colors: "🔵 🟢 ⚫️",
    isSold: false,
    isPrintsAvailable: true,
    wasExhibited: true,
    price: 2000,
    images: [
        '/hillelSaid/hillelSaid1.jpeg'
    ]
  },
  {
    slug: "home-blessing-colorful",
    title: "Home Blessing Colorful",
    description: `Illuminate Your Home with Sacred Art

Discover the mesmerizing blend of traditional Hebrew calligraphy and modern graffiti art, all in stunning fluorescent colors that bring warmth and blessing to your home.

Fluorescent acril, spray and wine 🍷
    
Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "80x80",
    colors: "🟡 🔴 🟣 🔵 ⚫️",
    isSold: false,
    isPrintsAvailable: true,
    wasExhibited: true,
    price: 7000,
    images: [
        '/homeBlessingColorful/homeBlessingColorful8.jpeg',
        '/homeBlessingColorful/homeBlessingColorful1.jpeg',
        '/homeBlessingColorful/homeBlessingColorful2.jpeg',
        '/homeBlessingColorful/homeBlessingColorful3.jpeg',
        '/homeBlessingColorful/homeBlessingColorful4.jpeg',
        '/homeBlessingColorful/homeBlessingColorful5.jpeg',
        '/homeBlessingColorful/homeBlessingColorful6.jpeg',
        '/homeBlessingColorful/homeBlessingColorful7.jpeg',
        '/homeBlessingColorful/homeBlessingColorful9.jpeg',
        '/homeBlessingColorful/homeBlessingColorful10.jpeg',
        '/homeBlessingColorful/homeBlessingColorful11.jpeg',
    ]
  },
]

export default paintings;