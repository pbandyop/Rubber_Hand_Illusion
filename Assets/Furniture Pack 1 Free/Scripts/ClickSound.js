#pragma strict

//Spawn a new object with AudioSource and Clip set, at a point in the 3D world
var AudioFile : AudioClip;
 
function Update () {
		if ((GUI.Button (Rect (400,250,600,90), "Female Hand") || (GUI.Button (Rect (400,350,600,90), "Male Hand"))))
		{
    		audio.clip = AudioFile;
    		audio.Play(); 
		}
	}