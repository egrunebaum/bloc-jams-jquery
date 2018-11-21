$( document ).ready(function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);
    const totalTime = player.prettyTime(player.currentlyPlaying.duration);
    $('#time-control .total-time').text( totalTime );
  });

  $('button#previous').click( function() {
    if (player.playState !== 'playing') { return false }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    if (currentSongIndex < 1) { return; }

    const newSong = album.songs[prevSongIndex];
    player.playPause(newSong);
    $('#time-control .total-time').text( player.prettyTime(newSong.duration) );
  });

  $('button#next').click( function() {
    if (player.playState !== 'playing') { return false }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
    $('#time-control .total-time').text( player.prettyTime(newSong.duration) );
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

  setInterval( () => {
    // if (player.playState !== 'playing') { return false }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( player.prettyTime(currentTime) );
    $('#time-control input').val(percent);
  }, 1000);
});
