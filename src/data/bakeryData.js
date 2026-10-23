export const businessInfo = {
  name: "Japonaise Bakery & Cafe",
  japaneseName: "ジャポネーズ・ベーカリー＆カフェ",
  tagline: "Serving French Pastries with a Japanese Twist Since 1985",
  subTagline: "Artisanal breads, matcha croissants, azuki pastries, and custom celebration cakes crafted fresh daily in Brookline, MA.",
  address: {
    street: "1020 Beacon Street",
    city: "Brookline",
    state: "MA",
    zip: "02446",
    landmark: "Directly across from MBTA Green Line 'C' St. Mary's Stop, next to Whole Foods",
    full: "1020 Beacon Street, Brookline, MA 02446"
  },
  phone: "(617) 566-7730",
  email: "japonaise617@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/japonaisebakery/",
    facebook: "http://Facebook.com/CafeJaponaise"
  },
  hours: [
    { day: "Monday", open: null, close: null, text: "Closed" },
    { day: "Tuesday", open: null, close: null, text: "Closed" },
    { day: "Wednesday", open: null, close: null, text: "Closed" },
    { day: "Thursday", open: "08:00", close: "20:00", text: "8:00 AM – 8:00 PM" },
    { day: "Friday", open: "08:00", close: "20:00", text: "8:00 AM – 8:00 PM" },
    { day: "Saturday", open: "08:00", close: "20:00", text: "8:00 AM – 8:00 PM" },
    { day: "Sunday", open: "08:00", close: "20:00", text: "8:00 AM – 8:00 PM" }
  ]
};

export const historyTimeline = [
  {
    year: "1985",
    title: "The Enchanted Kitchen",
    description: "Hiroko Sakan opened The Enchanted Kitchen Bakery in Newton Center, blending traditional French pastry techniques with beloved Japanese flavor profiles.",
    image: "./images/57568603_1622843458158394_r.jpg"
  },
  {
    year: "1987",
    title: "Best of Boston Award",
    description: "Hiroko Sakan and her bakery earned the coveted 'Best of Boston' recognition for her extraordinary croissants and pastry artistry.",
    image: "./images/ma16_page_50_image_0001.jpg"
  },
  {
    year: "1991",
    title: "Relocation to Brookline",
    description: "Sakan relocated the bakery to Beacon Street in Brookline, right across from the St. Mary’s MBTA Green Line stop, renaming it Japonaise Bakery.",
    image: "./images/Screen_Shot_2023-08-15_at_5.31.12_PM.jpg"
  },
  {
    year: "2016",
    title: "A New Generation",
    description: "Takeo Sakan assumed leadership of Japonaise Bakery, continuing the family recipe traditions while introducing innovative seasonal creations.",
    image: "./images/_MG_6409.jpeg"
  },
  {
    year: "2021",
    title: "Facility Transformation",
    description: "Japonaise Bakery temporarily paused operations to undergo a complete, modern kitchen and cafe renovation.",
    image: "./images/IMG-3585.jpg"
  },
  {
    year: "2023",
    title: "The Grand Reopening",
    description: "Japonaise Bakery reopened its doors with an expanded baking kitchen and welcoming cafe space for the Greater Boston community.",
    image: "./images/DSC_6880-2.jpg"
  }
];

