var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/vnaStore";

// function insert_user(fname,lname,user,email,gender,password,mobile_no,address_line1,address_line2,city,pincode){
// 	return new Promise((resolve,reject)=>{
// 			MongoClient.connect(url, function(err, db) {
// 				if (err) reject(err);
// 				var myobj = {
// 							'first_name': fname,
// 							'last_name': lname, 
// 							'user_name': user, 
// 							'password': password,
// 							'gender': gender,
// 							'email':email,
// 							'mobile_no':mobile_no,
// 							'address_line1':address_line1,
// 							'address_line2':address_line2,
// 							'city':city,
// 							'pincode':pincode,
// 							'user_cart':[],
// 							'products_purchased':[],										
// 						};
// 				db.collection("user")
// 					.insertOne(myobj, function(err, res) {
// 						if (err) throw err;
// 						console.log("1 record inserted");
// 						resolve(res);
// 					});
// 			})
// 		})
// }


function insert_user(fname,lname){
	return new Promise((resolve,reject)=>{
			MongoClient.connect(url, function(err, db) {
				if (err) reject(err);
				var myobj = {
							'first_name': fname,
							'last_name': lname, 										
						};
				db.collection("test")
					.insertOne(myobj, function(err, res) {
						if (err) throw err;
						console.log("1 record inserted");
						resolve(res);
					});
			})
		})
}

function insert_product(product_id,name,type,mrp,description){
	return new Promise((resolve,reject)=>{
			MongoClient.connect(url, function(err, db) {
				if (err) reject(err);
				var myobj = { 
							'product_id': usproduct_ider, 
							'product_name': name,
							'product_type':type,
							'product_mrp':mrp,
							'product_description':description,
							'product_offers':0									
						};
				db.collection("product")
					.insertOne(myobj, function(err, res) {
						if (err) throw err;
						console.log("1 record inserted");
						resolve(res);
					});
			})
		})
}

function updateUserCart(user,mobile,product){
		return new Promise((resolve,reject)=>{
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("user")
						.updateOne({ 
							'user_name': user,
							'mobile_no':mobile
						},{
							$set:{
								'user_cart': product
							}
						}, { upsert: true }, 
						function(err, res) {
							if (err) throw err;
							console.log("1 record updated");
							resolve(res);
						})
				})
		})
}

function find(username,password){
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		 db.collection("user")
		 		.find({ 'user_name':username,'password':password })
				.toArray(function(err, result) {
			    if (err) throw err;
			    resolve(result);
			  });
			});
		})
}

function retreiveUser(){
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection("user")
				.find({})
				.toArray(function(err, result) {
					if (err) throw err;
					resolve(result)
				})
		})
	})
}
function retreiveProduct(){
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection("product")
				.find({})
				.toArray(function(err, result) {
					if (err) throw err;
					resolve(result)
				})
		})
	})
}

exports.insert_user = insert_user;
exports.insert_product = insert_product;

exports.updateUserCart = updateUserCart;
//exports.find = find;
exports.retreiveProduct= retreiveProduct;
exports.retreiveUser=retreiveUser;
