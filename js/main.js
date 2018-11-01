L.Projection.NoWrap = {
    project: function(latlng) {
        return new L.Point(latlng.lng, latlng.lat);
    },

    unproject: function(point, unbounded) {
        return new L.LatLng(point.y, point.x, true);
    }
};

L.CRS.Direct = L.Util.extend({}, L.CRS, {
    code: 'Direct',
    projection: L.Projection.NoWrap,
    transformation: new L.Transformation(1, 0, 1, 0)
});

$(document).ready(function() {
    var map = new L.map('mapa', {
        crs: L.CRS.Direct,
        attributionControl: false,
        worldCopyJump: false,
        minZoom: 2,
        maxZoom: 5,
        zoomControl: false,
        scrollWheelZoom: true,
    });
    
    L.control.zoom({
     position:'bottomright'
}).addTo(map);

    var l1 = L.tileLayer.zoomify('tiles/1/', {
        width: 14173,
        height: 14173,
        tolerance: 1,
        attribution: ''
    }).addTo(map);

    var l2 = L.tileLayer.zoomify('tiles/2/', {
        width: 14173,
        height: 14173,
        tolerance: 1,
        attribution: ''
    });
    
      var l3 = L.tileLayer.zoomify('tiles/3/', {
        width: 14173,
        height: 14173,
        tolerance: 1,
        attribution: ''
    });
      
        var l4 = L.tileLayer.zoomify('tiles/4/', {
        width: 14173,
        height: 14173,
        tolerance: 1,
        attribution: ''
    });
        
          var l5 = L.tileLayer.zoomify('tiles/5/', {
        width: 14173,
        height: 14173,
        tolerance: 1,
        attribution: ''
    });
          
   

    var baseLayers = {
        "living": l1,
        "breathing": l3,
        "eating": l5,
        "cycling": l2,
        "dressing": l4,
        
        
    };

    var overlays = {};

    var box = {
        position: 'topleft',
        collapsed: false
    };

    var clayers = L.control.layers(baseLayers, overlays, box);

    clayers.addTo(map);

    var width = 14173
    var height = 14173

    map.fitBounds([
        L.CRS.Direct.pointToLatLng(new L.Point(0, 0), 6),
        L.CRS.Direct.pointToLatLng(new L.Point(width, height), 6)
    ]);

    map.setView(L.CRS.Direct.pointToLatLng(new L.Point(7086, 7086), 5.8), 3);

});




function llegenda() {
    var x = document.getElementById("llegenda");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function about() {
    var x = document.getElementById("about");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}