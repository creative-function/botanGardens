"use strict";

console.log("hello chello");
var wp0 = document.getElementById('wp0');
var wp1 = document.getElementById('wp1');
var wp2 = document.getElementById('wp2');
var wp3 = document.getElementById('wp3');
var wp4 = document.getElementById('wp4');
var wp5 = document.getElementById('wp5');
var wp6 = document.getElementById('wp6');
var wp7 = document.getElementById('wp7');
var wp8 = document.getElementById('wp8');
var wp9 = document.getElementById('wp9');
var wp10 = document.getElementById('wp10');
var wp11 = document.getElementById('wp11');
var wp12 = document.getElementById('wp12');
var transDiv = document.querySelector(".transition");

function colorDown(element) {
  if (element.id == "w0") {
    console.log("w0:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp1") {
    console.log("w1:green" + element.id);
    var rabbitHole = document.querySelector(".rabbitHole");
    var tl2 = new TimelineMax();
    tl2.to(transDiv, 2, {
      backgroundColor: "#85A055"
    }).to(rabbitHole, 1, {
      rotation: 25,
      ease: Power2.easeOut
    }).to(rabbitHole, 1, {
      rotation: -25,
      ease: Power2.easeInOut
    }); //green
  } else if (element.id == "wp2") {
    console.log("w2:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp3") {
    console.log("w3:light purple" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#C4BBDD"
    }); //light purple
  } else if (element.id == "wp4a") {
    console.log("w4a:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, .5, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp4") {
    console.log("w4:yellow" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#eded98"
    });
  } else if (element.id == "wp5") {
    console.log("w5:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp6") {
    console.log("w6:baby blue" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#C2D0EB"
    }); // baby blue
  } else if (element.id == "wp7") {
    console.log("w7:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp8") {
    console.log("w8:purple" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#755f88"
    });
  } else if (element.id == "wp9") {
    console.log("w9:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp10") {
    console.log("w10:pink" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "#C4888E"
    }); //salmon pink
  } else if (element.id == "wp11") {
    console.log("w11:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp12") {
    console.log("w12:yellow" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#8ca99f"
    }); //yellow 
  } else if (element.id == "wp13") {
    console.log("w13:transparent" + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp14") {
    console.log("w14:footer green" + element.id);
    var footerIMG = document.querySelector(".footIMG");
    var tl = new TimelineMax();
    tl.to(footerIMG, 0, {
      opacity: 0
    }).to(transDiv, 2, {
      backgroundColor: "#58a27c"
    }).to(footerIMG, .5, {
      opacity: 1
    }).to(footerIMG, 2.5, {
      rotation: 180,
      ease: Power2.easeInOut
    }).to(footerIMG, 5, {
      rotation: -180,
      ease: Power2.easeInOut
    }); //footer green
  }
}

function colorUp(element) {
  var tl = new TimelineMax();

  if (element.id == "wp0") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp1") {
    console.log("skipped tran");
  } else if (element.id == "wp2") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "#85A055"
    }); //green
  } else if (element.id == "wp3") {
    console.log("trans ready: " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp4a") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "#755f88"
    }); //light purple
  } else if (element.id == "wp4") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp5") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "#eded98"
    });
  } else if (element.id == "wp6") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp7") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "#C2D0EB"
    }); // baby blue
  } else if (element.id == "wp8") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp9") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "#755f88"
    });
  } else if (element.id == "wp10") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3.5, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp11") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 3, {
      backgroundColor: "#C4888E"
    }); //salmon pink
  } else if (element.id == "wp12") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "none"
    });
  } else if (element.id == "wp13") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 4, {
      backgroundColor: "#8ca99f"
    }); //moss green
  } else if (element.id == "wp14") {
    console.log("point ready " + element.id);
    var tl = new TimelineMax();
    tl.to(transDiv, 2, {
      backgroundColor: "none"
    });
  }
}

var waypoint0 = new Waypoint({
  element: wp0,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp0);
    } else {
      console.log("downer");
      colorDown(wp0);
    }
  }
});
var waypoint1 = new Waypoint({
  element: wp1,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp1);
    } else {
      console.log("downer");
      colorDown(wp1);
    }
  },
  offset: '80%'
});
var waypoint2 = new Waypoint({
  element: wp2,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp2);
    } else {
      console.log("downer");
      colorDown(wp2);
    }
  }
});
var waypoint3 = new Waypoint({
  element: wp3,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp3);
    } else {
      console.log("downer");
      colorDown(wp3);
    }
  }
});
var waypoint4 = new Waypoint({
  element: wp4,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp4);
    } else {
      console.log("downer");
      colorDown(wp4);
    }
  }
});
var waypoint4a = new Waypoint({
  element: wp4a,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp4a);
    } else {
      console.log("downer");
      colorDown(wp4a);
    }
  }
});
var waypoint5 = new Waypoint({
  element: wp5,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp5);
    } else {
      console.log("downer");
      colorDown(wp5);
    }
  }
});
var waypoint6 = new Waypoint({
  element: wp6,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp6);
    } else {
      console.log("downer");
      colorDown(wp6);
    }
  }
});
var waypoint7 = new Waypoint({
  element: wp7,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp7);
    } else {
      console.log("downer");
      colorDown(wp7);
    }
  }
});
var waypoint8 = new Waypoint({
  element: wp8,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp8);
    } else {
      console.log("downer");
      colorDown(wp8);
    }
  }
});
var waypoint9 = new Waypoint({
  element: wp9,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp9);
    } else {
      console.log("downer");
      colorDown(wp9);
    }
  }
});
var waypoint10 = new Waypoint({
  element: wp10,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp10);
    } else {
      console.log("downer");
      colorDown(wp10);
    }
  }
});
var waypoint11 = new Waypoint({
  element: wp11,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp11);
    } else {
      console.log("downer");
      colorDown(wp11);
    }
  },
  offset: "-3%"
});
var waypoint12 = new Waypoint({
  element: wp12,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp12);
    } else {
      console.log("downer");
      colorDown(wp12);
    }
  },
  offset: "50%"
});
var waypoint13 = new Waypoint({
  element: wp13,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp13);
    } else {
      console.log("downer");
      colorDown(wp13);
    }
  }
});
var waypoint14 = new Waypoint({
  element: wp14,
  handler: function handler(direction) {
    if (direction == "up") {
      console.log(this.element);
      colorUp(wp14);
    } else {
      console.log("downer");
      colorDown(wp14);
    }
  }
}); ///animations
//# sourceMappingURL=main.js.map
