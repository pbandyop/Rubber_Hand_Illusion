#pragma strict

//Spawn a new object with AudioSource and Clip set, at a point in the 3D world
var AudioFile : AudioClip;
 
function Update () {
		if ((Input.GetKeyDown (KeyCode.M) || (Input.GetKeyDown (KeyCode.N))))
		{
    		audio.clip = AudioFile;
    		audio.Play(); 
		}
	}