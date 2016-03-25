# hackinout_webRTC
This is a repo for the inout hackathon held at NIT surat :) 

We are building a realtime video broadcast app , which will work in the intranet with no connection to external internet whatsoever. This we aim will solve the education and communication problem in rural india .   

To use it locally on your intranet, clone the repo and run an "npm install" inside the downloaded folder
Then run "npm start" to start the server.

then open your browser and go to "http://localhost:5000" or "http://<your ip>:5000"
This will be your video capture window, and to see the broadcasted video point your browser or any browser in the same LAN to "http://<server-ip>:5000/client.html"

Also hit enter on the main video capture window, if you want to remove any effects being put on the video.

The broadcasted video is a bit laggy, but efforts are being put in to make it realtime , also a major TODO is to add audio :)
