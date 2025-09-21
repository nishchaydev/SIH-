import React, { useState } from 'react';
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
  Building, Map, Layers, Database 
} from 'lucide-react';

interface AssessmentUnit {
  id: string;
  name: string;
  type: 'state' | 'district' | 'block' | 'mandal' | 'taluk';
  status: 'safe' | 'semi-critical' | 'critical' | 'over-exploited';
  recharge: number;
  extraction: number;
  stage: number;
  children?: AssessmentUnit[];
}

const AssessmentUnitSelector: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedBlock, setSelectedBlock] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());

  // Mock data structure following GEC-2015 methodology
  const assessmentData: AssessmentUnit[] = [
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      type: 'state',
      status: 'critical',
      recharge: 1250,
      extraction: 1180,
      stage: 94.4,
      children: [
        {
          id: 'mumbai',
          name: 'Mumbai',
          type: 'district',
          status: 'over-exploited',
          recharge: 150,
          extraction: 185,
          stage: 123.3,
          children: [
            {
              id: 'mumbai-central',
              name: 'Mumbai Central',
              type: 'block',
              status: 'over-exploited',
              recharge: 45,
              extraction: 58,
              stage: 128.9
            },
            {
              id: 'mumbai-west',
              name: 'Mumbai West',
              type: 'block',
              status: 'critical',
              recharge: 52,
              extraction: 61,
              stage: 117.3
            }
          ]
        },
        {
          id: 'pune',
          name: 'Pune',
          type: 'district',
          status: 'semi-critical',
          recharge: 320,
          extraction: 280,
          stage: 87.5,
          children: [
            {
              id: 'pune-city',
              name: 'Pune City',
              type: 'block',
              status: 'critical',
              recharge: 85,
              extraction: 95,
              stage: 111.8
            }
          ]
        }
      ]
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      type: 'state',
      status: 'semi-critical',
      recharge: 2100,
      extraction: 1650,
      stage: 78.6,
      children: [
        {
          id: 'bangalore',
          name: 'Bangalore',
          type: 'district',
          status: 'semi-critical',
          recharge: 320,
          extraction: 250,
          stage: 78.1,
          children: [
            {
              id: 'bangalore-urban',
              name: 'Bangalore Urban',
              type: 'block',
              status: 'critical',
              recharge: 120,
              extraction: 135,
              stage: 112.5
            }
          ]
        }
      ]
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      type: 'state',
      status: 'critical',
      recharge: 1800,
      extraction: 1950,
      stage: 108.3,
      children: [
        {
          id: 'chennai',
          name: 'Chennai',
          type: 'district',
          status: 'over-exploited',
          recharge: 140,
          extraction: 175,
          stage: 125.0
        }
      ]
    }
  ];

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
      case 'district': return <Map className="w-4 h-4" />;
      case 'block': return <Layers className="w-4 h-4" />;
      case 'mandal': return <Layers className="w-4 h-4" />;
      case 'taluk': return <Layers className="w-4 h-4" />;
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

  const renderUnit = (unit: AssessmentUnit, level: number = 0) => {
    const isExpanded = expandedUnits.has(unit.id);
    const hasChildren = unit.children && unit.children.length > 0;
    const isFiltered = searchQuery && !unit.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (isFiltered) return null;

    return (
      <div key={unit.id} className="border-l-2 border-gray-200 ml-2">
        <div 
          className={`flex items-center justify-between p-3 hover:bg-blue-50/50 cursor-pointer rounded-lg transition-colors ${
            level === 0 ? 'bg-blue-50/30' : level === 1 ? 'bg-cyan-50/30' : 'bg-teal-50/30'
          }`}
          onClick={() => hasChildren && toggleExpanded(unit.id)}
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
              {getTypeIcon(unit.type)}
              <span className="font-medium text-blue-900">{unit.name}</span>
              <Badge className={`text-xs ${getStatusColor(unit.status)}`}>
                {getStatusIcon(unit.status)} {unit.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="text-right">
              <div className="text-blue-600">Stage: <span className="font-semibold">{unit.stage}%</span></div>
              <div className="text-xs text-gray-600">
                R: {unit.recharge}MCM | E: {unit.extraction}MCM
              </div>
            </div>
          </div>
        </div>
        
        {isExpanded && hasChildren && (
          <div className="ml-4 mt-2 space-y-1">
            {unit.children?.map(child => renderUnit(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-cyan-200/50 shadow-sm">
      <div className="p-4 border-b border-cyan-200/30">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-blue-900">Assessment Unit Navigator</h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search states, districts, blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-cyan-300/50 focus:border-cyan-400"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-32 border-cyan-300/50">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="border-cyan-300/50">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4 max-h-96 overflow-y-auto">
        <div className="space-y-1">
          {assessmentData.map(unit => renderUnit(unit))}
        </div>
        
        {searchQuery && assessmentData.every(unit => 
          !unit.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !unit.children?.some(child => child.name.toLowerCase().includes(searchQuery.toLowerCase()))
        ) && (
          <div className="text-center py-8 text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No assessment units found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-cyan-200/30 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
        <div className="flex items-center justify-between text-xs text-blue-600">
          <span>Following GEC-2015 Methodology</span>
          <span>Total Units: {assessmentData.length} states</span>
        </div>
      </div>
    </Card>
  );
};

export default AssessmentUnitSelector;
