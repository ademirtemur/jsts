"use strict";function UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(x){var e=16*Math.random()|0;return("x"==x?e:3&e|8).toString(16)})}function UUID_NUM(){return(new Date).getTime()+Math.floor(100*Math.random())+1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.UUID=UUID,exports.UUID_NUM=UUID_NUM;