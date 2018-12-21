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
    case 'callorderForm':
        echo json_encode(array(
            'status' => true,
            'html' => callorderForm()
        ));
        exit();
        break;
    case 'timerForm':
        echo json_encode(array(
            'status' => true,
            'endTime' => 'December 21 2018 23:59:59',
            'html' => timerForm()
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

function callorderForm()
{
    ob_start();
    ?>
    <div class="callorder">
        <form class="callorder__form form" action="#" method="post">
            <div class="callorder__title">Заказать звонок</div>
            <div class="callorder__subtitle">Мы ответим на все интересующие вас вопросы</div>
            <div class="form__row">
                <div class="form__field">
                    <input class="input" type="text" name="name" placeholder="Имя">
                </div>
                <div class="form__field">
                    <input class="input" type="tel" name="tel" placeholder="Телефон">
                </div>
                <div class="form__field">
                    <input class="input" type="email" name="email" placeholder="E-mail">
                </div>
            </div>
            <div class="form__row">
                <div class="form__field form__field_3">
                    <textarea class="input input_area" placeholder="Напишите свой вопрос"></textarea>
                </div>
            </div>
            <button class="form__submit callorder__submit" type="submit">
                <div class="btn">
                    <div class="btn__title">Получить консультацию маркетолога</div>
                    <div class="btn__lines">
                        <div class="btn__line-top"></div>
                        <div class="btn__line-right"></div>
                        <div class="btn__line-bottom"></div>
                        <div class="btn__line-left"></div>
                    </div>
                </div>
            </button>
        </form>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function timerForm()
{
    ob_start();
    ?>
    <div class="timer">
        <div class="timer__title">
            Спасибо ваша заявка принята
        </div>
        <div class="timer__subtitle">
            МЫ свяжемся с вами в ближайшее время
        </div>

        <div class="timer__count">
            <div class="timer__col">
                <div class="timer__hour">
                    <div class="timer__hour-ten">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                        </div>
                    </div>
                    <div class="timer__hour-unit">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                            <div class="timer__num" data-id="3">3</div>
                            <div class="timer__num" data-id="4">4</div>
                            <div class="timer__num" data-id="5">5</div>
                            <div class="timer__num" data-id="6">6</div>
                            <div class="timer__num" data-id="7">7</div>
                            <div class="timer__num" data-id="8">8</div>
                            <div class="timer__num" data-id="9">9</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timer__col">
                <div class="timer__minute">
                    <div class="timer__minute-ten">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                            <div class="timer__num" data-id="3">3</div>
                            <div class="timer__num" data-id="4">4</div>
                            <div class="timer__num" data-id="5">5</div>
                            <div class="timer__num" data-id="6">6</div>
                        </div>
                    </div>
                    <div class="timer__minute-unit">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                            <div class="timer__num" data-id="3">3</div>
                            <div class="timer__num" data-id="4">4</div>
                            <div class="timer__num" data-id="5">5</div>
                            <div class="timer__num" data-id="6">6</div>
                            <div class="timer__num" data-id="7">7</div>
                            <div class="timer__num" data-id="8">8</div>
                            <div class="timer__num" data-id="9">9</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timer__col">
                <div class="timer__second">
                    <div class="timer__second-ten">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                            <div class="timer__num" data-id="3">3</div>
                            <div class="timer__num" data-id="4">4</div>
                            <div class="timer__num" data-id="5">5</div>
                            <div class="timer__num" data-id="6">6</div>
                        </div>
                    </div>
                    <div class="timer__second-unit">
                        <div class="timer__wrap">
                            <div class="timer__num" data-id="0">0</div>
                            <div class="timer__num" data-id="1">1</div>
                            <div class="timer__num" data-id="2">2</div>
                            <div class="timer__num" data-id="3">3</div>
                            <div class="timer__num" data-id="4">4</div>
                            <div class="timer__num" data-id="5">5</div>
                            <div class="timer__num" data-id="6">6</div>
                            <div class="timer__num" data-id="7">7</div>
                            <div class="timer__num" data-id="8">8</div>
                            <div class="timer__num" data-id="9">9</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}