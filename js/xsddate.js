function parseXSDDateString(dateString) {
	dateString = dateString.replace(".000Z", "Z");
	var Zp = (dateString.charAt(10) == "T") ? 19 : 10;
	var xDate = new Date(dateString.substr(0, Zp).replace(/-/g, '/').replace("T", " "));
	if (dateString.length > Zp) {
		xDate.setMinutes(xDate.getMinutes() - xDate.getTimezoneOffset());
		if (dateString.charAt(Zp) != "Z") {
			var tZ = dateString.substr(Zp).split(":");
			tZ = tZ[0] * 60 + (tZ[1] * 1);
			xDate.setMinutes(xDate.getMinutes() + tZ);
		}
	}
	return xDate;
}
