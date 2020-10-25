n = 100;
func = () => osc(30, 0.1, 1).posterize(3, 1)
// .modulate(noise(2, 0.1, 100))
pix = () => shape(2, 0.3).scale(1, 1, 3)
pix().mult(func()).out(o1)
pix().mult(func()).scrollX(1 / n / 3).out(o2)
pix().mult(func()).scrollX(2 / n / 3).out(o3)

solid().add(src(o1), 1).add(src(o2), 1).add(src(o3), 1).out(o0)

render()
