import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';

declare global {
  interface Window {
    L: any;
  }
}

type CityKey = 'madrid' | 'barcelona' | 'valencia';

interface Spot {
  id: string;
  name: string;
  desc: string;
  lat: number;
  lng: number;
  type: 'urban' | 'nature' | 'historic';
}

interface CityData {
  center: [number, number];
  zoom: number;
  spots: Spot[];
}

const CitySpotsMap: React.FC = () => {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [activeCity, setActiveCity] = useState<CityKey>('madrid');
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  const cities: Record<CityKey, CityData> = {
    madrid: {
      center: [40.4168, -3.7038],
      zoom: 13,
      spots: [
        { ...t.citySpots.spots.madrid[0], lat: 40.4240, lng: -3.7176, type: 'historic' },
        { ...t.citySpots.spots.madrid[1], lat: 40.4203, lng: -3.7058, type: 'urban' },
        { ...t.citySpots.spots.madrid[2], lat: 40.3956, lng: -3.7001, type: 'nature' },
      ]
    },
    barcelona: {
      center: [41.3851, 2.1734],
      zoom: 13,
      spots: [
        { ...t.citySpots.spots.barcelona[0], lat: 41.4193, lng: 2.1617, type: 'historic' },
        { ...t.citySpots.spots.barcelona[1], lat: 41.3831, lng: 2.1669, type: 'urban' },
        { ...t.citySpots.spots.barcelona[2], lat: 41.3825, lng: 2.1769, type: 'historic' },
      ]
    },
    valencia: {
      center: [39.4699, -0.3763],
      zoom: 13,
      spots: [
        { ...t.citySpots.spots.valencia[0], lat: 39.4542, lng: -0.3551, type: 'urban' },
        { ...t.citySpots.spots.valencia[1], lat: 39.4795, lng: -0.3790, type: 'historic' },
        { ...t.citySpots.spots.valencia[2], lat: 39.3400, lng: -0.3300, type: 'nature' },
      ]
    }
  };

  useEffect(() => {
    if (!mapRef.current || !window.L) return;

    if (!mapInstanceRef.current) {
      // Initialize Map
      const map = window.L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
        center: cities[activeCity].center,
        zoom: cities[activeCity].zoom,
        scrollWheelZoom: false // Prevent scrolling page when scrolling map
      });

      // CartoDB Dark Matter Tiles
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      mapInstanceRef.current = map;

      // Handle window resize to invalidate map size
      window.addEventListener('resize', () => {
        map.invalidateSize();
      });

    } else {
      // Fly to new city
      mapInstanceRef.current.flyTo(cities[activeCity].center, cities[activeCity].zoom, {
        duration: 1.5
      });
    }

    // Clear existing layers (except tiles)
    mapInstanceRef.current.eachLayer((layer: any) => {
      if (!layer._url) { // Simple check to keep tiles
        mapInstanceRef.current.removeLayer(layer);
      }
    });

    // Add Markers
    cities[activeCity].spots.forEach(spot => {
      const color = spot.type === 'urban' ? '#00A3E0' : spot.type === 'nature' ? '#22c55e' : '#eab308';

      const marker = window.L.circleMarker([spot.lat, spot.lng], {
        radius: 8,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(mapInstanceRef.current);

      marker.on('click', () => {
        setSelectedSpot(spot);
      });
    });

  }, [activeCity]);

  return (
    <section className="py-24 bg-charcoal border-t border-white/5 relative z-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <span className="block text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em] mb-4">
              {t.citySpots.title}
            </span>
            <h2 className="text-4xl font-dji font-bold tracking-tight">{t.citySpots.subtitle}</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {(Object.keys(cities) as CityKey[]).map(city => (
              <button
                key={city}
                onClick={() => {
                  setActiveCity(city);
                  setSelectedSpot(null);
                }}
                className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-all ${activeCity === city
                  ? 'bg-dji-blue border-dji-blue text-white'
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
                  }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[500px] w-full border border-white/10 bg-obsidian group">
          {/* Map Container */}
          <div ref={mapRef} className="absolute inset-0 z-0 h-full w-full"></div>

          {/* Spot Detail Overlay */}
          {selectedSpot && (
            <div className="absolute bottom-6 left-6 z-10 bg-obsidian/90 backdrop-blur-md border border-white/10 p-6 max-w-xs animate-fadeIn shadow-2xl">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${selectedSpot.type === 'urban' ? 'bg-dji-blue/20 text-dji-blue' :
                  selectedSpot.type === 'nature' ? 'bg-green-500/20 text-green-500' :
                    'bg-yellow-500/20 text-yellow-500'
                  }`}>
                  {selectedSpot.type}
                </span>
                <button onClick={() => setSelectedSpot(null)} className="text-white/40 hover:text-white">✕</button>
              </div>
              <h3 className="text-xl font-dji font-bold mb-2">{selectedSpot.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{selectedSpot.desc}</p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedSpot.lat},${selectedSpot.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-dji-blue hover:text-white transition-colors group/link"
              >
                {t.citySpots.viewOnMaps}
                <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Hint */}
          {!selectedSpot && (
            <div className="absolute top-6 right-6 z-10 pointer-events-none">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 bg-black/50 px-3 py-1 backdrop-blur-sm">
                Click on markers to explore
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CitySpotsMap;