const map_container = document.getElementById("map");

const map = new google.maps.Map(map_container, {
  center: { lat: 5.651352075544249, lng: -0.19639606137708396 },
  zoom: 18,
  mapId: "49cb5c1c66487d81",
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false
});

const initMap = () => {
    new google.maps.Marker({
        position: {lat: 5.650183768815957, lng: -0.18878292953434378},
        map,
        title: "Okponglo Havard"
    })

    const markers = [
        [
            "My Hall",
            5.650183768815957,
            -0.18878292953434378,
            "./images/current-location.svg",
            38,
            31
        ],
        [
			'Business School',//5.653143325876544, -0.18857060158548603
			5.653143325876544,
			-0.18857060158548603,
			'./images/icons8-visit.png',
			30,
			47.8,
		],
		[
			'Balme Library',//5.651851449096467, -0.18703637804603238
			5.651851449096467,
			-0.18703637804603238,
			'./images/location-off.png',
			40,
			48,
		],
		[
			'UGCS',//5.652406636169944, -0.18814144816371414
			5.652406636169944,
			-0.18814144816371414,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Department of Computer Science',//5.654862264942806, -0.18601713860641086
			5.654862264942806,
			-0.18601713860641086,
			'./images/current-location.svg',
			50,
			60.7,
		],
    ]

    for(let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i]

        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2]},
            map,
            title: currentMarker[0],
            icon: {
                url : currentMarker[3],
                scaledSize : new google.maps.Size(currentMarker[4], currentMarker[5])
            },
            animation: google.maps.Animation.DROP
        });
        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
        });
        marker.addListener('click', () => {
            infowindow.open(map, marker)
        })
    }
    //5.650183768815957, -0.18878292953434378
}

//5.651352075544249, -0.19639606137708396
