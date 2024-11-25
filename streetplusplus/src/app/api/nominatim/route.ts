import { NextRequest, NextResponse } from 'next/server';
import NodeCache from 'node-cache';

// Cache for storing API results (TTL: 1 hour)
const cache = new NodeCache({ stdTTL: 3600 });

// Fetch data from Nominatim
async function fetchNominatimData(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'YourAppName/1.0 (contact@example.com)' },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data from Nominatim.');
  }
  return await response.json();
}

// GET handler for the API
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const query = searchParams.get('query');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  // Validate input
  if (!type || (type === 'geocode' && !query) || (type === 'reverse' && (!lat || !lon))) {
    return NextResponse.json({ error: 'Invalid parameters.' }, { status: 400 });
  }

  // Build Nominatim URL
  const url =
    type === 'geocode'
      ? `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query!)}&format=json`
      : `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(lat!)}&lon=${encodeURIComponent(lon!)}&format=json`;

  // Check cache
  const cacheKey = `${type}-${query || `${lat},${lon}`}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  // Fetch data from Nominatim
  try {
    const data = await fetchNominatimData(url);
    cache.set(cacheKey, data); // Save to cache
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
