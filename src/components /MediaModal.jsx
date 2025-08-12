// src/components/MediaModal.js
import React from "react";

function MediaModal({ mediaSrc, mediaType, onClose }) {
  if (!mediaSrc) return null; // No modal if nothing to show

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg relative max-w-3xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          ✕
        </button>

        {/* Image or Video */}
        {mediaType === "image" ? (
          <img src={mediaSrc} alt="Preview" className="w-full h-auto" />
        ) : (
          <video controls autoPlay className="w-full h-auto">
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default MediaModal;