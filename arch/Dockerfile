FROM archlinux/base
RUN pacman -Syu --noconfirm && pacman -S apache --noconfirm
EXPOSE 80
CMD ["httpd", "-D", "FOREGROUND"]
