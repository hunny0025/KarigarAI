// Mock data for KarigarAI marketplace

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  craft: string;
  region: string;
  material: string;
  dimensions?: string;
  weight?: string;
  artisanId: string;
  artisanName: string;
  artisanAvatar: string;
  location: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  story: string;
  createdAt: string;
}

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  location: string;
  region: string;
  craft: string;
  bio: string;
  story: string;
  experience: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  totalSales: number;
  joinedDate: string;
  specialties: string[];
  awards: string[];
}

export interface CraftRegion {
  id: string;
  name: string;
  state: string;
  crafts: string[];
  description: string;
  artisanCount: number;
  image: string;
}

export const craftCategories = [
  'Textiles & Weaving', 'Pottery & Ceramics', 'Wood Carving', 'Metal Work',
  'Jewelry', 'Leather Work', 'Stone Carving', 'Embroidery',
  'Block Printing', 'Lacquerware', 'Bamboo & Cane', 'Papier-Mâché'
];

export const regions = [
  'Rajasthan', 'Gujarat', 'Kashmir', 'West Bengal', 'Tamil Nadu',
  'Kerala', 'Uttar Pradesh', 'Madhya Pradesh', 'Andhra Pradesh',
  'Odisha', 'Assam', 'Karnataka'
];

export const materials = [
  'Cotton', 'Silk', 'Wool', 'Wood', 'Clay', 'Brass', 'Copper',
  'Silver', 'Gold', 'Leather', 'Stone', 'Bamboo', 'Jute', 'Paper'
];

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Banarasi Silk Saree — Royal Blue',
    description: 'Handwoven Banarasi silk saree with intricate gold zari work featuring traditional motifs. Each piece takes 15-20 days to weave on a traditional handloom.',
    price: 12500,
    originalPrice: 15000,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800',
    ],
    category: 'Textiles & Weaving',
    craft: 'Banarasi Weaving',
    region: 'Uttar Pradesh',
    material: 'Silk',
    dimensions: '5.5m x 1.1m',
    weight: '800g',
    artisanId: 'a1',
    artisanName: 'Rajan Ansari',
    artisanAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    location: 'Varanasi, Uttar Pradesh',
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    stockQuantity: 5,
    tags: ['handloom', 'silk', 'wedding', 'traditional', 'zari'],
    story: 'This saree represents generations of weaving expertise from the Ansari family of Varanasi. The intricate patterns are inspired by Mughal architecture and take weeks of meticulous handwork.',
    createdAt: '2025-12-01',
  },
  {
    id: 'p2',
    title: 'Blue Pottery Vase — Jaipur Floral',
    description: 'Traditional Jaipur blue pottery vase with hand-painted floral motifs. Made using a unique technique involving ground quartz stone and raw glaze.',
    price: 2800,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
    ],
    category: 'Pottery & Ceramics',
    craft: 'Blue Pottery',
    region: 'Rajasthan',
    material: 'Clay',
    dimensions: '25cm x 15cm',
    weight: '500g',
    artisanId: 'a2',
    artisanName: 'Priya Kumawat',
    artisanAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200',
    location: 'Jaipur, Rajasthan',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 12,
    tags: ['pottery', 'blue', 'handpainted', 'decorative', 'floral'],
    story: 'Blue pottery is a unique craft of Jaipur, originally brought by Mughal artisans. Priya learned this art from her grandmother and adds her own contemporary touch while preserving traditional techniques.',
    createdAt: '2025-11-15',
  },
  {
    id: 'p3',
    title: 'Kashmiri Pashmina Shawl',
    description: 'Pure Kashmiri Pashmina shawl with hand-embroidered paisley patterns. Made from the finest cashmere wool from Changthangi goats.',
    price: 18500,
    originalPrice: 22000,
    images: [
      'https://images.unsplash.com/photo-1601244005535-a48ba69f3253?w=800',
    ],
    category: 'Textiles & Weaving',
    craft: 'Pashmina Weaving',
    region: 'Kashmir',
    material: 'Wool',
    dimensions: '200cm x 70cm',
    weight: '200g',
    artisanId: 'a3',
    artisanName: 'Gulam Nabi Dar',
    artisanAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    location: 'Srinagar, Kashmir',
    rating: 5.0,
    reviewCount: 64,
    inStock: true,
    stockQuantity: 3,
    tags: ['pashmina', 'cashmere', 'embroidery', 'luxury', 'warm'],
    story: 'Pashmina weaving in Kashmir dates back over 600 years. Gulam Nabi represents the third generation of master weavers, creating each piece with the patience and precision passed down through centuries.',
    createdAt: '2025-10-20',
  },
  {
    id: 'p4',
    title: 'Dhokra Brass Dancing Figure',
    description: 'Lost-wax cast brass figurine depicting a traditional tribal dancer. Each piece is unique, handcrafted using the 4000-year-old Dhokra technique.',
    price: 3500,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800',
    ],
    category: 'Metal Work',
    craft: 'Dhokra Casting',
    region: 'West Bengal',
    material: 'Brass',
    dimensions: '18cm x 8cm x 6cm',
    weight: '650g',
    artisanId: 'a4',
    artisanName: 'Sunil Karmakar',
    artisanAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    location: 'Bankura, West Bengal',
    rating: 4.8,
    reviewCount: 53,
    inStock: true,
    stockQuantity: 8,
    tags: ['brass', 'dhokra', 'tribal', 'sculpture', 'handcast'],
    story: 'Dhokra is one of the oldest known metal casting techniques, with origins in the Indus Valley Civilization. Sunil uses the same lost-wax method his ancestors used 4000 years ago.',
    createdAt: '2025-11-28',
  },
  {
    id: 'p5',
    title: 'Madhubani Painting — Tree of Life',
    description: 'Traditional Madhubani painting on handmade paper depicting the Tree of Life. Uses natural dyes and the distinctive double-line technique.',
    price: 4200,
    images: [
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800',
    ],
    category: 'Embroidery',
    craft: 'Madhubani Painting',
    region: 'West Bengal',
    material: 'Paper',
    dimensions: '60cm x 45cm',
    artisanId: 'a5',
    artisanName: 'Anita Devi',
    artisanAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    location: 'Madhubani, Bihar',
    rating: 4.6,
    reviewCount: 41,
    inStock: true,
    stockQuantity: 6,
    tags: ['painting', 'madhubani', 'wall-art', 'natural-dyes', 'traditional'],
    story: 'Madhubani art originated in the Mithila region of Bihar. Anita learned this ancient art form from her mother and grandmother, preserving stories and mythologies through intricate paintings.',
    createdAt: '2025-12-05',
  },
  {
    id: 'p6',
    title: 'Bidri Silver Inlay Box',
    description: 'Exquisite Bidri work box with pure silver inlay on oxidized zinc alloy. Geometric patterns inspired by the architecture of Bidar.',
    price: 6800,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    ],
    category: 'Metal Work',
    craft: 'Bidri Work',
    region: 'Karnataka',
    material: 'Silver',
    dimensions: '12cm x 8cm x 6cm',
    weight: '400g',
    artisanId: 'a6',
    artisanName: 'Mohammed Shah',
    artisanAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    location: 'Bidar, Karnataka',
    rating: 4.9,
    reviewCount: 37,
    inStock: true,
    stockQuantity: 4,
    tags: ['bidri', 'silver', 'inlay', 'luxury', 'box'],
    story: 'Bidri craft dates back to the 14th century Bahmani Sultans. Mohammed Shah family has been perfecting this unique art of silver inlay on blackened metal for seven generations.',
    createdAt: '2025-11-10',
  },
  {
    id: 'p7',
    title: 'Chikankari Embroidered Kurta',
    description: 'Hand-embroidered Chikankari kurta in finest muslin cotton. Features the classic shadow-work technique with floral motifs.',
    price: 3200,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    ],
    category: 'Embroidery',
    craft: 'Chikankari',
    region: 'Uttar Pradesh',
    material: 'Cotton',
    dimensions: 'Size M',
    artisanId: 'a1',
    artisanName: 'Rajan Ansari',
    artisanAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4.5,
    reviewCount: 72,
    inStock: true,
    stockQuantity: 15,
    tags: ['chikankari', 'embroidery', 'cotton', 'kurta', 'lucknow'],
    story: 'Chikankari embroidery from Lucknow is known for its delicate, white-on-white threadwork. This technique involves 36 different stitches and can take up to 3 months to complete.',
    createdAt: '2025-12-10',
  },
  {
    id: 'p8',
    title: 'Tanjore Painting — Lord Ganesha',
    description: 'Classical Tanjore painting with gold foil and semi-precious stones. Features Lord Ganesha in the traditional South Indian style.',
    price: 15000,
    originalPrice: 18000,
    images: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800',
    ],
    category: 'Embroidery',
    craft: 'Tanjore Painting',
    region: 'Tamil Nadu',
    material: 'Wood',
    dimensions: '45cm x 35cm',
    weight: '2kg',
    artisanId: 'a7',
    artisanName: 'Lakshmi Narayanan',
    artisanAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    location: 'Thanjavur, Tamil Nadu',
    rating: 4.8,
    reviewCount: 28,
    inStock: true,
    stockQuantity: 2,
    tags: ['tanjore', 'painting', 'gold', 'religious', 'wall-art'],
    story: 'Tanjore paintings originated in the Maratha court of Thanjavur. Lakshmi uses real gold foil and semi-precious stones, taking up to a month to complete each masterpiece.',
    createdAt: '2025-11-22',
  },
];

