
/* Pick something you like to do, or something
 that you can do well that involves many steps. 
 Now, deconstruct your hobby/job/craft into the 
 tasks required.
 
 Write a function for each task.

 In the function body, just console.log() a 
 description of the task.

 Invoke the tasks in the correct order.
*/

// ===============================================
// functions involved in making a PB&J sandwich ==
// ===============================================

const verifyIngredients = () => {
    console.log('#-#-#  WARNING #-#-#')
    console.log(`If you do not have both GRAPE JELLY and SMOOTH JIF PEANUT BUTTER, stop now!`)
    console.log(`You cannot make a PB&J sandwich with inferior ingredients`)
}

const layOutIngredients = () => {
	console.log('Lay out all ingredients on the counter.')
}

const openPBJar = () => {
	console.log('Open the jar of peanut butter and set the lid aside.')
}

const openJellyJar = () => {
	console.log('Open the jar of grape jelly and set the lid aside.')
}

const getKnifeFromDrawer = () => {
	console.log('From the silverware drawer, remove a butter knife.')
}

const applyPBToBread = () => {
	console.log('Liberally apply peanut butter, using the knife, to either side of the other piece of bread.')
}

const eatTheSandwich = () => {
	console.log('Reduce the sandwich down to nothing by masticating small morsels and consuming orally.')
}

const cutOffCrusts = () => {
	console.log('Use the knife to cut off the gross crusts from the four sides of the sandwich.')
}

const applyJellyToBread = () => {
	console.log('Liberally apply grape jelly, using the knife, to one side of one slice of bread.')
}

const constructTheSandwich = () => {
	console.log('Place the two pieces of bread together, ingredient sides facing.')
}

const putKnifeInDishwasher = () => {
	console.log('Place the dirty knife into the silverware basket of the dishwasher.')
}

const replacePBJarLid = () => {
	console.log('Put the lid back on the peanut butter jar and return the jar to the pantry.')
}

const replaceJellyJarLid = () => {
	console.log('Put the lid back on the jelly jar and return the jar to the refrigerator.')
}

// ===============================================
// invoking functions in the appropriate order ===
// ===============================================

verifyIngredients()
layOutIngredients()
getKnifeFromDrawer()
openJellyJar()
applyJellyToBread()
replaceJellyJarLid
openPBJar()
applyPBToBread()
replacePBJarLid
constructTheSandwich()
cutOffCrusts()
putKnifeInDishwasher()
eatTheSandwich()

