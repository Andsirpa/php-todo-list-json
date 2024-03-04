<?php

// nuova task
$new_task = [
    'text' => $_POST['text'],
    'done' => false,
];

// trasformo il json in array
$tasklist = json_decode(file_get_contents('../taskList.json'), true);

// aggiungo la nuova task a l'array
$tasklist[] = $new_task;

// ritrasformo l'array aggiornato e lo salvo nel file json
$tasklist_json = json_encode($tasklist);
file_put_contents('../taskList.json', $tasklist_json);

// leggo di nuovo il file per avere la tasklist aggiornata
$tasklist_updated = json_decode(file_get_contents('../taskList.json'), true);

// definisco il tipo di file che invierò
header('Content-Type: application/json; charset=utf-8');

// stampo la tasklist aggiornata
echo $tasklist_json;



