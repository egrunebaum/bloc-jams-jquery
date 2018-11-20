  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') {
      return;
    }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex <= -1) {
      return;
    };

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