export const artisans: Artisan[] = [
  {
    id: 'a1',
    name: 'Rajan Ansari',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200',
    location: 'Varanasi, Uttar Pradesh',
    region: 'Uttar Pradesh',
    craft: 'Banarasi Weaving',
    bio: 'Master weaver specializing in Banarasi silk sarees and Chikankari embroidery. Third-generation artisan keeping alive the rich textile traditions of Varanasi.',
    story: 'Growing up in the narrow lanes of Varanasi, Rajan learned to weave on his grandfather\'s handloom at the age of 12. Today, his sarees are worn at weddings across the world.',
    experience: '25 years',
    rating: 4.9,
    reviewCount: 199,
    productCount: 45,
    totalSales: 890,
    joinedDate: '2024-01-15',
    specialties: ['Banarasi Silk', 'Zari Work', 'Brocade', 'Chikankari'],
    awards: ['National Handicraft Award 2022', 'State Shilp Guru 2020'],
  },
  {
    id: 'a2',
    name: 'Priya Kumawat',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400',
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200',
    location: 'Jaipur, Rajasthan',
    region: 'Rajasthan',
    craft: 'Blue Pottery',
    bio: 'Contemporary blue pottery artist blending traditional Jaipur techniques with modern designs. Her work has been exhibited in galleries across India and abroad.',
    story: 'Priya discovered blue pottery while visiting her grandmother in Jaipur. She was mesmerized by the cobalt blue hues and spent years mastering the delicate art of glazing.',
    experience: '15 years',
    rating: 4.7,
    reviewCount: 89,
    productCount: 32,
    totalSales: 450,
    joinedDate: '2024-03-20',
    specialties: ['Blue Pottery', 'Ceramic Art', 'Tiles', 'Tableware'],
    awards: ['Rajasthan Craft Excellence 2023'],
  },
  {
    id: 'a3',
    name: 'Gulam Nabi Dar',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1601244005535-a48ba69f3253?w=1200',
    location: 'Srinagar, Kashmir',
    region: 'Kashmir',
    craft: 'Pashmina Weaving',
    bio: 'Master Pashmina weaver from the Dal Lake area of Srinagar. His family has been weaving the finest Pashmina shawls for over 200 years.',
    story: 'In the cold winters of Kashmir, Gulam Nabi sits at his loom, creating warmth stitch by stitch. His Pashminas are known for their incredible softness and lightness.',
    experience: '35 years',
    rating: 5.0,
    reviewCount: 64,
    productCount: 18,
    totalSales: 320,
    joinedDate: '2024-02-10',
    specialties: ['Pashmina', 'Sozni Embroidery', 'Kani Weaving'],
    awards: ['UNESCO Recognition of Excellence 2021', 'National Award 2019'],
  },
  {
    id: 'a4',
    name: 'Sunil Karmakar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200',
    location: 'Bankura, West Bengal',
    region: 'West Bengal',
    craft: 'Dhokra Casting',
    bio: 'Tribal metal artist preserving the ancient Dhokra lost-wax casting technique. Each piece tells a story from India\'s rich tribal heritage.',
    story: 'Sunil works with fire and molten brass, using the same techniques his ancestors used in the Indus Valley. His workshop is a living museum of 4000-year-old craftsmanship.',
    experience: '20 years',
    rating: 4.8,
    reviewCount: 53,
    productCount: 28,
    totalSales: 380,
    joinedDate: '2024-04-05',
    specialties: ['Dhokra Casting', 'Brass Sculpture', 'Tribal Art'],
    awards: ['West Bengal State Award 2022'],
  },
];

