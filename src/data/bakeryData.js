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
        tag: "Bestseller"
      },
      {
        name: "Premium Shoku Pan",
        japanese: "プレミアム食パン",
        price: "$6.50 bag / $19.50 loaf",
        description: "Rich and slightly sweet white bread enriched with heavy cream for ultimate decadence.",
        tag: "Premium",
      },
      {
        name: "Butter Rolls",
        japanese: "バターロール",
        price: "$1.50 roll / $7.00 bag (5 pcs)",
        description: "Our version of classic Japanese dinner rolls with rich golden butter. 5 rolls per bag.",
      },
      {
        name: "Pull Apart Raisin Bun",
        japanese: "レーズンパン",
        price: "$2.00 roll / $10.00 bag",
        description: "Soft sweet bun filled with rum-soaked plump raisins and dusted with fine sugar.",
      },
      {
        name: "Shio Butter Roll",
        japanese: "塩バター",
        price: "$2.50 / roll",
        description: "Popular Japanese butter roll with a melted salted butter core and a touch of sea salt.",
        tag: "Popular",
      },
      {
        name: "Smoked Chibi",
        japanese: "スモークチビ",
        price: "$3.50",
        description: "Soft butter roll wrapped around Berkshire black pork sausage with a touch of ketchup glaze.",
      },
      {
        name: "Plain Challah",
        japanese: "プレインハラ",
        price: "$9.00 loaf",
        description: "Traditional braided bread with a golden crust. Freshly baked every Thursday & Friday.",
        note: "Baked Thurs / Fri",
      },
      {
        name: "Chocolate Challah",
        japanese: "チョコレートハラ",
        price: "$11.00 loaf",
        description: "Decadent braided challah swirled with rich chocolate ribbons.",
        note: "Baked Thurs / Fri",
      },
      {
        name: "Sesame Challah",
        japanese: "セサミハラ",
        price: "$11.00 loaf",
        description: "Aromatic challah loaf coated in toasted sesame seeds.",
        note: "Baked Thurs / Fri",
      },
      {
        name: "Cinnamon Raisin Challah",
        japanese: "シナモンレーズンハラ",
        price: "$11.00 loaf",
        description: "Braided challah laced with warm Ceylon cinnamon and sweet raisins.",
        note: "Baked Thurs / Fri",
      },
      {
        name: "Poppy Seed Challah",
        japanese: "ポピーシードハラ",
        price: "$11.00 loaf",
        description: "Braided challah coated generously with crunchy poppy seeds.",
        note: "Baked Saturdays",
      },
      {
        name: "Azuki Challah",
        japanese: "あずきハラ",
        price: "$8.00 loaf",
        description: "Unique fusion braiding sweet Japanese red bean (azuki) into challah dough.",
        note: "Baked Thurs / Fri",
      },
      {
        name: "Challah Tea Rolls",
        japanese: "ハラティーロール",
        price: "$6.00 / bag (Plain) · $7.50 / bag (Varieties)",
        description: "Mini challah tea rolls. Available in Plain, Chocolate, and Cinnamon Raisin.",
        note: "Baked Thurs / Fri",
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
      },
      {
        name: "Coco An Pan",
        japanese: "ここあんパン",
        price: "$3.75",
        description: "Japanese sweet dough with an Azuki (red bean) and toasted coconut swirl.",
      },
      {
        name: "Melon Pan",
        japanese: "メロンパン",
        price: "$3.50",
        description: "Light Japanese sweet dough covered with our signature crispy sugar cookie crust.",
        tag: "Iconic",
      },
      {
        name: "Black Sesame Melon Pan",
        japanese: "黒ごまメロンパン",
        price: "$3.75",
        description: "Light Japanese sweet dough covered with an aromatic roasted black sesame cookie crust.",
      },
      {
        name: "Custard Cream Pan",
        japanese: "カスタードクリーム",
        price: "$4.00",
        description: "Tender sweet dough filled and baked with silky house-made vanilla custard cream.",
      },
      {
        name: "Cream Pan Man",
        japanese: "クリームパンマン",
        price: "$3.00",
        description: "Beloved character sweet dough shaped and baked with rich vanilla custard cream.",
        tag: "Kids Favorite",
      },
      {
        name: "Boston Cream",
        japanese: "ボストンクリーム",
        price: "$4.50",
        description: "Our Japanese take on the Boston classic: filled with custard cream and subtle orange zest.",
        tag: "Local Favorite",
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
      },
      {
        name: "An Doughnut",
        japanese: "あんドーナツ",
        price: "$4.00",
        description: "Golden fried donut filled with smooth sweet azuki red bean paste and rolled in sugar.",
      },
      {
        name: "Kinako An Doughnut",
        japanese: "きなこあんドーナツ",
        price: "$4.25",
        description: "Red bean filled doughnut generously dusted with roasted soybean powder (Kinako).",
      },
      {
        name: "Twist Doughnut",
        japanese: "ツイストドーナツ",
        price: "$3.50",
        description: "Classic braided yeast doughnut dusted in crystalline sugar.",
      },
      {
        name: "Kinako Twist Doughnut",
        japanese: "きなこツイストドーナツ",
        price: "$3.75",
        description: "Braided twist doughnut rolled in fragrant nutty roasted soybean powder.",
      },
      {
        name: "Cinnamon Sugar Twist Doughnut",
        japanese: "シナモンシュガーツイストドーナツ",
        price: "$4.00",
        description: "Fluffy twist doughnut rolled in sweet cinnamon and sugar.",
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
        tag: "#1 Bestseller"
      },
      {
        name: "Matcha Azuki Cream Croissant",
        japanese: "抹茶あずきクリーム",
        price: "$6.00",
        description: "Flaky croissant shell filled with azuki paste and freshly whipped Japanese matcha green tea cream, dusted with Uji matcha powder.",
        tag: "Signature"
      },
      {
        name: "Ichigo Cream Croissant",
        japanese: "いちごクリーム",
        price: "$4.50",
        description: "Croissant triangle filled with silky vanilla custard cream and freshly sliced strawberries."
      },
      {
        name: "Matcha Ichigo Croissant",
        japanese: "抹茶いちご",
        price: "$5.00",
        description: "Matcha-infused croissant triangle with custard cream and fresh Massachusetts strawberries.",
      },
      {
        name: "Plain Croissant",
        japanese: "プレインクロワッサン",
        price: "$4.00",
        description: "Voted 'Best of Boston' by Boston Food Lover. 100% pure butter laminated into dozens of golden, honeycomb layers.",
        tag: "Award Winner",
        image: "./images/DSC_6880-2.jpg"
      },
      {
        name: "Mini Croissant",
        japanese: "ミニクロワッサン",
        price: "$2.50",
        description: "Bite-sized version of our award-winning butter croissant.",
      },
      {
        name: "Chocolate Croissant (Pain au Chocolat)",
        japanese: "チョコレートクロワッサン",
        price: "$3.50",
        description: "Imported Belgian chocolate batons wrapped inside buttery, flaky croissant pastry.",
      },
      {
        name: "Almond Croissant",
        japanese: "アーモンドクロワッサン",
        price: "$5.50",
        description: "Twice-baked croissant filled with rich homemade almond frangipane, topped with toasted sliced almonds.",
        dietary: "Contains almonds",
      },
      {
        name: "Pain Au Raisin",
        japanese: "パンオレーズン",
        price: "$5.00",
        description: "Croissant spiral layered with custard cream and rum-soaked plump raisins, finished with an apricot glaze.",
        dietary: "Baked with almond flour",
      },
      {
        name: "Ham and Cheese Croissant",
        japanese: "ハムチーズクロワッサン",
        price: "$5.00",
        description: "Preservative-free smoked ham and imported Swiss Gruyere cheese baked into buttery lamination.",
        tag: "Savory",
      },
      {
        name: "Apple Croissant",
        japanese: "アップルクロワッサン",
        price: "$5.00",
        description: "Baked with fresh spiced apple slices, cinnamon, and a delicate pastry glaze.",
      },
      {
        name: "Blueberry Croissant",
        japanese: "ブルーベリークロワッサン",
        price: "$5.00",
        description: "Croissant filled with custard and wild blueberries, topped with apricot glaze and fresh garden thyme.",
      },
      {
        name: "Handmade Scones",
        japanese: "スコーン",
        price: "$4.00",
        description: "Choice of Lemon Blueberry (buttermilk base with citrus zest) or Candied Ginger (heavy cream base with candied Thai ginger).",
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
        image: "./images/IMG-3581.jpg"
      },
      {
        name: "Japonaise Green Tea Cake",
        japanese: "ジャポネーゼ (抹茶) ケーキ",
        price: "$6.95 slice · $45 (6″) · $65 (9″)",
        description: "Matcha sponge cake, delicate genoise layered with silky Bavarian cream, and crowned with emerald matcha gelatin.",
        tag: "Iconic",
        image: "./images/IMG-3588.jpg"
      },
      {
        name: "Choco Queen Cake",
        japanese: "チョコクイーン",
        price: "$6.95 slice · $45 (6″) · $65 (9″)",
        description: "Chocolate genoise layered with light whipped chocolate cream and thinly sliced sweet bananas.",
        tag: "Customer Favorite",
        image: "./images/IMG-3585.jpg"
      },
      {
        name: "Chocolate Bread Pudding",
        japanese: "チョコレートブレッドプリン",
        price: "$3.95 mini / $9.95 regular",
        description: "Rich custard bread pudding prepared with homemade chocolate croissants, dark rum, cinnamon, and vanilla custard."
      },
      {
        name: "Apple Bread Pudding",
        japanese: "アップルブレッドプリン",
        price: "$3.95 mini / $9.95 regular",
        description: "Custard pudding made with our homemade apple croissants, rum raisins, orange peels, and warm spices."
      },
      {
        name: "Caramel Custard Pudding (Purin)",
        japanese: "キャラメルカスタードプリン",
        price: "$4.50",
        description: "Silky Japanese-style custard pudding settled in deep bittersweet amber caramel sauce.",
        dietary: "Gluten-Free",
        tag: "Gluten-Free"
      },
      {
        name: "Creme Mango Coco",
        japanese: "クリームマンゴココ",
        price: "$5.95",
        description: "Tropical layers of velvety coconut panna cotta, mango panna cotta, mango puree, and juicy fresh mango chunks.",
        dietary: "Gluten-Free",
        tag: "Gluten-Free",
        image: "./images/IMG-3596.jpg"
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
      },
      {
        name: "Tuna Salad Roll",
        japanese: "ツナロール",
        price: "$4.00",
        description: "Japanese-style seasoned tuna salad served on a warm bakery roll with crisp lettuce.",
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
      },
      {
        name: "Tuna Mayo Onigiri",
        japanese: "ツナマヨおにぎり",
        price: "$3.50",
        description: "Tender flaked tuna folded into creamy Japanese Kewpie mayo.",
        dietary: "Gluten-Free",
      },
      {
        name: "Ume (Pickled Plum) Onigiri",
        japanese: "梅おにぎり",
        price: "$3.50",
        description: "Traditional sour Japanese umeboshi plum filling. Tangy and refreshing.",
        dietary: "Gluten-Free · Vegan",
      },
      {
        name: "Konbu (Seaweed) Onigiri",
        japanese: "昆布おにぎり",
        price: "$3.50",
        description: "Shredded kelp simmered in soy, mirin, and toasted sesame seeds.",
        dietary: "Vegetarian",
      },
      {
        name: "Takana (Mustard Greens) Onigiri",
        japanese: "高菜おにぎり",
        price: "$3.50",
        description: "Pickled Japanese mustard greens tossed with chili pepper flakes.",
        dietary: "Gluten-Free · Vegan",
      }
    ]
  }
];

