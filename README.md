Clarity-LIFX
============

An implementation of clarity motion detection controlling a LIFX lightbulb, developed for the LIFX competition.

http://blog.lifx.co/2014/07/11/lifx-developer-competition/

This program runs a node server, using the web browser as an interface. As such, you will need to install node in order for this to work.

http://nodejs.org


Install
-------
Download the repository

run 'npm install' in the main directory

Running
-------
run 'node .'

The server will then run on localhost, using port 5000.

It will then launch your web browser and open the main site page. Anyone can then access this page if you port forward for it.

You will need to allow the page to use your webcam. 

The filter works by applying a motion detection over the scene, to find things moving. It then thresholds the values so that only areas of strong movement show up. 

It Then averages the position value of all the pixels where motion is detected, to finds the centre point of movement. This position is mapped onto the YUV colour space (Y set to 0.5) to determine the colour that the bulb turns.

Options
-------
####Simulate: 
If you don't have a bulb, it will colour the camera output to simulate what it would look like.

####Posts to Server: 
Limits the amount of times that it will update the colour of the bulb, to reduce the number of changes/traffic.

####Motion Detector - frame count: 
Changes the number of frames that the motion detector will detect movement between

####Value Thresholder - inverted: 
Will invert the black/white, which could be useful if there is a lot of movement in a scene, to detect areas that don't move.

####Value Thresholder - threshold: 
Changes the threshold value, lower will detect more movement, higher will detect less.

####LIFX - Show Field: 
Will render out the YUV colour space, so you can see what areas map to which colours.