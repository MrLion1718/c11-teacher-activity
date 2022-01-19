var marks = [30,40,45,35];
var sum=0

function setup() {
  createCanvas(400, 400);
   for(var i=0;i<marks.length;i++){
sum=sum+marks[i]

   }
   var average=sum/marks.length
   console.log(average)

}

function draw() {
  background(150);
}