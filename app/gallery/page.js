'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'facility', label: 'Our Facilities' },
    { id: 'success', label: 'Success Stories' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take a tour of our state-of-the-art facilities and celebrate our success stories
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-medium">
                      {image.category === 'facility' ? 'Facility' : 'Success Story'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div 
            className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                {selectedImage.category === 'facility' ? 'Our Facility' : 'Success Story'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Facility Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">WORLD-CLASS FACILITIES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our modern facilities are designed to provide the highest quality care in a comfortable environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced IVF Laboratory',
                description: 'Climate-controlled environment with latest embryology equipment'
              },
              {
                title: 'Modern Operation Theaters',
                description: 'Fully equipped surgical suites with advanced monitoring systems'
              },
              {
                title: 'Comfortable Recovery Rooms',
                description: 'Private rooms designed for patient comfort and privacy'
              },
              {
                title: 'Consultation Suites',
                description: 'Private consultation rooms for comfortable discussions'
              },
              {
                title: 'Diagnostic Center',
                description: 'In-house testing facilities for quick and accurate results'
              },
              {
                title: 'Patient Lounge',
                description: 'Relaxing waiting areas with modern amenities'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Schedule a Facility Tour
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Visit us in person to experience our world-class facilities and meet our team
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center text-lg font-semibold">
            Request a Tour
          </button>
        </div>
      </section>
    </>
  );
}