
 // DAISESRATINGS SCHEMA
 //Note most of the values of this fields are dynamically generated
 // the schema is just for basic understanding of the whole processess!

 
 { 
 	'name': "Ratings of Daises",
    "Rating": { 
    	        "daisesNumber": [
    	                          "LoveDaises Application", "Author Olatunji Odelade"
    	                        ]
    	      }
 }

 db.daisesratings.insert({'name': "Ratings of Daises","Rating": {"daisesNumber": ["LoveDaises Application", "Author Olatunji Odelade"]}})
 

 // DAISES SCHEMA
 //Note most of the values of this fields are dynamically generated
 // the schema is just for basic understanding of the whole processess!


 {
 	'Title': 'Posted Daises', 
 	'Daises': {
 		        'Daises': "",
 		        'FirstName': "", 
 		        'LastName': "", 
 		        'PersonalPicture': "", 
 		        'OnlineStatus': '', 
 		        'PostedPicture': "", 
 		        'PostedVideo': "", 
 		        'Email': "", 
 		        'RateAvg1': 10, 
 		        'RateAvg2': 10, 
 		        'DaisesIdentity': ""
 		      }, 
     'Time': {
     	        'Period': "", 
     	        'Seconds': new Date().getSeconds(), 
     	        'Minutes': new Date().getMinutes(), 
     	        'Time': new Date().getHours(), 
     	        'Day': new Date().getDay(), 
     	        'Month': new Date().getMonth(), 
     	        'Year': new Date().getFullYear()
     	     }
  }

  // Inserted this way

 db.Daises.insert({'Title': 'Posted Daises', 'Daises': {'Daises': "",'FirstName': "", 'LastName': "", 'PersonalPicture': "", 'OnlineStatus': '', 'PostedPicture': "", 'PostedVideo': "", 'Email': "", 'RateAvg1': 10, 'RateAvg2': 10, 'DaisesIdentity': ""}, 'Time': {'Period': "", 'Seconds': new Date().getSeconds(), 'Minutes': new Date().getMinutes(), 'Time': new Date().getHours(), 'Day': new Date().getDay(), 'Month': new Date().getMonth(), 'Year': new Date().getFullYear()}})
