"use client"

import React, { useState, useEffect, useRef, use } from 'react';
import { Moon, Sun, Share, MoreHorizontal, X, ChevronRight, Sparkles, Image, Wand2, Palette, Megaphone, Gift, Play, Download, Star, Zap, ArrowRight, Search, Filter, Bell } from 'lucide-react';

interface FeaturedModel {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  image: string;
  status: string;
  color: string;
  featured: boolean;
  stats: {
    generations: string;
    rating: number;
  };
}

interface Generator {
  id: string;
  name: string;
  description: string;
  icon: string;
  status?: string;
  color: string;
  category: string;
}

interface Tool {
  name: string;
  description: string;
  icon: string;
  status: string;
  users: string;
  category: string;
}

const AIContentPlatform = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animateCards, setAnimateCards] = useState<boolean>(false);
  const [hoveredGenerator, setHoveredGenerator] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Animation trigger on mount
  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 100);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowFilters(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const featuredModels: FeaturedModel[] = [
    {
      id: 'wan22',
      name: 'WAN 2.2',
      description: 'Image generation',
      subtitle: 'Advanced image generation model for photorealistic results with enhanced detail rendering and superior quality output.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      status: 'Pro',
      color: 'from-orange-400 to-orange-600',
      featured: true,
      stats: { generations: '2.1M', rating: 4.8 }
    },
    {
      id: 'flux-krea',
      name: 'Open Source',
      description: 'FLUX.1 Krea',
      subtitle: 'Open-source image generation model optimized for creative and artistic imagery with community-driven improvements.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      status: 'Free',
      color: 'from-blue-400 to-blue-600',
      featured: true,
      stats: { generations: '1.8M', rating: 4.6 }
    }
  ];

  const generators: Generator[] = [
    {
      id: 'image',
      name: 'Image',
      description: 'Generate images and edit existing images',
      icon: '🖼️',
      status: 'Popular',
      color: 'bg-purple-500',
      category: 'Visual'
    },
    {
      id: 'video',
      name: 'Video',
      description: 'Generate and edit video content',
      icon: '🎬',    
      color: 'bg-indigo-500',
      category: 'Video'
    },
    {
      id: 'realtime',
      name: 'Real-time',
      description: 'Generate real-time content',
      icon: '📈',
      color: 'bg-pink-500',
      category: 'Live'
    },
    {
      id: 'enhanced',
      name: 'Enhanced',
      description: 'Enhanced text generation and copywriting assistance',
      icon: '💬',
      color: 'bg-blue-500',
      category: 'Text'
    },
    {
      id: 'edit',
      name: 'Edit',
      description: 'Edit existing content',
      icon: '📝',
      status: 'New',
      color: 'bg-yellow-500',
      category: 'Edit'
    },
   {
     id: 'video-lipsync',
     name: 'Video Lip-sync',
     description: 'Generate and edit video content with lip-sync',
     icon: '🎬',
     status: 'New',
     color: 'bg-indigo-500',
     category: 'Video'
   },
   {
     id: 'video-edit',
     name: 'Video Edit',
     description: 'Edit existing video content',
     icon: '🎬',
     status: 'New',
     color: 'bg-indigo-500',
     category: 'Video'
   },
   {
     id: 'train',
     name: 'Train',
     description: 'Train models for AI-generated content',
     icon: '🔧',
     color: 'bg-indigo-500',
     category: 'ML'
   },
  ];

  const additionalTools: Tool[] = [
    { 
      name: 'ChatGPT Integration', 
      description: 'Enhanced text generation and copywriting assistance',
      icon: '💬',
      status: 'Beta',
      users: '2.1M',
      category: 'Text'
    },
    { 
      name: 'Midjourney', 
      description: 'Advanced AI art generation with artistic styles',
      icon: '🎭',
      status: 'Popular',
      users: '1.8M',
      category: 'Visual'
    },
    { 
      name: 'DALL-E 3', 
      description: 'OpenAI\'s latest image generation model',
      icon: '🖼️',
      status: 'New',
      users: '956K',
      category: 'Visual'
    },
    { 
      name: 'Stable Diffusion', 
      description: 'Open-source image generation with custom models',
      icon: '⚗️',
      status: 'Pro',
      users: '3.2M',
      category: 'Visual'
    }
  ];

  const categories: string[] = ['All', 'Visual', 'Video', 'Text', 'Edit', 'Live'];

  // Filter generators based on search and category
  const filteredGenerators = generators.filter(gen => {
    const matchesSearch = gen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gen.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || gen.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Filter tools based on search and category
  const filteredTools = additionalTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleGeneratorClick = (generatorId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="font-medium">Launching Generator...</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'} border-b backdrop-blur-md sticky top-0 z-40 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Username */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="font-medium">thandekaportiap</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
            
            {/* Center - Search Bar */}
            <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search generators... (Ctrl+K)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Right side - Enhanced buttons */}
            <div className="flex items-center gap-2">
              <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Image className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Gallery</span>
              </button>
                <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <div className="relative w-5 h-5">
                  <Sun className={`absolute inset-0 transition-all duration-300 ${darkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <Moon className={`absolute inset-0 transition-all duration-300 ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
              
              <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Star className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Support</span>
              </button>
              
              <button className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 relative ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-6 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search generators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
            }`}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredModels.map((model, index) => (
              <div 
                key={model.id} 
                className={`relative overflow-hidden rounded-2xl group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                  animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${model.color} p-8 text-white relative min-h-80 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + (i % 3) * 30}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${2 + i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{model.name}</h2>
                        <p className="text-white/90 text-lg">{model.description}</p>
                      </div>
                      {model.status && (
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                          {model.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {model.subtitle}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span>{model.stats.generations}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{model.stats.rating}</span>
                      </div>
                    </div>
                    
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105 hover:shadow-lg">
                      Try {model.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Generate</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                darkMode ? 'hover:bg-gray-700 bg-gray-800' : 'hover:bg-gray-100 bg-white'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Category Pills */}
          <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 overflow-hidden ${
            showFilters ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Generators Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGenerators.map((generator, index) => (
              <div 
                key={generator.id}
                onMouseEnter={() => setHoveredGenerator(generator.id)}
                onMouseLeave={() => setHoveredGenerator(null)}
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} 
                  rounded-xl p-4 cursor-pointer transition-all duration-300 border 
                  ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
                  hover:shadow-xl hover:scale-[1.02] hover:border-blue-500/50
                  ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => handleGeneratorClick(generator.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${generator.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 transition-transform duration-200 ${
                    hoveredGenerator === generator.id ? 'scale-110' : ''
                  }`}>
                    {generator.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{generator.name}</h4>
                      {generator.status && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium animate-pulse ${
                          generator.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {generator.status}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
                      {generator.description}
                    </p>
                  </div>
                  <button className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0 hover:scale-105 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGenerators.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No generators found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/*Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Gallery</h3>
            <div className="flex items-center gap-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Filters</button>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group">
                Show All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border 
                  ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
                  hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]
                  ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-200">{tool.icon}</div>
                  {tool.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 group-hover:scale-105 ${
                      tool.status === 'Beta' ? 'bg-orange-100 text-orange-800' :
                      tool.status === 'New' ? 'bg-green-100 text-green-800' :
                      tool.status === 'Popular' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {tool.status}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">{tool.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 leading-relaxed`}>
                    {tool.description}
                  </p>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} flex items-center justify-between`}>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {tool.users} users
                    </span>
                    <span className="group-hover:text-blue-500 transition-colors duration-200">Open →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
        <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-8`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left side  */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-white text-xs font-bold">K</span>
              </div>
              <span className="font-semibold">Krea AI</span>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-2">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                curated by
              </span>
              <div className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer`}>
                <span className="text-sm font-medium">Mobbin</span>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default AIContentPlatform;