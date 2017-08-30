var tealiumiq_currency = {
    ts:"201708300100",
    rates:{"BZD":2.02665,"YER":250.275,"SLL":7553.652075,"ERN":15.331727,"NGN":361.029651,"CRC":579.495,"VEF":10.12298,"LAK":8305,"CLP":625.8,"DZD":109.971717,"CUC":1,"BYN":1.936828,"SZL":13.123382,"MOP":8.103481,"MUR":32.6275,"WST":2.470206,"LRD":115.088085,"MMK":1357.8,"KGS":68.606942,"PYG":5674,"IDR":13334.010102,"GTQ":7.323346,"CAD":1.251547,"AWG":1.794996,"TTD":6.78618,"PKR":105.795,"UZS":4204.85,"XCD":2.70255,"VUV":104.083462,"XOF":547.787016,"KMF":411.5,"AZN":1.7,"XPD":0.00105889,"MNT":2429.735065,"ANG":1.789639,"LBP":1515.499426,"KES":103.186161,"GBP":0.773666,"BTN":63.905066,"CDF":1549,"CLF":0.02327,"SEK":7.939035,"AFN":68.448279,"KZT":337.527592,"DKK":6.212748,"AMD":480.975377,"SCR":13.629169,"FJD":2.012549,"SHP":0.773666,"ALL":111.170384,"TOP":2.2143,"ZMW":9.109028,"UGX":3619.6,"OMR":0.384971,"DJF":178.97,"BND":1.352219,"TND":2.422105,"SBD":7.79809,"GHS":4.454147,"GNF":8936.1,"BOB":7.012711,"CVE":92.05,"IMP":0.773666,"ARS":17.375,"GMD":46.075,"MWK":726.449645,"BDT":81.6655,"KWD":0.301162,"EUR":0.835096,"CHF":0.955521,"XAG":0.05757221,"SRD":7.438,"DOP":47.358738,"PEN":3.2395,"KPW":900,"SVC":8.797996,"SGD":1.355455,"TWD":30.11576,"USD":1,"BGN":1.63391,"MAD":9.331504,"SSP":125.5349,"GGP":0.773666,"SAR":3.7504,"AUD":1.256253,"KYD":0.837852,"KRW":1124.07,"TRY":3.449763,"GIP":0.773666,"XAU":0.00076388,"NAD":13.073434,"CZK":21.80707,"JMD":128.640784,"BSD":1,"UYU":28.913806,"MXN":17.85147,"BTC":0.000216152185,"BWP":10.160873,"GYD":207.2536,"LYD":1.370756,"THB":33.21,"EGP":17.6685,"MKD":51.3585,"SDG":6.712847,"AED":3.672896,"JOD":0.709001,"JPY":109.83072222,"ZAR":13.0056,"HRK":6.1911,"AOA":165.9205,"RWF":834.09,"CUP":25.5,"BBD":2,"PGK":3.20155,"LKR":153.576733,"RON":3.832896,"JEP":0.773666,"PLN":3.552868,"TJS":8.862651,"IQD":1173.35,"MDL":17.9015,"MYR":4.269036,"CNH":6.611585,"CNY":6.598282,"INR":64.0146,"FKP":0.773666,"NIO":30.057481,"PHP":51.078,"HNL":23.522497,"HKD":7.824856,"NZD":1.377781,"BRL":3.166,"RSD":99.505,"SOS":589,"MZN":61,"NOK":7.755702,"GEL":2.41795,"ISK":104.97,"ILS":3.5722,"LSL":13.073434,"HUF":255.404833,"UAH":25.593398,"RUB":58.805,"BMD":1,"IRR":32919,"MGA":2978.55,"MVR":15.450233,"QAR":3.685006,"VND":22686.807359,"MRO":367.06086,"NPR":102.971744,"ZWL":322.355011,"COP":2934.5,"TZS":2241.1,"BIF":1750.7,"XPT":0.00100503,"SYP":515,"KHR":4050,"HTG":66.655042,"BHD":0.377034,"XDR":0.702778,"XAF":547.787016,"STD":20541.572706,"PAB":1,"BAM":1.63395,"TMT":3.504979,"ETB":23.517704,"XPF":99.653451},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}