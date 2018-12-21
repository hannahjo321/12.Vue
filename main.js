var mApp = new Vue ({
  el: '#musicApp',
  data: {
    title: 'Itunes App',
    term:'',
    songs: []
  },
  methods: {
    search(){
      fetch( 'http://itunes.apple.com/search?term=' + this.term)
      .then(data => data.JSON() )
      .then(data => {
        this.songs = data.results;
        console.log(songs);

      });
    }
  }
})
