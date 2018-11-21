$( document ).ready(function() {
  const $songList = $('#song-list');

  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr class="song">
        <td class="song-actions">
          <button>
            <span class="song-number">${index+1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td class="song-title">${song.title}</td>
        <td class="song-duration">${player.prettyTime(song.duration)}</td>
      </tr>`);

    song.element.click( event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);
      $('#time-control .total-time').text( player.prettyTime(song.duration) );
    });

    $songList.append(song.element);
  });
});
