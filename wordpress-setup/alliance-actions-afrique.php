<?php
/**
 * Plugin Name: Alliance Actions Afrique — Setup
 * Description: Crée les Custom Post Types, Taxonomies et Champs ACF pour le site Alliance Actions Afrique.
 * Version: 1.0.0
 * Author: Dev Team
 *
 * INSTRUCTIONS :
 * 1. Installer et activer les plugins : WPGraphQL, Advanced Custom Fields PRO, WPGraphQL for ACF
 * 2. Copier ce fichier dans wp-content/plugins/alliance-actions-afrique/
 * 3. Activer le plugin via Extensions > Plugins
 * 4. Aller dans GraphQL > Settings et vérifier que tout est exposé
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/* ================================================================
   1. CUSTOM POST TYPES
   ================================================================ */

function aaa_register_post_types() {

    // — Projets —
    register_post_type( 'project', [
        'labels'       => [
            'name'               => 'Projets',
            'singular_name'      => 'Projet',
            'add_new_item'       => 'Ajouter un projet',
            'edit_item'          => 'Modifier le projet',
            'all_items'          => 'Tous les projets',
            'menu_name'          => 'Projets',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'project',
        'graphql_plural_name' => 'projects',
        'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ],
        'menu_icon'    => 'dashicons-portfolio',
        'rewrite'      => [ 'slug' => 'projets' ],
    ] );

    // — Partenaires —
    register_post_type( 'partner', [
        'labels'       => [
            'name'               => 'Partenaires',
            'singular_name'      => 'Partenaire',
            'add_new_item'       => 'Ajouter un partenaire',
            'edit_item'          => 'Modifier le partenaire',
            'all_items'          => 'Tous les partenaires',
            'menu_name'          => 'Partenaires',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'partner',
        'graphql_plural_name' => 'partners',
        'supports'     => [ 'title', 'thumbnail' ],
        'menu_icon'    => 'dashicons-groups',
        'rewrite'      => [ 'slug' => 'partenaires' ],
    ] );

    // — Membres de l'équipe —
    register_post_type( 'team_member', [
        'labels'       => [
            'name'               => 'Équipe',
            'singular_name'      => 'Membre',
            'add_new_item'       => 'Ajouter un membre',
            'edit_item'          => 'Modifier le membre',
            'all_items'          => 'Tous les membres',
            'menu_name'          => 'Équipe',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'teamMember',
        'graphql_plural_name' => 'teamMembers',
        'supports'     => [ 'title', 'thumbnail', 'page-attributes' ],
        'menu_icon'    => 'dashicons-businessman',
        'rewrite'      => [ 'slug' => 'equipe' ],
    ] );

    // — Valeurs —
    register_post_type( 'value', [
        'labels'       => [
            'name'               => 'Valeurs',
            'singular_name'      => 'Valeur',
            'add_new_item'       => 'Ajouter une valeur',
            'edit_item'          => 'Modifier la valeur',
            'all_items'          => 'Toutes les valeurs',
            'menu_name'          => 'Valeurs',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'value',
        'graphql_plural_name' => 'values',
        'supports'     => [ 'title', 'editor', 'thumbnail', 'page-attributes' ],
        'menu_icon'    => 'dashicons-star-filled',
        'rewrite'      => [ 'slug' => 'valeurs' ],
    ] );

    // — Paliers de don —
    register_post_type( 'donation_tier', [
        'labels'       => [
            'name'               => 'Paliers de don',
            'singular_name'      => 'Palier de don',
            'add_new_item'       => 'Ajouter un palier',
            'edit_item'          => 'Modifier le palier',
            'all_items'          => 'Tous les paliers',
            'menu_name'          => 'Paliers de don',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'donationTier',
        'graphql_plural_name' => 'donationTiers',
        'supports'     => [ 'title', 'page-attributes' ],
        'menu_icon'    => 'dashicons-heart',
        'rewrite'      => [ 'slug' => 'dons' ],
    ] );
}
add_action( 'init', 'aaa_register_post_types' );

/* ================================================================
   2. TAXONOMIES
   ================================================================ */

function aaa_register_taxonomies() {

    register_taxonomy( 'project_category', [ 'project' ], [
        'labels'       => [
            'name'          => 'Catégories de projets',
            'singular_name' => 'Catégorie',
            'add_new_item'  => 'Ajouter une catégorie',
            'menu_name'     => 'Catégories',
        ],
        'public'       => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'projectCategory',
        'graphql_plural_name' => 'projectCategories',
        'rewrite'      => [ 'slug' => 'categorie-projet' ],
    ] );
}
add_action( 'init', 'aaa_register_taxonomies' );

/* ================================================================
   3. ACF — FIELD GROUPS
   ================================================================ */

if ( ! function_exists( 'acf_add_local_field_group' ) ) {
    return; // ACF n'est pas installé, on arrête ici.
}

/* ---------- 3.1 Partenaires ---------- */
acf_add_local_field_group( [
    'key'      => 'group_partner_fields',
    'title'    => 'Champs partenaire',
    'fields'   => [
        [
            'key'          => 'field_partner_category',
            'label'        => 'Catégorie',
            'name'         => 'category',
            'type'         => 'text',
            'required'     => 1,
            'instructions' => 'Ex : "Institutions & entreprises", "Écoles & centres de formation", "Partenaires projets", "Ils nous ont fait confiance"',
        ],
        [
            'key'          => 'field_partner_website',
            'label'        => 'Site web',
            'name'         => 'website',
            'type'         => 'url',
            'required'     => 0,
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'post_type',
                'operator' => '==',
                'value'    => 'partner',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'partnerFields',
] );

/* ---------- 3.2 Membres de l'équipe ---------- */
acf_add_local_field_group( [
    'key'      => 'group_team_member_fields',
    'title'    => 'Champs membre d\'équipe',
    'fields'   => [
        [
            'key'          => 'field_tm_role',
            'label'        => 'Rôle',
            'name'         => 'role',
            'type'         => 'text',
            'required'     => 1,
            'instructions' => 'Ex : Président, Directrice, Trésorier, Secrétaire',
        ],
        [
            'key'          => 'field_tm_region',
            'label'        => 'Région',
            'name'         => 'region',
            'type'         => 'select',
            'required'     => 1,
            'choices'      => [
                'fr' => 'France',
                'bj' => 'Bénin',
            ],
            'default_value' => 'fr',
        ],
        [
            'key'          => 'field_tm_order',
            'label'        => 'Ordre d\'affichage',
            'name'         => 'order',
            'type'         => 'number',
            'default_value' => 0,
            'min'          => 0,
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'post_type',
                'operator' => '==',
                'value'    => 'team_member',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'teamMemberFields',
] );

/* ---------- 3.3 Valeurs ---------- */
acf_add_local_field_group( [
    'key'      => 'group_value_fields',
    'title'    => 'Champs valeur',
    'fields'   => [
        [
            'key'          => 'field_value_order',
            'label'        => 'Ordre d\'affichage',
            'name'         => 'order',
            'type'         => 'number',
            'default_value' => 0,
            'min'          => 0,
        ],
        [
            'key'          => 'field_value_description',
            'label'        => 'Description courte',
            'name'         => 'description',
            'type'         => 'textarea',
            'required'     => 0,
            'rows'         => 3,
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'post_type',
                'operator' => '==',
                'value'    => 'value',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'valueFields',
] );

/* ---------- 3.4 Paliers de don ---------- */
acf_add_local_field_group( [
    'key'      => 'group_donation_tier_fields',
    'title'    => 'Champs palier de don',
    'fields'   => [
        [
            'key'          => 'field_dt_amount',
            'label'        => 'Montant (€)',
            'name'         => 'amount',
            'type'         => 'number',
            'required'     => 1,
            'min'          => 1,
        ],
        [
            'key'          => 'field_dt_description',
            'label'        => 'Description',
            'name'         => 'description',
            'type'         => 'text',
            'required'     => 1,
            'instructions' => 'Ex : "Finance 3 mois de fournitures scolaires"',
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'post_type',
                'operator' => '==',
                'value'    => 'donation_tier',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'donationTierFields',
] );

/* ---------- 3.5 Page Contact ---------- */
acf_add_local_field_group( [
    'key'      => 'group_contact_info_fields',
    'title'    => 'Informations de contact',
    'fields'   => [
        [
            'key'   => 'field_ci_email',
            'label' => 'Email',
            'name'  => 'email',
            'type'  => 'email',
        ],
        [
            'key'   => 'field_ci_phone_fr',
            'label' => 'Téléphone France',
            'name'  => 'phoneFr',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_ci_phone_bj',
            'label' => 'Téléphone Bénin',
            'name'  => 'phoneBj',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_ci_address',
            'label' => 'Adresse',
            'name'  => 'address',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_ci_lat',
            'label' => 'Latitude',
            'name'  => 'latitude',
            'type'  => 'number',
            'required' => 0,
        ],
        [
            'key'   => 'field_ci_lng',
            'label' => 'Longitude',
            'name'  => 'longitude',
            'type'  => 'number',
            'required' => 0,
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'page_template',
                'operator' => '==',
                'value'    => 'default',
            ],
        ],
        [
            [
                'param'    => 'page',
                'operator' => '==',
                'value'    => 'contact-info',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'contactInfoFields',
] );

/* ---------- 3.6 Page d'accueil ---------- */
acf_add_local_field_group( [
    'key'      => 'group_home_page_fields',
    'title'    => 'Champs page d\'accueil',
    'fields'   => [
        [
            'key'   => 'field_home_hero_number',
            'label' => 'Chiffre hero',
            'name'  => 'heroNumber',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_hero_title',
            'label' => 'Titre hero',
            'name'  => 'heroTitle',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
        [
            'key'   => 'field_home_hero_desc',
            'label' => 'Description hero',
            'name'  => 'heroDescription',
            'type'  => 'textarea',
            'rows'  => 4,
        ],
        [
            'key'   => 'field_home_mission_text',
            'label' => 'Texte mission',
            'name'  => 'missionText',
            'type'  => 'textarea',
            'rows'  => 4,
        ],
        [
            'key'   => 'field_home_stat1_val',
            'label' => 'Stat 1 — Valeur',
            'name'  => 'stat1Value',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_stat1_lbl',
            'label' => 'Stat 1 — Libellé',
            'name'  => 'stat1Label',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_stat2_val',
            'label' => 'Stat 2 — Valeur',
            'name'  => 'stat2Value',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_stat2_lbl',
            'label' => 'Stat 2 — Libellé',
            'name'  => 'stat2Label',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_stat3_val',
            'label' => 'Stat 3 — Valeur',
            'name'  => 'stat3Value',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_stat3_lbl',
            'label' => 'Stat 3 — Libellé',
            'name'  => 'stat3Label',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_about_title',
            'label' => 'Titre "Qui sommes-nous"',
            'name'  => 'aboutTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_about_text',
            'label' => 'Texte "Qui sommes-nous"',
            'name'  => 'aboutText',
            'type'  => 'textarea',
            'rows'  => 5,
        ],
        [
            'key'   => 'field_home_about_image',
            'label' => 'Image "Qui sommes-nous"',
            'name'  => 'aboutImage',
            'type'  => 'image',
            'return_format' => 'array',
        ],
        [
            'key'   => 'field_home_projects_title',
            'label' => 'Titre projets',
            'name'  => 'projectsTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_articles_title',
            'label' => 'Titre actualités',
            'name'  => 'articlesTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_partners_title',
            'label' => 'Titre partenaires',
            'name'  => 'partnersTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_cta_title',
            'label' => 'Titre CTA',
            'name'  => 'ctaTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_home_cta_subtitle',
            'label' => 'Sous-titre CTA',
            'name'  => 'ctaSubtitle',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
        [
            'key'   => 'field_home_cta_image',
            'label' => 'Image CTA',
            'name'  => 'ctaImage',
            'type'  => 'image',
            'return_format' => 'array',
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'page',
                'operator' => '==',
                'value'    => 'accueil',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'homePageFields',
] );

/* ---------- 3.7 Paramètres globaux ---------- */
acf_add_local_field_group( [
    'key'      => 'group_global_settings_fields',
    'title'    => 'Paramètres du site',
    'fields'   => [
        [
            'key'   => 'field_gs_youtube_url',
            'label' => 'URL YouTube',
            'name'  => 'youtubeUrl',
            'type'  => 'url',
        ],
        [
            'key'   => 'field_gs_mission_video_url',
            'label' => 'URL vidéo mission',
            'name'  => 'missionVideoUrl',
            'type'  => 'url',
        ],
        [
            'key'   => 'field_gs_hero_title',
            'label' => 'Titre hero',
            'name'  => 'heroTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_gs_hero_desc',
            'label' => 'Description hero',
            'name'  => 'heroDescription',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
        [
            'key'   => 'field_gs_mission_text',
            'label' => 'Texte mission',
            'name'  => 'missionText',
            'type'  => 'textarea',
            'rows'  => 4,
        ],
        [
            'key'   => 'field_gs_about_text',
            'label' => 'Texte à propos',
            'name'  => 'aboutText',
            'type'  => 'textarea',
            'rows'  => 4,
        ],
        [
            'key'   => 'field_gs_cta_title',
            'label' => 'Titre CTA',
            'name'  => 'ctaTitle',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_gs_cta_subtitle',
            'label' => 'Sous-titre CTA',
            'name'  => 'ctaSubtitle',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
    ],
    'location' => [
        [
            [
                'param'    => 'page',
                'operator' => '==',
                'value'    => 'parametres-sites',
            ],
        ],
    ],
    'show_in_graphql' => true,
    'graphql_field_name' => 'globalSettingsFields',
] );

/* ================================================================
   4. FLUSH REWRITE RULES (à exécuter une fois après activation)
   ================================================================ */

function aaa_flush_rules_on_activation() {
    aaa_register_post_types();
    aaa_register_taxonomies();
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'aaa_flush_rules_on_activation' );
