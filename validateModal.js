$(function () {
	$('#newModalForm').validate({
		rules: {
			email1: {
				required: true,
				minlength: 8,
			},
			email1: 'required',
		},
		messages: {
			email1: {
				required: 'Please enter some data',
				minlength: 'Your data must be at least 8 characters',
			},
			email1: 'Please provide some data',
		},
	});
});
