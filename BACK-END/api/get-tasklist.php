<?php
$tasklist_json = file_get_contents('../taskList.json');
$tasklist_array = json_decode($tasklist_json, true);

// specifico il tipo di file (json)
header('Content-Type: application/json; charset=utf-8');

echo json_encode($tasklist_array);