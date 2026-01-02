import React, { useState } from 'react';
import { Play, X, ZoomIn, MapPin, Calendar, Heart } from 'lucide-react';

export const GalleryItem = ({ item, onClick, span }) => {
  const { title, type, thumbnail, description } = item;
  const isVideo = type === 'video';

  return (
    <div
      className={`gallery-item group cursor-pointer ${span}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl h-full">
        <img
          src={thumbnail}
          alt={title}
          className="gallery-image w-full h-full"
        />
        <div className="gallery-overlay">
          {isVideo && (
            <div className="bg-adventure-500 dark:bg-adventure-600 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <Play size={32} className="text-white fill-white" />
            </div>
          )}
          {!isVideo && (
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <ZoomIn size={24} className="text-white" />
            </div>
          )}
        </div>
      </div>
      
      <div className="gallery-title">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        {description && <p className="text-white/80 text-sm line-clamp-2">{description}</p>}
      </div>

      {isVideo && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-adventure-500 text-white rounded-full text-xs font-semibold">
          VIDEO
        </div>
      )}
    </div>
  );
};

export const Gallery = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Mobile-optimized bento grid layout
  const getSpan = (index) => {
    // Simpler pattern for better mobile display
    const mobilePattern = 'col-span-1 row-span-1';
    
    // Desktop pattern for bento grid effect
    const desktopPatterns = [
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-2',
    ];
    return mobilePattern + ' ' + desktopPatterns[index % 8];
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[280px]">
        {items.map((item, index) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
            span={getSpan(index)}
          />
        ))}
      </div>

      {/* Professional Lightbox Modal with Adventure Theme */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/90 to-slate-950 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button - Premium Design */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-3 sm:top-6 md:top-8 right-3 sm:right-6 md:right-8 text-white/70 hover:text-white transition-all duration-300 p-1.5 sm:p-2 md:p-3 hover:bg-white/10 rounded-full hover:scale-110 backdrop-blur-sm z-10"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          {/* Decorative Elements */}
          <div className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-adventure-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-forest-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div 
            className="relative w-full max-w-6xl animate-scale-in py-4 sm:py-8 md:py-12" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-start">
              {/* Media Container */}
              <div className="md:col-span-3">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-black group">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-adventure-500 via-forest-500 to-adventure-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl sm:rounded-3xl hidden sm:block"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                    {selectedItem.type === 'video' ? (
                      <video
                        src={selectedItem.src}
                        controls
                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover"
                        autoPlay
                      />
                    ) : (
                      <div className="relative">
                        <img
                          src={selectedItem.src}
                          alt={selectedItem.title}
                          className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover"
                        />
                        {/* Zoom Badge */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 hidden sm:flex items-center justify-center group-hover:flex cursor-zoom-in">
                          <ZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Media Type Badge */}
                <div className="mt-3 sm:mt-4 md:mt-6 flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-adventure-500 to-forest-500 text-white font-semibold text-xs sm:text-sm">
                    {selectedItem.type === 'video' ? (
                      <>
                        <Play size={14} className="sm:w-4 sm:h-4 fill-white" />
                        <span>VIDEO</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn size={14} className="sm:w-4 sm:h-4" />
                        <span>PHOTO</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
                {/* Title and Divider */}
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    {selectedItem.title}
                  </h2>
                  <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-adventure-500 via-forest-500 to-earth-500 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Info Cards */}
                <div className="space-y-2 sm:space-y-3 pt-2">
                  {/* Location Card */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10">
                    <MapPin size={18} className="sm:w-5 sm:h-5 text-adventure-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Amazing Destination</span>
                  </div>

                  {/* Date Card */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10">
                    <Calendar size={18} className="sm:w-5 sm:h-5 text-forest-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Travel Experience</span>
                  </div>

                  {/* Favorite Card */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10">
                    <Heart size={18} className="sm:w-5 sm:h-5 text-earth-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Unforgettable Moment</span>
                  </div>
                </div>

                {/* Call-to-Action Button */}
                <button className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-adventure-500 to-forest-500 hover:from-adventure-600 hover:to-forest-600 text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-adventure-500/50 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
