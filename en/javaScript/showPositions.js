invalides = document.getElementById("invalidesP");
	document.getElementById("invalidesT").onmouseover = function() {
    	invalides.style.display = "block";
    }
    document.getElementById("invalidesT").onmouseout = function() {
    	invalides.style.display = "none";
	}

	chatelet = document.getElementById("chateletP");
	document.getElementById("chateletT").onmouseover = function() {
    	chatelet.style.display = "block";
    }
    document.getElementById("chateletT").onmouseout = function() {
    	chatelet.style.display = "none";
	}

	cite = document.getElementById("citeP");
	document.getElementById("citeT").onmouseover = function() {
    	cite.style.display = "block";
    }
    document.getElementById("citeT").onmouseout = function() {
    	cite.style.display = "none";
	}

	maubert = document.getElementById("maubertP");
	document.getElementById("maubertT").onmouseover = function() {
    	maubert.style.display = "block";
    }
    document.getElementById("maubertT").onmouseout = function() {
    	maubert.style.display = "none";
	}

	langue = document.getElementById("mobileLangue");
	langues = document.getElementById("mobileLangues");
	langues.style.display ="none";
	langue.onclick = function(){
		if(langues.style.display == "none"){
			langues.style.display ="block";
		}
		else{
			langues.style.display ="none";
		}
	}