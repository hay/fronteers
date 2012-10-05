var submanager = {
	video: null,
	init: function(videoElt, subElement) {
		this.video = videoElt;
		this._conductor.subElt = subElement;

    var self = this;
    this.video.addEventListener("timeupdate", function() {
      if (self.video.paused || self.video.ended) {
        return;
      }
      self._conductor.update(self.video.currentTime);
    }, false);


	},
	setSubtitles: function(srtURL) {
		this._compileSubtitle(srtURL);
	},


  _compileSubtitle: function(srtURL) {
    var xhr = new XMLHttpRequest();

    this._conductor.flush();
    var self = this;
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        subSource = xhr.responseText;
        subSource = subSource.split("\n");
        self._parseSubtitles(subSource); 
      }
    }
    xhr.open("GET", srtURL, true); 
    xhr.send(null);
  },

  _parseSubtitles: function(srt) {
    var l = 0;

    function eatTheMess(srt, l) {
      while (true) {
        var currentLine = srt[l];
        if (currentLine.indexOf(" --> ") == -1 || currentLine[0] == "#") {
          l++;
          if (l >= srt.length)
            break;
        } else {
          break;
        }
      }
      return l;
    }
    function getTimeCodes(srt, l, t1, t2) {
      function str2seconds(str) {
        var s = str.split(':');
        s[3] = s[2].split(',')[1];
        s[2] = s[2].split(',')[0];
        return (parseInt(s[2], 10) + s[0] * 3600 + s[1] * 60 + s[3] / 1000);
      }
      var currentLine = srt[l];

      var i = currentLine.indexOf(" --> ");
      var t1AsStr = currentLine.substring(0, i);
      var t2AsStr = currentLine.substring(i + 5);
      t1.value = str2seconds(t1AsStr);
      t2.value = str2seconds(t2AsStr);
    }
    function getText(srt, l, text) {
      text.value = srt[l];
    }

    var subTitles = [];
    while (true) {
      var t1 = {};
      var t2 = {};
      var text = {};

      l = eatTheMess(srt, l);
      if (l >= srt.length)
        break;
      getTimeCodes(srt, l, t1, t2);
      l++;
      getText(srt, l, text);
      subTitles.push({t1: t1.value, t2: t2.value, txt: text.value});
      l++;

      if (l >= srt.length) {
        break;
      }
    }
    for (var i in subTitles)
      this._conductor.pool.push(subTitles[i]);
    return;
  },

	_conductor: {
		currentAction: null,
		pool: [],
		displaySubtitle: function(str) {
			this.subElt.innerHTML = str;
			this.subElt.style.visibility = "visible";
		},
		hideSubtitle: function() {
			this.subElt.style.visibility = "hidden";
		},
		flush: function(t) {
			this.hideSubtitle();
			this.currentAction = null;
			this.pool = [];
		},
		update: function(t) {
			if (this.pool.length == 0) return;

			for (var i in this.pool) {
				var a = this.pool[i];
				if (this.currentAction && t >= this.pool[this.currentAction].t2)
					this.hideSubtitle();

				if (t >= a.t1 && t < a.t2) {
					if (this.currentAction != i) {
						this.currentAction = i;
						this.displaySubtitle(a.txt);
					} else {break;}
				}
			}
		}
	}
}
