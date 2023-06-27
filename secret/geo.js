function initialiser() {
								var latlng = new google.maps.LatLng(52.018681,4.171573);
								
								var options = {
									center: latlng,
									zoom: 17,
									mapTypeId: google.maps.MapTypeId.SATELLITE
								};
								
								var carte = new google.maps.Map(document.getElementById("carte"), options);
								
								

								//cr�ation du marqueur bas
								var marqueur = new google.maps.Marker({
									position: new google.maps.LatLng(52.018181,4.171573),
									map: carte,
									icon: "bleurouge.png",
								});
								
								
								//cr�ation du marqueur haut
								var marqueur = new google.maps.Marker({
									position: new google.maps.LatLng(52.019281,4.171573),
									map: carte,
									icon: "rouge.png",
								});
								
								//cr�ation du marqueur gauche
								var marqueur = new google.maps.Marker({
									position: new google.maps.LatLng(52.018481,4.172173),
									map: carte,
									icon: "bleu.png",
								});
								
								//cr�ation du marqueur droite
								var marqueur = new google.maps.Marker({
									position: new google.maps.LatLng(52.018481,4.170973),
									map: carte,
									icon: "bleu.png",
								});
			
								
							}
