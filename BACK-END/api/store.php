<?php

// nuova task
$new_task = [
    'text' => $_POST['text'],
    'done' => false,
];

// trasformo il json in array
$tasklist = json_decode(file_get_contents('./taskList.json'), true);
$tasklist[] = $new_task;

$tasklist_json = json_encode($tasklist);
file_put_contents('./taskList.json', $tasklist_json);

$tasklist_updated = json_decode(file_get_contents('./taskList.json'), true);



// definisco il tipo di file che invierò
header('Content-Type: application/json; charset=utf-8');

// stampo la tasklist aggiornata
echo $tasklist_json($tasklist_updated);



