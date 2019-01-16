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
            'endTime' => 'December 31 2019 23:59:59',
            'html' => timerForm()
        ));
        exit();
        break;
    case 'tarifForm':
        echo json_encode(array(
            'status' => true,
            'html' => tarifForm($data['id'], $data['name'], $data['src'])
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
    case 'testForm':
        echo json_encode(array(
            'status' => true,
            'html' => testForm()
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
    $html = file_get_contents('./popup/callorder/form_' . $_POST['formId'] . '.php');
    return $html;
}

function timerForm()
{
    $html = file_get_contents('./popup/timer/form_' . $_POST['formId'] . '.php');
    return $html;
}

function tarifForm($id, $name, $src)
{

    $tarrifs = [
        'XS' => [
            'ssd'=>'1 Гб',
            'domen'=>'1 домен',
            'sql'=>'Неограничено',
            'visitors'=>'Неограничено',
            'price'=>'190 Р'
        ],
        'S' => [
            'ssd'=>'2 Гб',
            'domen'=>'1 домен',
            'sql'=>'Неограничено',
            'visitors'=>'Неограничено',
            'price'=>'240 Р'
        ],
        'M' => [
            'ssd'=>'5 Гб',
            'domen'=>'3 домена',
            'sql'=>'Неограничено',
            'visitors'=>'Неограничено',
            'price'=>'350 Р'
        ],
        'L' => [
            'ssd'=>'10 Гб',
            'domen'=>'5 доменов',
            'sql'=>'Неограничено',
            'visitors'=>'Неограничено',
            'price'=>'690 Р'
        ],
        'XL' => [
            'ssd'=>'30 Гб',
            'domen'=>'7 доменов',
            'sql'=>'Неограничено',
            'visitors'=>'Неограничено',
            'price'=>'1990 Р'
        ]
    ];

    ob_start();
    ?>
    <div class="hosting">
        <div class="hosting__planet host-tarifs__item_<?= $id ?>">
            <div class="host-tarifs__img" style="height: 100px">
                <div class="host-tarifs__img-img" style="background-image:url(<?=$src?>); width: 100px; height: 100px;  box-shadow: inset 16px 0 40px 3px rgba(0, 0, 0, 0.9), inset -3px 0 5px 2px rgba(255, 255, 255, 0.16), 0px 0px 4px 2px rgba(120, 159, 187, 0.5);"></div>
            </div>
            <div class="host-tarifs__tag">
                <div class="host-tarifs__title">Тариф <span class="host-tarifs__title_y">«<?= $name ?>»</span></div>
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
                    <td><?=$tarrifs[$name]['ssd'] ?></td>
                    <td><?=$tarrifs[$name]['domen'] ?></td>
                    <td><?=$tarrifs[$name]['sql'] ?></td>
                    <td><?=$tarrifs[$name]['visitors'] ?></td>
                    <td><?=$tarrifs[$name]['price'] ?></td>
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
                более 10 сайтов по <?= $name ?>. Если вы хотите:
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
                    <textarea class="input input_area"
                              placeholder="Перечислите, основные направления для подбора запросов. Пример: Установка пластиковых окон, продажа земельных участков, услуги частного психотерапевта"></textarea>
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

function testForm()
{
    $answers = [
        'factors' => 'Количество уникальных посетителей',
        'openRate' => 'Какой процент людей открыл письмо',
        'googleAdwords' => 'Все вышеперечисленное',
        'leadGeneration' => 'Call to action',
        'twitterGif' => 'Да',
        'advYoutube' => 'Статичная',
        'ctr' => '40',
        'robots' => 'Все вышеперечисленное',
        'sef' => 'ЧеловекоПонятный URL',
        'formatSeo' => 'RDFA',
        'speedLoad' => 'Длина url страницы',
        'priceGoogle' => 'Оба варианта',
        'bestAdv' => 'Первое',
        'landingConversion' => 'Средней конверсии не существует',
        'blackSeo' => 'Изменение даты публикации материала',
        'altText' => '.gif',
        '1000Page' => 'Все вышеперечисленное',
        'dataMarkup' => 'Все вышеперечисленное',
        'banGoogle' => 'Все вышеперечисленное',
        'filterAgc' => 'Отсутствие добавочной ценности в контенте сайта'
    ];
    $correct = 0;
    $wrong = 0;
    $totalQuestions = count($answers);


    foreach ($answers as $key => $answer) {
        if ($_POST[$key] == $answer) {
            $correct++;
        } else {
            $wrong++;
        }
    }


    ob_start();
    ?>
    <form action="#" method="post" class="testing__form2">
        <div class="testing__slide-title">
            Результаты теста <?= $correct ?> из <?= $totalQuestions ?> верных ответов.
        </div>
        <div class="testing__fields">
            <div class="testing__row">
                <div class="testing__field">
                    <label class="testing__label">
                        Введите свою почту и мы отправим Вам промо-код и правильные ответы на почту.
                        <input type="email" name="email" class="input">
                    </label>
                </div>
            </div>
        </div>
        <div class="testing__buttons">
            <button class="testing__submit" type="submit">
                <div class="btn">
                    <div class="btn__title">Отправить</div>
                    <div class="btn__lines">
                        <div class="btn__line-top"></div>
                        <div class="btn__line-right"></div>
                        <div class="btn__line-bottom"></div>
                        <div class="btn__line-left"></div>
                    </div>
                </div>
            </button>
        </div>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}
