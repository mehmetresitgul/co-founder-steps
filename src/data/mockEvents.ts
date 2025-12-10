export interface WalkEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  distance: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  maxParticipants: number;
  currentParticipants: number;
  host: {
    name: string;
    avatar: string;
    expertise: string;
  };
  topics: string[];
  imageUrl?: string;
}

export const mockEvents: WalkEvent[] = [
  {
    id: '1',
    title: 'Boğaz Kıyısında Startup Sohbeti',
    description: 'Fintech ve AI alanında deneyimli girişimcilerle tanışın. Yürürken fikir alışverişi yapıp network oluşturun.',
    location: 'Bebek Sahili, İstanbul',
    date: '2025-01-15',
    time: '09:00',
    distance: '5 km',
    difficulty: 'easy',
    maxParticipants: 8,
    currentParticipants: 5,
    host: {
      name: 'Ahmet Yılmaz',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet',
      expertise: 'Fintech Founder'
    },
    topics: ['Fintech', 'AI', 'Seed Funding']
  },
  {
    id: '2',
    title: 'Belgrad Ormanı Tech Walk',
    description: 'Doğanın içinde teknoloji trendleri ve SaaS ürün geliştirme üzerine derin sohbetler.',
    location: 'Belgrad Ormanı, İstanbul',
    date: '2025-01-18',
    time: '08:30',
    distance: '8 km',
    difficulty: 'moderate',
    maxParticipants: 6,
    currentParticipants: 3,
    host: {
      name: 'Elif Demir',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif',
      expertise: 'SaaS Product Manager'
    },
    topics: ['SaaS', 'Product-Market Fit', 'B2B Sales']
  },
  {
    id: '3',
    title: 'Kadıköy Sahil Yürüyüşü',
    description: 'E-ticaret ve marketplace iş modellerini tartışacağımız rahat bir yürüyüş.',
    location: 'Moda Sahili, İstanbul',
    date: '2025-01-20',
    time: '10:00',
    distance: '4 km',
    difficulty: 'easy',
    maxParticipants: 10,
    currentParticipants: 7,
    host: {
      name: 'Can Özkan',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can',
      expertise: 'E-commerce Entrepreneur'
    },
    topics: ['E-ticaret', 'Marketplace', 'Growth Hacking']
  },
  {
    id: '4',
    title: 'ODTÜ Kampüs Turu - Deep Tech',
    description: 'Akademi ve startup ekosisteminin kesişim noktasında deep tech konuları.',
    location: 'ODTÜ Kampüsü, Ankara',
    date: '2025-01-22',
    time: '14:00',
    distance: '6 km',
    difficulty: 'moderate',
    maxParticipants: 8,
    currentParticipants: 4,
    host: {
      name: 'Dr. Zeynep Kaya',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep',
      expertise: 'Deep Tech Researcher'
    },
    topics: ['Deep Tech', 'R&D', 'University Spinoffs']
  },
  {
    id: '5',
    title: 'Ege Sahili Networking',
    description: 'Tourism-tech ve sustainability üzerine deniz manzaralı bir yürüyüş.',
    location: 'Alsancak Kordon, İzmir',
    date: '2025-01-25',
    time: '09:30',
    distance: '5 km',
    difficulty: 'easy',
    maxParticipants: 12,
    currentParticipants: 8,
    host: {
      name: 'Mert Aslan',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mert',
      expertise: 'Tourism-Tech Founder'
    },
    topics: ['Tourism-Tech', 'Sustainability', 'Impact Investing']
  },
  {
    id: '6',
    title: 'Uludağ Dağ Yürüyüşü',
    description: 'Zorlu ama ödüllendirici bir yürüyüşte startup stratejileri konuşalım.',
    location: 'Uludağ, Bursa',
    date: '2025-01-28',
    time: '07:00',
    distance: '12 km',
    difficulty: 'challenging',
    maxParticipants: 6,
    currentParticipants: 2,
    host: {
      name: 'Selin Yıldız',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=selin',
      expertise: 'Serial Entrepreneur'
    },
    topics: ['Scaling', 'Leadership', 'Exit Strategies']
  }
];
