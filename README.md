# Gold Ring

Just me messing around with Blender to see if I can use it in web dev. I made a gold ring in Blender, exported it, and put it on a landing page you can spin around.

It's a practice project. Not a real shop, the brand and the copy are made up.

## What I used

- Blender (made the ring)
- React
- Vite
- Tailwind CSS
- three.js
- React Three Fiber and drei (three.js for React)
- React Icons

## How I made it

1. Made a torus in Blender, smoothed it and gave it a gold material (metallic all the way up, roughness low)
2. Exported it as a .glb file
3. Dropped the file in the `public` folder
4. Loaded it with `useGLTF` from drei
5. Added the `Environment` preset so the gold actually shines, without it the ring just looks dark
6. Wrapped it in `Float` so it bobs a bit, and `OrbitControls` with autoRotate so it spins and you can drag it
7. Built the page around it with Tailwind, text on the left and ring on the right

## Stuff I learned

- Blender looks scary but you only need like 5 shortcuts to start
- The canvas needs a height or you see nothing
- Typos in component names give you a blank screen, check the console
- I tried a basketball first and it was too fiddly, so I went with a ring
- I tried adding physics and dragging the ring around, it kept breaking, so I dropped it for now

## Run it

```bash
npm install
npm run dev
```

## Maybe next

- Colour swatches to switch between gold, silver and rose gold
- Hover effect on the ring
- Try physics again
