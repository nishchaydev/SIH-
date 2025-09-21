import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  MapPin, Search, Filter, ChevronDown, ChevronRight, 
  Building, Map, Layers, Database, BarChart3, TrendingUp
} from 'lucide-react';
import { groundwaterData, getStates, getCitiesByState, getDataById, GroundwaterData } from '@/data/groundwaterData';
import AdvancedCharts from './AdvancedCharts';

const GECAssessmentLocations: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'state' | 'city'>('state');
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
  const [selectedData, setSelectedData] = useState<GroundwaterData | null>(null);

  const states = getStates();
  const cities = getCitiesByState(selectedState);

  const filteredData = useMemo(() => {
    let data = viewMode === 'state' ? states : groundwaterData.filter(item => item.type === 'city');
    
    if (selectedState && viewMode === 'city') {
      data = data.filter(item => item.parentId === selectedState);
    }
    
    if (searchQuery) {
      data = data.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return data;
  }, [viewMode, selectedState, searchQuery, states]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-100 border-green-300 text-green-800';
      case 'semi-critical': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'critical': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'over-exploited': return 'bg-red-100 border-red-300 text-red-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return '✅';
      case 'semi-critical': return '⚠️';
      case 'critical': return '🔶';
      case 'over-exploited': return '🚨';
      default: return '📊';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'state': return <Building className="w-4 h-4" />;
      case 'city': return <Map className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  const toggleExpanded = (unitId: string) => {
    const newExpanded = new Set(expandedUnits);
    if (newExpanded.has(unitId)) {
      newExpanded.delete(unitId);
    } else {
      newExpanded.add(unitId);
    }
    setExpandedUnits(newExpanded);
  };

  const handleDataClick = (data: GroundwaterData) => {
    setSelectedData(data);
  };

  const renderDataItem = (item: GroundwaterData, level: number = 0) => {
    const isExpanded = expandedUnits.has(item.id);
    const hasChildren = item.type === 'state' && viewMode === 'state';
    const isFiltered = searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (isFiltered) return null;

    return (
      <div key={item.id} className="border-l-2 border-gray-200 ml-2">
        <div 
          className={`flex items-center justify-between p-4 hover:bg-blue-50/50 cursor-pointer rounded-lg transition-colors ${
            level === 0 ? 'bg-blue-50/30' : 'bg-cyan-50/30'
          }`}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              handleDataClick(item);
            }
          }}
        >
          <div className="flex items-center gap-3">
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
            )}
            {!hasChildren && <div className="w-6" />}
            
            <div className="flex items-center gap-2">
              {getTypeIcon(item.type)}
              <span className="font-medium text-blue-900">{item.name}</span>
              <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                {getStatusIcon(item.status)} {item.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="text-right">
              <div className="text-blue-600">Stage: <span className="font-semibold">{item.stage}%</span></div>
              <div className="text-xs text-gray-600">
                R: {item.recharge}MCM | E: {item.extraction}MCM
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                handleDataClick(item);
              }}
            >
              <BarChart3 className="w-3 h-3 mr-1" />
              View Chart
            </Button>
          </div>
        </div>
        
        {isExpanded && hasChildren && (
          <div className="ml-4 mt-2 space-y-1">
            {getCitiesByState(item.id).map(city => renderDataItem(city, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="w-full bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-cyan-200/50 shadow-sm">
        <div className="p-4 border-b border-cyan-200/30">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-600" />
            <h3 className="text-lg font-semibold text-blue-900">GEC Assessment Locations</h3>
          </div>
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'state' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setViewMode('state');
                  setSelectedState('');
                  setSelectedCity('');
                }}
                className="h-8"
              >
                <Building className="w-4 h-4 mr-1" />
                States
              </Button>
              <Button
                variant={viewMode === 'city' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setViewMode('city');
                  setSelectedCity('');
                }}
                className="h-8"
              >
                <Map className="w-4 h-4 mr-1" />
                Cities
              </Button>
            </div>

            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder={`Search ${viewMode === 'state' ? 'states' : 'cities'}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-cyan-300/50 focus:border-cyan-400"
                />
              </div>
            </div>

            {/* State Filter (for cities view) */}
            {viewMode === 'city' && (
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-48 border-cyan-300/50">
                  <SelectValue placeholder="Filter by State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All States</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state.id} value={state.id}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-2 bg-white/50 rounded">
              <div className="font-bold text-blue-600">{filteredData.length}</div>
              <div className="text-xs text-gray-600">{viewMode === 'state' ? 'States' : 'Cities'}</div>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <div className="font-bold text-green-600">
                {filteredData.filter(item => item.status === 'safe').length}
              </div>
              <div className="text-xs text-gray-600">Safe</div>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded">
              <div className="font-bold text-yellow-600">
                {filteredData.filter(item => item.status === 'semi-critical').length}
              </div>
              <div className="text-xs text-gray-600">Semi-Critical</div>
            </div>
            <div className="text-center p-2 bg-red-50 rounded">
              <div className="font-bold text-red-600">
                {filteredData.filter(item => item.status === 'critical' || item.status === 'over-exploited').length}
              </div>
              <div className="text-xs text-gray-600">Critical/Over</div>
            </div>
          </div>
        </div>
        
        {/* Data List */}
        <div className="p-4 max-h-96 overflow-y-auto">
          <div className="space-y-1">
            {filteredData.map(item => renderDataItem(item))}
          </div>
          
          {searchQuery && filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No {viewMode === 'state' ? 'states' : 'cities'} found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </Card>

      {/* Chart Display */}
      {selectedData && (
        <Card className="w-full bg-gradient-to-br from-green-50/80 to-teal-50/80 border border-green-200/50 shadow-sm">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h4 className="text-lg font-semibold text-green-900">
                  {selectedData.name} - Groundwater Analysis
                </h4>
                <Badge className={`text-xs ${getStatusColor(selectedData.status)}`}>
                  {getStatusIcon(selectedData.status)} {selectedData.status.replace('-', ' ').toUpperCase()}
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedData(null)}
                className="h-8"
              >
                Close
              </Button>
            </div>
            
            <AdvancedCharts 
              data={selectedData} 
              chartType={selectedData.chartType} 
              isFullScreen={false} 
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default GECAssessmentLocations;
