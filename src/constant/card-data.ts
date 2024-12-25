type TimeInfo = {
    opens?: string;
    closes?: string;
    daysOfOperation?: string[];
  };
  
  type Distance = {
    time?: string;
    location?: string;
    locationFull?: string;
    availability?: string;
    nearestStation?: string;
  };
  type AdditionalInfoItem = {
    title?: string;
    items?: string[];
  };
  
  
  type Item = {
    // Required fields
    id: number;
    title: string;
    image: string;
    // Optional fields
    about?: string;
    location?: Location;
    shares?: number | string;
    categories?: string[];
    tags?: string[];
    time?: TimeInfo;
    distance?: Distance;
    texts?: string[];
    price?: number | string;
    label?: string;
    mapImage?:string;
    icons?: string[];
    additionalInfo?: AdditionalInfoItem[];
  };
  
  
   export const CardFullData: Item[] = [
    {
    id: 1,
    title: "Seven ways to eat codfish",
    image: "/images/home1.png",
    shares: 61,
    categories: ["FOR YOU", "TOBY'S CHOICE"],
    price: 60,
    about:
      "Dive into Lisbon's love affair with bacalhau on this tantalizing food experience. Explore seven distinct and delicious ways the Portuguese cook codfish.",
    tags: ["Baixa", "Fish"],
    time: {
      opens: "12:00",
      closes: "23:00",
      daysOfOperation: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    distance: {
      time: "1h30",
        location: "Rua dos Bacalhoeiros, 16",
        locationFull: "Rua dos Bacalhoeiros, 16",
        availability: "Everyday between 15h - 18h",
        nearestStation:'Terreiro do Paço',
    },
    texts: [
      `Portugal has over 1,000 codfish recipes, earning it the nickname "faithful friend" of Portuguese cuisine.`,
      "Codfish isn’t native to Portugal—it’s imported, mostly from Norway and Iceland.",
      "Portuguese explorers introduced dried codfish to the world during their sea voyages in the 15th century."
    ],
    mapImage: "/images/tour-map.png",
    label: "original",
    icons: ["/images/icons/music.svg"],
    additionalInfo:[
      {
        title: "What's Included",
        items:[
          "Tasting of 7 traditional codfish dishes:",
          "  • Salada de Bacalhau: A refreshing codfish salad with chickpeas, onions, and olive oil",
          "  • Pastéis de Bacalhau: Golden codfish cake, crispy on the outside and fluffy inside",
          "  • Patanisca de Bacalhau: A delicious codfish fritter crispy on the outside and fluffy inside",
          "  • Bacalhau à Brás: A comforting mix of shredded codfish, eggs, onions, and crispy potatoes",
          "  • Bacalhau à Lagareiro: Oven-baked codfish with olive oil, garlic, and roasted potatoes",
          "  • Bacalhau à Gomes de Sá: A classic casserole with cod, potatoes, onions, and olives",
          "  • Bacalhau Assado na Brasa: Grilled codfish with a smoky, charred flavor",
          "  • A glass of wine or beverage paired with each dish",
          "Access to web app with historical and cultural insights about codfish in Portuguese cuisine"
        ],
      },
      {
        title: "Who This Is For",
        items:  [
          "◻ Most travelers can participate;",
          "◻ In case of food allergies or diet restrictions, indicate it at the time of booking.",
          "◻ This activity is NOT suitable for: Vegan, Vegetarian or if you do not eat fish.",
          "◻ It Is suitable for the Pescetarian diet (fish, no meat). To be indicated at the time of purchase.",
        ],
      },
      {
        title: "More You Should Know",
        items:  [
          "• This experience requires a minimum number of travelers. If it’s canceled because the minimum isn’t met, you’ll be offered a different date/experience or a full refund.",
          "• For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
          
        ]
      },
    ]
  },
  {
    id: 2,
    title: "The wine alchemists",
    image: "/images/home2.png",
    shares: 61,
   // categories: ["FOR YOU", "TOBY'S CHOICE"],
    price: 98,
    about:
      "Step into the world of Portuguese winemaking, where tradition meets artistry. Unlike anywhere else, Portugal’s winemaker.",
    tags: ["Portuguese cuisine", "Seafood", "Traditional", "Chef's special", "Fish"],
    time: {
      opens: "12:00",
      closes: "23:00",
      daysOfOperation: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    distance: {
      time: "2h30",
        location: "Terraço Editorial",
        locationFull: "Terraço Editorial, Rua dos Bacalhoeiros, 16",
        availability: "Everyday between 12h - 24h",
        nearestStation:'Rossio',
    },
    texts: [
      "Wine was introduced to the inhabitants of Lisbon about 3000 years ago by phoenician merchants.",
      "The Romans called a local tribe Lusitans. According to legend, the name was inspired by Lusus, the son of the Roman god of wine:  Bacchus.",
      "Portugal is home to over 250 native grape varieties, many of which aren’t grown anywhere else in the world."
    ],
    mapImage: "/images/tour-map.png",
    label: "original",
    icons: ["/images/icons/music.svg"],
    additionalInfo:[
      {
        title: "What's Included",
        items:[
          "Welcome drink by the Terrace;",
          "  • Tasting of 7 selected wines from different regions in Portugal",
          "  • Guidance by professional sommelier;",
          "  • Sample of local cheeses and charcuterie",
          "  • Not included: gratuities",
          
        ],
      },
      {
        title: "Who This Is For",
        items:  [
          "◻ Not allowed for people under 18.",
        ],
      },
      {
        title: "More You Should Know",
        items:  [
          "• For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
          
        ]
      },

      
    ]
    
  },

  {
    id: 6,
    title: "Fado inside the box at iconic Adega Machado",
    image: "/images/home6.png",
    shares: 61,
   // categories: ["FOR YOU", "TOBY'S CHOICE"],
    price: 60,
    about:
      "Step into an iconic Fado house where the legendary Amália Rodrigues once graced the stage. In this intimate one-hour experience, enjoy a glass of fine Portuguese wine and savor local delicacies as two professional Fado singers take you on a journey through 200 years of Fado’s history. Let the melodies and stories transport you to the heart of Portugal’s soul in a setting steeped in musical heritage. A truly unforgettable afternoon break.",
    time: {
      opens: "12:00",
      closes: "23:00",
      daysOfOperation: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    distance: {
      time: "45min",
        location: "Adega Machado",
        locationFull:"R. do Norte 91, 1200-284 Lisboa",
        availability: "Thu, Fri, Sat at 19h",
        nearestStation:'Baixa-Chiado ',
    },
    texts: [
      "Amália Rodrigues, the famous fado singer, was once a regular at Adega Machado, sometimes performing for the other patrons.",
      "The Romans called a local tribe Lusitans. According to legend, the name was inspired by Lusus, the son of the Roman god of wine:  Bacchus.",
      "Portugal is home to over 250 native grape varieties, many of which aren’t grown anywhere else in the world."
    ],
    mapImage: "/images/tour-map.png",
    label: "original",
    icons: ["/images/icons/music.svg"],
    additionalInfo:[
      {
        title: "What's Included",
        items:[
          "Welcome drink by the Terrace;",
          "  • Tasting of 7 selected wines from different regions in Portugal",
          "  • Guidance by professional sommelier;",
          "  • Sample of local cheeses and charcuterie",
          "  • Not included: gratuities",
          
        ],
      },
      {
        title: "Who This Is For",
        items:  [
          "◻ Not allowed for people under 18.",
        ],
      },
      {
        title: "More You Should Know",
        items:  [
          "• For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
          
        ]
      },

      
    ]
    
  }
];