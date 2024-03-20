"use client";
import "./globals.css";
import Header from "@/app/component/Header/Header";

function Home() {
  return (
    <div className="bg-slate-200">
      <div
        role="figure"
        className="absolute left-0 right-0 top-0 h-[400px] w-full bg-gradient-to-tr from-blue-700 to-blue-900 [clip-path:polygon(0_100%,100%_0,0_0)]"
      >
        <div className="absolute -left-24 top-0 h-[400px] w-[80vw] rounded-full bg-red-400 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-[40vw] rounded-full bg-orange-400 blur-[100px]" />
      </div>
      <main className="relative z-10 min-h-screen px-12 pt-36">
        <Header />
        <p className="mb-3 text-2xl italic md:hidden">
          ⚠️This example is only made for desktop.
        </p>

        <p className="max-w-[20ch] text-3xl font-bold leading-[1.1] md:text-[100px]">
          &quot;MEGA menu&quot; animated with Framer-Motion
        </p>

        <p className="mt-8">
          Design of the menu inspired by{" "}
          <span className="hover:text-cyan-900 transition-colors">
            <a href="https://stripe.com/" target="_blank">
              Stripe
            </a>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Home;
