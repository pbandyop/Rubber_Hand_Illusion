#pragma strict

//Spawn a new object with AudioSource and Clip set, at a point in the 3D world
var AudioFile1 : AudioClip;
var AudioFile2 : AudioClip;
 
function Update () {
		if (Input.GetKeyDown (KeyCode.K))
		{
			MyKnifeDelay();
    		//audio.clip = AudioFile1;
   			// audio.Play(); 
		}
		
		/*if (Input.GetKeyDown (KeyCode.I))
		{
    		audio.clip = AudioFile2;
   			 audio.Play(); 
		}*/
	}
	
	function MyKnifeDelay(){
       yield WaitForSeconds (0.75);
    	audio.clip = AudioFile1;
   	    audio.Play();	
	}