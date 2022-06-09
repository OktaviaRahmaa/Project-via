
var admin = require("firebase-admin");
var faker = require('faker');

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tasteit-51eee-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();

// const customerRef = db.collection("CUstomers");

// customerRef.get().then((querySnapshot) => {
//   querySnapshot.forEach(document => {
//     console.log(document.data());
//   })
// })

// const data = {
//   id: 1,
//   name: "Jeon Cooky"
// }

// const data1 = {
//   id: 2,
//   name: "Jeon Bam"
// }

// db.collection("Customers").doc(data.id.toString()).set(data);
// db.collection("Customers").doc(data1.id.toString()).set(data1);

//create a new write batch
// const batch = db.batch();

// const customer3 = db.collection("Customers").doc("3");
// const customer4 = db.collection("Customers").doc("4");
// const customer5 = db.collection("Customers").doc("5");
// const customer6 = db.collection("Customers").doc("6");
// const customer7 = db.collection("Customers").doc("7");
// const customer8 = db.collection("Customers").doc("8");
// const customer9 = db.collection("Customers").doc("2");

// batch.set(customer3, { age: 3, name: "RM"});
// batch.set(customer4, { age: 4, name: "Jin"});
// batch.set(customer5, { age: 5, name: "Suga"});
// batch.set(customer6, { age: 6, name: "J-Hope"});
// batch.set(customer7, { age: 7, name: "Jimin"});
// batch.set(customer8, { age: 7, name: "V"});
// batch.set(customer9, { age: 7, name: "Jungkook"});

// //run the batch
// batch.commit().then(res => {
//   console.log("BATCH RUN SUCCESFULLY")
// })

//delete document
// db.collection("Customers").doc("1").delete().then(res => {
//   console.log("document deleted succedfully")
// })

//get a document
// db.collection("Customers").doc("2").get().then(doc => {
//   console.log(doc.data());
// })

//get all collection
// db.collection("Customers").get().then(snapshot => {
//   snapshot.forEach(element => {
//     console.log(element.data());
//   });
// })

//listen for real time changes
// db.collection("Customers").doc("7").onSnapshot(docSnapshot => {
//   console.log(docSnapshot.data());
// })

//sorting and paginating collection
// create 100 records
// for (let index = 0; index < Array.length; index++) {
//   const element = array[index];
// };

// for (let index = 0; index < 100; index++) {
//   db.collection("Customers").doc(index.toString()).set({
//     id: index,
//     name: faker.name.firstName() + " " + faker.name.lastName()
//   })
// };

//read the first 10 elements sorted by name
// db.collection("Customers").orderBy("name")
//   .startAt(0).limit(10).get().then(snapshot => {
//     snapshot.forEach(element => {
//       console.log(element.data().name)
//     });
//   })

//read the second 10 elements sorted by name
// db.collection("Customers").orderBy("name")
//   .startAt(10).limit(10).get().then(snapshot => {
//     snapshot.forEach(element => {
//       console.log(element.data().name)
//     });
//   })

//read the rest
db.collection("Customers").orderBy("name")
  .startAt(20).get().then(snapshot => {
    snapshot.forEach(element => {
      console.log(element.data().name)
    });
  })



