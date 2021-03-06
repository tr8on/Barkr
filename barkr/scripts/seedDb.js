const { Dog , Owner } = require ( "../Models/models" );

const main = async () => {
	await Dog.destroy ( {
		where : {}
	} );
	await Owner.destroy ( {
		where : {}
	} );
	
	const dog1 = await Dog.create({
		name: "Moon",
		zipcode: "10011",
		age: 4,
		breed: "Husky",
		gender: "Male",
		description:"Love to play with his tail"
	});
	const dog2 = await Dog.create({
		name: "Kyrus",
		zipcode: "07806",
		age: 13,
		breed: "Terrier",
		gender: "Male",
		description:"Loves kisses on his neck"
	});
//----------------------------------------------------------------------------------------------
	
	 const owner1 = await Owner.create({
		 name: "Ruben",
		phone: "647-828-4249",
		email: "ruben@fakemail.com"
	 })
	const owner2 = await Owner.create({
		name: "Rick",
		phone: "129-435-3242",
		email: "ricks212@fakemail.com"
	})
	
	const maleList = await Dog.findAll({
        where:{
            gender: "male"
		}
	})
		
	 await dog1.setOwner(owner1);
	 await dog2.setOwner(owner2);
	 
	
	process.exit ();
};

main ();
