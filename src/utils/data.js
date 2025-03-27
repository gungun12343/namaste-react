const resList = [
    {
        id: "10001",
        name: "KFC",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: "3.8",
        costForTwo: 40000,
        costForTwoString: "400 FOR TWO",
        deliveryTime: 36,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQo03qJb8zARMcCQWorEYeujHcrs5SM8EjbQ&s"
    },
    {
        id: "10002",
        name: "McDonald's",
        cuisines: ["Burgers", "Fast Food", "American"],
        avgRating: "4.2",
        costForTwo: 50000,
        costForTwoString: "500 FOR TWO",
        deliveryTime: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16ZTT_mvdBUEmvMsAEjo0Lzo-Hleizud_ig&s"
      },
      {
        id: "10003",
        name: "Domino's Pizza",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: "4.1",
        costForTwo: 60000,
        costForTwoString: "600 FOR TWO",
        deliveryTime: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_rXTMVHgLAeMUwRRzCaNTHYkIe_qg96T6Q&s"
      },
      {
        id: "10004",
        name: "Subway",
        cuisines: ["Healthy Food", "Sandwiches", "Fast Food"],
        avgRating: "4.0",
        costForTwo: 45000,
        costForTwoString: "450 FOR TWO",
        deliveryTime: 28,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/e7d59f8b-5955-471c-8ee3-1a49408a3059_21975.JPG"
      },
      {
        id: "10005",
        name: "Burger King",
        cuisines: ["Burgers", "Fast Food", "American"],
        avgRating: "3.9",
        costForTwo: 48000,
        costForTwoString: "480 FOR TWO",
        deliveryTime: 32,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/c7bdb624-91b6-46cf-a896-9a0a394d6934_5928.jpg"
      },
      {
        id: "10006",
        name: "Pizza Hut",
        cuisines: ["Pizza", "Fast Food", "Italian"],
        avgRating: "4.0",
        costForTwo: 55000,
        costForTwoString: "550 FOR TWO",
        deliveryTime: 27,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzs64ItCPD0EGMSEXaW_g--li4KCc9Ur6kQ&s"
      },
      {
        id: "10007",
        name: "Taco Bell",
        cuisines: ["Mexican", "Fast Food", "Snacks"],
        avgRating: "4.1",
        costForTwo: 52000,
        costForTwoString: "520 FOR TWO",
        deliveryTime: 26,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr69Q4BWoADEwM5RouuB0c0647oWa__1VZeg&s"
      },
      {
        id: "10008",
        name: "Haldiram's",
        cuisines: ["Indian", "Snacks", "Street Food"],
        avgRating: "4.3",
        costForTwo: 40000,
        costForTwoString: "400 FOR TWO",
        deliveryTime: 22,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/1abb89624b491497c8cff182d95ac457"
      },
      {
        id: "10009",
        name: "Bikanervala",
        cuisines: ["Indian", "Sweets", "Street Food"],
        avgRating: "4.2",
        costForTwo: 42000,
        costForTwoString: "420 FOR TWO",
        deliveryTime: 24,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1vPlMo-zFcLGyq2Pd2Y7qGMExJDI0zT34A&s"
      },
      {
        id: "10010",
        name: "Wow! Momo",
        cuisines: ["Tibetan", "Fast Food", "Chinese"],
        avgRating: "4.0",
        costForTwo: 38000,
        costForTwoString: "380 FOR TWO",
        deliveryTime: 29,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PddRpBW6NySUnAFTIQ6zdiCy225XSvBu4A&s"
      },
      {
        id: "10011",
        name: "Chinese Wok",
        cuisines: ["Chinese", "Asian", "Fast Food"],
        avgRating: "4.1",
        costForTwo: 47000,
        costForTwoString: "470 FOR TWO",
        deliveryTime: 31,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN3IY3F5jlT4X0PsMnCh5CQwNHJbZkkoOAA&s"
      },
      {
        id: "10012",
        name: "Dunkin' Donuts",
        cuisines: ["Desserts", "Coffee", "Fast Food"],
        avgRating: "4.0",
        costForTwo: 42000,
        costForTwoString: "420 FOR TWO",
        deliveryTime: 30,
        image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/03/dunkin-donuts-box.jpg?quality=82&strip=1"
      },
      {
        id: "10013",
        name: "Krispy Kreme",
        cuisines: ["Desserts", "Coffee", "Fast Food"],
        avgRating: "4.1",
        costForTwo: 43000,
        costForTwoString: "430 FOR TWO",
        deliveryTime: 27,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EU8bhHb7e28Sg12HSJbkcsZ5f27qYjw95g&s"
      },
      {
        id: "10014",
        name: "Starbucks",
        cuisines: ["Coffee", "Beverages", "Desserts"],
        avgRating: "4.4",
        costForTwo: 60000,
        costForTwoString: "600 FOR TWO",
        deliveryTime: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsX7P5zotAdudkzSAt8CB-hKxIeVe0NrlqDQ&s"
      },
      {
        id: "10015",
        name: "Costa Coffee",
        cuisines: ["Coffee", "Beverages", "Fast Food"],
        avgRating: "4.3",
        costForTwo: 58000,
        costForTwoString: "580 FOR TWO",
        deliveryTime: 22,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogn7ulST3Ydr2CVDp7xdcWrLdG8WZ7Zcz1w&s"
      },
      {
        id: "10016",
        name: "Barista",
        cuisines: ["Coffee", "Beverages", "Snacks"],
        avgRating: "4.2",
        costForTwo: 56000,
        costForTwoString: "560 FOR TWO",
        deliveryTime: 23,
        image: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/5/37ba8456-7aa9-4b5e-ba71-926903ad0775_herod37e94adec7442c894abec833403d6f0.JPG"
      },
      {
        id: "10017",
        name: "The Great Indian Thali",
        cuisines: ["Indian", "Thali", "Rajasthani", "Gujarati"],
        avgRating: "4.5",
        costForTwo: 70000,
        costForTwoString: "700 FOR TWO",
        deliveryTime: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ITPMNd7y_6Ms8dIIomwzUgKef-3FZ04gOA&s"
    },
    {
        id: "10018",
        name: "Sushi Express",
        cuisines: ["Japanese", "Sushi", "Asian"],
        avgRating: "4.6",
        costForTwo: 85000,
        costForTwoString: "850 FOR TWO",
        deliveryTime: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkXozxJ8e5-KH33yVlE9KJF-i-FPABnvj1g&s"
    },
    {
        id: "10019",
        name: "La Pasta Fresca",
        cuisines: ["Italian", "Pasta", "Pizza"],
        avgRating: "4.4",
        costForTwo: 75000,
        costForTwoString: "750 FOR TWO",
        deliveryTime: 38,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s"
    },
    {
        id: "10020",
        name: "Taco Fiesta",
        cuisines: ["Mexican", "Tacos", "Burritos"],
        avgRating: "4.2",
        costForTwo: 60000,
        costForTwoString: "600 FOR TWO",
        deliveryTime: 30,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/27/60/24/soft-and-crispy-taco.jpg?w=900&h=500&s=1"
    },
    {
        id: "10021",
        name: "The Wok House",
        cuisines: ["Chinese", "Asian", "Thai"],
        avgRating: "4.3",
        costForTwo: 55000,
        costForTwoString: "550 FOR TWO",
        deliveryTime: 28,
        image: "https://b.zmtcdn.com/data/pictures/chains/0/20953180/44d538d28233f6348512c1f5b5b6cd17.jpeg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        id: "10022",
        name: "Le Petit Café",
        cuisines: ["French", "Bakery", "Cafe"],
        avgRating: "4.5",
        costForTwo: 50000,
        costForTwoString: "500 FOR TWO",
        deliveryTime: 22,
        image: "https://b.zmtcdn.com/data/reviews_photos/340/0489c85c1709e97643d419bedaec8340_1523094037.jpg"
    },
    {
        id: "10023",
        name: "Spice of Arabia",
        cuisines: ["Middle Eastern", "Lebanese", "Arabian"],
        avgRating: "4.2",
        costForTwo: 68000,
        costForTwoString: "680 FOR TWO",
        deliveryTime: 36,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MyAP5sNmP5Y5AapO51ucp3jHoolv3j4LGw&s"
    },
    {
        id: "10024",
        name: "BBQ Nation",
        cuisines: ["Grill", "BBQ", "Indian"],
        avgRating: "4.6",
        costForTwo: 90000,
        costForTwoString: "900 FOR TWO",
        deliveryTime: 50,
        image: "https://cdn0.weddingwire.in/vendor/0963/3_2/1280/jpg/atmosfire-caterers-by-barbeque-nation-5_15_250963-1567498068.jpeg"
    },
    {
        id: "10025",
        name: "Greek Bites",
        cuisines: ["Greek", "Mediterranean"],
        avgRating: "4.3",
        costForTwo: 65000,
        costForTwoString: "650 FOR TWO",
        deliveryTime: 34,
        image: "https://stirlist.com/wp-content/uploads/2014/05/DSC_42122.jpg"
    },
    {
        id: "10026",
        name: "Soulful Salads",
        cuisines: ["Healthy", "Salads", "Vegan"],
        avgRating: "4.5",
        costForTwo: 48000,
        costForTwoString: "480 FOR TWO",
        deliveryTime: 25,
        image: "https://soulfulandhealthy.com/sites/default/files/styles/hom/public/2022-07/IMG_1571%202.jpeg?itok=X75ISF9t"
    },
    {
        id: "10027",
        name: "Brazilian Steakhouse",
        cuisines: ["Brazilian", "Steakhouse", "BBQ"],
        avgRating: "4.4",
        costForTwo: 88000,
        costForTwoString: "880 FOR TWO",
        deliveryTime: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s"
    },
    {
        id: "10028",
        name: "Joshi Dahi Bada House",
        cuisines: ["Indian", "Street Food", "Fast Food"],
        avgRating: "4.6",
        costForTwo: 30000,
        costForTwoString: "300 FOR TWO",
        deliveryTime: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A18c2_bLt8OeKou23vlO3JyFxyRUjwbm0w&s"
    },
    {
        id: "10029",
        name: "Paakasaala",
        cuisines: ["Indian", "South Indian", "Vegetarian"],
        avgRating: "4.4",
        costForTwo: 50000,
        costForTwoString: "500 FOR TWO",
        deliveryTime: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39fZY0QY97lK18WMI_JihAqQA68dVX0s7IQ&s"
    },
    {
        id: "10030",
        name: "Taas Greens",
        cuisines: ["Indian", "South Indian", "Pure Veg"],
        avgRating: "4.3",
        costForTwo: 45000,
        costForTwoString: "450 FOR TWO",
        deliveryTime: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeS-Oce-Pl4prkz8YzR4fA9x4-dy3s-aAhQ&s"
    },
    {
        id: "10031",
        name: "Andhra Xpress Kitchen",
        cuisines: ["Indian", "Andhra", "Spicy Food"],
        avgRating: "4.5",
        costForTwo: 55000,
        costForTwoString: "550 FOR TWO",
        deliveryTime: 35,
        image: "https://b.zmtcdn.com/data/pictures/chains/0/20964560/b5ef3858f1575a1a574db7dced42760e.jpg?fit=around|960:500&crop=960:500;*,*"
    }
]

export default resList;