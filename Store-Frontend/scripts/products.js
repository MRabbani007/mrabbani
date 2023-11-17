// Array of Products
const products = [
  // Redragon S101 Gaming Keyboard, Black, White
  {
    id: "4bb8ad86-7e90-46e1-bc57-fea910d978d4",
    image: "images/products/redragon_gaming_keyboard_1.jpg",
    name: "Redragon S101 Gaming Keyboard, Black",
    description: "",
    category: "Computers", 
    rating: {
      stars: 4.5,
      count: 44669
    },
    priceCents: 3999,
    keywords: [
      "computers",
      "gaming",
      "keyboard"
    ]
  },
  // HP PC Gaming Keyboard and Mouse Combo
  {
    id: "1d079a98-913a-4b66-8f84-f6797b03e990",
    image: "images/products/hp_keyboard_1.jpg",
    name: "HP PC Gaming Keyboard and Mouse Combo",
    description: "",
    category: "Computers", 
    rating: {
      stars: 4.5,
      count: 5735
    },
    priceCents: 7999,
    keywords: [
      "computers",
      "gaming",
      "keyboard"
    ]
  },
  // WILSON NBA Forge Series Indoor/Outdoor Basketballs
  {
    id: "f6ca90f5-2cfa-497a-8ed9-b3d7b4d26a25",
    image: "images/products/blue_grey_1.jpg",
    name: "WILSON NBA Forge Series Indoor/Outdoor Basketballs",
    description: "",
    category: "Sports & Outdoors", 
    rating: {
      stars: 4.5,
      count: 1941
    },
    priceCents: 4495,
    keywords: [
      "sports",
      "outdoor",
      "basketball"
    ]
  },
  // Black and Gray Athletic Cotton Socks - 6 Pairs
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    description: "",
    category: "fashion", 
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  // Intermediate Size Basketball
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    description: "",
    category: "Sports & Outdoors",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  // Adults Plain Cotton T-Shirt - 2 Pack
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  // 2 Slot Toaster - Black
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  // 6 Piece White Dinner Plate Set
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  // 6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  // Plain Hooded Fleece Sweatshirt
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  // Luxury Towel Set - Graphite Gray
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  // Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    description: "",
    category: "Health & Household",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  // Waterproof Knit Athletic Sneakers - Gray
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  // Round Sunglasses
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  // Women's Two Strap Buckle Sandals - Tan
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  // Blackout Curtains Set 4-Pack - Beige
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  // Men's Slim-Fit Summer Shorts
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  // Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  // Ultra Soft Tissue 2-Ply - 18 Box
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    description: "",
    category: "Health & Household",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  // Straw Lifeguard Sun Hat
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  // Sterling Silver Sky Flower Stud Earrings
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  // Women's Stretch Popover Hoodie
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  // Bathroom Bath Rug Mat 20 x 31 Inch - Grey
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  // Women's Knit Ballet Flat
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  // Men's Regular-Fit Quick-Dry Golf Polo Shirt
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  // Trash Can with Foot Pedal - Brushed Stainless Steel
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  // Duvet Cover Set with Zipper Closure
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  // Women's Chunky Cable Beanie - Gray
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    description: "",
    category: "fashion",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  // Men's Classic-fit Pleated Chino Pants
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  // Men's Athletic Sneaker
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  // Men's Navigator Sunglasses Pilot
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    description: "",
    category: "fashion",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
    "glasses",
      "accessories",
      "shades"
    ]
  },
  // Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  // Vanity Mirror with Heavy Base - Chrome
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  // Women's Fleece Jogger Sweatpant
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  // Double Oval Twist French Wire Earrings - Gold
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  // Round Airtight Food Storage Containers - 5 Piece
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  // Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  // Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  // 100% Cotton Bath Towels - 2 Pack, Light Teal
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    description: "",
    category: "Health & Household",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  // Waterproof Knit Athletic Sneakers - Pink,
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    description: "",
    category: "fashion",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  // Countertop Blender - 64oz, 1400 Watts
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  // 10-Piece Mixing Bowl Set with Lids - Floral
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    description: "",
    category: "Home & Kitchen",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  // 2-Ply Kitchen Paper Towels - 30 Pack
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    description: "",
    category: "Health & Household",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  // Men's Full-Zip Hooded Fleece Sweatshirt
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    description: "",
    category: "fashion",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];

// Variable for storing products to be displayed
let displayProducts = [];
// number of products per page
let itemsPerPage = 12;

function searchProductName(productName){
  let relevantProducts = [];
  products.forEach(product =>{
    if (product.name.toLowerCase().includes(productName.toLowerCase())){
      relevantProducts.push(product);
    }
  });
  return relevantProducts;
}