export const menuCategories = [
  {
    id: "traditional-bread",
    name: "Traditional Bread",
    japanese: "食パン・食事パン",
    description: "Signature loaves, milk breads, and artisanal dinner rolls baked fresh daily.",
    items: [
      {
        name: "Shoku Pan",
        japanese: "食パン",
        price: "$5.50 bag / $16.50 loaf",
        description: "Japanese traditional soft white bread made with pure milk. Fluffy, cloud-like texture.",
        tag: "Bestseller",
        image: "./images/25.png"
      },
      {
        name: "Premium Shoku Pan",
        japanese: "プレミアム食パン",
        price: "$6.50 bag / $19.50 loaf",
        description: "Rich and slightly sweet white bread enriched with heavy cream for ultimate decadence.",
        tag: "Premium",
        image: "./images/26.png"
      },
      {
        name: "Butter Rolls",
        japanese: "バターロール",
        price: "$1.50 roll / $7.00 bag (5 pcs)",
        description: "Our version of classic Japanese dinner rolls with rich golden butter. 5 rolls per bag.",
        image: "./images/21.png"
      },
      {
        name: "Pull Apart Raisin Bun",
        japanese: "レーズンパン",
        price: "$2.00 roll / $10.00 bag",
        description: "Soft sweet bun filled with rum-soaked plump raisins and dusted with fine sugar.",
        image: "./images/19.png"
      },
      {
        name: "Shio Butter Roll",
        japanese: "塩バター",
        price: "$2.50 / roll",
        description: "Popular Japanese butter roll with a melted salted butter core and a touch of sea salt.",
        tag: "Popular",
        image: "./images/16.png"
      },
      {
        name: "Smoked Chibi",
        japanese: "スモークチビ",
        price: "$3.50",
        description: "Soft butter roll wrapped around Berkshire black pork sausage with a touch of ketchup glaze.",
        image: "./images/18.png"
      },
      {
        name: "Plain Challah",
        japanese: "プレインハラ",
        price: "$9.00 loaf",
        description: "Traditional braided bread with a golden crust. Freshly baked every Thursday & Friday.",
        note: "Baked Thurs / Fri",
        image: "./images/1.png"
      },
      {
        name: "Chocolate Challah",
        japanese: "チョコレートハラ",
        price: "$11.00 loaf",
        description: "Decadent braided challah swirled with rich chocolate ribbons.",
        note: "Baked Thurs / Fri",
        image: "./images/3.png"
      },
      {
        name: "Sesame Challah",
        japanese: "セサミハラ",
        price: "$11.00 loaf",
        description: "Aromatic challah loaf coated in toasted sesame seeds.",
        note: "Baked Thurs / Fri",
        image: "./images/6.png"
      },
      {
        name: "Cinnamon Raisin Challah",
        japanese: "シナモンレーズンハラ",
        price: "$11.00 loaf",
        description: "Braided challah laced with warm Ceylon cinnamon and sweet raisins.",
        note: "Baked Thurs / Fri",
        image: "./images/8.png"
      },
      {
        name: "Poppy Seed Challah",
        japanese: "ポピーシードハラ",
        price: "$11.00 loaf",
        description: "Braided challah coated generously with crunchy poppy seeds.",
        note: "Baked Saturdays",
        image: "./images/2.png"
      },
      {
        name: "Azuki Challah",
        japanese: "あずきハラ",
        price: "$8.00 loaf",
        description: "Unique fusion braiding sweet Japanese red bean (azuki) into challah dough.",
        note: "Baked Thurs / Fri",
        image: "./images/9.png"
      },
      {
        name: "Challah Tea Rolls",
        japanese: "ハラティーロール",
        price: "$6.00 / bag (Plain) · $7.50 / bag (Varieties)",
        description: "Mini challah tea rolls. Available in Plain, Chocolate, and Cinnamon Raisin.",
        note: "Baked Thurs / Fri",
        image: "./images/10.png"
      }
    ]
  },
  {
    id: "sweet-bread",
    name: "Sweet Bread",
    japanese: "菓子パン",
    description: "Classic Tokyo bakery favorites, melon pan, custard buns, and character breads.",
    items: [
      {
        name: "An Pan",
        japanese: "あんパン",
        price: "$3.50",
        description: "Traditional Japanese sweet dough filled with sweet red bean paste and topped with poppy seeds.",
        tag: "Classic",
        image: "./images/12.png"
      },
      {
        name: "Coco An Pan",
        japanese: "ここあんパン",
        price: "$3.75",
        description: "Japanese sweet dough with an Azuki (red bean) and toasted coconut swirl.",
        image: "./images/13.png"
      },
      {
        name: "Melon Pan",
        japanese: "メロンパン",
        price: "$3.50",
        description: "Light Japanese sweet dough covered with our signature crispy sugar cookie crust.",
        tag: "Iconic",
        image: "./images/14.png"
      },
      {
        name: "Black Sesame Melon Pan",
        japanese: "黒ごまメロンパン",
        price: "$3.75",
        description: "Light Japanese sweet dough covered with an aromatic roasted black sesame cookie crust.",
        image: "./images/7.png"
      },
      {
        name: "Custard Cream Pan",
        japanese: "カスタードクリーム",
        price: "$4.00",
        description: "Tender sweet dough filled and baked with silky house-made vanilla custard cream.",
        image: "./images/11.png"
      },
      {
        name: "Cream Pan Man",
        japanese: "クリームパンマン",
        price: "$3.00",
        description: "Beloved character sweet dough shaped and baked with rich vanilla custard cream.",
        tag: "Kids Favorite",
        image: "./images/15.png"
      },
      {
        name: "Boston Cream",
        japanese: "ボストンクリーム",
        price: "$4.50",
        description: "Our Japanese take on the Boston classic: filled with custard cream and subtle orange zest.",
        tag: "Local Favorite",
        image: "./images/4.png"
      },
      {
        name: "Totoro Pan (Cream / Chocolate)",
        japanese: "トトロ（クリーム/チョコ）",
        price: "$5.50",
        description: "Studio Ghibli inspired sweet dough with melon pan cookie ears and belly, filled with choice of chocolate custard or vanilla custard.",
        tag: "Specialty",
        image: "./images/23.png"
      },
      {
        name: "Chocolate Horn (Choco Cornet)",
        japanese: "チョココロネ",
        price: "$4.50",
        description: "Spiral cone of sweet pastry dough filled with rich chocolate custard cream, capped with Belgian chocolate.",
        image: "./images/17.png"
      }
    ]
  },
  {
    id: "fried-bread",
    name: "Fried Bread & Donuts",
    japanese: "揚げパン・ドーナツ",
    description: "Crispy savory curry pan and sugar-dusted traditional Japanese doughnuts.",
    items: [
      {
        name: "Curry Pan",
        japanese: "カレーパン",
        price: "$5.00",
        description: "Crispy panko-breaded fried dough filled with savory Japanese beef and vegetable curry.",
        tag: "Must Try",
        image: "./images/5.png"
      },
      {
        name: "An Doughnut",
        japanese: "あんドーナツ",
        price: "$4.00",
        description: "Golden fried donut filled with smooth sweet azuki red bean paste and rolled in sugar.",
        image: "./images/20.png"
      },
      {
        name: "Kinako An Doughnut",
        japanese: "きなこあんドーナツ",
        price: "$4.25",
        description: "Red bean filled doughnut generously dusted with roasted soybean powder (Kinako).",
        image: "./images/22.png"
      },
      {
        name: "Twist Doughnut",
        japanese: "ツイストドーナツ",
        price: "$3.50",
        description: "Classic braided yeast doughnut dusted in crystalline sugar.",
        image: "./images/24.png"
      },
      {
        name: "Kinako Twist Doughnut",
        japanese: "きなこツイストドーナツ",
        price: "$3.75",
        description: "Braided twist doughnut rolled in fragrant nutty roasted soybean powder.",
        image: "./images/27.png"
      },
      {
        name: "Cinnamon Sugar Twist Doughnut",
        japanese: "シナモンシュガーツイストドーナツ",
        price: "$4.00",
        description: "Fluffy twist doughnut rolled in sweet cinnamon and sugar.",
        image: "./images/28.png"
      }
    ]
  },
  {
    id: "croissants-cookies",
    name: "Croissants & Pastries",
    japanese: "クロワッサン・パイ",
    description: "Award-winning flaky French laminations infused with Japanese red bean, matcha, and seasonal fruits.",
    items: [
      {
        name: "Azuki Cream Croissant",
        japanese: "あずきクリーム",
        price: "$5.50",
        description: "Our #1 most popular pastry! Flaky croissant shell filled with sweet red bean paste and freshly whipped chantilly cream.",
        tag: "#1 Bestseller",
        image: "./images/IMG-3581.jpg"
      },
      {
        name: "Matcha Azuki Cream Croissant",
        japanese: "抹茶あずきクリーム",
        price: "$6.00",
        description: "Flaky croissant shell filled with azuki paste and freshly whipped Japanese matcha green tea cream, dusted with Uji matcha powder.",
        tag: "Signature",
        image: "./images/IMG-3588.jpg"
      },
      {
        name: "Ichigo Cream Croissant",
        japanese: "いちごクリーム",
        price: "$4.50",
        description: "Croissant triangle filled with silky vanilla custard cream and freshly sliced strawberries.",
        image: "./images/IMG-3596.jpg"
      },
      {
        name: "Matcha Ichigo Croissant",
        japanese: "抹茶いちご",
        price: "$5.00",
        description: "Matcha-infused croissant triangle with custard cream and fresh Massachusetts strawberries.",
        image: "./images/3.png"
      },
      {
        name: "Plain Croissant",
        japanese: "プレインクロワッサン",
        price: "$4.00",
        description: "Voted 'Best of Boston' by Boston Food Lover. 100% pure butter laminated into dozens of golden, honeycomb layers.",
        tag: "Award Winner",
        image: "./images/4.png"
      },
      {
        name: "Mini Croissant",
        japanese: "ミニクロワッサン",
        price: "$2.50",
        description: "Bite-sized version of our award-winning butter croissant.",
        image: "./images/5.png"
      },
      {
        name: "Chocolate Croissant (Pain au Chocolat)",
        japanese: "チョコレートクロワッサン",
        price: "$3.50",
        description: "Imported Belgian chocolate batons wrapped inside buttery, flaky croissant pastry.",
        image: "./images/6.png"
      },
      {
        name: "Almond Croissant",
        japanese: "アーモンドクロワッサン",
        price: "$5.50",
        description: "Twice-baked croissant filled with rich homemade almond frangipane, topped with toasted sliced almonds.",
        dietary: "Contains almonds",
        image: "./images/2.png"
      },
      {
        name: "Pain Au Raisin",
        japanese: "パンオレーズン",
        price: "$5.00",
        description: "Croissant spiral layered with custard cream and rum-soaked plump raisins, finished with an apricot glaze.",
        dietary: "Baked with almond flour",
        image: "./images/5.png"
      },
      {
        name: "Ham and Cheese Croissant",
        japanese: "ハムチーズクロワッサン",
        price: "$5.00",
        description: "Preservative-free smoked ham and imported Swiss Gruyere cheese baked into buttery lamination.",
        tag: "Savory",
        image: "./images/3.png"
      },
      {
        name: "Apple Croissant",
        japanese: "アップルクロワッサン",
        price: "$5.00",
        description: "Baked with fresh spiced apple slices, cinnamon, and a delicate pastry glaze.",
        image: "./images/4.png"
      },
      {
        name: "Blueberry Croissant",
        japanese: "ブルーベリークロワッサン",
        price: "$5.00",
        description: "Croissant filled with custard and wild blueberries, topped with apricot glaze and fresh garden thyme.",
        image: "./images/6.png"
      },
      {
        name: "Handmade Scones",
        japanese: "スコーン",
        price: "$4.00",
        description: "Choice of Lemon Blueberry (buttermilk base with citrus zest) or Candied Ginger (heavy cream base with candied Thai ginger).",
        image: "./images/1.png"
      }
    ]
  },
  {
    id: "cakes",
    name: "Artisanal Cakes",
    japanese: "ケーキ",
    description: "Handcrafted and hand-shaped using pure whipped cream, imported Japanese matcha, and Belgian chocolate.",
    items: [
      {
        name: "Strawberry Shortcake",
        japanese: "いちごショートケーキ",
        price: "$6.95 slice · $45 (6″) · $65 (9″)",
        description: "Japan's quintessential celebration cake. Airy almond sponge cake layered with fresh chantilly whipped cream and sweet strawberries. Can be made nut-free upon advance order.",
        tag: "Signature Cake",
        image: "./images/1.png"
      },
      {
        name: "Japonaise Green Tea Cake",
        japanese: "ジャポネーゼ (抹茶) ケーキ",
        price: "$6.95 slice · $45 (6″) · $65 (9″)",
        description: "Matcha sponge cake, delicate genoise layered with silky Bavarian cream, and crowned with emerald matcha gelatin.",
        tag: "Iconic",
        image: "./images/2.png"
      },
      {
        name: "Choco Queen Cake",
        japanese: "チョコクイーン",
        price: "$6.95 slice · $45 (6″) · $65 (9″)",
        description: "Chocolate genoise layered with light whipped chocolate cream and thinly sliced sweet bananas.",
        tag: "Customer Favorite",
        image: "./images/3.png"
      },
      {
        name: "Chocolate Bread Pudding",
        japanese: "チョコレートブレッドプリン",
        price: "$3.95 mini / $9.95 regular",
        description: "Rich custard bread pudding prepared with homemade chocolate croissants, dark rum, cinnamon, and vanilla custard.",
        image: "./images/4.png"
      },
      {
        name: "Apple Bread Pudding",
        japanese: "アップルブレッドプリン",
        price: "$3.95 mini / $9.95 regular",
        description: "Custard pudding made with our homemade apple croissants, rum raisins, orange peels, and warm spices.",
        image: "./images/5.png"
      },
      {
        name: "Caramel Custard Pudding (Purin)",
        japanese: "キャラメルカスタードプリン",
        price: "$4.50",
        description: "Silky Japanese-style custard pudding settled in deep bittersweet amber caramel sauce.",
        dietary: "Gluten-Free",
        tag: "Gluten-Free",
        image: "./images/6.png"
      },
      {
        name: "Creme Mango Coco",
        japanese: "クリームマンゴココ",
        price: "$5.95",
        description: "Tropical layers of velvety coconut panna cotta, mango panna cotta, mango puree, and juicy fresh mango chunks.",
        dietary: "Gluten-Free",
        tag: "Gluten-Free",
        image: "./images/2.png"
      }
    ]
  },
  {
    id: "sandwiches",
    name: "Savory Sandwiches",
    japanese: "サンドイッチ",
    description: "Made to order on freshly baked Japanese brioche and bakery rolls.",
    items: [
      {
        name: "Chicken Katsu Sandwich",
        japanese: "チキンカツサンド",
        price: "$7.95",
        description: "Crispy fried Bell & Evans chicken breast on a freshly baked brioche roll with sweet & tangy Japanese tonkatsu sauce and shredded cabbage.",
        tag: "Hot & Crispy",
        image: "./images/Untitled__28Instagram_Story_29__28Facebook_Post__28Landscape_29_29.png"
      },
      {
        name: "Potato Croquette Sandwich",
        japanese: "ポテトコロッケサンド",
        price: "$4.95",
        description: "Crispy panko-crusted spiced potato patty with sweet tonkatsu glaze and fresh crisp lettuce on a soft roll.",
        image: "./images/18.png"
      },
      {
        name: "Tuna Salad Roll",
        japanese: "ツナロール",
        price: "$4.00",
        description: "Japanese-style seasoned tuna salad served on a warm bakery roll with crisp lettuce.",
        image: "./images/21.png"
      }
    ]
  },
  {
    id: "onigiri",
    name: "Handmade Onigiri",
    japanese: "手作りおにぎり",
    description: "Classic Japanese rice balls wrapped in crisp seaweed, made fresh daily.",
    items: [
      {
        name: "Spicy Tuna Onigiri",
        japanese: "スパイシーツナおにぎり",
        price: "$3.50",
        description: "Tuna salad seasoned with sriracha chili and Japanese Kewpie mayonnaise.",
        dietary: "Gluten-Free",
        image: "./images/Screen_Shot_2023-06-02_at_3.08.27_PM.jpg"
      },
      {
        name: "Tuna Mayo Onigiri",
        japanese: "ツナマヨおにぎり",
        price: "$3.50",
        description: "Tender flaked tuna folded into creamy Japanese Kewpie mayo.",
        dietary: "Gluten-Free",
        image: "./images/Screen_Shot_2023-06-02_at_3.08.27_PM.jpg"
      },
      {
        name: "Ume (Pickled Plum) Onigiri",
        japanese: "梅おにぎり",
        price: "$3.50",
        description: "Traditional sour Japanese umeboshi plum filling. Tangy and refreshing.",
        dietary: "Gluten-Free · Vegan",
        image: "./images/Screen_Shot_2023-06-02_at_3.08.27_PM.jpg"
      },
      {
        name: "Konbu (Seaweed) Onigiri",
        japanese: "昆布おにぎり",
        price: "$3.50",
        description: "Shredded kelp simmered in soy, mirin, and toasted sesame seeds.",
        dietary: "Vegetarian",
        image: "./images/Screen_Shot_2023-06-02_at_3.08.27_PM.jpg"
      },
      {
        name: "Takana (Mustard Greens) Onigiri",
        japanese: "高菜おにぎり",
        price: "$3.50",
        description: "Pickled Japanese mustard greens tossed with chili pepper flakes.",
        dietary: "Gluten-Free · Vegan",
        image: "./images/Screen_Shot_2023-06-02_at_3.08.27_PM.jpg"
      }
    ]
  }
];

