var processor = {
  video: null,

  compileArgs: function() {
    var en = document.getElementById("en").checked;
    var es = document.getElementById("es").checked;
    var fr = document.getElementById("fr").checked;
    var src = en ? "srt/en.srt" : es ? "srt/es.srt" : "srt/fr.srt";
    this.video.setAttribute("subtitles", src);
    document.getElementById("source").setAttribute("href", src);
  },

  doLoad: function() {
    var args = document.getElementById("args");
		
		var self = this;
    args.addEventListener("click", function() {
			self.compileArgs();
			submanager.setSubtitles(video.getAttribute("subtitles"));
    }, true);

    var video = document.getElementById("video");
		this.video = video;

		this.compileArgs();

		var subElt = document.getElementById("subtitle");
		submanager.init(video, subElt);
		submanager.setSubtitles(video.getAttribute("subtitles"));
  }
};


