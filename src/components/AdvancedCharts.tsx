import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { 
  Download, MapPin, TrendingUp, Droplets, AlertTriangle, 
  CheckCircle, Clock, BarChart3, PieChart as PieChartIcon 
} from 'lucide-react';

interface AdvancedChartsProps {
  data: any;
  chartType: 'hydrogeological' | 'trend' | 'comparison' | 'distribution' | 'cross-section';
  isFullScreen?: boolean;
}

const AdvancedCharts: React.FC<AdvancedChartsProps> = ({ data, chartType, isFullScreen = false }) => {
  
  const getHydrogeologicalData = () => [
    { depth: '0-5m', waterLevel: 2.5, quality: 'Good', recharge: 85, extraction: 70 },
    { depth: '5-10m', waterLevel: 4.2, quality: 'Good', recharge: 75, extraction: 65 },
    { depth: '10-15m', waterLevel: 6.8, quality: 'Moderate', recharge: 60, extraction: 55 },
    { depth: '15-20m', waterLevel: 8.5, quality: 'Poor', recharge: 45, extraction: 40 },
    { depth: '20-25m', waterLevel: 12.3, quality: 'Poor', recharge: 30, extraction: 25 },
    { depth: '25-30m', waterLevel: 15.7, quality: 'Very Poor', recharge: 20, extraction: 15 }
  ];

  const getTrendData = () => [
    { year: '2017', recharge: 165, extraction: 170, stage: 103.0, rainfall: 1200 },
    { year: '2018', recharge: 158, extraction: 175, stage: 110.8, rainfall: 1100 },
    { year: '2019', recharge: 152, extraction: 180, stage: 118.4, rainfall: 1000 },
    { year: '2020', recharge: 150, extraction: 185, stage: 123.3, rainfall: 950 },
    { year: '2021', recharge: 145, extraction: 190, stage: 131.0, rainfall: 900 },
    { year: '2022', recharge: 140, extraction: 195, stage: 139.3, rainfall: 850 }
  ];

  const getDistributionData = () => [
    { category: 'Safe', value: 25, color: '#22c55e', count: 1250 },
    { category: 'Semi-Critical', value: 30, color: '#eab308', count: 1500 },
    { category: 'Critical', value: 25, color: '#f97316', count: 1250 },
    { category: 'Over-exploited', value: 20, color: '#ef4444', count: 1000 }
  ];

  const getComparisonData = () => [
    { state: 'Maharashtra', safe: 15, semi: 25, critical: 30, over: 30 },
    { state: 'Karnataka', safe: 20, semi: 35, critical: 25, over: 20 },
    { state: 'Tamil Nadu', safe: 10, semi: 20, critical: 35, over: 35 },
    { state: 'Gujarat', safe: 25, semi: 30, critical: 25, over: 20 },
    { state: 'Rajasthan', safe: 30, semi: 25, critical: 20, over: 25 }
  ];

  const renderHydrogeologicalChart = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Hydrogeological Cross-Section</h4>
        <p className="text-xs text-blue-600">Water Level vs Depth Analysis</p>
      </div>
      
      <ResponsiveContainer width="100%" height={isFullScreen ? 300 : 200}>
        <AreaChart data={getHydrogeologicalData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="depth" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [`${value}m`, name]}
            labelFormatter={(label) => `Depth: ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="waterLevel" 
            stroke="#3b82f6" 
            fill="#3b82f6" 
            fillOpacity={0.3}
            name="Water Level"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-2 text-xs">
        {getHydrogeologicalData().map((item, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded">
            <span className="text-blue-700">{item.depth}</span>
            <div className="flex items-center gap-1">
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  item.quality === 'Good' ? 'border-green-300 text-green-700' :
                  item.quality === 'Moderate' ? 'border-yellow-300 text-yellow-700' :
                  item.quality === 'Poor' ? 'border-orange-300 text-orange-700' :
                  'border-red-300 text-red-700'
                }`}
              >
                {item.quality}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTrendChart = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Multi-Year Trend Analysis</h4>
        <p className="text-xs text-blue-600">Recharge, Extraction & Rainfall Correlation</p>
      </div>
      
      <ResponsiveContainer width="100%" height={isFullScreen ? 300 : 200}>
        <LineChart data={getTrendData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="recharge" 
            stroke="#3b82f6" 
            strokeWidth={2} 
            name="Recharge (MCM)"
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="extraction" 
            stroke="#ef4444" 
            strokeWidth={2} 
            name="Extraction (MCM)"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="rainfall" 
            stroke="#10b981" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            name="Rainfall (mm)"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="text-center p-2 bg-blue-50 rounded">
          <div className="font-semibold text-blue-900">Latest Stage</div>
          <div className="text-lg font-bold text-red-600">139.3%</div>
        </div>
        <div className="text-center p-2 bg-green-50 rounded">
          <div className="font-semibold text-green-900">Trend</div>
          <div className="text-lg font-bold text-red-600">↗️ Rising</div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded">
          <div className="font-semibold text-yellow-900">Status</div>
          <div className="text-lg font-bold text-red-600">🚨 Critical</div>
        </div>
      </div>
    </div>
  );

  const renderDistributionChart = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Assessment Unit Distribution</h4>
        <p className="text-xs text-blue-600">State-wise Groundwater Status</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResponsiveContainer width="100%" height={isFullScreen ? 250 : 180}>
          <PieChart>
            <Pie
              data={getDistributionData()}
              cx="50%"
              cy="50%"
              outerRadius={isFullScreen ? 80 : 60}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {getDistributionData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2">
          {getDistributionData().map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium">{item.category}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">{item.value}%</div>
                <div className="text-xs text-gray-500">{item.count} units</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComparisonChart = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">State-wise Comparison</h4>
        <p className="text-xs text-blue-600">Groundwater Status Across States</p>
      </div>
      
      <ResponsiveContainer width="100%" height={isFullScreen ? 300 : 200}>
        <BarChart data={getComparisonData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="safe" stackId="a" fill="#22c55e" name="Safe" />
          <Bar dataKey="semi" stackId="a" fill="#eab308" name="Semi-Critical" />
          <Bar dataKey="critical" stackId="a" fill="#f97316" name="Critical" />
          <Bar dataKey="over" stackId="a" fill="#ef4444" name="Over-exploited" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderCrossSection = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Geological Cross-Section</h4>
        <p className="text-xs text-blue-600">Subsurface Water Flow Analysis</p>
      </div>
      
      <div className="relative h-64 bg-gradient-to-b from-sky-200 via-blue-300 to-blue-500 rounded-lg overflow-hidden">
        {/* Ground surface */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-green-400"></div>
        
        {/* Water table */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-blue-600"></div>
        
        {/* Aquifer layers */}
        <div className="absolute top-20 left-0 right-0 h-8 bg-blue-200 opacity-60"></div>
        <div className="absolute top-32 left-0 right-0 h-6 bg-blue-300 opacity-40"></div>
        
        {/* Wells */}
        <div className="absolute top-4 left-1/4 w-1 h-60 bg-gray-600"></div>
        <div className="absolute top-4 left-3/4 w-1 h-60 bg-gray-600"></div>
        
        {/* Water levels */}
        <div className="absolute top-16 left-1/4 w-1 h-2 bg-blue-600"></div>
        <div className="absolute top-20 left-3/4 w-1 h-2 bg-blue-600"></div>
        
        {/* Labels */}
        <div className="absolute top-2 left-4 text-xs font-semibold text-green-800">Ground Surface</div>
        <div className="absolute top-18 left-4 text-xs font-semibold text-blue-800">Water Table</div>
        <div className="absolute top-24 left-4 text-xs font-semibold text-blue-700">Aquifer 1</div>
        <div className="absolute top-36 left-4 text-xs font-semibold text-blue-600">Aquifer 2</div>
        
        {/* Depth markers */}
        <div className="absolute right-2 top-8 text-xs text-gray-600">0m</div>
        <div className="absolute right-2 top-20 text-xs text-gray-600">5m</div>
        <div className="absolute right-2 top-32 text-xs text-gray-600">10m</div>
        <div className="absolute right-2 top-44 text-xs text-gray-600">15m</div>
      </div>
    </div>
  );

  const renderChart = () => {
    switch (chartType) {
      case 'hydrogeological':
        return renderHydrogeologicalChart();
      case 'trend':
        return renderTrendChart();
      case 'distribution':
        return renderDistributionChart();
      case 'comparison':
        return renderComparisonChart();
      case 'cross-section':
        return renderCrossSection();
      default:
        return null;
    }
  };

  return (
    <Card className="mt-3 p-3 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-cyan-200/50 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {chartType === 'hydrogeological' ? 'Hydrogeological Analysis' :
             chartType === 'trend' ? 'Trend Analysis' :
             chartType === 'distribution' ? 'Status Distribution' :
             chartType === 'comparison' ? 'State Comparison' :
             'Cross-Section View'}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-6 px-2 text-xs"
        >
          <Download className="w-3 h-3 mr-1" />
          Export
        </Button>
      </div>
      
      <div className={`${isFullScreen ? 'h-80' : 'h-48'}`}>
        {renderChart()}
      </div>
    </Card>
  );
};

export default AdvancedCharts;
