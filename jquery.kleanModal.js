(function($){
 
	$.fn.extend({ 
		 
		openModal: function(options) {

			var defaults = {
				modal: null,
				top: 100,
				overlay: 0.5,
				closeButton: null,
				saveButton: null,
				beforeModalOpen: function() {},
				onModalOpen: function() {},
				onModalClose: function() {},
				onClickSave: function() {}
			}
			
			var overlay = $("<div id='lean_overlay'></div>");
			
			$("body").append(overlay);
				 
			options =  $.extend(defaults, options);
 
			return this.each(function() {
			
				var o = options;
			   
				$(this).click(function(e) {
			  
					var modal_id = o.modal;
	
					$("#lean_overlay").bind('click', function() { 
						 closeModal(modal_id);                    
					});
					
					$(o.closeButton+',.cancel').bind('click', function() { 
						 closeModal(modal_id);                    
					});
					
					$(modal_id+' .save').bind('click', function() {
						options.onClickSave( modal_id, closeModal );
					});
								
					var modal_height = $(modal_id).outerHeight();
					var modal_width = $(modal_id).outerWidth();
	
					options.beforeModalOpen( modal_id );
	
					$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });
					$('#lean_overlay').fadeTo(200,o.overlay);
	
					$(modal_id).css({ 
					
						'display' : 'block',
						'position' : 'fixed',
						'opacity' : 0,
						'z-index': 11000,
						'left' : 50 + '%',
						'margin-left' : -(modal_width/2) + "px",
						'top' : o.top + "px"
					
					});
	
					$(modal_id).fadeTo(200,1);
					
					options.onModalOpen( modal_id );
	
					e.preventDefault();
						
				});
			 
			});

			function closeModal(modal_id){
				$("#lean_overlay").fadeOut(200);
				$(modal_id).css({ 'display' : 'none' });
				return false;
			}
	
		}
	});
	 
})(jQuery);