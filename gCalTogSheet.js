function readGoogleCalendar() {
SpreadsheetApp.getActiveSpreadsheet();
Logger.log("Start")
var userCalendar = CalendarApp.getCalendarById("mandirco@sjmandir.email");
var calName = CalendarApp.getDefaultCalendar().getName();
var startTime = new Date(2016, 6, 5);
var endTime = new Date(2016, 6, 12);
var events = CalendarApp.getDefaultCalendar().getEvents(startTime, endTime);
var allTitles = {};
var ss = SpreadsheetApp.openById("1REZ3Qgm1Menwe6YnEgdgh1Y8p2DoNurqlwjy-XNL32Y");
var sheet = SpreadsheetApp.setActiveSheet(ss.getSheetByName("CalendarData"));
sheet.clearContents();
sheet.getRange('a1').setValue("Name");
sheet.getRange('b1').setValue("Date");
sheet.getRange('c1').setValue("Time");
sheet.getRange('d1').setValue("Guests");
var index = 2;
var title = null;
var mulakatDate = null;
var mulakatTime = null;
var guestList = null;

for (i in events) {
var allguest = "";
title = events[i].getTitle().trim();
mulakatDate = Utilities.formatDate(events[i].getStartTime(), "PST", "yyyy-MM-dd");
mulakatTime = Utilities.formatDate(events[i].getStartTime(), "PST", "hh:mm a");
guestList = events[i].getGuestList();
for(j in guestList){
allguest += guestList[j].getName() + "<" + guestList[j].getEmail()+ ">, ";
}
sheet.getRange('a' + index).setValue(title);
sheet.getRange('b' + index).setValue(mulakatDate);
sheet.getRange('c' + index).setValue(mulakatTime);
sheet.getRange('d' + index).setValue(allguest.trim());
index++;
}
//Logger.log(sheet.getName());
//Logger.log(allTitles[10]);
}