export const holidaySpecials = [
  {
    title: "Christmas Special (Strawberry Shortcake)",
    japanese: "クリスマス限定 ショートケーキ",
    description: "Christmas Special. Available on Strawberry Shortcake, Chocolate Queen, or Japonaise Green Tea.",
    season: "Christmas / Winter",
    image: "./images/holiday_christmas_1.png",
    bases: ["Strawberry Shortcake", "Chocolate Queen", "Japonaise Green Tea"]
  },
  {
    title: "Christmas Special (Chocolate Queen)",
    japanese: "クリスマス限定 チョコクイーン",
    description: "Christmas Special. Available on Strawberry Shortcake, Chocolate Queen, or Japonaise Green Tea.",
    season: "Christmas / Winter",
    image: "./images/holiday_christmas_2.png",
    bases: ["Strawberry Shortcake", "Chocolate Queen", "Japonaise Green Tea"]
  },
  {
    title: "Mother’s Day & Valentine’s Special",
    japanese: "母の日・バレンタイン特製ケーキ",
    description: "Mother’s day & Valentine’s Special. Available on Strawberry Shortcake, Chocolate Queen, or Japonaise Green Tea.",
    season: "Valentine's & Mother's Day",
    image: "./images/holiday_mothers_valentines.png",
    bases: ["Strawberry Shortcake", "Chocolate Queen", "Japonaise Green Tea"]
  },
  {
    title: "Thanksgiving Special",
    japanese: "サンクスギビング特製ケーキ",
    description: "Thanksgiving Special. Available on Strawberry Shortcake, Chocolate Queen, or Japonaise Green Tea.",
    season: "Thanksgiving / Autumn",
    image: "./images/holiday_thanksgiving.png",
    bases: ["Strawberry Shortcake", "Chocolate Queen", "Japonaise Green Tea"]
  },
  {
    title: "Halloween Special: No Face Pan",
    japanese: "ハロウィン限定 カオナシパン",
    description: "Halloween Special. No Face Pan. Studio Ghibli inspired sweet bread filled with rich Belgian chocolate custard.",
    season: "October Halloween",
    image: "./images/holiday_noface.png",
    type: "Character Bread"
  },
  {
    title: "Halloween Special: Kodama Pan",
    japanese: "ハロウィン限定 コダマパン",
    description: "Halloween Special. Kodama Pan. Princess Mononoke tree spirit inspired sweet bun filled with vanilla custard cream.",
    season: "October Halloween",
    image: "./images/holiday_kodama.png",
    type: "Character Bread"
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
