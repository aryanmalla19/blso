import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState({ img: '', i: 0 });
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.images) {
          setGalleryImages(data.images);
          setTimeout(function() {
    setLoading(false);
}, 500); // 2000 milliseconds = 2 seconds
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const viewImage = (img, i) => {
    setSelectedImage({ img, i });
  };

  const closeImage = () => {
    setSelectedImage({ img: '', i: 0 });
  };

  return (
    <div className={`w-full`}>
      {selectedImage.img && (
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          top: '0',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: "100",
        }}>
          <button onClick={closeImage} style={{ position: 'absolute', top: '10px', right: '10px', background: "red" }}>
            <IoCloseSharp className='text-4xl text-white' />
          </button>
          <img src={selectedImage.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} alt="" />
        </div>
      )}
      <h1 className='text-center text-main my-2 font-bold text-3xl dark:text-orange md:text-4xl lg:text-5xl text-second'>Gallery</h1>
      <div className={`p-5 md:p-10 ${loading ? "hidden" : "block"}`}>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {galleryImages.map((e, i) => (
            <img src={e.img} key={i} onClick={() => { viewImage(e.img, i) }} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
          ))}
        </div>
      </div>
      <div className={`flex w-full h-64 justify-center items-center ${loading ? "flex" : "hidden"}`}>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      </div>
    </div>
  );
}
