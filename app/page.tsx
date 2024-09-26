import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">  
      
      {/* Spline background */}
      <div className="absolute inset-0 z-0 mt-8">
        <Spline 
          scene="https://prod.spline.design/oApcLuPrMhxCaOGa/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center mt-[-600px]">
          <h1 className="text-4xl font-bold">Welcome to the Landing Page</h1>
          <p className="mt-4">Your content goes here</p>
        </div>
      </div>
    </div>
  );
}
