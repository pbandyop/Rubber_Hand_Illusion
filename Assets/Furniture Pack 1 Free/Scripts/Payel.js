#pragma strict

function OnCollisionEnter(theCollision : Collision){
 if(theCollision.gameObject.name == "Block_Building_High_1"){
  Debug.Log("Hit the floor");
 }else if(theCollision.gameObject.name == "Block_Building_High_2"){
  Debug.Log("Hit the wall");
 }
}