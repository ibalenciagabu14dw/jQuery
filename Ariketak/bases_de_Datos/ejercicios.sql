-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2015 a las 11:24:42
-- Versión del servidor: 5.5.46-0ubuntu0.14.04.2
-- Versión de PHP: 5.5.9-1ubuntu4.14
CREATE DATABASE IF NOT EXISTS ejercicios;
use ejercicios;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ejercicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE IF NOT EXISTS `personajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `nombre`, `imagen`) VALUES
(2, 'homer', 'Ariketak/bases_de_datos/acordeon/img/homer.jpg'),
(3, 'marge', 'Ariketak/bases_de_datos/acordeon/img/marge.jpg'),
(4, 'bart', 'Ariketak/bases_de_datos/acordeon/img/bart.jpg'),
(5, 'lisa', 'Ariketak/bases_de_datos/acordeon/img/lisa.jpg'),
(6, 'maggi', 'Ariketak/bases_de_datos/acordeon/img/maggi.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
