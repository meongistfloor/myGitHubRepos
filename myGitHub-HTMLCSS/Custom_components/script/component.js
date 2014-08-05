if(window.attachEvent) {
    window.attachEvent('onload', afterLoad);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            afterLoad();
        };
        window.onload = newonload;
    } else {
        window.onload = afterLoad;
    }
}

// Things to be done after page load
function afterLoad(){
	var radios = document.querySelectorAll("input[type=radio]");

	for(var i = radios.length; i--; ) {
		parentElem = radios[i].parentNode;
		var inputFields = parentElem.querySelectorAll("input[type='text']");
		if(inputFields.length == 0){radios[i].onclick = function(){showRadioField(this, false);};}
		else {radios[i].onclick = function(){showRadioField(this, true);};}
	}
}

// Handle tri-state checkboxes
function triState(cb) {
  if (cb.readOnly) cb.checked=cb.readOnly=false;
  else if (!cb.checked) cb.readOnly=cb.indeterminate=true;
}

// Show or hide radio button group custom field
function showRadioField(rb, state){
	var rGroupName = rb.name;
	// disable if radio button for custom was not clicked
	document.getElementById(rGroupName+"Custom").disabled = !state;
}

// Update Progress DIVs with new strings
function progressUpdate(pPrefixElem, pSuffixElem, prefix, suffix, pCountElem, pTotalElem, counter, total){
	pCounterElem.firstChild.nodeValue = counter;
	pTotalElem.firstChild.nodeValue = total;
	pPrefixElem.firstChild.nodeValue = prefix;
	pSuffixElem.firstChild.nodeValue = suffix;
}