export const craftRegions: CraftRegion[] = [
  { id: 'r1', name: 'Rajasthan', state: 'Rajasthan', crafts: ['Blue Pottery', 'Block Printing', 'Lac Bangles', 'Miniature Painting'], description: 'The land of kings, known for vibrant textiles, blue pottery, and intricate miniature paintings.', artisanCount: 245, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800' },
  { id: 'r2', name: 'Kashmir', state: 'Jammu & Kashmir', crafts: ['Pashmina', 'Carpet Weaving', 'Paper Mache', 'Walnut Wood Carving'], description: 'Paradise on Earth, famous for exquisite Pashmina shawls and intricate wood carvings.', artisanCount: 180, image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800' },
  { id: 'r3', name: 'Varanasi', state: 'Uttar Pradesh', crafts: ['Banarasi Silk', 'Chikankari', 'Zardozi'], description: 'The spiritual capital of India, home to master weavers of Banarasi silk sarees.', artisanCount: 320, image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800' },
  { id: 'r4', name: 'West Bengal', state: 'West Bengal', crafts: ['Dhokra', 'Terracotta', 'Kantha Embroidery', 'Dokra'], description: 'Rich in tribal arts and ancient metal casting traditions dating back millennia.', artisanCount: 190, image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800' },
  { id: 'r5', name: 'Tamil Nadu', state: 'Tamil Nadu', crafts: ['Tanjore Painting', 'Bronze Casting', 'Stone Carving', 'Silk Weaving'], description: 'Temple towns renowned for Tanjore paintings and ancient bronze casting traditions.', artisanCount: 210, image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' },
  { id: 'r6', name: 'Gujarat', state: 'Gujarat', crafts: ['Bandhani', 'Patola', 'Rogan Art', 'Kutchi Embroidery'], description: 'Vibrant textile traditions including the rare double-ikat Patola weaving.', artisanCount: 275, image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800' },
];

export const platformFeatures = [
  { title: 'Direct from Artisans', description: 'Buy directly from craftspeople, ensuring fair prices and preserving livelihoods.', icon: 'HandHeart' },
  { title: 'Authentic Craftsmanship', description: 'Every product is handcrafted using traditional techniques passed down through generations.', icon: 'Award' },
  { title: 'AI-Powered Discovery', description: 'Smart search and recommendations help you discover crafts you\'ll love.', icon: 'Sparkles' },
  { title: 'Secure Transactions', description: 'Safe payments with buyer protection and tracked shipping worldwide.', icon: 'Shield' },
  { title: 'Cultural Stories', description: 'Learn the rich history and cultural significance behind every craft.', icon: 'BookOpen' },
  { title: 'Global Shipping', description: 'We ship handcrafted treasures to doorsteps across the globe.', icon: 'Globe' },
];
