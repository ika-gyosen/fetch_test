(window.onload = function() {
	document.querySelector('#aaa').innerHTML = "VVVVVVvv";
	fetch('https://cdn.shopify.com/s/files/1/2681/3762/files/ParipiDestroyer_v1-1b.NUCLEO_L433RC_P-17.bin?1').then(function(response) {
		return response.blob();
	  }).then(function(blob) {
		// blobにBlob型で結果が渡される
		const reader = new FileReader();
		reader.blob = eve =>{
			document.querySelector('#aaa').innerHTML = reader.result;
		}
		reader.onerror = eve =>{
			console.errpr(reader.error);
		}
		//document.querySelector('#aaa').innerHTML = blob;
	  });
})();