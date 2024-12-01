'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image'
import React from 'react';

const PropertyListings = ({ searchQuery }) => {
  const router = useRouter();

  const handleFindClick24A = () => {
    router.push("/for-sale/24A-Samuel-Street-Peakhurst");
  };
  const handleFindClick131 = () => {
    router.push("/for-sale/131-Amy-Road-Peakhurst");
  };
  const handleFindClick605 = () => {
    router.push("/for-sale/605-Forest-Road-Peakhurst");
  };

  const properties = [
    {
      id: 1,
      name: '24A Samuel Street, Peakhurst, NSW 2210',
      location: 'Peakhurst',
      address: '24A Samuel Street, Peakhurst, NSW 2210',
      bedrooms: 5,
      landsize: '376 m2',
      type: 'Duplex/Semi-detached',
      garageSpace: 2,
      bathRoom: 2,
      images: [
        '/assets/24A.webp',
        '/assets/24a2.jpg',
        '/assets/24a3.jpg',
        '/assets/24a4.jpg',
        '/assets/24a5.jpg'
      ],
      handleClick: handleFindClick24A
    },
    {
      id: 2,
      name: '1/31 Amy Road, Peakhurst, NSW 2210',
      location: 'Peakhurst',
      address: '1/31 Amy Road, Peakhurst, NSW 2210',
      bedrooms: 3,
      landsize: '376 m2',
      type: 'Villa',
      garageSpace: 2,
      bathRoom: 1,
      images: [
        '/assets/1311.jpg',
        '/assets/1312.jpg',
        '/assets/1313.jpg',
        '/assets/1314.jpg',
        '/assets/1315.jpg'
      ],
      handleClick: handleFindClick131
    },
    {
      id: 3,
      name: '605 Forest Road, Peakhurst, NSW 2210',
      location: 'Peakhurst',
      address: '605 Forest Road, Peakhurst, NSW 2210',
      bedrooms: 5,
      landsize: '376 m2',
      type: 'House',
      garageSpace: 2,
      bathRoom: 3,
      images: [
        '/assets/6051.jpg',
        '/assets/6052.jpg',
        '/assets/6053.jpg',
        '/assets/6054.jpg',
        '/assets/6055.jpg'
      ],
      handleClick: handleFindClick605
    }
  ];

  const filteredProperties = searchQuery === 'all'
  ? properties  // Show all properties if searchQuery is 'all'
  : properties.filter((property) => {
      const locationMatch = property.location.toLowerCase().includes(searchQuery.toLowerCase());
      const streetMatch = property.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      return locationMatch || streetMatch;
  });

  return (
    <div className="property-listings my-3">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div key={property.id} className="property-item bg-white shadow-lg rounded-lg p-4 space-y-4">
            {/* Property Images */}
            <div className="property-images relative">
              {/* Mobile View: Scrollable images, one per screen */}
              <div className="block sm:hidden overflow-x-auto">
                <div className="flex">
                  {property.images.map((image, index) => (
                    <div key={index} className="property-image flex-shrink-0 w-full h-80 relative">
                      <Image
                        src={image}
                        alt={`Image of ${property.name} - ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        onClick={property.handleClick}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View: Horizontal carousel */}
              <div className="hidden sm:flex overflow-x-auto space-x-4">
                {property.images.map((image, index) => (
                  <div key={index} className="property-image flex-shrink-0 w-64 h-40 relative">
                    <Image
                      src={image}
                      alt={`Image of ${property.name} - ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      onClick={property.handleClick}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="property-details">
              <h1 className="mt-4 mb-2 mx-4 text-[12px] tracking-wider font-semibold">{property.name}</h1>
              <div className="mx-4 flex gap-1 justify-start items-center">
                <p className="text-[12px] tracking-wider">{property.bedrooms}B</p>
                <p className="text-[12px] tracking-wider">{property.bathRoom}B</p>
                <p className="text-[12px] tracking-wider">{property.garageSpace}C</p>
                <p className="text-[12px] tracking-wider"> | {property.type}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No properties found for {searchQuery}.</p>
      )}
    </div>
  );
};

export default PropertyListings;
