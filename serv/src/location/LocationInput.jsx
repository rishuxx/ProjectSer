import React, { useState, useEffect, useRef } from "react";
import getPlaces from "../API/getPlaces"; // Assuming getPlaces is in ../API/getPlaces

const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Get the user's location when the component mounts
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_TOKEN; // Replace with your Mapbox API key
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.features.length > 0) {
        const { place_name } = data.features[0];
        setAddress(place_name);
        onLocationChange({ latitude, longitude, address: place_name });
      } else {
        console.error("Unable to reverse geocode coordinates");
      }
    } catch (error) {
      console.error("Error reverse geocoding coordinates:", error);
    }
  };

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setAddress(query);

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const suggestions = await getPlaces(query);
      setSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const [longitude, latitude] = suggestion.center;
    setAddress(suggestion.place_name);
    setLocation({ latitude, longitude });
    setSuggestions([]);
    inputRef.current.blur();
    onLocationChange({ latitude, longitude, address: suggestion.place_name });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an address or location"
        value={address}
        onChange={handleInputChange}
        ref={inputRef}
        className="text-black"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer"
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={getUserLocation}
        className="btn btn-ghost btn-xl bg-red-500 ml-10"
      >
        Get Location
      </button>
    </div>
  );
};

export default LocationInput;
