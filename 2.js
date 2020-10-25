s0.initCam(1)
n = 50
a = () => shape(3, 0.3, 0).modulateRotate(s0, 1).mask(osc(n*6, 0.03).modulateRotate(s0).thresh())

a().color(1, 0, 0).out(o0)
a().color(0, 1, 0).scrollX(1/n/3).out(o1)
a().color(0, 0, 1).scrollX(2/n/3).out(o2)

// src(o0).add(o1).out(o3)
solid().add(src(o0),1).add(src(o1),1).add(src(o2),1).out(o3)

render(o3)
