import Image from 'next/image';
import { useState } from 'react';

export default function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="p-2">
        <Image src={'/assets/fiter.png'} alt="Filter" width={24} height={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-auto">
            <h1 className="text-lg font-semibold border-b-2">Filters</h1>

            {/* Property Type */}
            <h2 className="mt-6 font-semibold">Property Type</h2>
            <div className="grid grid-cols-2 gap-4">
              {['All Types', 'Retirement Living', 'House', 'Land', 'Townhouse', 'Acreage', 'Apartment & Unit', 'Rural', 'Villa', 'Block Of Units'].map((type) => (
                <div key={type} className="flex items-center">
                  <input type="checkbox" id={type} name="propertyType" value={type} className="mr-2" />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>

            {/* Bedrooms */}
            <h2 className="mt-6 font-semibold">Bedrooms</h2>
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="minBedrooms">Min:</label>
                <select id="minBedrooms" name="minBedrooms" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="maxBedrooms">Max:</label>
                <select id="maxBedrooms" name="maxBedrooms" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bathrooms */}
            <h2 className="mt-6 font-semibold">Bathrooms</h2>
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="minBathrooms">Min:</label>
                <select id="minBathrooms" name="minBathrooms" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="maxBathrooms">Max:</label>
                <select id="maxBathrooms" name="maxBathrooms" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Garage */}
            <h2 className="mt-6 font-semibold">Garage</h2>
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="minGarage">Min:</label>
                <select id="minGarage" name="minGarage" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="maxGarage">Max:</label>
                <select id="maxGarage" name="maxGarage" className="ml-2 p-1">
                  <option value="Any">Any</option>
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Indoor Features */}
            <h2 className="mt-6 font-semibold">Indoor Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Broadband',
                'Floorboards',
                'Gym',
                'Rumpus room',
                'Workshop',
                'Show fewer indoor features'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <input type="checkbox" id={feature} name="indoorFeatures" value={feature} className="mr-2" />
                  <label htmlFor={feature}>{feature}</label>
                </div>
              ))}
            </div>

            {/* Climate Control & Energy */}
            <h2 className="mt-6 font-semibold">Climate Control & Energy</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Air conditioning',
                'Solar panels',
                'Heating',
                'Fireplace',
                'High energy efficiency',
                'Water tank'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <input type="checkbox" id={feature} name="climateControl" value={feature} className="mr-2" />
                  <label htmlFor={feature}>{feature}</label>
                </div>
              ))}
            </div>

            {/* Close Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 border border-black text-black rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
