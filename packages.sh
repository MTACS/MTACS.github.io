#!/bin/bash
dpkg-deb -bZgzip projects/iOS11System debs
dpkg-deb -bZgzip projects/Mantra debs
dpkg-deb -bZgzip projects/Freya debs
