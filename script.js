const pwdForm = document.querySelector('#pwd');
const pwdConfForm = document.querySelector('#pwd-conf');
pwdForm.addEventListener('input', (evnt) => {
	if (pwdForm.value !== pwdConfForm.value) {
		pwdForm.setCustomValidity('Passwords do not match');
		pwdConfForm.setCustomValidity('');
	} else {
		pwdForm.setCustomValidity('');
		pwdConfForm.setCustomValidity('');
	}
});

pwdConfForm.addEventListener('input', (evnt) => {
	if (pwdForm.value !== pwdConfForm.value) {
		pwdConfForm.setCustomValidity('Passwords do not match');
		pwdForm.setCustomValidity('');
	} else {
		pwdForm.setCustomValidity('');
		pwdConfForm.setCustomValidity('');
	}
});
