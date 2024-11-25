export async function geocode(placeName: string): Promise<any | null> {
    try {
      const response = await fetch(`/api/nominatim?type=geocode&query=${encodeURIComponent(placeName)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch geocoding data.');
      }
      return await response.json();
    } catch (error: unknown) {
      console.error((error as Error).message);
      return null;
    }
  }
  
  export async function reverseGeocode(lat: number, lon: number): Promise<any | null> {
    try {
      const response = await fetch(`/api/nominatim?type=reverse&lat=${lat}&lon=${lon}`);
      if (!response.ok) {
        throw new Error('Failed to fetch reverse geocoding data.');
      }
      return await response.json();
    } catch (error: unknown) {
      console.error((error as Error).message);
      return null;
    }
  }
  