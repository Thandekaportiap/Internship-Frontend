"use client";

import React, { useState } from 'react';
import { Moon, Sun, Share, MoreHorizontal, X, ChevronRight, Sparkles, Image, Wand2, Palette, Megaphone, Gift, Play, Download, Star, Zap, ArrowRight } from 'lucide-react';

const AIContentPlatform = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredModels = [
    {
      id: 'wan22',
      name: 'WAN 2.2',
      description: 'Image generation',
      subtitle: 'Advanced image generation model for photorealistic results with enhanced detail rendering and superior quality output.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      status: 'Pro',
      color: 'from-orange-400 to-orange-600',
      featured: true
    },
    {
      id: 'flux-krea',
      name: 'Open Source',
      description: 'FLUX.1 Krea',
      subtitle: 'Open-source image generation model optimized for creative and artistic imagery with community-driven improvements.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      status: 'Free',
      color: 'from-blue-400 to-blue-600',
      featured: true
    }
  ];

  const generators = [
    {
      id: 'image',
      name: 'Image',
      description: 'Generate images and edit existing images',
      icon: '🖼️',
      status: 'Popular',
      color: 'bg-purple-500'
    },
    {
      id: 'video',
      name: 'Video',
      description: 'Generate and edit video content',
      icon: '🎬',    
      color: 'bg-indigo-500'  
    },
    {
      id: 'Real-time',
      name: 'Real-time',
      description: 'Generate real-time content',
      icon: '📈',
      color: 'bg-pink-500'  
    },
    {
      id: 'enhanced',
      name: 'Enhanced',
      description: 'Enhanced text generation and copywriting assistance',
      icon: '💬',
      color: 'bg-blue-500'  
    },
    {
      id: 'edit',
      name: 'Edit',
      description: 'Edit existing content',
      icon: '📝',
      status: 'New',
      color: 'bg-yellow-500'
    },
   {
     id: 'video Lip-sync',
     name: 'Video Lip-sync',
     description: 'Generate and edit video content with lip-sync',
     icon: '🎬',
     status: 'New',
     color: 'bg-indigo-500'  
   },
   {
     id: 'video Edit',
     name: 'Video Edit',
     description: 'Edit existing video content',
     icon: '🎬',
     status: 'New',
     color: 'bg-indigo-500'  
   },
   {
     id: 'train',
     name: 'Train',
     description: 'Train models for AI-generated content',
     icon: '🔧',
     color: 'bg-indigo-500'  
   },
  ];

  const additionalTools = [
    { 
      name: 'ChatGPT Integration', 
      description: 'Enhanced text generation and copywriting assistance',
      icon: '💬',
      status: 'Beta',
      users: '2.1M'
    },
    { 
      name: 'Midjourney', 
      description: 'Advanced AI art generation with artistic styles',
      icon: '🎭',
      status: 'Popular',
      users: '1.8M'
    },
    { 
      name: 'DALL-E 3', 
      description: 'OpenAI\'s latest image generation model',
      icon: '🖼️',
      status: 'New',
      users: '956K'
    },
    { 
      name: 'Stable Diffusion', 
      description: 'Open-source image generation with custom models',
      icon: '⚗️',
      status: 'Pro',
      users: '3.2M'
    }
  ];

   return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
       <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Username */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="font-medium">thandekaportiap</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </div>
            
            {/* Right side - Gallery, Support, Bell, Theme toggle */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Image className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Gallery</span>
              </button>
              
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Star className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Support</span>
              </button>
              
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                <Zap className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Featured Models Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredModels.map((model) => (
              <div key={model.id} className="relative overflow-hidden rounded-2xl">
                <div className={`bg-gradient-to-br ${model.color} p-8 text-white relative min-h-80`}>
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{model.name}</h2>
                        <p className="text-white/90 text-lg">{model.description}</p>
                      </div>
                      {model.status && (
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {model.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white/80 mb-8 leading-relaxed">
                      {model.subtitle}
                    </p>
                    
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                      Try {model.name}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Generate</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              Show All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {generators.map((generator) => (
              <div key={generator.id} className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-4 cursor-pointer transition-colors border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${generator.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                    {generator.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{generator.name}</h4>
                      {generator.status && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                          {generator.status}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
                      {generator.description}
                    </p>
                  </div>
                  <button className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex-shrink-0 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Gallery</h3>
            <div className="flex items-center gap-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">Filters</button>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                Show All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalTools.map((tool, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-all cursor-pointer`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{tool.icon}</div>
                  {tool.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                  <h4 className="font-semibold mb-2">{tool.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 leading-relaxed`}>
                    {tool.description}
                  </p>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} flex items-center justify-between`}>
                    <span>{tool.users} users</span>
                    <span>Open</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-8`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">K</span>
              </div>
              <span className="font-semibold">Krea AI</span>
            </div>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              curated by
            </span>
            <div className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
              <span className="text-sm font-medium">Mobbin</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIContentPlatform;