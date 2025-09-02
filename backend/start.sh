#!/bin/sh
set -e

# Переменные можно передавать через environment в compose (если нужно)
: "${DJANGO_SETTINGS_MODULE:=server.settings}"
export DJANGO_SETTINGS_MODULE

# Ждём при необходимости (для внешних сервисов). Для SQLite не нужно.
# Run migrations and collectstatic
echo "Apply database migrations..."
python manage.py migrate --noinput

echo "Collect static files..."
python manage.py collectstatic --noinput

# Если используете SQLite — лучше 1 worker, чтобы избежать блокировок.
# Для продакшна используйте больше воркеров + postgres
echo "Starting Gunicorn..."
exec gunicorn server.wsgi:application --bind 0.0.0.0:8000 --workers 1 --log-level info
