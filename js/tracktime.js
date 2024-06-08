{/* <source src="http://yui.yahooapis.com/3.18.1/build/yui/yui-min.js" type="" /> */}
console.log('tracktime.js is here guys!');

function checkLocalStorage(data) {
    console.log('Checking local storage...');
    let activity_data = localStorage.getItem('moduleActivity');
    if (activity_data) {
        
    } else {
        startModuleActivity(data.userid, data.courseid, data.moduleid);
    }
}

function startModuleActivity(userId, courseId, moduleId, startTime) {
    console.log('Module activity tracking started!');
    // console.log($0.userId, $0.courseId, $0.moduleId);

    const activityData = {
        userid: userId,
        courseid: courseId,
        moduleid: moduleId,
        starttime: startTime,
        endtime: 0
    };
    localStorage.setItem('moduleActivity', JSON.stringify(activityData));
    console.log('Successfully set to the localstorage 22222!');
    console.log(localStorage.getItem('moduleActivity'));
}

window.addEventListener('beforeunload', function(event) {
    // const activityData = JSON.parse(localStorage.getItem('moduleActivity'));
    // if (activityData) {
    //     activityData.endtime = Date.now(); // Update end time
    //     sendActivityDataToServer(activityData);
    //     localStorage.removeItem('moduleActivity'); // Clear the stored data
    // }
    console.log('Before unload event fired!');
    let activityData = JSON.parse(localStorage.getItem('moduleActivity'));
    if (activityData) {
        console.log('Activity data:', activityData);
        sendActivityDataToServer(activityData);
        localStorage.removeItem('moduleActivity');
    }
});

// function sendActivityDataToServer(activityData) {
//     console.log('Sending activity data to server...');
//     navigator.sendBeacon('/blocks/activity_tracker/save_activity.php', JSON.stringify(activityData));
// }

function sendActivityDataToServer(activityData) {
    fetch(M.cfg.wwwroot + '/blocks/activity_tracker/send_to_db.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'userid=' + encodeURIComponent(activityData.userid) +
              '&courseid=' + encodeURIComponent(activityData.courseid) +
              '&moduleid=' + encodeURIComponent(activityData.moduleid) +
              '&starttime=' + encodeURIComponent(activityData.starttime) +
              '&endtime=' + encodeURIComponent(activityData.endtime)
    })
    .then(response => response.json())
    .then(data => console.log('Response from server:', data))
    .catch(error => console.error('Error sending activity data:', error));
}


function random_function() {
    console.log('Random function called!');
}

