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
				"blog": "http://johnsoncook.com/",
				"bio": "The definition of energetic, Johnson Cook is the fearless leader here at Voxa. As an active startup blogger at JohnsonCook.com, Johnson is currently a Partner of Atlanta Ventures, on the Board of Atlanta Tech Edge and GetNotes, Co-Founder and Managing Director of the Atlanta Tech Village, and President of the Entrepreneur’s Organization, Atlanta Chapter."
			},
			{
				"id": "2",
				"name": "Brandon Cummings",
				"title": "GM",
				"picture": "img/brandon.png",
				"twitterId": "brandon_cmngs",
				"twitterUrl": "https://twitter.com/brandon_cmngs",
				"blog": "http://brandoncummings.me/",
				"bio": "Diagnosed with an incurable form of ADD/OCD, Brandon Cummings is greatly distracted by what he is focusing on. Proud graduate of the Florida State University, Brandon is entrepreneur at heart and keeps Voxa on point with strategy, operations, and endless 80 work weeks."
			},
			{
				"id": "3",
				"name": "Chris Halaschek",
				"title": "CTO",
				"picture": "img/chris.png",
				"twitterId": "chalaschek",
				"twitterUrl": "https://twitter.com/chalaschek",
				"blog": "http://chrishalaschek.com/",
				"bio": "Not knowing the word “Sleep”, Chris Halaschek has an insatiable appetite for real-time data analytics and machine learning. Just off the plane from his 6 year tenure in San Francisco, Chris is now flexing his Computer Science PhD in the heart of Atlanta’s start-up culture as Voxa’s heroic CTO."
			},
			{
				"id": "4",
				"name": "David Cummings",
				"title": "Co-Founder & Investor",
				"picture": "img/david.png",
				"twitterId": "davidcummings",
				"twitterUrl": "https://twitter.com/davidcummings",
				"blog": "http://davidcummings.org/",
				"bio": "Successful serial entrepreneur and mastermind of the Atlanta Tech Village, David is a Co-Founder and Investor of Voxa. David Cummings has a great track record in the Atlanta start-up scene such as Hannon Hill in 2001, Pardot in 2007, and the Atlanta Tech Village in 2013."
			}
		],
		features: [
			{
				"id": "feat-1",
				"header": "Leverage your CRM with less work",
				"subHeader": "Voxa <strong>automatically integrates</strong> your emails with Salesforce. Spend time focusing on <strong>your customers</strong> and closing deals - not modern day paperwork.",
				"picture": "img/macbook.png"
			},
			{
				"id": "feat-2",
				"header": "Let your CRM work for you",
				"subHeader": "Using Natural Language Task Triggers, Voxa will <strong>identify upcoming tasks</strong> so you never forget to send that email next week.",
				"picture": "img/ipad.png"
			},
			{
				"id": "feat-3",
				"header": "Analyze your email habits",
				"subHeader": "Average response times, email quality and length. With Voxa, email metrics are now at your disposal.",
				"picture": "img/macbook.png"
			}
		]
	});
});