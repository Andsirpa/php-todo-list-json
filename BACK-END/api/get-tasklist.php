<?php
// entro nel file tasklist
$tasklist_json = file_get_contents('../taskList.json');



// specifico il tipo di file (json)
header('Content-Type: application/json; charset=utf-8');

echo $tasklist_json;