export const holidaySpecials = [
  {
    title: "Christmas Cake Specials",
    japanese: "クリスマス限定ケーキ",
    description: "Festive Japanese holiday decoration available on our Strawberry Shortcake, Chocolate Queen, or Japonaise Green Tea cakes.",
    season: "Winter / Holiday Season",
    image: "./images/7f5f6bc1-08d1-4067-a21a-21c57fb406f2_1.png" || "./images/1.png"
  },
  {
    title: "Mother's Day & Valentine's Specials",
    japanese: "母の日・バレンタイン特製ケーキ",
    description: "Handcrafted chocolate hearts and fresh strawberry bouquets decorating our signature celebration cakes.",
    season: "Spring / February & May",
    image: "./images/a0067cb7-3058-4c76-b8c3-622f6815dfa7_2.png" || "./images/2.png"
  },
  {
    title: "Thanksgiving Celebration Cakes",
    japanese: "サンクスギビング特製ケーキ",
    description: "Warm seasonal accents on Strawberry Shortcake, Chocolate Queen, and Matcha bavarian cakes.",
    season: "Autumn / November",
    image: "./images/3.png"
  },
  {
    title: "Halloween Specials: No Face & Kodama Pan",
    japanese: "カオナシ＆コダマ ハロウィンパン",
    description: "Limited edition Studio Ghibli-inspired character breads: chocolate-filled 'No Face Pan' and cream-filled 'Kodama Pan'.",
    season: "October Halloween",
    image: "./images/94fab063-f458-4d2e-a44d-dae775ba1c85_1.png" || "./images/23.png"
  }
];

