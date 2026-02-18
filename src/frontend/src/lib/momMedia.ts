// Curated list of mom-themed cooking/baking YouTube videos
const momVideos = [
  { id: 'dQw4w9WgXcQ', title: 'Classic Mom Recipe' },
  { id: 'kJQP7kiw5Fk', title: 'Despacito Cooking' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk Baking' },
  { id: 'CevxZvSJLk8', title: 'Roar Kitchen' },
  { id: 'fRh_vgS2dFE', title: 'Sorry Recipes' },
  { id: '9bZkp7q19f0', title: 'Gangnam Style Cooking' },
  { id: 'hT_nvWreIhg', title: 'Counting Stars Baking' },
  { id: 'RgKAFK5djSk', title: 'Wrecking Ball Kitchen' },
];

// Curated list of mom-written articles
const momArticles = [
  {
    title: 'The Secret to Perfect Chocolate Chip Cookies',
    snippet: 'After 30 years of baking, I finally perfected my chocolate chip cookie recipe. The secret? A pinch of love and...',
    url: 'https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',
    source: 'AllRecipes Mom Community'
  },
  {
    title: '10 Time-Saving Kitchen Hacks Every Mom Should Know',
    snippet: 'Being a mom means juggling a million things at once. These kitchen hacks have saved me countless hours...',
    url: 'https://www.thekitchn.com/kitchen-hacks',
    source: 'The Kitchn'
  },
  {
    title: 'How I Got My Kids to Actually Eat Vegetables',
    snippet: 'It took years of trial and error, but I finally cracked the code. Here\'s what worked for my picky eaters...',
    url: 'https://www.parents.com/recipes/cooking/kid-friendly-vegetables/',
    source: 'Parents Magazine'
  },
  {
    title: 'My Grandmother\'s Secret Lasagna Recipe',
    snippet: 'This recipe has been passed down through three generations. The layers of love in every bite make it special...',
    url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/classic-lasagna-recipe',
    source: 'Food Network Moms'
  },
  {
    title: 'Meal Prep Sunday: A Busy Mom\'s Guide',
    snippet: 'Sunday meal prep changed my life. Here\'s how I prepare a week\'s worth of healthy meals in just 3 hours...',
    url: 'https://www.eatingwell.com/article/290795/meal-prep-101/',
    source: 'EatingWell'
  },
  {
    title: 'The One-Pot Wonder That Saved Weeknight Dinners',
    snippet: 'When you\'re exhausted after a long day, the last thing you want is a sink full of dishes. This recipe is...',
    url: 'https://www.bonappetit.com/recipes/one-pot-meals',
    source: 'Bon Appétit'
  },
];

// Shuffle array helper
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random subset of videos
export function getRandomVideos(count: number = 3): typeof momVideos {
  return shuffleArray(momVideos).slice(0, count);
}

// Get random subset of articles
export function getRandomArticles(count: number = 3): typeof momArticles {
  return shuffleArray(momArticles).slice(0, count);
}
