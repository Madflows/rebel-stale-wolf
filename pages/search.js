import Page from '@/components/shared/Page';
import Song from '@/components/Song';
import { useSongs } from '@/store';
import React, { useEffect, useState } from 'react';

function SearchPage() {
  const { songs } = useSongs();
  const [songName, setSongName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let filtered = songs.filter((song) => {
      let tName = song.name;
      tName = tName.toLowerCase();
      return tName.includes(songName.toLowerCase());
    });
    setSearchResult(filtered);
  }, [songs, setSearchResult, songName]);
  return (
    <Page title='Search - Jambox'>
      <div className='flex flex-col gap-4'>
        <input
          type={'text'}
          placeholder='Search by name'
          className='px-4 py-2 w-full bg-gray-50 outline-none border-2'
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          {songName !== '' &&
          searchResult.length > 1 ? (
            searchResult.map((item, index) => <Song song={item} key={index} />)
          ) : songName !== '' && searchResult.length == 0 ? (
            <div>We have nothing like that here</div>
          ) : null}
        </div>
      </div>
    </Page>
  );
}

export default SearchPage;
