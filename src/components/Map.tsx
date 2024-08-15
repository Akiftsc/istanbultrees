import "leaflet/dist/leaflet.css";
import { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { createPortal } from 'react-dom';
import PixiOverlay from "react-leaflet-pixi-overlay";
import ModalContent from "./ModalContent";
/* import TreeMarker from "./TreeMarker";
import { renderToString } from "react-dom/server";
import { iconAsJSX, iconTree } from "./Icon";
*/

type Tree = {
  id: number;
  recordNo: string;
  treeTypeID: number;
  treeSpeciesID: number;
  age: string;
  size: string;
  ycOne: string;
  storyText: string;
  district: string;
  neighborhood: string;
  street: string;
  isBook: number;
  cultural: string;
  dimensional: string;
  peakDiameter: string;
  latitude: number;
  longitude: number;
  title_tr: string;
  title_lt: string;
  treeImage: string;
  isCover: number;
}



const Map = () => {
  const mapRef = useRef(null);
  const cords:[number, number] = [41.03426460780327, 29.105225938863537];
  const [trees, setTrees] = useState([]);
  const [selectedTree, setSelectedTree] = useState<TreeRecord | null>(null);

  useEffect(() => {
    fetch("https://anitagac.istanbul/api/trees?district=all&treeSpeciesID=all").then((res) => res.json()).then((data) => {
      setTrees(data.map((tree: Tree) => ({
        id: tree.id,
        // not even sure this property exists but copilot suggested lol
        caches: true,
        position: [tree.latitude, tree.longitude],
        onClick: () => {
           fetch(`https://anitagac.istanbul/detailtree/${tree.recordNo}`).then((res) => res.json()).then((data: TreeRecord) => {
                setSelectedTree(data);
            }).catch((err) => {alert("Veriler yüklenirken bir hata oluştu."); console.log(err)});
        },  
        iconId: "treeIcon",
        customIcon:  `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  fill="#387F39"><path d="M558-80H402v-160H120l160-240h-80l280-400 280 400h-80l160 240H558v160Z"/></svg>`
       
      })));

      
    });
  },[])

 

  if (trees.length === 0 ) {
    return <h1>Yükleniyor...</h1>;
  }


  return ( 
    <div className="container-xl flex flex-col gap-y-4">
      <MapContainer ref={mapRef} center={cords} zoom={15} // initial zoom required
      preferCanvas
      maxZoom={18}
      minZoom={3}>
      
        <TileLayer
            url="https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=2507ffa71de74454b5a1f837743355f1"
        />
{/*         {trees.map((tree: Tree) => (
                <TreeMarker tree={tree}/> 
        ))} */}


        <PixiOverlay markers={trees}  />
        {selectedTree !== null && createPortal(
          <ModalContent selectedTree={selectedTree} onClose={() => setSelectedTree(null)} />, document.body
        )}
        
      </MapContainer>
    </div>
  );
}

export default Map