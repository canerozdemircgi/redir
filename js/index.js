'use strict';

const redirs =
{
'Details.pdf': 'https://drive.google.com/file/d/1uoE_4AnuinATv2w7uwCALJJPIxYNBkvT/view?usp=drive_link',
'Resume.pdf': 'https://drive.google.com/file/d/1-7G6ZPwWocjZEKF8nfbCvezlPLBHCK0w/view?usp=drive_link',
'Stats.pdf': 'https://drive.google.com/file/d/1nJAKOPhhysh31TBZK7jXgYL_lT3ePHuB/view?usp=drive_link'
};

const counter_span = document.getElementById('counter_span');

const CountRedirect = counter =>
{
	if (counter === -1)
	{
		const key = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('?') + 1));
		if (redirs.hasOwnProperty(key))
			window.location.replace(redirs[key]);
		else
			document.body.insertAdjacentHTML('beforeend', `<br><span class='error_span'>Error Code = 404</span><span class='error_span'>The requested URL was not found on the server</span>`);
	}
	else
	{
		counter_span.textContent = counter--;
		setTimeout(() => CountRedirect(counter), 1000);
	}
};

CountRedirect(3);