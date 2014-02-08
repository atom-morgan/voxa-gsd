$(function() {
	TeamManager.start({
	  employees: [
			{
				"id": "1",
				"name": "Johnson Cook",
				"title": "CEO",
				"picture": "img/johnson.png",
				"twitterId": "Johnson_Cook",
				"twitterUrl": "https://twitter.com/Johnson_Cook",
				"blog": "http://johnsoncook.com/"
			},
			{
				"id": "2",
				"name": "Brandon Cummings",
				"title": "GM",
				"picture": "img/brandon.png",
				"twitterId": "brandon_cmngs",
				"twitterUrl": "https://twitter.com/brandon_cmngs",
				"blog": "http://brandoncummings.me/"
			},
			{
				"id": "3",
				"name": "Chris Halaschek",
				"title": "CTO",
				"picture": "img/chris.png",
				"twitterId": "chalaschek",
				"twitterUrl": "https://twitter.com/chalaschek",
				"blog": "http://chrishalaschek.com/"
			},
			{
				"id": "4",
				"name": "David Cummings",
				"title": "Co-Founder & Investor",
				"picture": "img/david.png",
				"twitterId": "davidcummings",
				"twitterUrl": "https://twitter.com/davidcummings",
				"blog": "http://davidcummings.org/"
			}
		],
		features: [
			{
				"id": "1",
				"header": "First Header",
				"subHeader": "First SubHeader",
				"picture": "img/david.png"
			},
			{
				"id": "2",
				"header": "Second Header",
				"subHeader": "Second SubHeader",
				"picture": "img/chris.png"
			}
		]
	});
});