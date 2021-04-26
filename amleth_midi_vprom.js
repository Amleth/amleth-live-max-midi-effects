const Max = require('max-api');

// CONGA HIGH	D#3		63
// CONGA LOW	E3		64
// TOM HIGH		C2		48
// TOM HIGH		D2		50
// TOM LOW		F1		41
// TOM LOW		G1		43
// SNARE		D1		38
// SNARE		E1		40
// BASS			B0		35
// BASS			C1		36
// HIHAT		F#1		42
// HIHAT		G#1		44
// OPEN HIHAT	A#1		46
// COWBELL		G#2		56
// CLAPS		D#1		39
// RIMSHOT		C#1		37
// TAMB			F#2		54
// CABASA		A3		69
// EXTRA		D3		62
// CHOKE		C4		74

Max.addHandler("number", (msg) => {
	let o;
	
	switch(msg) {
		case 36: o = 64; break;
		case 37: o = 41; break;
		case 38: o = 38; break;
		case 39: o = 35; break;
		case 40: o = 42; break;
		case 41: o = 56; break;
		case 42: o = 37; break;
		case 43: o = 54; break;
		case 44: o = 63; break;
		case 45: o = 48; break;
		case 46: o = 62; break;
		case 47: o = 36; break;
		case 48: o = 44; break;
		case 49: o = 46; break;
		case 50: o = 39; break;
		case 51: o = 69; break;
		
	}
	
	Max.outlet(o);
});
