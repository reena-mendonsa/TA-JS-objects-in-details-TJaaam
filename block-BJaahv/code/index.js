//Factory pattern
function createData(name,id,noOfProjects){
    data = {};
   data.name = name;
   data.id = id;
   data.noOfProjects = noOfProjects;
   data.getProjects = function(){
   return data.noOfProjects;
 }
 
 data.changeName = function(newName){
   let dummy = data.name;
   data.name = newName;
   return dummy;
 }
 data.incrementProject = function(value=1){
   data.noOfProjects +=value;
   return data.noOfProjects;
 }
 data.decrementProject = function(value=1){
   data.noOfProjects -=value;
   return data.noOfProjects;
 }
   return data;
 }
 
 let data1 = createData("Reena",20,8);
 data1.getProjects();//8
 data1.changeName("ruth");//"Reena"
 data1.decrementProject();//7
 data1.incrementProject();//8
 
 
 //prototypical pattern
 function createData(name,id,noOfProjects){
    let data = Object.create(dataMethods);
   data.name = name;
   data.id = id;
   data.noOfProjects = noOfProjects;
   return data;
 }
 
 let dataMethods = {
   getProjects : function(){
     return this.noOfProjects;
   },
   changeName : function(newName){
     let dummy = this.name;
     this.name = newName;
     return dummy;
   },
   incrementProject : function(value=1){
     this.noOfProjects +=value;
     return this.noOfProjects;
   },
   decrementProject : function(value=1){
     this.noOfProjects -=value;
     return this.noOfProjects;
   }
 }
 
 let data1 = createData("Reena",20,8);
 data1.getProjects();//8
 data1.changeName("ruth");//"Reena"
 data1.decrementProject();//7
 data1.incrementProject();//8
 
 
 //psuedoclassical pattern
 function CreateData(name,id,noOfProjects){
   this.name = name;
   this.id = id;
   this.noOfProjects = noOfProjects;
 
 }
 
 CreateData.prototype = {
   getProjects : function(){
     return this.noOfProjects;
   },
   changeName : function(newName){
     let dummy = this.name;
     this.name = newName;
     return dummy;
   },
   incrementProject : function(value=1){
     this.noOfProjects +=value;
     return this.noOfProjects;
   },
   decrementProject : function(value=1){
     this.noOfProjects -=value;
     return this.noOfProjects;
   }
 };
 
 let data1 = new CreateData("Reena",20,8);
 data1.getProjects();//8
 data1.changeName("ruth");//"Reena"
 data1.decrementProject();//7
 data1.incrementProject();//8
 
 
 
 // Class pattern
 
 class Data{
   constructor(name,id,noOfProjects){
     this.name = name;
     this.id = id;
     this.noOfProjects = noOfProjects;
   }
   getProjects(){
     return this.noOfProjects;
   }
   changeName(newName){
     let dummy = this.name;
     this.name = newName;
     return dummy;
   }
   incrementProject(value=1){
     this.noOfProjects +=value;
     return this.noOfProjects;
   }
   decrementProject(value=1){
     this.noOfProjects -=value;
     return this.noOfProjects;
   }
 }
 
 
 let data1 = new Data("Reena",20,8);
 data1.getProjects();//8
 data1.changeName("ruth");//"reena"
 data1.decrementProject();//7
 data1.incrementProject();//8