import { useMap } from 'react-leaflet';

const LocateButton = () => {
  const map = useMap(); // Access map context provided by MapContainer

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo([latitude, longitude], 13); // Fly to user's location
        },
        () => {
          alert('Unable to retrieve your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <button
      onClick={handleLocate}
      className="absolute bottom-16 right-4 bg-roadYellow text-roadGray p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center z-1"
      title="Locate Me"
    >
      <span className="material-icons">my_location</span>
    </button>
  );
};

export default LocateButton;
