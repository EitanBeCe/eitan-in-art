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
  price: number | string;
  images: string[];
  videoUrl?: string;
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
    ],
      videoUrl: "https://www.instagram.com/p/C977SDFsmKt/?img_index=1"
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

Fluorescent acryl, spray and wine 🍷
    
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
  {
    slug: "business-blessing-gold-dollar",
    title: "Business Blessing with Golden Dollar",
    description: `Infuse Your Workspace with Spiritual Elegance.

Experience the fusion of traditional Hebrew calligraphy and modern graffiti art in your professional environment.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "100x80",
    colors: "🟡 🔴 ⚪️ ⚫️",
    isSold: false,
    isPrintsAvailable: true,
    wasExhibited: false,
    price: 6000,
    images: [
        '/businessBlessingDollar/businessBlessingDollar6.jpeg',
        '/businessBlessingDollar/businessBlessingDollar1.jpeg',
        '/businessBlessingDollar/businessBlessingDollar2.jpeg',
        '/businessBlessingDollar/businessBlessingDollar3.jpeg',
        '/businessBlessingDollar/businessBlessingDollar4.jpeg',
        '/businessBlessingDollar/businessBlessingDollar5.jpeg',
        '/businessBlessingDollar/businessBlessingDollar7.jpeg',
    ],
      videoUrl: "https://www.instagram.com/p/C4flM3VM-u-/"
      // videoUrl: "https://www.instagram.com/reel/C4flM3VM-u-/"
  },
  {
    slug: "eshet-chail",
    title: "Eshet Chail, Woman of Valor",
    description: `Celebrating True Ladies: ‘Eshet Chail (Woman of Valor)’ by King Solomon and my humble self. 🌸✨

I poured my heart into this beauty and spent a few sleepless nights with her (took me more than 12 hours total) 😊💔 It’s vibrant, pink, and even has a splash of vodka for that extra sparkle.

Here is some text from it (usually sing on Shabbat evening):

A woman of valor, who can find? Far beyond pearls is her value. Her husband’s heart trusts in her and he shall lack no fortune
...
False is grace, and vain is beauty; a G‑d-fearing woman, she should be praised.
Give her the fruit of her hands, and she will be praised at the gates by her very own deeds.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
    paint: "Acrylic and Spray on Canvas",
    size: "100x80",
    colors: "🩷 🟣 ⚫️",
    isSold: false,
    isPrintsAvailable: true,
    wasExhibited: false,
    price: 6000,
    images: [
        '/eshetChail/eshetChail3.jpeg',
        '/eshetChail/eshetChail1.jpeg',
        '/eshetChail/eshetChail2.jpeg',
        '/eshetChail/eshetChail7.jpeg',
        '/eshetChail/eshetChail4.jpeg',
        '/eshetChail/eshetChail8.jpeg',
        '/eshetChail/eshetChail5.jpeg',
        '/eshetChail/eshetChail6.jpeg',
    ],
      videoUrl: "https://www.instagram.com/p/C74T5fSNskp/"
  },
    {
        slug: "abstract-black-white",
        title: "Abstract Black and White",
        description: `“Contrast” 🌌

Unveil the beauty of minimalism with my latest abstract piece, “Contrast”. White lines weave through a deep black backdrop in a dance of complexity and simplicity. This intriguing interplay makes it a striking addition to any living or workspace.

Perfect for art lovers looking to elevate their environment with a piece of modern art.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
        paint: "Acrylic and Spray on Canvas",
        size: "100x80",
        colors: "🟡 🔴 ⚪️ ⚫️",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: 2000,
        images: [
            '/abstractBlackWhite/abstractBlackWhite1.jpeg',
            '/abstractBlackWhite/abstractBlackWhite2.jpeg',
            '/abstractBlackWhite/abstractBlackWhite3.jpeg',
            '/abstractBlackWhite/abstractBlackWhite4.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/C6B2Yqqsj2g/"
    },
    {
        slug: "home-blessing-black-white",
        title: "Home Blessing Abstract Black and White",
        description: `Discover the serenity of minimalism and spirituality combined in “Abstract Blessed Contrast”. This piece features elegant white lines forming a mesmerizing pattern on a black canvas. Overlaid with “Home Blessing” in beautiful modern Hebrew calligraphy, it brings a unique blend of peace and style to your space.

Ideal for anyone wishing to infuse their home with a touch of holiness, abstraction and modern art.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
        paint: "Acrylic and Spray on Canvas",
        size: "100x80",
        colors: "⚪️ ⚫️",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: 5000,
        images: [
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite4.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite2.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite1.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite3.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite5.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite6.jpeg',
            '/homeBlessingAbstractBlackWhite/homeBlessingAbstractBlackWhite7.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/C6eeULxMo5K/"
    },
    {
        slug: "more-prints",
        title: "Prints collection",
        description: `Explore a collection of prints from my artworks. Each piece is available in various sizes and formats, allowing you to bring a touch of modern art and calligraphy into your home or office.
        
Ideal for anyone wishing to infuse their home with a touch of holiness, abstraction and modern art.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
        paint: "Acrylic and Spray on Canvas",
        size: "Anything you want",
        colors: "Anything you want",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: true,
        price: "200-1000",
        images: [
            '/morePrints/morePrints20.jpeg',
            '/morePrints/morePrints1.jpeg',
            '/morePrints/morePrints2.jpeg',
            '/morePrints/morePrints21.jpeg',
            '/morePrints/morePrints3.jpeg',
            '/morePrints/morePrints4.jpeg',
            '/morePrints/morePrints5.jpeg',
            '/eshetChail/eshetChail8.jpeg',
            '/morePrints/morePrints6.jpeg',
            '/morePrints/morePrints7.jpeg',
            '/morePrints/morePrints8.jpeg',
            '/morePrints/morePrints9.jpeg',
            '/morePrints/morePrints10.jpeg',
            '/morePrints/morePrints11.jpeg',
            '/morePrints/morePrints12.jpeg',
            '/morePrints/morePrints13.jpeg',
            '/morePrints/morePrints14.jpeg',
            '/morePrints/morePrints15.jpeg',
            '/morePrints/morePrints16.jpeg',
            '/morePrints/morePrints17.jpeg',
            '/morePrints/morePrints18.jpeg',
            '/morePrints/morePrints19.jpeg',
        ],
    },
    {
        slug: "russian-example",
        title: "Calligraphy Demo Examples",
        description: `English, Hebrew and Russian calligraphy examples. You can order a custom calligraphy piece in any language, with your favorite words, colors and size.`,
        paint: "Acrylic and Spray on Canvas",
        size: "Anything you want",
        colors: "Anything you want",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: "200-1000",
        images: [
            '/russianExample/englishExample3.jpeg',
            '/russianExample/russianExample1.jpeg',
            '/russianExample/englishExample1.jpeg',
            '/russianExample/hebrewExample1.jpeg',
            '/russianExample/russianExample2.jpeg',
            '/russianExample/englishExample2.jpeg',
            '/russianExample/tableArt.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/DDKQ7HnsAuY/"
    },
    {
        slug: "spring-lady",
        title: "Spring Lady",
        description: `Non calligraphy for variety. 
Autumn in the Girl.
Girl in the Autumn.
Acryl pouring.`,
        paint: "Acrylic and Spray on Canvas",
        size: "40x40",
        colors: "🟡 🟢 🟠 🩷",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: "1800",
        images: [
            '/springLady/springLady1.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/C1ZVS4OMM_7/?img_index=3"
    },
    {
        slug: "horse",
        title: "The Horse. Untamed",
        description: `Non calligraphy for variety. A bold interpretation of strength and freedom. This majestic gray horse, with its vibrant green mane, is a blend of raw power and surreal beauty. Standing at 100x80 cm, this piece brings an eye-catching contrast and energy to any space. 🐎💚

If you’re looking for art that tells a story and evokes emotion, this unique work is now available for purchase! DM for more details or to make it yours. ✨`,
        paint: "Acrylic and Spray on Canvas",
        size: "100x80",
        colors: "🐎 🟢 ⚪️ 🟠 ⚫️",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: "5000",
        images: [
            '/horse/horse2.png',
            '/horse/horse1.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/DANwK2AsVXk/"
    },
    {
        slug: "mizmor-ledavid-pink",
        title: "Mizmor Le-David",
        description: `“Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me.”

This is one of the most powerful lines in the entire Bible.

My latest painting, inspired by Psalm 23, brings this verse to life. Measuring 100x100 cm, it features soft gradients of white, pink, and violet, with delicate pink letters that reflect the beauty and depth of this ancient text.

A reminder of unwavering hope and peace, no matter what challenges we face.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
        paint: "Acrylic and Spray on Canvas",
        size: "100x100",
        colors: "🩷 🟣 ⚪️",
        isSold: false,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: 7000,
        images: [
            '/mizmorLedavidPink/mizmorLedavidPink2.jpeg',
            '/mizmorLedavidPink/mizmorLedavidPink1.jpeg',
            '/mizmorLedavidPink/mizmorLedavidPink3.jpeg',
            '/mizmorLedavidPink/mizmorLedavidPink4.jpeg',
            '/mizmorLedavidPink/mizmorLedavidPink5.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/DFLGySzshSV/"
    },
    {
        slug: "wedding-invitation",
        title: "Wedding Invitation Example",
        description: `Wedding invitation in English and Hebrew, blending traditional calligraphy with modern design elements. This piece showcases the elegance and joy of a wedding celebration, making it a perfect keepsake for couples.

Share your favorite colors, words, and desired size with me, and I’ll transform your space into a Masterpiece.

Enrich your surroundings with blessings and elegance through modern art that blends traditional Hebrew calligraphy with graffiti. Neon shades and backlighting options are available for a unique effect.`,
        paint: "Acrylic and Spray on Canvas",
        size: "Anything you want",
        colors: "Anything you want",
        isSold: true,
        isPrintsAvailable: true,
        wasExhibited: false,
        price: "1000-5000",
        images: [
            '/weddingInvitation/weddingInvitation2.jpeg',
            '/weddingInvitation/weddingInvitation1.jpeg',
            '/weddingInvitation/weddingInvitation3.jpeg',
        ],
        videoUrl: "https://www.instagram.com/p/DAd9MPMsniS/"
    },
]

export default paintings;