// generate HTML to display 1 product item
function generateProductHTML(productID){
  let product = products[getProductIndex(productID)];
  let productHTML = `
    <div class="col-lg-3 col-sm-4">
      <div class="card w-100 border-0" style="height:350px">
        <div class="card-header p-0 m-0 bg-white border-0">
          <div class="card-img-top d-flex h-100" onclick="displayItem('${productID}')">
            <img id="" class="photo mx-auto" src="../${product.image}">
          </div>
        </div>
        <div class="card-body overflow-auto">
          <div class="price-ratings-container">
            <div class="price">
              <small class="price-currency">$</small>
              <div class="price-int">${Math.floor(product.priceCents/100)}</div>
              <div class="price cents">${product.priceCents-Math.floor((product.priceCents/100))*100}</div>
            </div>
            <div class="rating">
              ${genRatings(product.rating.stars)}
              <!-- <img class="ratings-img" src="../${getRatingsImage(product.rating.stars)}"> -->
            </div>
          </div>
            <div class="card-title">${product.name}</div>
            <!--
            <div class="card-subtitle h5">${product.description}</div>
            -->
            <div class="card-text">
              <a href="#body-text-${productID}" class="btn-sm btn-primary dropdown-toggle" data-bs-toggle="collapse">Show more</a>
              <div id="body-text-${productID}" class="collapse">
                <p>
                  <b>Brand:</b> ASUS
                  <br>
                  <b>Model Name:</b> ROG Strix G16
                  <br>
                  <b>Screen Size:</b>	16 Inches
                  <br>
                  <b>Color:</b> Eclipse Gray
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex d-none">
            <div class="form-control d-flex p-0 m-0 order-quantity" name="add-to-cart" id="form-qty-${productID}">
                <input class="form-control" type="number" id="input-qty-${productID}" value="1">
                <button class="btn btn-primary" onclick="addToCart('${productID}')">
                <img class="icons" src="../images/icons/cart.png">
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;  
  return productHTML;
}

// Render batch of displayProducts
function loadProducts(batchNumber){
  let productHTML = "";
  if(batchNumber < 1){
    batchNumber = 1;
  }

  for( let i = ((batchNumber- 1)*itemsPerPage); i < (batchNumber*itemsPerPage) ; i++ ){
    if (i === displayProducts.length) break;
    productHTML += generateProductHTML(displayProducts[i].id);
  }
  return productHTML;
}

// generate HTML to display 1 product item
function genCarouselProductHTML(productID){
  let product = products[getProductIndex(productID)];
  let productHTML = `
      <div class="card item w-25 mx-2" style="height:400px; min-width:300px">
        <div class="card-header m-auto bg-white" style="height:60%">
          <div class="card-img-top d-flex justify-content-center" onclick="displayItem('${productID}')">
            <img class="carousel-photo" src="../${product.image}">
          </div>
        </div>
        <div class="card-body overflow-auto">
          <div class="price-ratings-container">
            <div class="price">
              <small class="price-currency">$</small>
              <div class="price-int">${Math.floor(product.priceCents/100)}</div>
              <div class="price cents">${product.priceCents-Math.floor((product.priceCents/100))*100}</div>
            </div>
            <div class="rating">
            ${genRatings(product.rating.stars)}
            <!--
            <img class="ratings-img" src="${getRatingsImage(product.rating.stars)}">
            -->
            </div>
            </div>
            <div class="card-title">${product.name}</div>
          </div>
        </div>
      </div>
  `;  
  return productHTML;
}

// Render batch of displayProducts
function loadCarouselProducts(batchNumber){
  let productHTML = "";
  displayProducts = products
  if(batchNumber < 1){
    batchNumber = 1;
  }

  for( let i = ((batchNumber- 1)*itemsPerPage); i < (batchNumber*itemsPerPage) ; i++ ){
    if (i === displayProducts.length) break;
    productHTML += genCarouselProductHTML(displayProducts[i].id);
  }
  return productHTML;
}

function getProductIndex (productID){
  for (let i=0; i<products.length; i++){
    if (productID == products[i].id){
      return i;
    }
  }
}

function getRatingsImage(rating){
  switch(rating*10){
    case 0:
      return "./images/ratings/rating-0.png";
    case 5:
      return "./images/ratings/rating-05.png";
    case 10:
      return "./images/ratings/rating-10.png";
    case 15:
      return "./images/ratings/rating-15.png";
    case 20:
      return "./images/ratings/rating-20.png";
    case 25:
      return "./images/ratings/rating-25.png";
    case 30:
      return "./images/ratings/rating-30.png";
    case 35:
      return "./images/ratings/rating-35.png";
    case 40:
      return "./images/ratings/rating-40.png";
    case 45:
      return "./images/ratings/rating-45.png";
    case 50:
      return "./images/ratings/rating-50.png";
    default:
      return "";
  }
}

function getCategories(){
  let cats = new Set()
  products.forEach(product => {
    cats.add(product.category)
  })
  return cats;
}

// module.exports.products = { products, getProductIndex, searchProductName, generateProductHTML, loadProducts };
