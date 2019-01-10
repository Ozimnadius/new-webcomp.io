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
            'endTime' => 'December 31 2018 23:59:59',
            'html' => timerForm()
        ));
        exit();
        break;
    case 'tarifForm':
        echo json_encode(array(
            'status' => true,
            'html' => tarifForm($data['id'], $data['name'])
        ));
        exit();
        break;
    case 'pushForm':
        echo json_encode(array(
            'status' => true,
            'html' => pushForm($data['seo'])
        ));
        exit();
        break;
    case 'promotionForm':
        echo json_encode(array(
            'status' => true,
            'html' => promotionForm()
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
    $html = file_get_contents('./popup/callorder/form_'.$_POST['formId'].'.php');
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

function tarifForm($id, $name)
{
    ob_start();
    ?>
    <div class="hosting">
        <div class="hosting__planet host-tarifs__item_<?=$id?>">
            <div class="host-tarifs__img">
                <img class="host-tarifs__img-img" src="images/content/hosting/tarifs/img<?=$id+1?>.png">
                <div class="host-tarifs__glow">
                    <img class="host-tarifs__glow-img" src="images/content/hosting/tarifs/glow<?=$id+1?>.png">
                </div>
            </div>
            <div class="host-tarifs__tag">
                <div class="host-tarifs__title">Тариф <span class="host-tarifs__title_y">«<?=$name?>»</span></div>
            </div>
        </div>
        <div class="hosting__content">
            <table>
                <thead>
                <tr>
                    <th>Место на SSD диске</th>
                    <th>Количество доменов</th>
                    <th>Базы MySQL</th>
                    <th>Посетителей сайта</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1 Гб</td>
                    <td>1 домен</td>
                    <td>Неограничено</td>
                    <td>Неограничено</td>
                    <td>190 Р</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="hosting__button">
            <div class="btn">
                <div class="btn__title">заказать</div>
                <div class="btn__lines">
                    <div class="btn__line-top"></div>
                    <div class="btn__line-right"></div>
                    <div class="btn__line-bottom"></div>
                    <div class="btn__line-left"></div>
                </div>
            </div>
        </button>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function pushForm($name)
{
    ob_start();
    ?>
    <div class="push">
        <form action="#" method="post" class="push__form">
            <div class="push__title">
                Мы эффективно продвинули
            </div>
            <div class="push__subtitle">
                более 10 сайтов по <?=$name?>. Если вы хотите:
            </div>
            <div class="push__list">
                <div class="push__item">Выявить слабые стороны своего проекта</div>
                <div class="push__item">Увеличить свою клиентскую базу</div>
                <div class="push__item">Продавать товары и услуги в целевой аудитории</div>
                <div class="push__item">Увеличить узнаваемость бренда в соц.сетях</div>
                <div class="push__item">Привлечь клиентов с оплатой за переход</div>
            </div>
            <button type="submit" class="push__button">
                <div class="btn">
                    <div class="btn__title">рассчитать стоимость</div>
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

function promotionForm()
{
    ob_start();
    ?>
    <div class="promotion">
        <form class="promotion__form form" action="#" method="post">
            <div class="promotion__subtitle">
                Заполнение брифа онлайн для расчёта точной стоимости <br>
                или загрузите свое ТЗ для оценки
            </div>
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
                <div class="form__field">
                    <input class="input" type="text" name="site" placeholder="Название сайта">
                </div>
                <div class="form__field">
                    <input class="input" type="text" name="region" placeholder="Регион продвижения">
                </div>
                <div class="form__field">
                    <input class="input" type="text" name="businessArea" placeholder="Сфера деятельности">
                </div>
            </div>
            <div class="form__row">
                <div class="form__field form__field_3">
                    <textarea class="input input_area" placeholder="Перечислите, основные направления для подбора запросов. Пример: Установка пластиковых окон, продажа земельных участков, услуги частного психотерапевта"></textarea>
                </div>
            </div>
            <button class="form__submit promotion__submit" type="submit">
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
