<?php
defined('MOODLE_INTERNAL') || die();

function block_activity_tracker_page_init(moodle_page $page) {
    // if ($page->pagelayout == 'course') {
    // }
    $page->requires->js(new moodle_url('/blocks/activity_tracker/js/tracktime.js'));
}

function block_activity_tracker_extend_navigation_course($courseid, $contextinstanceid) {
    global $PAGE;
    block_activity_tracker_page_init($PAGE);
}