export const jobListings = [
  {
    id: "cashier",
    title: "Cashier & Barista",
    japaneseTitle: "キャッシャースタッフ",
    type: "Full-Time / Part-Time (AM & PM Shifts)",
    shifts: "Opening from 7:30 AM / Closing until 10:00 PM",
    requirements: [
      "Excels in customer service and enjoys working as part of an energetic team",
      "Exceptional multi-tasker who thrives in a fast-paced environment",
      "Conversational English level to explain unique Japanese pastries to guests",
      "Comfortable lifting up to 50 lbs and standing for prolonged hours"
    ],
    responsibilities: [
      "Managing customer point-of-sale transactions and orders",
      "Barista drink preparation and coffee service",
      "Product packaging, pastry display maintenance, and labeling",
      "Sanitizing workspace, dishwashing, and assisting basic kitchen prep"
    ],
    jpSummary: "接客業が好きな方、元気でやる気のある方を希望。仕事は主にレジ、バリスタ、掃除・洗い物、キッチンアシスト。オープンは朝の7:30から、クローズは夜の22時まで。"
  },
  {
    id: "pastry-chef",
    title: "Pastry Chef",
    japaneseTitle: "パティシエ",
    type: "Full-Time / Part-Time",
    shifts: "Shifts typically begin at 10:00 AM through closing",
    requirements: [
      "Culinary or pastry experience preferred; motivated applicants without professional experience must commit to at least 1 year with training provided",
      "Flexible morning/evening availability with meticulous attention to detail",
      "Comfortable on feet for prolonged periods and receptive to constructive coaching",
      "Enjoys working at speed in a fast-paced production kitchen"
    ],
    responsibilities: [
      "Laminating dough for our award-winning croissants and puff pastries",
      "Baking and decorating signature celebration cakes (Strawberry Shortcake, Matcha, Choco Queen)",
      "Preparing scratch custards, creams, fruit compotes, and fillings"
    ],
    jpSummary: "朝～夜、時間がフレキシブルな方、手先の器用な方を希望。経験者優遇ですが、初心者でも情熱とやる気がある方にはトレーニングを行います。ペーストリーは早くて朝10時からスタートします。"
  },
  {
    id: "baker",
    title: "Baker",
    japaneseTitle: "ベーカー（パン職人）",
    type: "Full-Time / Part-Time",
    shifts: "Early morning shifts starting early AM",
    requirements: [
      "True morning person with high energy and dedication to the baking craft",
      "Prior baking or culinary school experience is a plus; willing to train passionate beginners willing to commit for 1+ year",
      "Able to lift 50 lbs and stand for 7+ hours",
      "Works smoothly under high-volume morning bake schedules"
    ],
    responsibilities: [
      "Mixing, shaping, proofing, and baking Shoku Pan, challah, and melon pan",
      "Monitoring oven temperatures and artisanal fermentation schedules",
      "Frying fresh curry pan and doughnuts daily"
    ],
    jpSummary: "ベーカリー経験のある方を希望としておりますが、未経験者でもやる気と努力次第でトレーニングを行う場合もあります。朝が強い方、真剣な方、体力をお持ちの方を歓迎します。"
  },
  {
    id: "kitchen-staff",
    title: "Kitchen Staff & Prep Cook",
    japaneseTitle: "キッチンヘルパー",
    type: "Full-Time / Part-Time (Morning, Afternoon & Evening)",
    shifts: "Flexible morning, afternoon, and evening shifts available",
    requirements: [
      "Exceptional time management and basic knife handling safety",
      "Enthusiastic and reliable team player",
      "Interest in learning baking techniques is welcomed!"
    ],
    responsibilities: [
      "Assembling made-to-order sandwiches (Chicken Katsu, Croquettes) and handcrafting Onigiri",
      "Vegetable prep, egg washing, and ingredient measuring",
      "Dishwashing, pot washing, and kitchen sanitization routines",
      "Assisting bakers with traying and dough prep"
    ],
    jpSummary: "テキパキ、朝の早い時間でも大丈夫な方を希望。お昼から夕方のシフトもございます。サンドイッチ・おにぎりなど簡単な食品の調理、掃除・皿洗い、ベーカーのアシストなど。"
  }
];
