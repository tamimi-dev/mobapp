$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/o4k47ye/public/values?alt=json", data => {

  var numbers = [];

  data.feed.entry.forEach(e => {

    numbers.push(Number(e['gsx$value']['$t']));
  }); 
      var g = new JustGage({
        id: "gauge",
        value: numbers,
        min: 10,
        max: 48,
        relativeGaugeSize: true,
        counter: true,
        gaugeWidthScale: 0.8,
        pointer: true,
          pointerOptions: {
  toplength: 3,
  bottomlength: -30,
  bottomwidth: 2,
  stroke: '#fff',
  stroke_width: 1,
  stroke_linecap: 'round',
  color: '#fff'
},
customSectors: {
ranges: [{
    color : "#cfcfcf",
    lo : 10,
    hi : 12
  }, {
    color : "#6db54c",
    lo : 13,
    hi : 18
  },
  {
    color : "#c8fc39",
    lo : 19,
    hi : 24
  },
  {
    color : "#f0c816",
    lo : 25,
    hi : 30
  },
  {
    color : "#cc7431",
    lo : 31,
    hi : 35
  },
  {
    color : "#cc3131",
    lo : 36,
    hi : 48
  }] 
  },
        valueFontColor: 010101,
        title: "PHEIC LEVEL",
        label: "PHEIC LEVEL",
        shadowOpacity: 1,
startAnimationType: "<>",
        startAnimationTime: 2000,
                     /*   textRenderer: function (val) {
                    if (val <= 12) {
                        return 'NO PHEIC';
                    } else if (18 >= val > 12) {
                        return 'PHEIC LEVEL 1';
                    } else if (24 >= val > 18) {
                        return 'PHEIC LEVEL 2';
                    }
                    else if (30 >= val > 24) {
                        return 'PHEIC LEVEL 3';
                    }
                    else if (35 >= val > 30) {
                        return 'PHEIC LEVEL 4';
                    }
                    else if (val > 35) {
                        return 'PHEIC LEVEL 5';
                    }
                },
                                onAnimationEnd: function () {
                    console.log('f: onAnimationEnd()');
                }
        
        */
      });
      
      
});
