import { iconTree } from "./Icon";
import { Marker, Popup } from "react-leaflet";
import { useState } from "react";


interface TreeMarkerProps {
    tree: Tree,
}

const TreeMarker = ({tree}: TreeMarkerProps) => {
    const [treeInfo, setTreeInfo] = useState<TreeRecord | null>(null);

    

    const loadTreeInfo = (id: string) => {
        fetch(`https://anitagac.istanbul/detailtree/${id}`).then((res) => res.json()).then((data) => {
            setTreeInfo(data);
        });
    }
   
  return (
    <div>
        <Marker  eventHandlers={{
                click: () => loadTreeInfo(tree.recordNo)}}
               position={[tree.latitude, tree.longitude]} icon={iconTree}>
                <Popup>
                    <div>
                        <h3>Yükleniyor...</h3>
                    </div>
                </Popup>
        </Marker>
    </div>
  )
}

export default TreeMarker