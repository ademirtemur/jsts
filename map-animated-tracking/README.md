
###
     ANIMATED MARKER and ANIMATED TRACKING

###



###
This lib provide to use the animated marker tracking with independing other map lib. You can use this lib with any other map lib in your app. (Google Map, Leaflet Map, Yandex Map etc.)

###



###
<span style="color: grey;"> 
Example with leaflet :
</span> 

###

###

<img style="margin-top: 1.5rem; max-height: 512px;" src="https://github.com/ademirtemur/jsts/blob/main/assets/demo.gif?raw=true">

###


###

     import L from 'leaflet';
     import { MOVEMENT_TYPES, factoryAnimatedTracking, ICoord, IRAnimatedTracking, IRLine, OnChangeLocation, OnChangeStatus, OnJoinLine, OnPushPoint, OnRemoveLine } from 'map-animated-tracking/index';
     import { defaultDivIcon } from 'map-animated-tracking/divIcon'
     import 'map-animated-tracking/divIcon/divIcon.css';


     const divIcon = (angle: number, isMoving: boolean, color?: string) => new L.DivIcon({
          html: defaultDivIcon(angle, isMoving, color)
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
     let path: L.Polyline[] = [];

     const handleChangeLocation: OnChangeLocation = (coord: ICoord) => {
          marker.setLatLng(L.latLng(coord.lat, coord.lng));
     }

     const handeChangeStatus: OnChangeStatus = (angle: number, movementType: MOVEMENT_TYPES) => {
          let color;
          if (movementType === MOVEMENT_TYPES.SHORT_HALT) {
               color = '#939393';
          } else if (movementType === MOVEMENT_TYPES.LONG_HALT) {
               color = 'red';

               if (movementType === MOVEMENT_TYPES.LONG_HALT) {
                    path.forEach(k => k.remove());
                    path = [];
               }
          }
          marker.setIcon(divIcon(angle, movementType === MOVEMENT_TYPES.MOVING, color));
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
          velocityTimeout: 30000,
          velocityLongTimeout: 120000,
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

