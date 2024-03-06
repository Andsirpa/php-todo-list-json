<?php
header('Content-Type: application/json; charset=utf-8');

// Leggo i dati del task da eliminare dal corpo della richiesta POST
$task_to_delete = json_decode(file_get_contents('php://input'), true);

// Leggo la lista attuale di task dal file JSON
$tasklist = json_decode(file_get_contents('./taskList.json'), true);

// Filtriamo la tasklist per rimuovere il task da eliminare
$tasklist = array_filter($tasklist, function ($task) use ($task_to_delete) {
    return $task['text'] !== $task_to_delete['text'];
});

// Converto la lista di task aggiornata in JSON
$tasklist_json = json_encode(array_values($tasklist));

// Scrivo la lista di task aggiornata nel file JSON
file_put_contents('./taskList.json', $tasklist_json);

// Converto nuovamente la lista di task dal formato JSON a un array per conferma
$tasklist_updated = json_decode($tasklist_json, true);

// Restituisco la lista aggiornata come risposta alla richiesta
echo json_encode($tasklist_updated);