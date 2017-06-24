#!/bin/bash
dpkg-deb -bZgzip projects/iOS11System debs
dpkg-deb -bZgzip projects/Mantra debs
dpkg-deb -bZgzip projects/Freya debs
dpkg-deb -bZgzip projects/Dock debs
dpkg-deb -bZgzip projects/iOS\ 3\ Dock debs
dpkg-deb -bZgzip projects/RemotePower debs
