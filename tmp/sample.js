(window.onload = function() {
	document.querySelector('#aaa').innerHTML = "VVVVVVvv";
	fetch('fp1.bin').then(function(response) {
		return response.blob();
	  }).then(function(blob) {
		// blobにBlob型で結果が渡される
		document.querySelector('#aaa').innerHTML = blob;
	  });
})();