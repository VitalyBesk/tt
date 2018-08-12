<template>
  <section class="map">
    <div class="container">
      <div class="row  map__inner">
        <div class="col-xs-12 col-sm-6 map__info">
          <h2 class="title-secondary">Our Offices</h2>
          <ul class="map-office__list">
            <li
            v-for="(city, index) in cities"
            @click="current = index; updatePosition();"
            class="map-office__link"
            :class="{'map-office__link--active': index === current }"
            >
            <span>{{ city.name }}</span>
          </li>
        </ul>
        <h2 class="map__subtitle">
          Global Message Services Ukraine LLC
        </h2>
        <p class="map__descr">
          Kuiv, Stepan Bandera, 33 <br>02066 <br>Ukraine
        </p>
      </div>
    </div>
  </div>
    <div id="map" class="google-map"></div>
</section>
</template>

<script>
var marker, map;

export default {
  data() {
    return {
      current: 0,
      cities:[
        {
          name: 'Kyiv',
          coord: {
            lat:50.4501,
            lng: 30.5234
          }

        },
        {
          name: 'New york',
          coord: {
            lat:40.744762,
            lng:-74.001471
          }
        },
        {
          name: 'Guangzhou',
          coord: {
            lat:23.148145,
            lng: 113.409517
          }
        },
        {
          name: 'barcelona',
          coord: {
            lat:41.388019,
            lng: 2.189618
          }
        }
      ]
    }
  },

  computed: {
    //GET COORDINATES OF CURRENT CITY
    currentCoord() {
      return this.cities[this.current].coord
    }
  },

  mounted: function () {
    //INIT GOOGLE MAP
    map = new google.maps.Map(document.getElementById('map'), {
      center: this.currentCoord,
      zoom: 12,
      disableDefaultUI: true,
      styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    })


    marker =  new google.maps.Marker({
      position:  this.currentCoord,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale:8.5,
        fillColor: '#3db565',
        strokeColor: '#3db565',
        strokeWeight: 17
      }
    });
  },


  methods: {
    // UPDATE CURRENT POSITION OF CITY
    updatePosition() {
      marker.setPosition(this.currentCoord);
      map.setCenter(this.currentCoord);
    }
  }
}
</script>


<style scoped>
.google-map {
  height: 500px;
  width: 100%;

}

@media screen and (min-width: 48rem) {
  .google-map {
      width: 50%;
      position: absolute !important;
      right: 0;
      top: 0;
      bottom: 0;
  }
}

</style>
