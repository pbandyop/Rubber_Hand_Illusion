#pragma strict

function OnTriggerEnter (myTrigger : Collider) {
 if( (myTrigger.gameObject.name == "Cube1") || (myTrigger.gameObject.name == "Cube2") || (myTrigger.gameObject.name == "Cube3") || (myTrigger.gameObject.name == "Cube4") ){
  Debug.Log("Box went through!");
  Application.LoadLevel("Showcase");
 }
}