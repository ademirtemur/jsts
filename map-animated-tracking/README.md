
<span style="color: green; width: 100%; font-size: 21px;">

###
     ANIMATED MARKER and ANIMATED TRACKING
###
</span>


<span style="color: grey; font-size: 19px;"> 

###
     This lib provide to use the animated marker tracking with independing other map lib. You can use this lib with any other map lib in your app. (Google Map, Leaflet Map, Yandex Map etc.)
###
</span>


###
<span style="color: grey;"> 
Example with leaflet :
</span> 

###

###

<img style="margin-top: 1.5rem; max-height: 512px;" src="https://github.com/ademirtemur/jsts/blob/main/map-animated-tracking/demo.gif?raw=true">

###


###

     import L from 'leaflet';
     import { factoryAnimatedTracking, ICoord, IRAnimatedTracking, IRLine, OnChangeLocation, OnChangeStatus, OnJoinLine, OnPushPoint, OnRemoveLine } from 'map-animated-tracking';
     import { defaultDivIcon } from 'map-animated-tracking/divIcon'
     import 'map-animated-tracking/divIcon/divIcon.css';

     const divIcon = (angle: number, isMoving: boolean) => new L.DivIcon({
          html: defaultDivIcon(angle, isMoving)
     })

     const el = document.getElementById('mapC') as HTMLDivElement;

     const map = new L.Map(el, { center: L.latLng(37.7819, 29.0918), zoom: 11 })
     const tileLayer = new L.TileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
               attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
               crossOrigin: '',
          })

     tileLayer.addTo(map);

     const marker: L.Marker = new L.Marker(L.latLng(0, 0), { icon: divIcon(0, false) }).addTo(map);
     const path: L.Polyline[] = [];

     const handleChangeLocation: OnChangeLocation = (coord: ICoord) => {
          marker.setLatLng(L.latLng(coord.lat, coord.lng));
     }

     const handeChangeStatus: OnChangeStatus = (angle: number, isMoving: boolean) => {
          marker.setIcon(divIcon(angle, isMoving));
     }

     const onRemoveLine: OnRemoveLine = (index: number) => {
          path[index].remove();
          path.splice(index, 1);
     }

     const onJoinLine: OnJoinLine = (_1: string, _2: IRLine, lines: IRLine[]) => {
          const line = new L.Polyline([]).addTo(map);
          path.push(line);
          lines.map((l, index) => {
               path[index].setStyle({ color: l.color });
          });
     }

     const onPushNewPoint: OnPushPoint = (point: ICoord) => {
          path[path.length - 1].addLatLng(point);
     }

     const factor: IRAnimatedTracking = factoryAnimatedTracking({
          color: '#ff7e00',
          velocityTimeout: 60000,
          minDistanceChangeRate: 1.5,
          partOfLine: 5
     });

     factor.handler.handleChangeLocation = handleChangeLocation;
     factor.handler.handeChangeStatus = handeChangeStatus
     factor.handler.onRemoveLine = onRemoveLine;
     factor.handler.onJoinLine = onJoinLine;
     factor.handler.onPushPoint = onPushNewPoint;

     map.addEventListener('click', (e: any) => {
          const p: L.LatLng = e.latlng;
          factor.pushCoord(p);
     });

###

