#pragma strict

//Spawn a new object with AudioSource and Clip set, at a point in the 3D world
var AudioFile : AudioClip;
 
function Update () {
		if (Input.GetKeyDown (KeyCode.K))
		{
			  MyBloodDelay();
    		 //audio.clip = AudioFile;
   			 //audio.Play(); 
		}
	}


function MyBloodDelay(){
       yield WaitForSeconds (0.75);
    	audio.clip = AudioFile;
   	    audio.Play();	
	}