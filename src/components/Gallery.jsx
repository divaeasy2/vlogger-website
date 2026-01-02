import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const GalleryItem = ({ item, onClick }) => {
  const { title, type, thumbnail } = item;
  const isVideo = type === 'video';

  return (
    <div
      className="gallery-item"
      onClick={onClick}
    >
      <img
        src={thumbnail}
        alt={title}
        className="gallery-image"
      />
      <div className="gallery-overlay">
        {isVideo && (
          <div className="bg-sage-600 dark:bg-sky-500 p-3 rounded-full">
            <Play size={32} className="text-white fill-white" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
};

export const Gallery = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video
                src={selectedItem.src}
                controls
                className="w-full h-auto rounded-lg"
                autoPlay
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto rounded-lg"
              />
            )}
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-gray-300">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
