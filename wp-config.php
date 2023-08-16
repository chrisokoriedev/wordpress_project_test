<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecom' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*#Yt1Dtkh,LW(%?eDX_(;Es]KH%A?aGPgj2;63Zf:NqsIfyj|z7]MI@{Vr6ms=8;' );
define( 'SECURE_AUTH_KEY',  'r.Q-4($xDnJLy$k[qg#wGPxx@zOME/KMH1SXuyL|GSM*9DlFZb|P!qS$=9`R(Tq=' );
define( 'LOGGED_IN_KEY',    'yD:+x9t2FM[h({L#<1DsO3tM/J|hucs:J^@yHHK39cbFFP%[2W9p<c?=[V5!$md4' );
define( 'NONCE_KEY',        'LvPLS7k14uqa5Q&py^Sjt1,a}Hv?}xhsc0`|:~p%lEHKZuOIm)~4+?+mtS3t1E#?' );
define( 'AUTH_SALT',        'Vm~^;zZ]@`gz-&m^k&k2us)Tgzz0;W?02t)-#<J>H?FRA=X3dmk9gTN|ZZE2,Rp{' );
define( 'SECURE_AUTH_SALT', ',?9K(8Ei S EjTn,8p:eF!@)+SfJ/pW*|*R_BBB62t=fA<>X1&gm$P$xyymw]@Sv' );
define( 'LOGGED_IN_SALT',   '8]?nu&iOaQ8Z;e^#|Y*>1mtlp}XmSm,3B,k=TKk9])J58%rBy%i3FP|j4D7zy Ul' );
define( 'NONCE_SALT',       'Tk$&zP3p$_k1n]eeyEV+E!0wy<r0$]lelsXioR/15.|**!&GQX`xj`GM1^NVs)/:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_config';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
