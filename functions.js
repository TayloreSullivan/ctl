
function fedpov(house,income,percentage){
	// Determines if your income is less than or equal to
	// a percentage of the 2021 federal poverty guidelines
	// for the contiguous United States. See
	// https://aspe.hhs.gov/poverty-guidelines

		var line = NaN;

		if (house == 1) {
			line = 12880;
		} else if (house == 2) {
			line = 17420;
		} else if (house == 3) {
			line = 21960;
		} else if (house == 4) {
			line = 26500;
		} else if (house == 5) {
			line = 31040;
		} else if (house == 6) {
			line = 35580;
		} else if (house == 7) {
			line = 40120;
		} else if (house == 8) {
			line = 44660;
		} else if (house > 8) {
			line = 44660 + (house-8)*4540;
		}

		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}
