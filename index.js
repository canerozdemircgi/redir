'use strict';

const redirs =
{
'Portfolio-Details-_-Caner-Özdemir.docx': 'https://docs.google.com/document/d/1UTpq7feIcWYnT_VpibpF7dhxlX0vE5Xp/edit?usp=share_link&ouid=103263573971968198258&rtpof=true&sd=true'
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