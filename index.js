var tl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:true,
  }
})

tl.to(".top-div .canimg1", {
   x:-200,
   y:750,
   rotation:340,
})

var tll = gsap.timeline({
  scrollTrigger:{
  trigger:".forth-div",
  start:"-20% 95%",
  end: "40% 50%",
  scrub:true,
}
})

tll.to(".top-div .canimg1", {
  x:230,
  y:1595,
  rotation:720,
  scale:0.87,
})

gsap.from(".back-text", 1.5 ,{
  x:1900,
  duration:1,
  delay:3
})

gsap.from(".header", {
  y:-200,
  duration:1,
  delay:3,
})

gsap.from(".canimg2",{
  x:1800,
  duration:1,
  delay:3
})

gsap.from(".left-text",{
  x:-1400,
  duration:1,
  delay:3.5
})

gsap.from(".try-btn",{
  x:1400,
  duration:1,
  delay:3.5
})

gsap.fromTo(".backtext2",
  { x: 1000 },
  {
    x: -500,
    scrollTrigger: {
      trigger: ".backtext2",
      start: "top bottom", // Adjust as needed
      end: "bottom top", // Adjust as needed
      scrub: true,
    }
  }
);

gsap.fromTo(".backtext3",
  { x: -1000 },
  {
    x: 500,
    scrollTrigger: {
      trigger: ".backtext3",
      start: "top bottom", // Adjust as needed
      end: "bottom top", // Adjust as needed
      scrub: true,
    }
  }
);

gsap.fromTo(".backtext4",
  { x: 1000 },
  {
    x: -500,
    delay:2,
    scrollTrigger: {
      trigger: ".backtext4",
      start: "top bottom", // Adjust as needed
      end: "bottom top", // Adjust as needed
      scrub: true,
    }
  }
);

gsap.fromTo(".no-text",
  { x: 1500 },
  {
    x: -1500,
    delay:2,
    scrollTrigger: {
      trigger: ".no-text",
      start: "top bottom", // Adjust as needed
      end: "bottom top", // Adjust as needed
      scrub: true,
    }
  }
);

gsap.fromTo(".indg-text",
  { x: 1500 },
  {
    x: 100,
    scrollTrigger: {
      trigger: ".indg-text",
      start: "top bottom", // Adjust as needed
      end: "bottom 30%", // Adjust as needed
      scrub: true,
    }
  }
);

var mg = gsap.timeline({
  scrollTrigger:{
  trigger:".sec-div",
  start:"0% 95%",
  end: "70% 50%",
  scrub:true,
  stagger:0,
}
})

mg.to(".top-div .mango-cube", {
 x:800,
 y:750,
 rotation:340,
})

var st = gsap.timeline({
  scrollTrigger:{
  trigger:".sec-div",
  start:"0% 95%",
  end: "70% 50%",
  scrub:true,
  stagger:0,
}
})

st.to(".top-div .strawberry-cube", {
 x:100,
 y:1000,
 rotation:340,
})

var or = gsap.timeline({
  scrollTrigger:{
  trigger:".sec-div",
  start:"0% 95%",
  end: "70% 50%",
  scrub:true,
  stagger:0,
}
})

or.to(".top-div .orange-slice", {
 x:-10,
 y:760,
 rotation:340,
})

var vl = gsap.timeline({
  scrollTrigger:{
  trigger:".sec-div",
  start:"0% 95%",
  end: "70% 50%",
  scrub:true,
  stagger:0,
}
})

vl.to(".top-div .vanilla-leafs", {
 x:450,
 y:500,
 rotation:340,
})

var mgg = gsap.timeline({
  scrollTrigger:{
  trigger:".forth-div",
  start:"-20% 95%",
  end: "40% 50%",
  scrub:true,
}
})

mgg.to(".top-div .mango-cube", {
  x:420,
  y:1595,
  rotation:720,
  scale:0.87,
})

var stt = gsap.timeline({
  scrollTrigger:{
  trigger:".forth-div",
  start:"-20% 95%",
  end: "40% 50%",
  scrub:true,
}
})

stt.to(".top-div .strawberry-cube", {
  x:-600,
  y:1780,
  rotation:720,
  scale:0.87,
})

var oll = gsap.timeline({
  scrollTrigger:{
  trigger:".forth-div",
  start:"-20% 95%",
  end: "40% 50%",
  scrub:true,
}
})

oll.to(".top-div .orange-slice", {
  x:-800,
  y:1250,
  rotation:720,
  scale:0.87,
})

var vll = gsap.timeline({
  scrollTrigger:{
  trigger:".forth-div",
  start:"-20% 95%",
  end: "40% 50%",
  scrub:true,
}
})

