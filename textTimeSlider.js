// text-time-slide
jQuery.fn.extend({
  textTimeSlider: function(text, time) {
  	//console.log(text, time);
  	var curr_text = text.shift();
  	var curr_time = time.shift();
  	text.push(curr_text);
  	time.push(curr_time);

  	//Fade out 
  	this.fadeOut(250, () => {
  		this.html(curr_text); //Update text 
  		this.fadeIn(250); //Fade in
  	}); 
  	

  	setTimeout(() => {
  		this.textTimeSlide(text, time);
  	}, curr_time);

  	return this;
  }
});