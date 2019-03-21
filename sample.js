(window.onload = function() {
	document.querySelector('#aaa').innerHTML = "VVVVVVvv";
	fetch('fp1.bn').then(function(response) {
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