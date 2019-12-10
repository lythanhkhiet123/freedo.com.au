import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import '../cssfiles/mapPopup.css';
import 'leaflet/dist/leaflet.css'


class Popsupmap extends React.Component {
    constructor(props) {
        super()
        this.state = {
            
            zoom: 13
        }
    }

    render() {
        return (
            <LeafletMap
                center={[this.props.lat, this.props.lng]}
                zoom={13}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[this.props.lat, this.props.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}


export default Popsupmap;