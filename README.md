# kleanModal.js

**kleanModal.js is a fork of the leanModal.js that has added callbacks for before modal open, close modal, etc, that will allow you do be slightly more flexible in what you do with your modals.**

## How To Use This Modal:
```
  $( clickMeToOpen ).openModal({
		modal: '#idOfModal',			// selector for the modal
		closeButton: '.someSelector', 	// is additional... anything called .cancel will automatically work
		onClickSave: function( modal_id, closeModal ) {
			// To Indentify Modal By ID: use modal_id param to identify the ID of the open window
			alert( modal_id );
			
			// To Close: use closeModal as the function reference of the closer function
			closeModal( modal_id );
			
		}
	});
	//click to open modal, write callback, set close button
```

## Other available callback functions:
```
    options = {
        beforeModalOpen: function() {},
		onModalOpen: function() {},
		onModalClose: function() {},
		onClickSave: function() {}
    };
```