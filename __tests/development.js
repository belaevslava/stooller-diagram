// document.querySelectorAll('[id$="__logo"]').forEach((logoElement) => {
// 	var logoElementId = logoElement.getAttribute('id');
// });


// document.querySelectorAll('use').forEach(function(element, index) {
// 	var parentId = element.closest('g').getAttribute('id');
// 	var pathElementSelector = element.getAttribute('href');
// 	var pathElement = document.querySelector(pathElementSelector);
// 	var newPathName = parentId + '__path_' + index;

// 	if (pathElement) {
// 		pathElement.setAttribute('id', newPathName);
// 		document.querySelectorAll('[href="'+ pathElementSelector +'"]').forEach(function(useElement) {
// 			useElement.setAttribute('href', '#' + newPathName)
// 		});
// 	}
// });

// document.querySelectorAll('g[id$="__logo__image"]').forEach(function(element, index) {
// 	var elementId = element.getAttribute('id');
// 	//var parentId = element.closest('g').getAttribute('id');
// 	//var pathElement = element.getAttribute('fill').replace('url(', '').replace(')', '');
// 	//var newPathName = parentId + '__linear';

// 	//console.log(pathElement);
// 	console.log('-----------');
// 	console.log(elementId);
// 	element.querySelectorAll('use').forEach(function(useElement, index) {
// 		var pathElementId = useElement.getAttribute('href').replace('#', '');
// 		var newPathElementID = elementId + '__path_' + index;
// 		var pathElement = document.querySelector('#' + pathElementId);

// 		console.log(pathElement);
// 		console.log(pathElementId);
// 		console.log(newPathElementID);
// 		console.log('===========');

// 		if (pathElement) {
// 			pathElement.setAttribute('id', newPathElementID);
// 			document.querySelectorAll('use[href="#'+ pathElementId +'"]').forEach(function(useElement) {
// 				useElement.setAttribute('href', '#' + newPathElementID);
// 			});
// 		}
// 		//console.log(pathElement);
// 	});

// 	//element.setAttribute('fill', 'url(#'+ newPathName +')');
// 	//document.querySelector(pathElement).setAttribute('id', newPathName);

// });