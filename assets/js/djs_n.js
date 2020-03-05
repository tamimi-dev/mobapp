$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

		var death = data.feed.entry[i]['gsx$death']['$t'];

		document.getElementById('death').innerHTML += ('<tr>'+'<td>'+death+'</td>'+'</tr>');

      }
    });
