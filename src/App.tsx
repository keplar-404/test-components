import { useRef } from "react";
import CropOutMediaRactangale from "./components/CropOutMediaRactangale";


export default function App() {
  const ref = useRef(null);
  return (
    <>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />






    <div  ref={ref}
      className="w-full bg-slate-500 h-screen flex flex-col items-center">
      <CropOutMediaRactangale target={ref} boxInitialWidth={200} boxAnimationWidth={500} imageSrc="/2.jpg" imageSize={500} />
    </div>



<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>

  )
}
