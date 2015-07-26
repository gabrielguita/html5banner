var $ = Sizzle,
    $panel1 = $("#panel1"),
    $panel2 = $("#panel2"),
    $panel3 = $("#panel3"),
    $panel4 = $("#panel4"),
    $panel5 = $("#panel5"),
    $panel6 = $("#panel6"),

    //monks
    $panel1monk = $("#panel1 .monk"),
    $panel2monk = $("#panel2 .monk"),
    $panel3monk = $("#panel3 .monk"),
    $panel4monk = $("#panel4 .monk"),
    $panel5monk = $("#panel5 .monk"),

    //clouds
    $panel1cloud = $("#panel1 .cloud"),
    $panel2cloud = $("#panel2 .cloud"),
    $panel3cloud = $("#panel3 .cloud"),
    $panel4cloud = $("#panel4 .cloud"),
    $panel5cloud = $("#panel5 .cloud"),

    $panel1Text = $("#panel1 .content"),
    $panel2Text = $("#panel2 .content"),
    $panel3Text = $("#panel3 .content"),
    $panel4Text = $("#panel4 .content"),
    $panel5Text = $("#panel5 .content"),
    $goTolink = $("#gotolink"),
    tl;

var tl = new TimelineMax({delay:0.5, repeat:3, repeatDelay:2.5});

  tl.from(panel1, 0.2, {opacity:0})
  .from($panel1Text, 0.2, {scale:0.5, opacity:0, ease:Back.easeOut})
  .from($panel1cloud, 0.1, {yPercent:100, bottom: -10}, "+=0.9")

  .set($panel2, {top:0}, "+=1")
  .from($panel2, 0.1, {opacity:0, scale:1.5})
  .from($panel2monk, 0.1, {xPercent:100, right: -5}, "+=0.9")

  .set($panel3, {top:0}, "+=1")
  .from($panel3, 0.2, {opacity:0, scale:1.5})
  .from($panel3monk, 0.2, {yPercent:100, right: -5}, "+=0.9")
  .from($panel3Text, 0.2, {xPercent:100, right: 10}, "+=0.9")
  .from($panel4, 0.2, {opacity:0})
  .set($panel4, {top:0}, "+=1")
  .from($panel1Text, 0.2, {scale:0.5, opacity:0, ease:Back.easeOut})
  .set($panel5, {top:0}, "+=1")
  .from($panel5, 0.1, {opacity:0, scale:1.5})
  .from($panel5monk, 0.1, {xPercent: -100, right: -20}, "+=0.9")
  .from($panel2Text, 0.2, {yPercent:100}, "+=0.9")
  .to($panel2Text, 0.2, {yPercent:100}, "+=2")
  .set($panel6, {top:0}, "final")
  .to($panel2, 0.1, {y:-60}, "final+=0.1")
  .from($goTolink, 0.1, {scale:0, opacity:0, ease:Back.easeOut});
