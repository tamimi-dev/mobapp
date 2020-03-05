$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

	      var china = data.feed.entry[i]['gsx$china']['$t'];
	      var nochina = data.feed.entry[i]['gsx$nochina']['$t'];

	      document.getElementById('china').innerHTML += ('<tr>'+'<td>'+china+'</td>'+'</tr>');
	      document.getElementById('nochina').innerHTML += ('<tr>'+'<td>'+nochina+'</td>'+'</tr>');

      }
    });
