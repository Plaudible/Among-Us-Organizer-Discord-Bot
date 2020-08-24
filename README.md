# Among-Us-Organizer-Discord-Bot
![Picture](https://i.imgur.com/hyOY9VN.png)

This is a bot dedicated to my private server for organizing and hosting rounds of the social outlier game Among Us.

As of now, IDs are custom made only for my server and don't have easy support outside - if you would like to demo,
please message me on Discord at Plaudible#0420. 

Future updates might include simpler integration of IDs or a way to make this easy to integrate across servers.

As of now, it works as follows:

1. Using !start, everyone in the "queue" channel gets moved to the meeting room.
2. Players are asked to assign roles using reactions in a channel titled "select-role."
3. Once roles are assigned, you start the game process with !breakout. This will:

    3a. Move all "Crewmembers" into individual calls (up to 8) to prevent communication and visibility.
    3b. Move all "Imposters" into one call to communicate with each other.
4. Once a body is found or a meeting is called, use !meeting to return everyone to the group.

    4a. The bot will join and play any "audio.mp3" file in the directory. In our case, L's theme from death note.
5. Rinse and repeat, using !breakout and !meeting until game end.
6. !end to move everyone back to original call.