vll.to(".top-div .vanilla-leafs", {
  x:600,
  y:1230,
  rotation:720,
  scale:0.87,
})

var ll = gsap.timeline({
  scrollTrigger:{
  trigger:".backimg-div",
  start:"0% 95%",
  end: "50% 50%",
}
})


ll.from("#canBack1", {
  x:-1700,
})

ll.from("#canBack2", {
  y:-7700,
})

ll.from("#canBack3", {
  y: 1700,
})

ll.from("#canBack4", {
  x: 1700,
})

var sp = gsap.timeline({
  scrollTrigger:{
  trigger:".backimg-div",
  start:"0% 95%",
  end: "50% 50%",
}
})

sp.from(".splash-1",{
  scale:0,
  x:100,
  ease:"power1.inOut",
  delay:2,
})

sp.from(".splash-2" ,{
  scale:0,
  x:100,
  ease:"power1.inOut",
})

sp.from(".splash-3" ,{
  scale:0,
  x:100,
  ease:"power1.inOut",
})

sp.from(".splash-4" ,{
  scale:0,
  x:100,
  ease:"power1.inOut",
})

gsap.from(".s-logo", {
  x:-300,
  duration:2,
  stagger:1,
  ease:"elastic.out(1,0.3)",
})

gsap.to(".divsec", {
  scale:100,
  duration: 1,
  delay: 2,
  ease: "power2.inOut",
});

gsap.to(".divsec",{
  rotate:45,
  y:100,
  x:500,
  duration:1,
  delay: 2,
  ease: "power2.inOut",
});

gsap.to(".divfirst", {
  opacity: 0,
  duration: 0.5,
  delay: 2.5,
  ease: "power1.inOut",
});

let mq = gsap.matchMedia();

mq.add("(max-width:2600px) and (min-width:1950px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 50%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: -400,
    y: 1750,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: 530,
    y: 3250, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:1500,
   y:1600,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:100,
   y:2200,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1600,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:800,
   y:1000,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:920,
    y:3250,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-1100,
    y:3650,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-1200,
    y:2400,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:1300,
    y:2400,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:1949px) and (min-width:1601px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 50%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: -400,
    y: 1450,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: 350,
    y: 2510, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:1100,
   y:1200,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:100,
   y:1630,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1200,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:600,
   y:800,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:670,
    y:2500,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-870,
    y:2800,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-900,
    y:1900,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:1000,
    y:1850,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:1600px) and (min-width:1530px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 50%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: -300,
    y: 1150,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: 240,
    y: 2070, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:900,
   y:1000,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:100,
   y:1320,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-150,
   y:1000,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:550,
   y:630,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:500,
    y:2050,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-730,
    y:2300,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-800,
    y:1550,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:700,
    y:1550,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:1500px) and (min-width:1390px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 50%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: -300,
    y: 1150,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: 240,
    y: 2110, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:900,
   y:950,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:100,
   y:1320,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-150,
   y:1000,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:450,
   y:630,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:500,
    y:2050,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-600,
    y:2320,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-700,
    y:1600,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:750,
    y:1580,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:1280px) and (min-width:1000px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 50%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: -300,
    y: 1050,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: 200,
    y: 1850, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:700,
   y:870,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:100,
   y:1170,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-50,
   y:900,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:400,
   y:580,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:420,
    y:1820,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-550,
    y:2090,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-600,
    y:1420,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:600,
    y:1400,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:999px) and (min-width:820px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 0.5,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1250,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 0.5,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -175,
    y: 2370, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:400,
   y:1270,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1680,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-600,
   y:1430,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:1170,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:-30,
    y:2450,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-360,
    y:3100,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-30,
    y:1880,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:580,
    y:2450,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:819px) and (min-width:810px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1250,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 70%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -175,
    y: 2150, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:400,
   y:1340,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1550,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-400,
   y:1130,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:1070,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:-30,
    y:2230,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-360,
    y:2800,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:50,
    y:1510,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:550,
    y:2220,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:809px) and (min-width:770px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1500,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -175,
    y: 2580, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:400,
   y:1640,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1750,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-400,
   y:1530,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:1170,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:-30,
    y:2630,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-360,
    y:3400,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:0,
    y:2050,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:550,
    y:2700,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:649px) and (min-width:550px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1100,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 50%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -110,
    y: 1990, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:400,
   y:1120,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1300,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-400,
   y:1130,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:-10,
    y:2020,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-360,
    y:2540,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:0,
    y:1550,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:400,
    y:2020,
    rotation:720,
    scale:0.87,
  })

});

