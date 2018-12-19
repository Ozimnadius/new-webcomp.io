<?php
header('Content-Type: application/json');

$data = $_POST;
$action = $data['action'];
switch ($action) {
    case 'autocomplete':
        echo json_encode(array(
            'status' => true,
            'data' => array('Web-продвижение', 'Web-аналитика', 'Web-продвижение')
        ));
        exit();
        break;
    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function autocomplete()
{
    ob_start();
    ?>

    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}