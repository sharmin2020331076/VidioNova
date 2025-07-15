
import { Play, Pause, Volume2, Shuffle, Edit, Zap, Star, ChevronDown, Mic, Image, FileText } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [selectedVideoType, setSelectedVideoType] = useState('I want Explainer Videos');
  const [prompt, setPrompt] = useState('Imagine a playful elephant calf skating on snow, decked out in a vibrant patchwork outfit and oversized glasses. It slides effortlessly on sparkling ice before leaping a colorful trail behind.');
  const [isPlaying, setIsPlaying] = useState(false);

  const videoTypes = [
    'I want Explainer Videos',
    'I want Product Videos',
    'I want Educational Videos',
    'I want Marketing Videos',
    'I want Social Media Videos'
  ];

  const sampleVideos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
      title: 'Elephant Adventure'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=200&fit=crop',
      title: 'Cute Elephant'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=300&h=200&fit=crop',
      title: 'Baby Elephant'
    },
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
      title: 'Elephant Adventure'
    },
  ];

  const features = [
    { icon: Mic, label: 'AI Voice', active: true },
    { icon: Image, label: 'AI Backgrounds', active: false },
    { icon: FileText, label: 'AI Script Generator', active: false }
  ];

  const toolbarIcons = [
    { icon: Shuffle, label: 'Shuffle' },
    { icon: Pause, label: 'Pause' },
    { icon: Volume2, label: 'Volume' },
    { icon: Edit, label: 'Edit' },
    { icon: Zap, label: 'Effects' },
    { icon: Star, label: 'Favorites' }
  ];

  const generateWaveform = () => {
    const bars = [];
    for (let i = 0; i < 80; i++) {
      const height = Math.random() * 40 + 10;
      bars.push(
        <div
          key={i}
          className="bg-purple-400 w-1 rounded-full transition-all duration-300"
          style={{ height: `${height}px` }}
        />
      );
    }
    return bars;
  };

  return (
    <div className="min-h-screen text-white overflow-hidden pt-20">
      <div className="relative z-10 w-full lg:p-32 p-4 flex flex-col items-center justify-center">

        <div className="flex flex-col space-y-4 ">
            <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full shadow-2xl p-2 flex items-center justify-between space-x-1">
                <hr className="border-1 border-[#C77DFF] w-3"/>
                <span className="text-white font-semibold text-center">Unlock Your Creative Potential</span>
                <hr className="border-1 border-[#C77DFF] w-3"/>
                
            </div>
            </div>

            <div className="flex items-center justify-center flex-col mb-6">
                <span className="text-center text-3xl md:text-4xl lg:text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-[#ff03c0]">Fastest and Easiest Way</span>
                <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-bold ">
                to Generate Short{' '}
                <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-500">Videos</span></p>
            </div>

            <div className="flex items-center justify-center flex-col mb-14">
                <p className="text-center text-[17px] text-white/80">Produce endless short videos instantly. Automatically generate</p>
                <p className="text-center text-[17px] text-white/80">captions, effects, backgrounds and music.</p>
            </div>
        </div>


        {/* grid lg:grid-cols-2 grid-col gap-8 lg:p-0 p-8  */}
        {/* Main Interface */}
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row w-full items-center justify-center lg:p-0 p-8 space-x-4">
          {/* Left Panel - Controls */}
          <div className="bg-gray-800/50 backdrop-blur-2xl rounded-2xl lg:w-1/2 w-full p-8 border border-gray-700/50">
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Turn your Text into Video</h2>
            </div>

            {/* Video Type Selector */}
            <div className="mb-8">
              <label className="block text-gray-300 mb-3 font-medium">Select video type</label>
              <div className="relative">
                <select
                  value={selectedVideoType}
                  onChange={(e) => setSelectedVideoType(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {videoTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Prompt Input */}
            <div className="mb-8">
              <label className="block text-gray-300 mb-3 font-medium">Write your #Prompt in your language</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
                placeholder="Describe your video..."
              />
            </div>

            {/* Generate Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Generate
            </button>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col lg:w-1/2 w-full  space-y-6">
            {/* Video Preview Grid */}
            <div className="grid grid-cols-2 gap-4">
              {sampleVideos.map((video) => (
                <div
                  key={video.id}
                  className="relative group rounded-xl overflow-hidden bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Toolbar */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex justify-between space-x-2 pr-4 pl-4">
                {toolbarIcons.map((tool, index) => (
                  <button
                    key={index}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <tool.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Waveform */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-center space-x-1">
                {generateWaveform()}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center flex-wrap p-8 sm:space-x-8 space-x-4 space-y-8 md:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                feature.active
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-gray-800/50 border-gray-600 text-gray-400 hover:border-gray-500'
              }`}
            >
              <feature.icon className="w-5 h-5" />
              <span className="font-medium">{feature.label}</span>
              {feature.active && <div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

