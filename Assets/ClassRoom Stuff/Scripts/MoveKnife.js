#pragma strict

var posSpeed1 : float = 5.0;
var negSpeed1 : float = -5.0;
var MyPencil : GameObject;
//var AudioFile : AudioClip;

function Update () {
		if (Input.GetKey("k")) {
			//audio.clip = AudioFile;
    		//audio.Play();		
			MyPencil = GameObject.Find("Pencil");
		 	Destroy(MyPencil);
			transform.Translate(Vector3(posSpeed1,0,0)*Time.deltaTime);		
			}
			
		if (Input.GetKey("i")){
			transform.Translate(Vector3(negSpeed1,0,0)*Time.deltaTime);
			}

}