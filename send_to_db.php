<?php

require_once('../../config.php');
require_login(); // Ensure the user is logged in

global $DB, $USER;

$userid = required_param('userid', PARAM_INT);
$courseid = required_param('courseid', PARAM_INT);
$moduleid = required_param('moduleid', PARAM_INT);
$starttime = required_param('starttime', PARAM_INT);
$endtime = required_param('endtime', PARAM_INT);

$record = new stdClass();
$record->userid = $userid;
$record->courseid = $courseid;
$record->moduleid = $moduleid;
$record->starttime = $starttime;
$record->endtime = time();

// Insert or update the database
$DB->insert_record('block_activity_tracker_log', $record); // Assume 'activity_tracker' is your custom table

error_log("Inserted record into database");