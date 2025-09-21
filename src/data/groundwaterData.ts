// Comprehensive groundwater data for Indian states and cities
export interface GroundwaterData {
  id: string;
  name: string;
  type: 'state' | 'city';
  parentId?: string;
  status: 'safe' | 'semi-critical' | 'critical' | 'over-exploited';
  recharge: number; // MCM
  extraction: number; // MCM
  stage: number; // percentage
  category: string;
  historical: Array<{
    year: number;
    recharge: number;
    extraction: number;
    stage: string;
  }>;
  chartType: 'bar' | 'pie' | 'line' | 'hydrogeological' | 'trend' | 'comparison' | 'distribution';
}

export const groundwaterData: GroundwaterData[] = [
  // Maharashtra
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'state',
    status: 'critical',
    recharge: 1250,
    extraction: 1180,
    stage: 94.4,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 1300, extraction: 1100, stage: '84.6%' },
      { year: 2018, recharge: 1280, extraction: 1120, stage: '87.5%' },
      { year: 2019, recharge: 1260, extraction: 1150, stage: '91.3%' },
      { year: 2020, recharge: 1250, extraction: 1180, stage: '94.4%' }
    ],
    chartType: 'trend'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    type: 'city',
    parentId: 'maharashtra',
    status: 'over-exploited',
    recharge: 150,
    extraction: 185,
    stage: 123.3,
    category: 'over',
    historical: [
      { year: 2017, recharge: 165, extraction: 170, stage: '103.0%' },
      { year: 2018, recharge: 158, extraction: 175, stage: '110.8%' },
      { year: 2019, recharge: 152, extraction: 180, stage: '118.4%' },
      { year: 2020, recharge: 150, extraction: 185, stage: '123.3%' }
    ],
    chartType: 'line'
  },
  {
    id: 'pune',
    name: 'Pune',
    type: 'city',
    parentId: 'maharashtra',
    status: 'semi-critical',
    recharge: 320,
    extraction: 280,
    stage: 87.5,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 340, extraction: 250, stage: '73.5%' },
      { year: 2018, recharge: 335, extraction: 260, stage: '77.6%' },
      { year: 2019, recharge: 325, extraction: 270, stage: '83.1%' },
      { year: 2020, recharge: 320, extraction: 280, stage: '87.5%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    type: 'city',
    parentId: 'maharashtra',
    status: 'critical',
    recharge: 180,
    extraction: 195,
    stage: 108.3,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 200, extraction: 170, stage: '85.0%' },
      { year: 2018, recharge: 195, extraction: 180, stage: '92.3%' },
      { year: 2019, recharge: 185, extraction: 190, stage: '102.7%' },
      { year: 2020, recharge: 180, extraction: 195, stage: '108.3%' }
    ],
    chartType: 'line'
  },
  {
    id: 'nashik',
    name: 'Nashik',
    type: 'city',
    parentId: 'maharashtra',
    status: 'semi-critical',
    recharge: 220,
    extraction: 200,
    stage: 90.9,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 240, extraction: 180, stage: '75.0%' },
      { year: 2018, recharge: 235, extraction: 185, stage: '78.7%' },
      { year: 2019, recharge: 225, extraction: 195, stage: '86.7%' },
      { year: 2020, recharge: 220, extraction: 200, stage: '90.9%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'aurangabad',
    name: 'Aurangabad',
    type: 'city',
    parentId: 'maharashtra',
    status: 'critical',
    recharge: 160,
    extraction: 175,
    stage: 109.4,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 180, extraction: 150, stage: '83.3%' },
      { year: 2018, recharge: 175, extraction: 160, stage: '91.4%' },
      { year: 2019, recharge: 170, extraction: 170, stage: '100.0%' },
      { year: 2020, recharge: 160, extraction: 175, stage: '109.4%' }
    ],
    chartType: 'line'
  },
  {
    id: 'solapur',
    name: 'Solapur',
    type: 'city',
    parentId: 'maharashtra',
    status: 'over-exploited',
    recharge: 140,
    extraction: 165,
    stage: 117.9,
    category: 'over',
    historical: [
      { year: 2017, recharge: 160, extraction: 140, stage: '87.5%' },
      { year: 2018, recharge: 155, extraction: 150, stage: '96.8%' },
      { year: 2019, recharge: 150, extraction: 160, stage: '106.7%' },
      { year: 2020, recharge: 140, extraction: 165, stage: '117.9%' }
    ],
    chartType: 'line'
  },
  {
    id: 'amravati',
    name: 'Amravati',
    type: 'city',
    parentId: 'maharashtra',
    status: 'semi-critical',
    recharge: 190,
    extraction: 170,
    stage: 89.5,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 210, extraction: 150, stage: '71.4%' },
      { year: 2018, recharge: 205, extraction: 155, stage: '75.6%' },
      { year: 2019, recharge: 195, extraction: 165, stage: '84.6%' },
      { year: 2020, recharge: 190, extraction: 170, stage: '89.5%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    type: 'city',
    parentId: 'maharashtra',
    status: 'safe',
    recharge: 280,
    extraction: 200,
    stage: 71.4,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 300, extraction: 180, stage: '60.0%' },
      { year: 2018, recharge: 295, extraction: 185, stage: '62.7%' },
      { year: 2019, recharge: 285, extraction: 195, stage: '68.4%' },
      { year: 2020, recharge: 280, extraction: 200, stage: '71.4%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'sangli',
    name: 'Sangli',
    type: 'city',
    parentId: 'maharashtra',
    status: 'semi-critical',
    recharge: 200,
    extraction: 185,
    stage: 92.5,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 220, extraction: 160, stage: '72.7%' },
      { year: 2018, recharge: 215, extraction: 170, stage: '79.1%' },
      { year: 2019, recharge: 205, extraction: 180, stage: '87.8%' },
      { year: 2020, recharge: 200, extraction: 185, stage: '92.5%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'malegaon',
    name: 'Malegaon',
    type: 'city',
    parentId: 'maharashtra',
    status: 'critical',
    recharge: 120,
    extraction: 135,
    stage: 112.5,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 140, extraction: 110, stage: '78.6%' },
      { year: 2018, recharge: 135, extraction: 120, stage: '88.9%' },
      { year: 2019, recharge: 125, extraction: 130, stage: '104.0%' },
      { year: 2020, recharge: 120, extraction: 135, stage: '112.5%' }
    ],
    chartType: 'line'
  },

  // Karnataka
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'state',
    status: 'semi-critical',
    recharge: 2100,
    extraction: 1650,
    stage: 78.6,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 2200, extraction: 1500, stage: '68.2%' },
      { year: 2018, recharge: 2150, extraction: 1550, stage: '72.1%' },
      { year: 2019, recharge: 2120, extraction: 1600, stage: '75.5%' },
      { year: 2020, recharge: 2100, extraction: 1650, stage: '78.6%' }
    ],
    chartType: 'trend'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    type: 'city',
    parentId: 'karnataka',
    status: 'semi-critical',
    recharge: 320,
    extraction: 250,
    stage: 78.1,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 340, extraction: 220, stage: '64.7%' },
      { year: 2018, recharge: 335, extraction: 230, stage: '68.7%' },
      { year: 2019, recharge: 325, extraction: 240, stage: '73.8%' },
      { year: 2020, recharge: 320, extraction: 250, stage: '78.1%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    type: 'city',
    parentId: 'karnataka',
    status: 'safe',
    recharge: 280,
    extraction: 200,
    stage: 71.4,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 300, extraction: 180, stage: '60.0%' },
      { year: 2018, recharge: 295, extraction: 185, stage: '62.7%' },
      { year: 2019, recharge: 285, extraction: 195, stage: '68.4%' },
      { year: 2020, recharge: 280, extraction: 200, stage: '71.4%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'hubli',
    name: 'Hubli',
    type: 'city',
    parentId: 'karnataka',
    status: 'critical',
    recharge: 180,
    extraction: 195,
    stage: 108.3,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 200, extraction: 170, stage: '85.0%' },
      { year: 2018, recharge: 195, extraction: 180, stage: '92.3%' },
      { year: 2019, recharge: 185, extraction: 190, stage: '102.7%' },
      { year: 2020, recharge: 180, extraction: 195, stage: '108.3%' }
    ],
    chartType: 'line'
  },
  {
    id: 'mangalore',
    name: 'Mangalore',
    type: 'city',
    parentId: 'karnataka',
    status: 'safe',
    recharge: 250,
    extraction: 180,
    stage: 72.0,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 270, extraction: 160, stage: '59.3%' },
      { year: 2018, recharge: 265, extraction: 165, stage: '62.3%' },
      { year: 2019, recharge: 255, extraction: 175, stage: '68.6%' },
      { year: 2020, recharge: 250, extraction: 180, stage: '72.0%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'belgaum',
    name: 'Belgaum',
    type: 'city',
    parentId: 'karnataka',
    status: 'semi-critical',
    recharge: 220,
    extraction: 200,
    stage: 90.9,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 240, extraction: 180, stage: '75.0%' },
      { year: 2018, recharge: 235, extraction: 185, stage: '78.7%' },
      { year: 2019, recharge: 225, extraction: 195, stage: '86.7%' },
      { year: 2020, recharge: 220, extraction: 200, stage: '90.9%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'gulbarga',
    name: 'Gulbarga',
    type: 'city',
    parentId: 'karnataka',
    status: 'over-exploited',
    recharge: 160,
    extraction: 185,
    stage: 115.6,
    category: 'over',
    historical: [
      { year: 2017, recharge: 180, extraction: 150, stage: '83.3%' },
      { year: 2018, recharge: 175, extraction: 160, stage: '91.4%' },
      { year: 2019, recharge: 170, extraction: 175, stage: '102.9%' },
      { year: 2020, recharge: 160, extraction: 185, stage: '115.6%' }
    ],
    chartType: 'line'
  },
  {
    id: 'davangere',
    name: 'Davangere',
    type: 'city',
    parentId: 'karnataka',
    status: 'critical',
    recharge: 140,
    extraction: 155,
    stage: 110.7,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 160, extraction: 130, stage: '81.3%' },
      { year: 2018, recharge: 155, extraction: 140, stage: '90.3%' },
      { year: 2019, recharge: 150, extraction: 150, stage: '100.0%' },
      { year: 2020, recharge: 140, extraction: 155, stage: '110.7%' }
    ],
    chartType: 'line'
  },
  {
    id: 'bellary',
    name: 'Bellary',
    type: 'city',
    parentId: 'karnataka',
    status: 'over-exploited',
    recharge: 120,
    extraction: 145,
    stage: 120.8,
    category: 'over',
    historical: [
      { year: 2017, recharge: 140, extraction: 120, stage: '85.7%' },
      { year: 2018, recharge: 135, extraction: 130, stage: '96.3%' },
      { year: 2019, recharge: 125, extraction: 140, stage: '112.0%' },
      { year: 2020, recharge: 120, extraction: 145, stage: '120.8%' }
    ],
    chartType: 'line'
  },
  {
    id: 'bijapur',
    name: 'Bijapur',
    type: 'city',
    parentId: 'karnataka',
    status: 'semi-critical',
    recharge: 200,
    extraction: 185,
    stage: 92.5,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 220, extraction: 160, stage: '72.7%' },
      { year: 2018, recharge: 215, extraction: 170, stage: '79.1%' },
      { year: 2019, recharge: 205, extraction: 180, stage: '87.8%' },
      { year: 2020, recharge: 200, extraction: 185, stage: '92.5%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'shimoga',
    name: 'Shimoga',
    type: 'city',
    parentId: 'karnataka',
    status: 'safe',
    recharge: 260,
    extraction: 190,
    stage: 73.1,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 280, extraction: 170, stage: '60.7%' },
      { year: 2018, recharge: 275, extraction: 175, stage: '63.6%' },
      { year: 2019, recharge: 265, extraction: 185, stage: '69.8%' },
      { year: 2020, recharge: 260, extraction: 190, stage: '73.1%' }
    ],
    chartType: 'bar'
  },

  // Tamil Nadu
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'state',
    status: 'critical',
    recharge: 1800,
    extraction: 1950,
    stage: 108.3,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 1900, extraction: 1800, stage: '94.7%' },
      { year: 2018, recharge: 1850, extraction: 1850, stage: '100.0%' },
      { year: 2019, recharge: 1820, extraction: 1900, stage: '104.4%' },
      { year: 2020, recharge: 1800, extraction: 1950, stage: '108.3%' }
    ],
    chartType: 'trend'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'over-exploited',
    recharge: 140,
    extraction: 175,
    stage: 125.0,
    category: 'over',
    historical: [
      { year: 2017, recharge: 160, extraction: 150, stage: '93.8%' },
      { year: 2018, recharge: 155, extraction: 160, stage: '103.2%' },
      { year: 2019, recharge: 150, extraction: 170, stage: '113.3%' },
      { year: 2020, recharge: 140, extraction: 175, stage: '125.0%' }
    ],
    chartType: 'line'
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'critical',
    recharge: 200,
    extraction: 220,
    stage: 110.0,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 220, extraction: 180, stage: '81.8%' },
      { year: 2018, recharge: 215, extraction: 190, stage: '88.4%' },
      { year: 2019, recharge: 205, extraction: 210, stage: '102.4%' },
      { year: 2020, recharge: 200, extraction: 220, stage: '110.0%' }
    ],
    chartType: 'line'
  },
  {
    id: 'madurai',
    name: 'Madurai',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'over-exploited',
    recharge: 180,
    extraction: 200,
    stage: 111.1,
    category: 'over',
    historical: [
      { year: 2017, recharge: 200, extraction: 160, stage: '80.0%' },
      { year: 2018, recharge: 195, extraction: 170, stage: '87.2%' },
      { year: 2019, recharge: 185, extraction: 190, stage: '102.7%' },
      { year: 2020, recharge: 180, extraction: 200, stage: '111.1%' }
    ],
    chartType: 'line'
  },
  {
    id: 'tiruchirappalli',
    name: 'Tiruchirappalli',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'critical',
    recharge: 160,
    extraction: 175,
    stage: 109.4,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 180, extraction: 150, stage: '83.3%' },
      { year: 2018, recharge: 175, extraction: 160, stage: '91.4%' },
      { year: 2019, recharge: 170, extraction: 170, stage: '100.0%' },
      { year: 2020, recharge: 160, extraction: 175, stage: '109.4%' }
    ],
    chartType: 'line'
  },
  {
    id: 'salem',
    name: 'Salem',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'semi-critical',
    recharge: 220,
    extraction: 200,
    stage: 90.9,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 240, extraction: 180, stage: '75.0%' },
      { year: 2018, recharge: 235, extraction: 185, stage: '78.7%' },
      { year: 2019, recharge: 225, extraction: 195, stage: '86.7%' },
      { year: 2020, recharge: 220, extraction: 200, stage: '90.9%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'tirunelveli',
    name: 'Tirunelveli',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'safe',
    recharge: 240,
    extraction: 180,
    stage: 75.0,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 260, extraction: 160, stage: '61.5%' },
      { year: 2018, recharge: 255, extraction: 165, stage: '64.7%' },
      { year: 2019, recharge: 245, extraction: 175, stage: '71.4%' },
      { year: 2020, recharge: 240, extraction: 180, stage: '75.0%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'erode',
    name: 'Erode',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'critical',
    recharge: 140,
    extraction: 155,
    stage: 110.7,
    category: 'critical',
    historical: [
      { year: 2017, recharge: 160, extraction: 130, stage: '81.3%' },
      { year: 2018, recharge: 155, extraction: 140, stage: '90.3%' },
      { year: 2019, recharge: 150, extraction: 150, stage: '100.0%' },
      { year: 2020, recharge: 140, extraction: 155, stage: '110.7%' }
    ],
    chartType: 'line'
  },
  {
    id: 'vellore',
    name: 'Vellore',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'semi-critical',
    recharge: 200,
    extraction: 185,
    stage: 92.5,
    category: 'semi',
    historical: [
      { year: 2017, recharge: 220, extraction: 160, stage: '72.7%' },
      { year: 2018, recharge: 215, extraction: 170, stage: '79.1%' },
      { year: 2019, recharge: 205, extraction: 180, stage: '87.8%' },
      { year: 2020, recharge: 200, extraction: 185, stage: '92.5%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'tuticorin',
    name: 'Tuticorin',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'safe',
    recharge: 180,
    extraction: 140,
    stage: 77.8,
    category: 'safe',
    historical: [
      { year: 2017, recharge: 200, extraction: 120, stage: '60.0%' },
      { year: 2018, recharge: 195, extraction: 125, stage: '64.1%' },
      { year: 2019, recharge: 185, extraction: 135, stage: '73.0%' },
      { year: 2020, recharge: 180, extraction: 140, stage: '77.8%' }
    ],
    chartType: 'bar'
  },
  {
    id: 'dindigul',
    name: 'Dindigul',
    type: 'city',
    parentId: 'tamil-nadu',
    status: 'over-exploited',
    recharge: 120,
    extraction: 145,
    stage: 120.8,
    category: 'over',
    historical: [
      { year: 2017, recharge: 140, extraction: 120, stage: '85.7%' },
      { year: 2018, recharge: 135, extraction: 130, stage: '96.3%' },
      { year: 2019, recharge: 125, extraction: 140, stage: '112.0%' },
      { year: 2020, recharge: 120, extraction: 145, stage: '120.8%' }
    ],
    chartType: 'line'
  }
];

// Helper functions
export const getStates = () => groundwaterData.filter(item => item.type === 'state');
export const getCitiesByState = (stateId: string) => groundwaterData.filter(item => item.parentId === stateId);
export const getDataById = (id: string) => groundwaterData.find(item => item.id === id);
export const getCities = () => groundwaterData.filter(item => item.type === 'city');
