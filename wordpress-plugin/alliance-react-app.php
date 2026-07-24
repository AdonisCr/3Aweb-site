<?php
/**
 * Plugin Name: Alliance React App
 * Description: Sert l'application React comme front-end du site.
 * Version: 1.0.0
 * Author: Dev Team
 *
 * Les fichiers React doivent être dans : wp-content/uploads/alliance-react/
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'REACT_PATH', WP_CONTENT_DIR . '/uploads/alliance-react/' );
define( 'REACT_URL',  content_url( '/uploads/alliance-react/' ) );

/* ================================================================
   1. SERVIR LES FICHIERS STATIQUES
   ================================================================ */

add_action( 'init', function () {
    add_rewrite_rule( '^react-app/assets/(.+)$', 'wp-content/uploads/alliance-react/assets/$1', 'top' );
    add_rewrite_rule( '^react-app/(.+)$', 'wp-content/uploads/alliance-react/$1', 'top' );
} );

/* ================================================================
   2. SERVIR index.html POUR TOUTES LES ROUTES FRONT-END
   ================================================================ */

add_action( 'template_redirect', function () {
    $uri  = $_SERVER['REQUEST_URI'] ?? '';
    $path = parse_url( $uri, PHP_URL_PATH );

    // Ignorer les routes WP
    if ( is_admin()
        || preg_match('#^/(wp-admin|wp-login|wp-json|xmlrpc|graphql|wp-content|wp-includes|wp-cron|react-app)#i', $path)
        || preg_match('#\.(php|json|xml|png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$#i', $path)
    ) return;

    $index = REACT_PATH . 'index.html';
    if ( file_exists( $index ) ) {
        status_header( 200 );
        header( 'Content-Type: text/html; charset=UTF-8' );
        readfile( $index );
        exit;
    }
}, 1 );

/* ================================================================
   3. ADMIN BAR LINK
   ================================================================ */

add_action( 'admin_bar_menu', function ( $bar ) {
    $bar->add_node( [
        'id'    => 'react-app',
        'title' => '🔗 Voir le site React',
        'href'  => home_url( '/app/' ),
        'meta'  => [ 'target' => '_blank' ],
    ] );
}, 999 );
