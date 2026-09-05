const LESSONS = [
  {
    "id": "1",
    "number": 1,
    "title": "Welcome to iMovie — Exploring the Interface",
    "duration": "30–40 min",
    "skill": "Interface navigation",
    "objectives": [
      "Open iMovie and create a new Movie project",
      "Name the four main areas of the window",
      "Play, pause, zoom, scroll, and undo using the trackpad and keyboard"
    ],
    "youWillNeed": [
      "MacBook",
      "iMovie app",
      "Headphones optional"
    ],
    "warmup": "Watch a short example video (teacher choice). Discuss: What made it easy to follow? What would you change?",
    "groups": [
      {
        "title": "Open iMovie and start a project",
        "steps": [
          "Click the Launchpad icon in the Dock, or press Command + Space to open Spotlight.",
          "Type iMovie and press Return.",
          "If iMovie asks for Photos or camera permission, click Allow.",
          "You should now see the Projects browser — a screen of existing movies (or a mostly empty screen if this is the first time).",
          "Click Create New (the large plus tile).",
          "Choose Movie, not Trailer. Trailer comes later.",
          "A blank project opens. This is the editing workspace."
        ]
      },
      {
        "title": "Name the four main areas",
        "intro": "Point to each area as you name it. Students should be able to find all four without help.",
        "steps": [
          "Media Library (left): this is where imported clips, photos, and recordings live. It may say Project Media.",
          "Viewer (large window, usually top right): this is the preview of your movie. What you see here is what the audience will see.",
          "Timeline (the long strip across the bottom): this is where you build the story, left to right, beginning to end.",
          "Toolbar (tabs near the top of the media area): Media, Audio, Titles, Backgrounds, and Transitions."
        ]
      },
      {
        "title": "Practice moving around",
        "steps": [
          "Click anywhere on the empty timeline to place the playhead (the vertical line that shows your current position).",
          "Press the spacebar to play. Press spacebar again to pause.",
          "Use two fingers on the trackpad to scroll the timeline left and right.",
          "Pinch with two fingers on the trackpad to zoom the timeline in (see more detail) or out (see more of the whole movie).",
          "Press Command + Z to undo. This is the most important shortcut in iMovie. Use it whenever something unexpected happens.",
          "Click the project name at the top (it may say My Movie) and rename it Practice1_YourName.",
          "iMovie saves automatically. You do not need to choose File > Save."
        ]
      }
    ],
    "practice": [
      "Create the project, rename it, and sit with a partner.",
      "Partner A names each of the four areas while Partner B points.",
      "Switch roles. Then both partners demonstrate play/pause, zoom, and undo."
    ],
    "check": [
      "Can the student open iMovie and create a Movie project without help?",
      "Can they point to the Media Library, Viewer, Timeline, and Titles/Transitions tabs?",
      "Can they play, pause, and undo?"
    ],
    "tips": [
      "Keep language simple: “The long strip at the bottom is your story.”",
      "Fix login, storage, and permission pop-ups in this lesson so later lessons stay on track.",
      "If a student cannot find Create New, they are still on an old project — click Projects in the top left first."
    ]
  },
  {
    "id": "2",
    "number": 2,
    "title": "Creating a Project, Importing, and Recording",
    "duration": "35–45 min",
    "skill": "Import + MacBook camera",
    "objectives": [
      "Import photos or videos from Photos or Finder",
      "Record a short clip with the built-in FaceTime HD camera",
      "Drag clips onto the timeline in a clear order"
    ],
    "youWillNeed": [
      "MacBook with working camera and microphone",
      "A window or lamp facing the student",
      "Optional teacher sample clips"
    ],
    "warmup": "Quick scavenger hunt: “Show me the timeline. Show me the Import button. Show me where a new clip will appear.”",
    "groups": [
      {
        "title": "Create or open the project",
        "steps": [
          "Open iMovie. If you are still inside yesterday’s project, click Projects in the top-left corner to return to the browser.",
          "Create New → Movie, or open your Lesson 1 project.",
          "Rename it ImportPractice_YourName."
        ]
      },
      {
        "title": "Import photos or videos already on the Mac",
        "steps": [
          "Click the Import Media button (downward arrow) above the media browser. If you do not see it, choose File → Import Media.",
          "In the Import window, browse to Photos, Desktop, or a class folder the teacher has prepared.",
          "Click one file, or hold Command and click several files.",
          "Click Import Selected.",
          "Wait until the clips appear in Project Media on the left. Do not close the window while it is still importing."
        ]
      },
      {
        "title": "Record a clip with the MacBook camera",
        "intro": "This is the only camera students will use in this unit.",
        "steps": [
          "Click Import Media again.",
          "In the left sidebar of the Import window, under Cameras, click FaceTime HD Camera.",
          "If macOS asks for camera or microphone access, click Allow.",
          "A live preview of your face should appear. Sit an arm’s length from the laptop.",
          "Face a window or lamp so light hits your face, not the back of the screen.",
          "Look at the camera lens at the top of the screen, not at your own image.",
          "Click the red Record button. Speak one short sentence, such as “Hi, my name is ___ and this is my video.”",
          "Click Record again to stop. The new clip appears in Project Media.",
          "Record a second clip if the first one is dark, shaky, or too quiet."
        ]
      },
      {
        "title": "Build a first sequence",
        "steps": [
          "Drag your best clips from Project Media down onto the timeline, one after another.",
          "The first clip on the left is the beginning of the movie.",
          "Drag clips left or right to change the order.",
          "Press spacebar and watch the whole sequence.",
          "Ask: Does this order tell a clear story?"
        ]
      }
    ],
    "practice": [
      "Import 2–3 sample items and record 1–2 talking-head clips.",
      "Arrange them on the timeline in a logical order.",
      "Partner watch: “What order is clearer?”"
    ],
    "check": [
      "At least one self-recorded clip is on the timeline.",
      "Clips play in the Viewer when the playhead moves across them.",
      "The student can explain why the order makes sense."
    ],
    "tips": [
      "If the camera preview is black, check that nothing is covering the camera and that permission was granted in System Settings → Privacy & Security → Camera.",
      "Students who are camera-shy may record an object on the desk first, then a face clip.",
      "Keep recordings under 15 seconds. Long takes are harder to edit later."
    ]
  },
  {
    "id": "3",
    "number": 3,
    "title": "Basic Editing — Trim, Split, Delete, Rearrange",
    "duration": "35–45 min",
    "skill": "Core timeline skills",
    "objectives": [
      "Trim clip ends with the yellow handles",
      "Split a clip and delete the unwanted piece",
      "Rearrange clips so the story is short and clear"
    ],
    "youWillNeed": [
      "The project from Lesson 2 with several clips on the timeline"
    ],
    "warmup": "Play a messy clip with a long pause at the start. Ask: What should we cut?",
    "groups": [
      {
        "title": "Select a clip",
        "steps": [
          "Click once on a clip in the timeline. A yellow border appears around it.",
          "The Viewer now shows that clip. If you click the background of the timeline, nothing is selected."
        ]
      },
      {
        "title": "Trim the beginning or end",
        "steps": [
          "Move the pointer to the left edge of the selected clip until the cursor changes and yellow trim handles appear.",
          "Click and drag the handle inward (toward the middle of the clip) to hide the shaky start.",
          "Do the same on the right edge to cut a long, empty ending.",
          "Play the clip. If you trimmed too far, drag the handle back out. iMovie does not destroy the original media."
        ]
      },
      {
        "title": "Split a clip to remove a middle mistake",
        "steps": [
          "Play the clip and pause exactly on the first frame of the mistake (a cough, a long “um,” a hand covering the lens).",
          "With the clip selected and the playhead on that frame, click the Split button (scissors) under the Viewer, or press Command + B.",
          "Move the playhead to the end of the mistake and split again. You now have three pieces.",
          "Click the middle piece and press Delete (or Backspace).",
          "The two remaining pieces snap together. Play through the join. If it feels jumpy, trim a few more frames on either side."
        ]
      },
      {
        "title": "Rearrange and clean the whole sequence",
        "steps": [
          "Click and drag any clip left or right to change the order.",
          "Delete any clip you do not need by selecting it and pressing Delete.",
          "If you delete the wrong thing, press Command + Z immediately.",
          "Goal: a clean 20–40 second sequence. Short and clear is better than long and messy."
        ]
      }
    ],
    "practice": [
      "Clean every clip: no shaky starts, no long silences, no leftover mistakes.",
      "Partner check: one “keep” and one “improve.”"
    ],
    "check": [
      "The timeline is 20–40 seconds.",
      "Every clip starts and ends on useful action or speech.",
      "The student can undo and redo without panic."
    ],
    "tips": [
      "Zoom the timeline in before trimming so the handles are easier to grab.",
      "Teach “less is more” as a class motto from this lesson on."
    ]
  },
  {
    "id": "4",
    "number": 4,
    "title": "Transitions and Smooth Flow",
    "duration": "30–40 min",
    "skill": "Visual flow",
    "objectives": [
      "Add, change, and delete transitions",
      "Choose simple transitions that help the story instead of distracting from it"
    ],
    "youWillNeed": [
      "A cleaned timeline from Lesson 3 with at least three clips"
    ],
    "warmup": "Show a movie that uses a flashy transition on every cut, then one that uses almost none. Which feels calmer?",
    "groups": [
      {
        "title": "Open the Transitions browser",
        "steps": [
          "Click the Transitions tab near the top of the media area.",
          "Thumbnail styles appear: Cross Dissolve, Fade to Black, Slide, Wipe, and others.",
          "Move the pointer across a thumbnail to preview how it looks."
        ]
      },
      {
        "title": "Add a transition between two clips",
        "steps": [
          "Drag Cross Dissolve and drop it exactly on the cut between two clips. A small transition icon appears in the gap.",
          "Play across the join. The first clip should blend gently into the second.",
          "To try a different style, drag a new transition on top of the old one to replace it."
        ]
      },
      {
        "title": "Change the duration",
        "steps": [
          "Double-click the transition icon on the timeline.",
          "A small duration window appears. Type a value between 0.5 and 2.0 seconds. Longer than 2 seconds usually feels slow.",
          "Click Apply (or press Return).",
          "Play the join again. Short dissolves feel professional; long ones can feel dreamy or delayed."
        ]
      },
      {
        "title": "Remove a transition",
        "steps": [
          "Click the transition icon once so it is selected.",
          "Press Delete. The clips now cut directly from one to the next."
        ]
      }
    ],
    "practice": [
      "Add only 2–4 transitions in the whole project.",
      "Prefer Cross Dissolve or Fade to Black.",
      "Watch the whole sequence and remove any transition that feels busy."
    ],
    "check": [
      "Not every cut has a transition.",
      "The student can explain why they chose each remaining transition."
    ],
    "tips": [
      "Model that a hard cut is often the best choice.",
      "If a transition will not drop between clips, the clips may be too short for that duration — shorten the transition or lengthen a clip."
    ]
  },
  {
    "id": "5",
    "number": 5,
    "title": "Titles, Text, and Captions",
    "duration": "35–45 min",
    "skill": "On-screen text",
    "objectives": [
      "Add an opening title, a name caption, and end text",
      "Edit the words in the Viewer and keep text on screen long enough to read"
    ],
    "youWillNeed": [
      "The working project from Lessons 2–4"
    ],
    "warmup": "Show a title that flies off the screen in one second. Can anyone read it? Set the rule: if a partner cannot read it aloud, it is too fast.",
    "groups": [
      {
        "title": "Open the Titles browser",
        "steps": [
          "Click the Titles tab.",
          "You will see styles such as Standard, Centered, Lower Third, Reveal, and Credits.",
          "Skim a few. For Grade 5, Centered and Lower Third are the most useful."
        ]
      },
      {
        "title": "Add an opening title",
        "steps": [
          "Move the playhead to the very beginning of the timeline.",
          "Drag Centered onto the timeline above the first clip, or drop it at the start so it sits over black or the first shot.",
          "A purple title bar appears on the timeline. Purple always means text.",
          "Click the purple bar, then click the placeholder words in the Viewer.",
          "Type All About Me – and your first name.",
          "Click outside the text box when you are done."
        ]
      },
      {
        "title": "Add a lower-third name caption",
        "steps": [
          "Find a clip of yourself talking.",
          "Drag Lower Third onto that clip so the purple bar sits above it.",
          "Edit the text in the Viewer to your name, or a short label such as Reporter.",
          "Keep the words near the bottom of the frame so they do not cover your face."
        ]
      },
      {
        "title": "Control how long the title stays on screen",
        "steps": [
          "Click the purple title bar.",
          "Drag either end to make it longer or shorter.",
          "Keep titles on screen for 3–5 seconds. Count slowly: one-one-thousand, two-one-thousand…",
          "Play the title. If a partner cannot finish reading it, make it longer or use fewer words."
        ]
      },
      {
        "title": "Add simple end text",
        "steps": [
          "Move the playhead to the end of the movie.",
          "Add a Centered or Credits title.",
          "Type Thanks for watching or Created by Your Name."
        ]
      }
    ],
    "practice": [
      "Finish opening title, one name caption, and end text for Project 1.",
      "Partner reads the titles aloud. Adjust timing or contrast if needed."
    ],
    "check": [
      "Text is spelled correctly.",
      "High contrast: light text on a dark area, or dark text on a light area.",
      "Every title can be read without pausing the video."
    ],
    "tips": [
      "Avoid tiny fonts and busy animated styles for this age group.",
      "If the title is hard to see over a bright clip, place it over a darker shot or add a fade-to-black first."
    ]
  },
  {
    "id": "6",
    "number": 6,
    "title": "Music, Sound Effects, and Volume",
    "duration": "35–45 min",
    "skill": "Audio foundation",
    "objectives": [
      "Add one music bed and one or two sound effects from iMovie’s library",
      "Lower music under speech and fade audio in and out"
    ],
    "youWillNeed": [
      "Headphones",
      "A project with picture already on the timeline"
    ],
    "warmup": "Play a clip with music louder than the voice. Ask: What is the problem?",
    "groups": [
      {
        "title": "Browse built-in audio",
        "steps": [
          "Click the Audio tab.",
          "Browse Theme Music (or Soundtracks) and Sound Effects.",
          "Click a track once to preview it. Listen with headphones.",
          "Choose music that matches the mood: calm, cheerful, or adventurous — not random."
        ]
      },
      {
        "title": "Add background music",
        "steps": [
          "Drag the chosen music onto the timeline. It should sit in the music area under the video clips, often as a green or green-tinted bar spanning many clips.",
          "If the music is longer than the movie, drag the right edge inward so it ends with the last picture, or a second after.",
          "If it is too short, pick a different track rather than looping awkwardly."
        ]
      },
      {
        "title": "Add a sound effect",
        "steps": [
          "Go to Sound Effects in the Audio browser.",
          "Find a short effect (whoosh, click, pop, applause) that fits one moment.",
          "Drag it onto the timeline at the exact moment it should play — for example, when a title appears.",
          "Use only one or two effects in the whole project."
        ]
      },
      {
        "title": "Balance volume and fades",
        "steps": [
          "Click the music clip so it is selected.",
          "Find the volume control (a slider or a line through the audio clip). Drag it down so the music is quiet under talking.",
          "A good test: you can still hear the words clearly with headphones on.",
          "Hover near the start of the music clip until a fade handle appears. Drag it right to fade in.",
          "Do the same at the end to fade out instead of cutting the music off."
        ]
      }
    ],
    "practice": [
      "One music bed, one or two sound effects, music ducked under any speech.",
      "Listen check with headphones: support, do not overpower."
    ],
    "check": [
      "Only iMovie built-in audio is used.",
      "Voice (when present) is louder than music.",
      "Music fades rather than slamming on or off."
    ],
    "tips": [
      "Students often crank music because it feels exciting. Model a quiet mix.",
      "If they cannot find the volume line, select the clip and look above the Viewer for audio controls."
    ]
  },
  {
    "id": "7",
    "number": 7,
    "title": "Voiceovers and Narration",
    "duration": "35–45 min",
    "skill": "MacBook microphone",
    "objectives": [
      "Write a short script and record a voiceover",
      "Replace a bad take and balance voice against music"
    ],
    "youWillNeed": [
      "Headphones",
      "A quiet corner if the room is noisy",
      "2–4 scripted sentences"
    ],
    "warmup": "Teacher models a rushed, mumbled take, then a slow, clear take. Which would you rather hear?",
    "groups": [
      {
        "title": "Write the words first",
        "steps": [
          "On paper or in Notes, write 2–4 short sentences. Example: “This is how I pack my bag. First the binder. Then the water bottle.”",
          "Read them out loud once. If you run out of breath, the sentences are too long. Cut words.",
          "Mark on the timeline (with the playhead) where talking should start."
        ]
      },
      {
        "title": "Record the voiceover",
        "steps": [
          "Click on the timeline so the playhead sits where narration should begin.",
          "Click the microphone / Record Voiceover button under the Viewer.",
          "A recording strip appears. Check that the input is the MacBook microphone.",
          "If there is a Mute Project checkbox, turn it on so old audio does not leak into the new recording.",
          "Click the red Record button. You will usually hear a short countdown.",
          "Speak slightly slower than conversation speed. Smile — it changes how you sound.",
          "Click Record again, or press spacebar, to stop.",
          "A green (or colored) voiceover clip appears on the timeline, attached to that moment."
        ]
      },
      {
        "title": "Fix a bad take",
        "steps": [
          "Play the voiceover. Listen for “ums,” rustling, or a voice that is too quiet.",
          "If it is not good enough, click the voiceover clip and press Delete.",
          "Place the playhead again and record a new take. It is normal to record two or three times.",
          "Select the finished voiceover and raise its volume until it is clearly louder than the music.",
          "Lower the music a little more under the spoken section if needed."
        ]
      }
    ],
    "practice": [
      "Record narration for Project 1 or a practice sequence.",
      "Optional share: one or two strong examples for the class (student permission)."
    ],
    "check": [
      "Words are understandable on first listen.",
      "No long dead air at the start or end of the take.",
      "Music sits underneath the voice."
    ],
    "tips": [
      "Send two students at a time to a quieter hallway if the class is loud.",
      "Hold the laptop steady; do not tap the desk while recording."
    ]
  },
  {
    "id": "8",
    "number": 8,
    "title": "Photos and the Ken Burns Effect",
    "duration": "30–40 min",
    "skill": "Still images in motion",
    "objectives": [
      "Add photos to a video timeline",
      "Apply a slow Ken Burns zoom or pan that helps the story"
    ],
    "youWillNeed": [
      "2–3 photos (from Photos, a class folder, or a still from the camera)"
    ],
    "warmup": "Show a frozen photo, then the same photo with a slow zoom. Which feels more like a movie?",
    "groups": [
      {
        "title": "Add a photo to the timeline",
        "steps": [
          "Import the photo the same way you import video: Import Media, or drag from Photos.",
          "Drag the photo onto the timeline where you want it. iMovie treats it like a clip, usually a few seconds long.",
          "Drag either end of the photo clip to change how long it stays on screen (4–6 seconds is a good start)."
        ]
      },
      {
        "title": "Turn on Ken Burns",
        "steps": [
          "Click the photo clip so it is selected.",
          "Above the Viewer, click the Cropping button (two overlapping corners).",
          "Click Ken Burns.",
          "Two rectangles appear on the photo: Start and End."
        ]
      },
      {
        "title": "Set the start and end frames",
        "steps": [
          "Click the Start rectangle. Resize and drag it to the part of the photo that should show first. Keep important faces away from the very edge.",
          "Click the End rectangle. Move it to a slightly different crop — a little closer, or a slow pan toward the important object.",
          "Keep the movement small. A huge zoom looks dizzy.",
          "Click Apply (checkmark).",
          "Play the photo. You should see a smooth, gentle motion.",
          "If it feels wrong, open Cropping → Ken Burns again and adjust, or click Reset."
        ]
      }
    ],
    "practice": [
      "Add 2–3 photos and give each a purposeful Ken Burns move.",
      "Mix photos with video so the movie does not jump from freeze to freeze."
    ],
    "check": [
      "Photos last long enough to be seen.",
      "Motion is slow and has a reason (show a detail, reveal a whole scene)."
    ],
    "tips": [
      "A good default: start wider, end a little closer on the subject.",
      "Do not Ken Burns every photo in a different wild direction."
    ]
  },
  {
    "id": "9",
    "number": 9,
    "title": "Video Effects, Filters, and Simple Color",
    "duration": "30–40 min",
    "skill": "Visual mood",
    "objectives": [
      "Preview clip filters and color adjustments",
      "Keep or remove an effect based on whether it helps the audience"
    ],
    "youWillNeed": [
      "A project with at least one video clip"
    ],
    "warmup": "Show the same shot with no filter, a heavy comic filter, and a light color tweak. Vote on which looks most like a real student film.",
    "groups": [
      {
        "title": "Open clip filters",
        "steps": [
          "Select a clip on the timeline.",
          "Above the Viewer, click the Clip Filter button (often three overlapping circles) or the color / adjustment controls.",
          "A list of filters appears. Click one to preview it live in the Viewer."
        ]
      },
      {
        "title": "Try, then decide",
        "steps": [
          "Click through a few filters: a gentle warm look, a black-and-white look, a vintage look.",
          "Ask out loud: Does this help the feeling of the story, or is it just decoration?",
          "If it helps, leave it on that one clip only.",
          "If it distracts, click None or the original style to remove it.",
          "Do not apply a heavy filter to the entire movie."
        ]
      }
    ],
    "practice": [
      "Experiment on one or two clips only.",
      "Class discussion: When does an effect help, and when does it distract?"
    ],
    "check": [
      "At most one or two clips use a noticeable effect.",
      "The student can say why they kept or removed it."
    ],
    "tips": [
      "Praise students who choose no filter. Restraint is a skill."
    ]
  },
  {
    "id": "10",
    "number": 10,
    "title": "Speed Changes and Freeze Frames",
    "duration": "35–45 min",
    "skill": "Pacing control",
    "objectives": [
      "Speed up or slow down a clip",
      "Create a freeze frame on an important moment"
    ],
    "youWillNeed": [
      "A clip with clear action (standing up, showing an object, a smile)"
    ],
    "warmup": "Mime brushing teeth in slow motion, then super fast. When would each speed help a movie?",
    "groups": [
      {
        "title": "Change clip speed",
        "steps": [
          "Select the clip.",
          "Click the Speed button above the Viewer (speedometer, or tortoise and hare).",
          "Choose Slow for a careful or dramatic moment, or Fast for energy or passing time.",
          "If a percentage menu appears, start with a mild change (for example 50% slow or 2x fast) rather than the extreme.",
          "Play the clip. If speech becomes hard to understand, do not speed talking clips — only action."
        ]
      },
      {
        "title": "Freeze an important frame",
        "steps": [
          "Play the clip and pause on the exact frame you want to hold (a proud pose, a finished product, a key object).",
          "Open Speed and choose Freeze Frame.",
          "iMovie inserts a still that stays on screen for a few seconds.",
          "Drag the ends of the freeze to make it shorter or longer (1–3 seconds is usually enough).",
          "You can place a title over the freeze if you want the audience to notice that moment."
        ]
      }
    ],
    "practice": [
      "Speed one short action and freeze one important moment.",
      "Watch the whole movie. Timing should still feel natural."
    ],
    "check": [
      "Speed changes have a reason.",
      "Speech clips are still understandable."
    ],
    "tips": [
      "Fast-forwarding a whole talking-head video is almost never a good idea."
    ]
  },
  {
    "id": "11",
    "number": 11,
    "title": "iMovie Trailers and Structured Storytelling",
    "duration": "35–45 min",
    "skill": "Templates and story structure",
    "objectives": [
      "Create a Trailer project from a template",
      "Fill Outline and Storyboard with original media and text"
    ],
    "youWillNeed": [
      "4–6 of the student’s own clips or photos"
    ],
    "warmup": "Name the parts of a story: hook, middle, ending. Trailers use the same idea in a tiny package.",
    "groups": [
      {
        "title": "Start a Trailer project",
        "steps": [
          "Click Projects in the top left to leave your Movie project. Your old project is still saved.",
          "Click Create New → Trailer.",
          "Browse templates. Click one to preview the music and pacing.",
          "Choose a kid-friendly style such as Adventure, Friendship, Documentary, or similar — not a scary or age-mismatched template.",
          "Click Create."
        ]
      },
      {
        "title": "Fill the Outline",
        "steps": [
          "Click the Outline tab.",
          "Replace placeholder title, credits, and names with your own words. Do not leave Apple’s sample names.",
          "Keep titles short so they fit the animation."
        ]
      },
      {
        "title": "Fill the Storyboard",
        "steps": [
          "Click the Storyboard tab. Each box asks for a kind of shot: Title, Action, Close-up, Group, and so on.",
          "From the media browser, drag your own clip or photo into a placeholder.",
          "iMovie will use only a short piece of each clip. That is normal for trailers.",
          "Fill every required placeholder. Empty boxes leave black holes in the trailer.",
          "Click Play Trailer and watch the whole thing.",
          "Replace any shot that does not match the caption or mood."
        ]
      }
    ],
    "practice": [
      "Build a short practice trailer with 4–6 original clips.",
      "Watch 1–2 completed trailers as a class (with permission)."
    ],
    "check": [
      "Outline text is original.",
      "Every storyboard slot has student media.",
      "The student can name beginning, middle, and end."
    ],
    "tips": [
      "Trailers are excellent for students who struggle to structure a story from a blank timeline.",
      "Remind them this is a separate project — it does not overwrite their Movie."
    ]
  },
  {
    "id": "12",
    "number": 12,
    "title": "Polishing, Organizing, and Optional Overlays",
    "duration": "35–45 min",
    "skill": "Final refinements",
    "objectives": [
      "Watch the whole film critically and fix pacing, titles, and audio",
      "Optionally try Picture-in-Picture"
    ],
    "youWillNeed": [
      "Project 3 or the Final Showcase in progress"
    ],
    "warmup": "Teachers model a “cold watch”: no pausing, notepad of three problems, then fix them.",
    "groups": [
      {
        "title": "Cold watch",
        "steps": [
          "Move the playhead to the start. Press spacebar. Do not stop until the end.",
          "On paper, jot anything that feels too long, too quiet, misspelled, or confusing."
        ]
      },
      {
        "title": "Work the polishing checklist",
        "steps": [
          "Titles: readable, 3–5 seconds, spelled correctly.",
          "Audio: voice clear, music under speech, fades at the ends.",
          "Picture: no leftover shaky heads or long empty pauses.",
          "Story: a clear beginning, middle, and ending.",
          "Last shot: a strong final image or end title, not an accidental cutoff.",
          "Fix each note from the cold watch using trim, split, volume, or titles."
        ]
      },
      {
        "title": "Optional challenge: Picture-in-Picture",
        "steps": [
          "Drag a second clip onto the timeline above the main video clip so it overlays.",
          "Select the upper clip.",
          "Open Video Overlay Settings above the Viewer and choose Picture in Picture.",
          "In the Viewer, drag the inset video to a corner and resize it so it does not cover faces.",
          "If it looks messy, delete the overlay. Polished and simple beats crowded."
        ]
      }
    ],
    "practice": [
      "Polish Project 3 or start the Final Showcase using the checklist.",
      "Peer feedback: two stars and a wish."
    ],
    "check": [
      "The student can name one change they made after the cold watch.",
      "Audio and titles pass the checklist."
    ],
    "tips": [
      "Time-box the overlay challenge so perfectionism does not eat the period."
    ]
  },
  {
    "id": "13",
    "number": 13,
    "title": "Exporting, Sharing, Reflecting, and Celebration",
    "duration": "30–45 min",
    "skill": "Social-media ready export",
    "objectives": [
      "Export a 1080p file with a clear name",
      "Explain what makes the video ready for YouTube or Instagram",
      "Reflect and celebrate finished work"
    ],
    "youWillNeed": [
      "Finished Final Showcase (and earlier projects if required)"
    ],
    "warmup": "Show the Share button. Today the movie leaves iMovie and becomes a real file.",
    "groups": [
      {
        "title": "Final check before export",
        "steps": [
          "Watch the entire project once more.",
          "Confirm titles, audio, ending, and spelling.",
          "If anything is still wrong, fix it now. Exporting does not lock you out — you can export again — but it wastes time."
        ]
      },
      {
        "title": "Export a social-media-ready file",
        "steps": [
          "Click the Share button in the top-right corner of iMovie (square with an arrow), or choose File → Share → File.",
          "Choose File.",
          "Set Resolution to 1080p. This quality works well for both YouTube and Instagram.",
          "Leave Quality on High unless the teacher says otherwise.",
          "Click Next.",
          "Name the file clearly, for example Alex_FinalShowcase_2026.mp4. No spaces-only names like Untitled.",
          "Choose a save location the teacher has specified (Desktop, Documents, or a class folder).",
          "Click Save. A progress circle appears. Do not quit iMovie until it finishes.",
          "When it is done, find the file in Finder and play it in QuickTime to confirm it works outside iMovie."
        ]
      },
      {
        "title": "Reflect",
        "steps": [
          "Write or discuss: What makes my video ready to share online?",
          "Write: One editing skill I am proud of.",
          "Write: One thing I would do differently next time."
        ]
      }
    ],
    "practice": [
      "Export the Final Showcase and any required earlier projects.",
      "Optional gallery walk or class viewing with student permission."
    ],
    "check": [
      "A 1080p file exists in the correct folder with a clear name.",
      "The file plays outside iMovie.",
      "Reflection is complete."
    ],
    "tips": [
      "Videos under 90 seconds usually work best for Instagram. YouTube can be longer, but the first 5–10 seconds still matter.",
      "Never post a classmate’s face without permission. Privacy settings are part of the lesson, not an afterthought.",
      "If export is greyed out, the timeline may be empty or iMovie is still rendering — wait, then try again."
    ]
  }
];
const PROJECTS = [
  {
    "id": "1",
    "number": 1,
    "title": "All About Me",
    "timing": "Due after Lessons 1–5 (or 6)",
    "length": "30–60 seconds",
    "summary": "A personal introduction using mostly MacBook-camera clips, basic editing, titles, and transitions.",
    "audience": "Classmates and family. Keep it friendly, true, and easy to follow.",
    "afterLessons": "Lessons 1–5 cover everything required. Lesson 6 music is optional extra credit.",
    "youWillNeed": [
      "A Movie project named FirstName_AllAboutMe",
      "MacBook camera and a well-lit face",
      "4–7 short clips or photos",
      "Headphones if adding optional music"
    ],
    "mustInclude": [
      "4–7 short clips or photos",
      "An opening title with the student’s name",
      "2–3 purposeful transitions",
      "A clear beginning, middle, and end"
    ],
    "focus": "Clear order, readable titles, smooth cuts, and personal voice.",
    "planning": [
      "Write three beats on paper: Who I am · One thing I love · One thing I want people to know.",
      "List the shots: face intro, object or hobby, a photo, a closing smile.",
      "Keep each shot under 10 seconds when you record. You will trim later.",
      "Decide the opening title words now: All About Me – First Name."
    ],
    "groups": [
      {
        "title": "Create the project",
        "steps": [
          "Open iMovie → Projects → Create New → Movie.",
          "Click the project name and type FirstName_AllAboutMe.",
          "Confirm you are in a Movie project, not a Trailer."
        ]
      },
      {
        "title": "Record and import",
        "steps": [
          "Click Import Media → FaceTime HD Camera.",
          "Sit an arm’s length from the laptop with light on your face. Look at the camera lens.",
          "Record clip 1: “Hi, my name is ___.” Stop. Keep it under 10 seconds.",
          "Record clip 2: show or hold something you care about and say one sentence about it.",
          "Record clip 3: a closing thought, such as “Thanks for watching” or a hope for the year.",
          "Import 1–4 extra photos or clips from Photos or a class folder if you want.",
          "Drag the best clips onto the timeline in this order: intro · details · ending."
        ]
      },
      {
        "title": "Edit the picture",
        "steps": [
          "Select each clip. Drag the yellow handles to cut shaky starts and long pauses.",
          "If a mistake sits in the middle, place the playhead, press Command + B to split, and delete the middle piece.",
          "Rearrange clips by dragging so the story is Who I am → What I love → Sign-off.",
          "Play the whole timeline. Target 30–60 seconds. Cut more if it is longer."
        ]
      },
      {
        "title": "Add titles and transitions",
        "steps": [
          "Open Titles. Drag Centered to the start. Type All About Me – Your Name. Hold it 3–5 seconds.",
          "Optional: add a Lower Third over your talking clip with your name.",
          "Add a short end title: Thanks for watching or Created by Your Name.",
          "Open Transitions. Place Cross Dissolve or Fade on only 2–3 cuts — not every cut.",
          "Double-click each transition and set 0.5–1.5 seconds."
        ]
      },
      {
        "title": "Watch and fix",
        "steps": [
          "Watch from the start without pausing. Note anything too long, misspelled, or hard to hear.",
          "Fix those notes. A partner should be able to read every title aloud.",
          "Optional: add one quiet iMovie music bed under the picture (Lesson 6). Keep it quieter than your voice."
        ]
      }
    ],
    "exportSteps": [
      "Share → File → Resolution 1080p → Next.",
      "Name the file FirstName_AllAboutMe.mp4 and save where the teacher asked.",
      "Play the file in QuickTime to confirm it works outside iMovie."
    ],
    "assessment": {
      "kind": "Summative checkpoint (also used formatively while you circulate)",
      "scale": "Score each category 1–4. Total /16. Proficient is 12 or higher with no category at 1.",
      "passing": "The video is 30–60 seconds, named correctly, and a classmate can follow who the student is.",
      "categories": [
        {
          "name": "Story and organization",
          "levels": [
            "Clips feel random. No clear beginning or ending.",
            "There is an intro, but the middle jumps or the ending cuts off.",
            "Beginning, middle, and end are clear. Length is in range.",
            "The three beats feel planned and personal. The ending lands on purpose."
          ]
        },
        {
          "name": "Editing craft",
          "levels": [
            "Shaky starts, long pauses, or leftover mistakes remain.",
            "Some trims are done, but several clips still feel messy.",
            "Clips are trimmed. Cuts are watchable. 2–3 transitions are used with care.",
            "Pacing is tight. Transitions help, never decorate every cut."
          ]
        },
        {
          "name": "Titles and readability",
          "levels": [
            "Missing titles, or text too fast, tiny, or misspelled.",
            "A title exists but is hard to read or badly timed.",
            "Opening title includes the name and stays on screen long enough.",
            "Opening, optional caption, and end text are clear, spelled correctly, and well timed."
          ]
        },
        {
          "name": "Effort and directions",
          "levels": [
            "Missing required pieces. File unnamed or not exported.",
            "Most requirements met with reminders.",
            "All must-include items are present. File is exported and named.",
            "Requirements plus extra care (lighting, a thoughtful last shot, clean project name)."
          ]
        }
      ],
      "selfCheck": [
        "Is my name on the opening title?",
        "Can a partner read every title without pausing?",
        "Did I cut the ums, shaky starts, and extra silence?",
        "Is the movie between 30 and 60 seconds?",
        "Did I export FirstName_AllAboutMe.mp4 at 1080p?"
      ],
      "teacherProcess": [
        "During work time, check that every student has a named Movie project and at least three clips on the timeline.",
        "Score from the exported file, not only the iMovie project, so missing exports are caught.",
        "Use two stars and a wish in a 60-second partner conference before the due date.",
        "Record scores on the four categories. Comment on one strength and one next step."
      ]
    }
  },
  {
    "id": "2",
    "number": 2,
    "title": "How-To or A Day in My Life",
    "timing": "Due after Lessons 6–9",
    "length": "45–90 seconds",
    "summary": "An instructional or narrative piece with voiceover or on-camera speaking and balanced music.",
    "audience": "Someone who has never done this task, or a visitor who wants to see a real school day.",
    "afterLessons": "Lessons 6–8 are required (music, voiceover, Ken Burns). Lesson 9 filters are optional.",
    "youWillNeed": [
      "A Movie project named FirstName_HowTo or FirstName_DayInMyLife",
      "A 4–7 step outline on paper",
      "Headphones",
      "MacBook microphone in a quiet spot"
    ],
    "mustInclude": [
      "Voiceover or on-camera speaking recorded on the MacBook",
      "Background music at a proper level",
      "Titles and transitions",
      "At least one sound effect"
    ],
    "focus": "Helpful sequence, audible narration, supporting music, and purposeful sound.",
    "planning": [
      "Choose one path: How-To (one task, 4–7 steps) or A Day in My Life (morning → school → one highlight → end of day).",
      "Write the steps as short commands or time stamps. Example: Get the binder. Open to homework. Pack the water bottle.",
      "Write the narration in the same order. One or two sentences per step.",
      "Mark where a sound effect will land (whoosh on a title, click on a finished step)."
    ],
    "groups": [
      {
        "title": "Create and plan on the timeline",
        "steps": [
          "Create New → Movie. Name it FirstName_HowTo or FirstName_DayInMyLife.",
          "Record or import one clip per step. Keep each take short.",
          "For a how-to, film your hands doing the task, then a face shot for the intro and outro.",
          "Drop clips on the timeline in step order. Play once. If a step is missing, record it now."
        ]
      },
      {
        "title": "Trim so the steps are easy to follow",
        "steps": [
          "Trim each clip to the action only. Viewers should never wait.",
          "Split out coughs, long “ums,” and dead air with Command + B.",
          "Target 45–90 seconds for the whole movie."
        ]
      },
      {
        "title": "Record narration",
        "steps": [
          "Place the playhead at the first step you will talk over.",
          "Click the microphone / Record Voiceover button under the Viewer.",
          "Mute the project if that option is there so old sound does not leak in.",
          "Click Record, wait for the countdown, and read your first two sentences slowly.",
          "Stop. Listen. Delete and re-record any muddy take.",
          "Repeat for later steps, or record one continuous narration if you can stay clear.",
          "Raise the green voiceover so words are easy to hear on headphones."
        ]
      },
      {
        "title": "Music, sound effect, titles",
        "steps": [
          "Audio tab → choose one iMovie music bed that matches the mood.",
          "Drop it under the video. Fade in and out. Lower the volume until the voice is clearly louder.",
          "Add one or two sound effects at a planned moment — not a different effect on every cut.",
          "Titles: opening title with the how-to name or “A Day in My Life – Name.” Optional lower-third labels for steps (Step 1, Recess, Pack up).",
          "2–4 simple transitions. Prefer dissolves between locations or steps."
        ]
      },
      {
        "title": "Photos and Ken Burns (if you use stills)",
        "steps": [
          "If a step is a photo, select it → Cropping → Ken Burns.",
          "Set a slow Start to End. Apply. Keep motion small so the audience can still see the step."
        ]
      }
    ],
    "exportSteps": [
      "Watch the whole film on headphones. Voice must win over music.",
      "Share → File → 1080p → FirstName_HowTo.mp4 or FirstName_DayInMyLife.mp4.",
      "Play the export in QuickTime before you call it done."
    ],
    "assessment": {
      "kind": "Summative (audio is the new skill under the microscope)",
      "scale": "Score each category 1–4. Total /20. Proficient is 15 or higher with voice clearly audible.",
      "passing": "A first-time viewer can follow the steps or the day, and the voice is louder than the music.",
      "categories": [
        {
          "name": "Sequence and clarity",
          "levels": [
            "Order is confusing. A viewer could not repeat the task or day.",
            "Most steps are there but one is missing or out of order.",
            "Steps or parts of the day are in a helpful order and stay in time.",
            "The sequence is tight, complete, and easy to teach back."
          ]
        },
        {
          "name": "Narration / on-camera voice",
          "levels": [
            "No voice, or voice is unintelligible.",
            "Voice exists but is rushed, too quiet, or full of long mistakes.",
            "Voice is understandable. Takes are mostly clean.",
            "Voice is paced, clear, and matches the picture."
          ]
        },
        {
          "name": "Music and sound effects",
          "levels": [
            "No music, copyrighted music, or music that drowns the voice.",
            "Music is present but too loud, or there is no sound effect.",
            "iMovie music is ducked under voice. One sound effect is used.",
            "Mix is balanced, faded, and the effect lands on a planned moment."
          ]
        },
        {
          "name": "Titles and editing",
          "levels": [
            "Little editing. Titles missing.",
            "Some trims and a title, but pacing still drags.",
            "Required titles, trims, and a few transitions are in place.",
            "Picture and text support the how-to. Nothing extra."
          ]
        },
        {
          "name": "Following directions and export",
          "levels": [
            "Wrong length, unnamed file, or missing required pieces.",
            "Most requirements met after reminders.",
            "All must-include items and a correct 1080p export.",
            "On time, named clearly, and ready to show without teacher cleanup."
          ]
        }
      ],
      "selfCheck": [
        "Can someone do this task (or follow this day) after one watch?",
        "Is my voice louder than the music on headphones?",
        "Did I use only iMovie music and at least one sound effect?",
        "Is the movie 45–90 seconds?",
        "Is the export named and 1080p?"
      ],
      "teacherProcess": [
        "Listen on headphones when scoring voice and mix — laptop speakers hide loud music.",
        "A student who cannot record in a noisy room may use a hallway pass during voiceover time.",
        "If pairs share a MacBook, still require each student to record their own narration on their own project unless an IEP says otherwise.",
        "Comment specifically on mix: “Music −6 more” is more useful than “fix audio.”"
      ]
    }
  },
  {
    "id": "3",
    "number": 3,
    "title": "Mini Story or Trailer-Style Piece",
    "timing": "Due after Lessons 10–12",
    "length": "60–90 seconds",
    "summary": "A creative or informative video that shows pacing control and visual interest.",
    "audience": "The class as an audience — make them curious in the first five seconds.",
    "afterLessons": "Lessons 10–11 required (speed, freeze, trailers). Lesson 12 polish before export.",
    "youWillNeed": [
      "Either a Movie project or a Trailer project, named FirstName_Story or FirstName_Trailer",
      "4–8 original clips or photos",
      "A three-beat outline: hook, middle, ending"
    ],
    "mustInclude": [
      "Varied pacing (normal plus one speed change or freeze)",
      "Titles, music or voice, and transitions",
      "At least one photo with Ken Burns, one purposeful effect, or a Trailer structure"
    ],
    "focus": "Beginning–middle–end, varied timing, polished titles and audio.",
    "planning": [
      "Pick a form: Mini story (original short on the timeline) or Trailer-style (iMovie Trailer template).",
      "Write Hook (first 5 seconds), Middle (problem or information), Ending (image or line that sticks).",
      "Circle one moment that will be slow-motion, fast, or frozen.",
      "If using a Trailer, preview two templates and pick the one whose mood matches — not the flashiest."
    ],
    "groups": [
      {
        "title": "If you chose Mini Story (Movie project)",
        "steps": [
          "Create New → Movie. Name it FirstName_Story.",
          "Build the timeline in three piles: hook clip(s), middle, ending.",
          "Trim hard. The hook should start on action or a strong line, not on a shrug.",
          "Select one action clip → Speed. Use Slow or Fast once. Do not speed talking unless it is a joke that still makes sense.",
          "Pause on the most important frame → Speed → Freeze Frame. Hold 1–3 seconds. Optional title over the freeze.",
          "Add titles, 2–4 transitions, and either voice or music (or both, with voice on top).",
          "Optional: one filter on one clip, or Ken Burns on one photo. Then stop adding effects."
        ]
      },
      {
        "title": "If you chose Trailer-style",
        "steps": [
          "Projects → Create New → Trailer. Preview, then Create on a kid-friendly template.",
          "Outline tab: replace every placeholder with your title, names, and credits. No leftover sample names.",
          "Storyboard tab: drag your own clips or photos into every required box.",
          "Play Trailer. Swap any shot that does not match the caption.",
          "If the template already has music, do not stack a second loud track on top.",
          "Note: a Trailer still counts as “varied pacing” because the template cuts quickly — add a freeze or speed change only if you also make a Movie version of one shot."
        ]
      },
      {
        "title": "Polish both paths",
        "steps": [
          "Cold watch once with no pausing. List three fixes.",
          "Fix spelling, timing, and audio first — effects last.",
          "Confirm 60–90 seconds. Trailers may be a little shorter; that is acceptable if the template is complete."
        ]
      }
    ],
    "exportSteps": [
      "Share → File → 1080p.",
      "Name FirstName_Story.mp4 or FirstName_Trailer.mp4.",
      "Watch the export. Template trailers sometimes hide a leftover placeholder — catch it here."
    ],
    "assessment": {
      "kind": "Summative (pacing and structure)",
      "scale": "Score each category 1–4. Total /20. Proficient is 15 or higher.",
      "passing": "There is a hook, a middle, and an ending, plus one clear pacing choice (or a complete trailer).",
      "categories": [
        {
          "name": "Story structure",
          "levels": [
            "No hook. The piece meanders or stops suddenly.",
            "Two of the three beats are present.",
            "Hook, middle, and ending are all there.",
            "The first five seconds grab attention and the last shot feels chosen."
          ]
        },
        {
          "name": "Pacing and visual interest",
          "levels": [
            "One speed the whole time. No freeze, Ken Burns, effect, or trailer craft.",
            "A speed or freeze exists but feels random or dizzy.",
            "One purposeful speed change, freeze, Ken Burns, or complete trailer pacing.",
            "Pacing choices serve the story. Nothing feels like a menu of effects."
          ]
        },
        {
          "name": "Audio",
          "levels": [
            "Missing, overpowering, or off-brand music.",
            "Audio is present but unbalanced.",
            "Voice and/or music support the picture.",
            "Mix is clean; silence is used on purpose if there is no voice."
          ]
        },
        {
          "name": "Titles and finish",
          "levels": [
            "Placeholders remain, or titles unreadable.",
            "Some original text, still rough.",
            "Original titles; no Apple sample names left.",
            "Titles match the mood and are easy to read."
          ]
        },
        {
          "name": "Craft and export",
          "levels": [
            "Unfinished timeline or no export.",
            "Export exists but requirements are incomplete.",
            "Requirements met and 1080p file is named.",
            "Polished, in time, ready to screen."
          ]
        }
      ],
      "selfCheck": [
        "Does the first five seconds make someone want to keep watching?",
        "Did I use one speed change, freeze, Ken Burns, or a complete Trailer?",
        "Are all template names replaced if I used a Trailer?",
        "Is it about 60–90 seconds (or a complete short trailer)?",
        "Did I export 1080p with the right file name?"
      ],
      "teacherProcess": [
        "Screen two strong hooks as anonymous exemplars before students lock their first five seconds.",
        "Trailers: open Outline yourself during scoring — leftover “Peter” or “Studio” names are an automatic dip in Titles.",
        "Do not require both a freeze and a trailer. One path is enough.",
        "Gifted stretch: a second pacing change or a match-on-action cut, not more filters."
      ]
    }
  },
  {
    "id": "4",
    "number": 4,
    "title": "Final Showcase",
    "timing": "Due at the end of the unit",
    "length": "60–90 seconds (ideal for social)",
    "summary": "Student choice: short documentary, original story, positive-habit commercial, or expanded trailer. Must be polished and ready to share on YouTube, Instagram, and similar platforms.",
    "audience": "A public-ready audience on YouTube or Instagram — even if the class only screens it internally.",
    "afterLessons": "Lesson 12 polish and Lesson 13 export. Most earlier skills should appear.",
    "youWillNeed": [
      "A finished Movie or Trailer named FirstName_Showcase",
      "Optional partner with written roles (director, editor, on-camera)",
      "The export checklist from Lesson 13"
    ],
    "mustInclude": [
      "Most skills from the unit (picture, titles, audio, at least one advanced choice)",
      "Clean 1080p export with a clear file name",
      "Optional pairs with defined roles"
    ],
    "focus": "Story and organization, technical editing, audio and titles, creativity and effort, social-media-ready export.",
    "planning": [
      "Choose one format: short documentary, original story, positive-habit commercial, or expanded trailer.",
      "Write a one-sentence purpose: “This video will make the audience ___.”",
      "Plan the first 5 seconds and the last shot before you record anything new.",
      "If working in a pair, write names and jobs on the project notes. Both students must be able to explain every edit.",
      "Aim 60–90 seconds. Shorter is fine if every second earns its place. Longer needs teacher approval."
    ],
    "groups": [
      {
        "title": "Build or rebuild the timeline",
        "steps": [
          "Open a new Movie (or Trailer) named FirstName_Showcase. Do not turn Project 3 in as-is unless you substantially improve it and the teacher agrees.",
          "Record any missing shots with the MacBook camera. Light faces. Keep takes short.",
          "Lay a rough cut: hook, information or story, ending. Ignore titles until picture order works.",
          "Trim and split until there is no waiting."
        ]
      },
      {
        "title": "Layer the unit skills",
        "steps": [
          "Titles: opening, any needed captions, ending. 3–5 seconds of readable text.",
          "Audio: voice and/or iMovie music, ducked and faded. Optional one or two sound effects.",
          "Advanced choice (pick at least one): Ken Burns, speed or freeze, a Trailer structure, or a clean Picture-in-Picture.",
          "Transitions: a few, not a carnival."
        ]
      },
      {
        "title": "Social-ready polish",
        "steps": [
          "Cold watch on headphones. First 5 seconds must make sense without a teacher intro.",
          "Check spelling, volume, and the last frame.",
          "Confirm nothing private slipped in (last names on worksheets, other students who did not agree to be on camera).",
          "Length: 60–90 seconds unless approved."
        ]
      },
      {
        "title": "Peer review before export",
        "steps": [
          "Show a partner. Partner gives two stars and one wish using the rubric categories.",
          "Make the wish if you agree it helps the audience.",
          "Pairs: each person can explain the timeline without looking at notes."
        ]
      }
    ],
    "exportSteps": [
      "Share → File → 1080p → High quality.",
      "Name FirstName_Showcase.mp4 (add PartnerName if a pair: Avery_Jordan_Showcase.mp4).",
      "Save to the class folder. Play in QuickTime.",
      "Complete the reflection: What makes this ready to share online? One skill I am proud of. One thing I would do next time."
    ],
    "assessment": {
      "kind": "Culminating summative + short written reflection",
      "scale": "Score each category 1–4. Total /20. Proficient is 15 or higher and the file plays outside iMovie.",
      "passing": "A polished 1080p video that a stranger could follow, with titles, audio, and at least one advanced skill, plus a completed reflection.",
      "categories": [
        {
          "name": "Story and organization",
          "levels": [
            "Purpose is unclear. No usable hook or ending.",
            "A topic exists but structure is loose.",
            "Clear purpose, hook, middle, and ending in time.",
            "The audience knows why this video exists in the first five seconds."
          ]
        },
        {
          "name": "Technical editing",
          "levels": [
            "Rough cuts, leftover mistakes, unused skills.",
            "Basic trims only.",
            "Clean timeline plus one advanced skill used on purpose.",
            "Editing is invisible in the best way — tight, varied, and controlled."
          ]
        },
        {
          "name": "Audio and titles",
          "levels": [
            "Unreadable text or inaudible / overpowering sound.",
            "Titles or audio work; the other does not.",
            "Readable titles and a balanced mix.",
            "Text and sound feel designed together. Voice always wins."
          ]
        },
        {
          "name": "Creativity and effort",
          "levels": [
            "Minimal new work. Looks like an unfinished lesson file.",
            "Complete but safe and thin.",
            "Thoughtful choices that fit the purpose.",
            "Distinct voice or idea without breaking the rules (music, privacy, length)."
          ]
        },
        {
          "name": "Social-media-ready export",
          "levels": [
            "No file, wrong format, or it does not play.",
            "File exists but is misnamed, wrong length, or still has placeholders.",
            "1080p file, clear name, plays in QuickTime, length on target.",
            "Export is clean and the student can explain why it would work on YouTube or Instagram (opening, length, privacy)."
          ]
        }
      ],
      "selfCheck": [
        "Would I be comfortable if this played for families?",
        "Is every face on camera allowed to be there?",
        "Do titles and voice work on a phone-sized screen in my mind’s eye?",
        "Is the file FirstName_Showcase.mp4 at 1080p, 60–90 seconds?",
        "Did I write the three-line reflection?"
      ],
      "teacherProcess": [
        "Score the exported file and the reflection. Missing export caps the last category at 1.",
        "Gallery walk or class screening only with student permission. Offer a “do not screen” option.",
        "Pairs: both names on the file; both complete the reflection; split credit only if roles were real.",
        "Unit grade suggestion: Projects 1–3 average 50%, Showcase 40%, daily process / complete marks 10% — adjust to your school policy.",
        "Keep copies of exemplars (with permission) for next year’s Lesson 1 hook."
      ]
    }
  }
];
const TEACHER_NOTES = [
  {
    "title": "Camera and recording",
    "items": [
      "Practice the built-in camera in Lesson 2 so framing and lighting are not new during projects.",
      "Have students face a window or lamp. Backlight makes faces dark.",
      "Quiet corners or a hallway help voiceovers stay clean.",
      "If the preview is black, check System Settings → Privacy & Security → Camera and Microphone."
    ]
  },
  {
    "title": "Storage and workflow",
    "items": [
      "iMovie libraries grow quickly. Export and delete practice projects on a regular schedule.",
      "Require consistent names from day one.",
      "Show how to return to the Projects browser any time using the Projects button in the top left.",
      "A finished export in Finder is the copy that counts — not only the iMovie project."
    ]
  },
  {
    "title": "Differentiation",
    "items": [
      "Provide pre-trimmed media or sentence starters for narration.",
      "Offer a quieter recording space.",
      "Challenge options: Picture-in-Picture, a second speed change, or a slightly longer showcase.",
      "Pairs work well on the final project if roles are named (director, editor, talent)."
    ]
  },
  {
    "title": "Assessment",
    "items": [
      "Formative: circulate, check timelines, listen to partner feedback.",
      "Summative: the four projects plus a short reflection on social-media readiness.",
      "Score 1–4 on story, editing, audio and titles, creativity, and export.",
      "Key final question: Is this video polished and ready to share on YouTube or Instagram?"
    ]
  },
  {
    "title": "Export for social platforms",
    "items": [
      "Default student export: File, 1080p, High quality, .mp4.",
      "Instagram and similar feeds prefer about 60–90 seconds with a strong first 5 seconds.",
      "YouTube can be longer, but the same opening still matters.",
      "iMovie on Mac exports widescreen 16:9, which is correct for YouTube and works for Instagram feed or landscape IGTV-style posts. Vertical Reels are not required in this unit.",
      "Never post a classmate’s face without permission."
    ]
  }
];
const UNIT_GOALS = ["Plan a clear story or message for an audience","Record and import media using the MacBook camera","Edit clips, then add titles, transitions, music, and voiceovers","Control pacing with Ken Burns, speed, and freeze frames","Export a polished video ready for YouTube, Instagram, and similar platforms"];
const MATERIALS = ["MacBooks with iMovie installed and updated","Headphones (strongly recommended for audio work)","Good classroom lighting facing students when they record","Optional: simple props or teacher-supplied sample clips"];
const NORMS = ["Name every project clearly, e.g. FirstName_AllAboutMe","Use only iMovie’s built-in music and sound effects unless the teacher supplies approved files","Keep clips short and purposeful","Respect privacy: only film classmates with permission","Export regularly so work is not lost"];
const LESSON_SHORT = {"1":"Interface","2":"Import & record","3":"Trim & split","4":"Transitions","5":"Titles","6":"Music","7":"Voiceovers","8":"Ken Burns","9":"Effects","10":"Speed","11":"Trailers","12":"Polish","13":"Export"};
const BLOCK = [{"mins":"5 min","text":"Warm-up. One question or a short example video."},{"mins":"12 min","text":"Teacher models one new iMovie skill on the projector."},{"mins":"18 min","text":"Students try the skill in their own project."},{"mins":"5 min","text":"Check for understanding and preview next lesson."}];
