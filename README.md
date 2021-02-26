client repo for composting project

CODE BREAKS AFTER INSTALLING gh-pages --save-dev 
PLEASE DO NOT PUSH UP CODE AFTER INSTALLING GH-PAGES. 


Compostrack is an application that utilizes NYC's Open data for Food Scrap Drop-Off Locations via Socrata's Open Data API https://dev.socrata.com/foundry/data.cityofnewyork.us/if26-z6xq along with mapbox-gl to allow users to view NYC's Frood Scrap Drop Off Locations, view information on the locations such as hours of operation, website and contact information by selecting the map icon. 

Compostrack also utilizes an API built with MongoDB and Express.js to allow users to sign-in and add submit their the Qty (in Lbs) of food scrap that they dropped off at a selected drop-off location.

The purpose of this application is to encourage more composting, and sustainable practices in New York City by making food scrap drop off sites information more accessible, and to give New Yorkers a greater view into their personal and their city's environmental inpact. 

Currently, the server is set up strictly to track the lbs of food scrap dropped off to each site. Below are plans for future deployments.

When users check their compost into a drop off site, it will also save that weight in their users data, allowing uers to track their personal conservation efforts. 
There will be a compost drop-off tab in the navigation bar so that users can utilize check in functionality without selecting a site on the map. The tab will also hold anaytics on conservation trends over time and overll statistics on performace versus average. 


Other data that we would like to include is: 

[DSNY Monthly Tonnage Data](https://data.cityofnewyork.us/City-Government/DSNY-Monthly-Tonnage-Data/ebb7-mvp5)
DSNY Monthly Tonnage Data provides monthly collection tonnages that the Department of Sanitation collects from NYC residences and institutions. 

[DSNY Waste Characterization: Comparison Table](https://data.cityofnewyork.us/Environment/DSNY-Waste-Characterization-Comparison-Table/sx92-yn4a)
The Department conducted the 2017 NYC Residential, School, and NYCHA (NYC Housing Authority) Waste Characterization Study over three seasons: spring, summer, and fall. This study builds on decades of research and analysis into the evolving composition of NYC's waste stream. DSNY conducted previous waste characterization studies in 1990, 2005, and 2013. Each of these studies share a similar methodology of waste sampling and sorting but also included different targeted analyses to characterize particular components of the waste stream.
 
[DSNY Other Organics Collection Tonnages](https://data.cityofnewyork.us/Environment/DSNY-Other-Organics-Collection-Tonnages/6yag-pnij)
Annual tons of food scraps dropped off at Green Markets and NYC Compost Project Partners. Also includes other deliveries of organics including leaf and wood wastes to NYC Compost Project Partners. 

With Total waste Collection data, comparison data to  scrap collection from compost sites

For example: In January 2021, 200,000 tonnes of refuse was collected from New York City Sanitation, in 2020 the average collection from food scrap sites was 166 tons, or .1% of NYC's total refuse. The last recorded data from NYC's food comparison data shows that 20% of NYC's refuse was Food Waste. If we can measure it, we can improve it.  
