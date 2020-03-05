$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

	      var recov = data.feed.entry[i]['gsx$recover']['$t'];
	      var seri = data.feed.entry[i]['gsx$serious']['$t'];

	      document.getElementById('recov').innerHTML += ('<tr>'+'<td>'+recov+'</td>'+'</tr>');
	      document.getElementById('seri').innerHTML += ('<tr>'+'<td>'+seri+'</td>'+'</tr>');

      }
    });
