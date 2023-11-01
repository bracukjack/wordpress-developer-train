<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>

</head>

<body>
    <header>
        <!-- navbar -->
        <div>
            <nav class=" nav navbar navbar-expand-sm bg-primary bg-opacity-10 py-4">
                <div class="container">
                    <?php
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

                    if ($logo) {
                    ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-brand text-primary fw-bold">
                            <img src="<?php echo esc_url($logo[0]); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                        </a>
                    <?php
                    } else {
                    ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-brand text-primary fw-bold"><?php echo esc_html(get_bloginfo('name')); ?></a>
                    <?php
                    }
                    ?> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">


                        <?php
                        wp_nav_menu(array(
                            'theme_location'    => 'custom-menu',
                            'container'         => 'ul',
                            'container'         => 'ul',
                            'menu_class'        => 'navbar-nav navbar-right font-lato fw-regular',
                            'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'before'            => '<li class="nav-item mx-3">',
                            'after'             => '</li>',
                        ));
                        ?>
                    </div>
                </div>
            </nav>
        </div>
    </header>