mq.add("(max-width:549px) and (min-width:414px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1100,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 70%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -80,
    y: 1750, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:100,
   y:1020,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1000,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1030,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:30,
    y:1800,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-160,
    y:2530,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-40,
    y:1670,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:200,
    y:2500,
    rotation:720,
    scale:0.87,
  })

  gsap.fromTo(".indg-text",
    { x: 1500 },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".indg-text",
        start: "top bottom", // Adjust as needed
        end: "bottom 30%", // Adjust as needed
        scrub: 1,
      }
    }
  );

});

mq.add("(max-width:413px) and (min-width:400px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "70% 80%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1100,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-20% 95%",
      end: "40% 70%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -80,
    y: 1790, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:100,
   y:1020,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1000,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1030,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:30,
    y:1850,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-160,
    y:2580,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-40,
    y:1700,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:200,
    y:2540,
    rotation:720,
    scale:0.87,
  })

  gsap.fromTo(".indg-text",
    { x: 1500 },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".indg-text",
        start: "top bottom", // Adjust as needed
        end: "bottom 30%", // Adjust as needed
        scrub: 1,
      }
    }
  );

});

mq.add("(max-width:399px) and (min-width:393px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "50% 50%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1000,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-10% 95%",
      end: "30% 50%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -40,
    y: 1710, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:100,
   y:1020,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1000,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1030,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:30,
    y:1750,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-160,
    y:2450,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-40,
    y:1600,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:200,
    y:2450,
    rotation:720,
    scale:0.87,
  })

  gsap.fromTo(".indg-text",
    { x: 1500 },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".indg-text",
        start: "top bottom", // Adjust as needed
        end: "bottom 30%", // Adjust as needed
        scrub: 1,
      }
    }
  );

});

mq.add("(max-width:392px) and (min-width:390px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "50% 50%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 1000,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-10% 95%",
      end: "30% 50%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -40,
    y: 1650, 
    rotation: 720,
    scale: 0.87,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:100,
   y:1020,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1000,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1030,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:30,
    y:1700,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-160,
    y:2350,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-40,
    y:1550,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:200,
    y:2330,
    rotation:720,
    scale:0.87,
  })

  gsap.fromTo(".indg-text",
    { x: 1500 },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".indg-text",
        start: "top bottom", // Adjust as needed
        end: "bottom 30%", // Adjust as needed
        scrub: 1,
      }
    }
  );

});

mq.add("(max-width:389px) and (min-width:300px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-div",
      start: "0% 95%",
      end: "50% 50%",
      scrub: 1,
    }
  });

  tl.to(".top-div .canimg1", {
    x: 0,
    y: 900,
    rotation: 340,
  });

  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-div",
      start: "-10% 110%",
      end: "30% 50%",
      scrub: 1,
    },
  });

  tll.to(".top-div .canimg1", {
    x: -10,
    y: 1550, 
    rotation: 720,
    scale: 0.70,
  });

  var mg = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 10%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  mg.to(".top-div .mango-cube", {
   x:100,
   y:1020,
   rotation:340,
  })
  
  var st = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  st.to(".top-div .strawberry-cube", {
   x:0,
   y:1000,
   rotation:340,
  })
  
  var or = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  or.to(".top-div .orange-slice", {
   x:-100,
   y:1030,
   rotation:340,
  })
  
  var vl = gsap.timeline({
    scrollTrigger:{
    trigger:".sec-div",
    start:"0% 95%",
    end: "70% 50%",
    scrub:0.5,
    stagger:0,
  }
  })
  
  vl.to(".top-div .vanilla-leafs", {
   x:50,
   y:920,
   rotation:340,
  })
  
  var mgg = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  mgg.to(".top-div .mango-cube", {
    x:80,
    y:1630,
    rotation:720,
    scale:0.87,
  })
  
  var stt = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  stt.to(".top-div .strawberry-cube", {
    x:-110,
    y:2220,
    rotation:720,
    scale:0.87,
  })
  
  var oll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  oll.to(".top-div .orange-slice", {
    x:-80,
    y:1500,
    rotation:720,
    scale:0.87,
  })
  
  var vll = gsap.timeline({
    scrollTrigger:{
    trigger:".forth-div",
    start:"-20% 95%",
    end: "40% 50%",
    scrub:0.5,
  }
  })
  
  vll.to(".top-div .vanilla-leafs", {
    x:150,
    y:2170,
    rotation:720,
    scale:0.87,
  })

  gsap.fromTo(".indg-text",
    { x: 1500 },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".indg-text",
        start: "top bottom", // Adjust as needed
        end: "bottom 30%", // Adjust as needed
        scrub: 1,
      }
    }
  );

});












    
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
});