import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";
import { FiShoppingBag, FiArrowRight, FiShield, FiTruck } from "react-icons/fi";

function Ring() {
  const { scene } = useGLTF("/ring.glb");
  return <primitive object={scene} />;
}

function App() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-5 md:px-12">
        <span className="text-xl font-bold tracking-widest text-[#ffb800]">
          GABRANTH'S FINEST
        </span>
        <div className="hidden gap-8 text-sm opacity-80 md:flex">
          <a href="#">Shop</a>
          <a href="#">Story</a>
          <a href="#">Contact</a>
        </div>
        <button className="flex cursor-pointer items-center gap-2 rounded-full border border-[#ffb800] px-5 py-2 text-sm text-[#ffb800]">
          <FiShoppingBag />
          Cart (0)
        </button>
      </nav>

      <section className="grid min-h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pt-28 md:px-12 md:pt-0">
          <p className="mb-4 text-sm tracking-widest text-[#ffb800] uppercase">
            Handcrafted gold jewellery
          </p>
          <h1 className="text-5xl leading-tight font-bold md:text-7xl">
            Fine gold, made to last.
          </h1>
          <p className="mt-6 max-w-md opacity-70">
            Each ring is shaped by hand from real gold. Timeless design for the
            moments that matter most.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button className="flex hover:-translate-y-0.5 duration-75 cursor-pointer items-center gap-2 rounded-full bg-[#ffb800] px-8 py-3 font-semibold text-black">
              Get in touch
              <span className="animate-nudge">
                <FiArrowRight />
              </span>
            </button>
          </div>
          <div className="mt-10 flex gap-8 text-sm opacity-70">
            <span className="flex items-center gap-2">
              <FiShield className="text-[#ffb800]" />
              Certified gold
            </span>
            <span className="flex items-center gap-2">
              <FiTruck className="text-[#ffb800]" />
              Insured delivery
            </span>
          </div>
        </div>
        <div className="h-[60vh] bg-[radial-gradient(circle_at_center,#3c2a00_0%,#111_70%)] md:h-screen">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Environment preset="sunset" />
            <Float speed={2} floatIntensity={1}>
              <Ring />
            </Float>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={2}
            />
          </Canvas>
        </div>
      </section>
    </div>
  );
}

export default App;
