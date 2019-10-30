document.getElementsByClassName('bookmark')[0].style.display = 'none';
document.getElementsByClassName('chronium')[0].style.display = 'none';
document.getElementsByClassName('browser')[0].style.display = 'none';
document.getElementsByClassName('app')[0].style.display = 'none';

function scroller(event){
	 var targ = event.target || event.srcElement;
	 var elmnt = document.getElementById(targ.innerText.trim().toLowerCase());
	elmnt.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
}

function featureSelecter(event){
	document.getElementById('simple').classList.remove('flexi_active');
	document.getElementById('speedy').classList.remove('flexi_active');
	document.getElementById('easy').classList.remove('flexi_active');
	document.getElementsByClassName('sample_simple')[0].classList.remove('sample_active');
	document.getElementsByClassName('sample_speedy')[0].classList.remove('sample_active');
	document.getElementsByClassName('sample_easy')[0].classList.remove('sample_active');
	var targ = event.target || event.srcElement;
	var elmnt;
	var mobile_elmnt;
	if(targ.innerText.trim().toLowerCase() == 'simple bookmarking'){
		elmnt = document.getElementById('simple');
		mobile_elmnt = document.getElementsByClassName('sample_simple')[0];
	}else if(targ.innerText.trim().toLowerCase() =='speedy searching'){
		elmnt = document.getElementById('speedy');
		mobile_elmnt = document.getElementsByClassName('sample_speedy')[0];
	}else if(targ.innerText.trim().toLowerCase() == 'easy sharing'){
		elmnt = document.getElementById('easy');
		mobile_elmnt = document.getElementsByClassName('sample_easy')[0];
	}	
	elmnt.classList.add('flexi_active');
	mobile_elmnt.classList.add('sample_active');
}

function showChild(childName){
	console.log(childName);
	var child = document.getElementsByClassName(childName);
	var child_arrow = document.getElementsByClassName(childName + '_arrow');
	if(child[0].style.display == 'none'){
		child[0].style.display = 'block';
		child_arrow[0].classList.add('rotation');
	}else{
		child[0].style.display = 'none';
		child_arrow[0].classList.remove('rotation');
	}
}