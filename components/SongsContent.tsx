"use client";

import { useState, useEffect } from 'react';

export default function SongsContent() {
  const [error, setError] = useState<string | null>(null);

  const songList = [
    { name: "Milk", spotifyId: "4KWtwwCQPZyHIUGMvOdfGp" },
    { name: "Failing on Easy", spotifyId: "4Ind7HpljeMsNpTFUKoDBX" },
    { name: "Drugdealer", spotifyId: "3QrVeYxL0xCNRIZ2fLQ6Bz" },
    { name: "My Way Back Home", spotifyId: "" }, // Add the correct Spotify ID when available
  ];

  useEffect(() => {
    // Simulating an API call or data fetching
    const fetchSongs = async () => {
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // If the API call was successful, we don't set an error
      } catch (err) {
        setError("Failed to load songs. Please try again later.");
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="bg-[#C0C0C0] text-[#000000] p-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">All Violet Songs</h2>
      {error ? (
        <div className="bg-[#FF0000] text-[#FFFFFF] p-2 mb-4">
          {error}
        </div>
      ) : (
        <ul className="space-y-4">
          {songList.map((song, index) => (
            <li key={index} className="bg-[#FFFFFF] p-2 border border-[#808080]">
              <p className="font-bold">{song.name}</p>
              {song.spotifyId ? (
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              ) : (
                <p className="text-[#808080] italic">Spotify player not available</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
