<?php

namespace block_activity_tracker;

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/blocks/activity_tracker/lib.php');

class observer {
    public static function course_viewed(\core\event\course_viewed $event) {
        global $DB, $USER;

        try {
            $data = new \stdClass();
            $data->userid = $USER->id;
            $data->courseid = $event->courseid;
            $data->moduleid = 0;
            $data->starttime = time();
            $data->endtime = 0;

            $DB->insert_record('block_activity_tracker_log', $data);

        } catch (\Exception $e) {
            error_log("Exception in course_viewed handler: " . $e->getMessage());
        }
    }

    public static function course_module_viewed(\core\event\course_module_viewed $event) {
        global $DB, $USER;

        try {
            $data = new \stdClass();
            $data->userid = $USER->id;
            $data->courseid = $event->courseid;
            $data->moduleid = $event->contextinstanceid;
            $data->starttime = time();
            $data->endtime = 0;

            $DB->insert_record('block_activity_tracker_log', $data);

        } catch (\Exception $e) {
            error_log("Exception in course_module_viewed handler: " . $e->getMessage());
        }
    }
}
