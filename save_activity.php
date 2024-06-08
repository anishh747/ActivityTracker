<?php
defined('MOODLE_INTERNAL') || die();


function save_data_in_localstorage($courseid, $contextinstanceid) {
    global $PAGE, $USER;
    $PAGE->requires->js(new moodle_url('/blocks/activity_tracker/js/tracktime.js'));
    $userId = json_encode($USER->id);
    $courseId = json_encode($courseid);
    $moduleId = json_encode($contextinstanceid);
    $startTime = time();

    $PAGE->requires->js_init_code(<<<JS
document.addEventListener('DOMContentLoaded', function() {
    startModuleActivity($userId, $courseId, $moduleId, $startTime);
});
JS
    );
}