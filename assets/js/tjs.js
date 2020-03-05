$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/oj406nn/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var date = data.feed.entry[i]['gsx$date']['$t'];
        var predicted = data.feed.entry[i]['gsx$predicted']['$t'];
        var date2 = data.feed.entry[i]['gsx$date_2']['$t'];
		var confirmed = data.feed.entry[i]['gsx$confirmed']['$t'];

        document.getElementById('predic').innerHTML += ('<tr>'+'<td>'+date+'</td>'+'<td>'+predicted+'</td>'+'<td>'+date2+'</td>'+'<td>'+confirmed+'</td>'+'</tr>');

      }
    });







