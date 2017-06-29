#!/bin/bash
dpkg-deb -bZgzip projects/iOS11System debs
dpkg-deb -bZgzip projects/Mantra debs
dpkg-deb -bZgzip projects/Freya debs
dpkg-deb -bZgzip projects/Dock debs
dpkg-deb -bZgzip projects/iOS\ 3\ Dock debs
dpkg-deb -bZgzip projects/Remote\ Helper debs
dpkg-deb -bZgzip projects/Terminal\ Power debs
dpkg-deb -bZgzip projects/Verbose\ Springy debs
