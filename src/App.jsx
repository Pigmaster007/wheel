import Gallery from "./components/Gallery/Gallery";
// import Navmain from "./components/Navmain/Navmain";
//gallery render imgs;
const IMG_ARR = [
  "images/img0.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
];

function App() {
  return (
    <>
      <Gallery collection={IMG_ARR} />
      {/* <Navmain changeDisplay={siblingValue} clickNavMain={navmainNone}/> */}
    </>
  );
}

export default App;
