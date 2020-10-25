n = 50;
func = () => osc(30,0.1,1).modulate(noise(4,0.01, 1))
pix = () => shape(5,0.3).scale(1,1,3).repeat(n,n)
pix().mult(func().color(1,0.5,0).pixelate(n,n)).out(o1)
pix().mult(func().color(0,1,0).pixelate(n,n)).scrollX(1/n/3).out(o2)
pix().mult(func().color(0,0,1).pixelate(n,n)).scrollX(2/n/3).out(o3)

solid().add(src(o1),1).add(src(o2),1).add(src(o3),1).out(o0)
