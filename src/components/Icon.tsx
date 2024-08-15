import L from 'leaflet';
import treeShape from '../assets/park_16dp_434343_FILL1_wght400_GRAD0_opsz20.png';

const iconTree = new L.Icon({
    iconUrl: treeShape,
    iconRetinaUrl: treeShape,
    iconSize: new L.Point(20, 20),
    className: 'bg-gradient-to-b from-dark to-extra-dark p-4 rounded-full shadow-md',
});

const iconAsJSX  = () => <img src={treeShape} alt="tree" width={20} height={20} className="bg-gradient-to-b from-dark to-extra-dark p-4 rounded-full shadow-md" />;

export { iconTree, iconAsJSX };