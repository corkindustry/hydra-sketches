osc(20, 0.03, 0.6).pixelate(200).rotate(20).out(o0)
osc(100, 0.02, 0.5).pixelate(100).diff(o0).out(o1)
osc(100, 0.01, 0.06).pixelate(50).rotate(34).mult(o1).out(o2)
render(o2)

osc(21, 0).modulate(o2).out(o0)
osc(40).rotate(1.57).out(o1);
render(o1)

osc(()=>(Math.sin(time * 0.002))).out()


s0.initScreen()
src(s0).out()
