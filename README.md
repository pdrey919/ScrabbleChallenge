# ScrabbleChallenge
A quick program testing the possible hand combinations to get the number that total to 46. Open hands.txt to see the possible hands.

The program is written using nodeJS, with entry point app.js. 
Hands.txt is a text file showing the 80 possible hands. 
I also ran the program through all the possible orders of every hand, and I got 473760 possible hands! Not sure if the math is right, but either way, that's a crazy amount.

Rather than cycling through doubles and triples of the tiles that are worth fewer points, I realized that you could never get 46 if you had more than one tile worth 1 or 2 points. So I only duplicated tiles over 2 points in my array of tiles.
