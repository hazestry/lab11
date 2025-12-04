FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1


WORKDIR /app

RUN apk add --no-cache \
    postgresql-client \
    postgresql-dev \
    gcc \
    musl-dev \
    linux-headers


COPY requirements.txt .


RUN pip install --no-cache-dir -r requirements.txt

COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r$//g' /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/entrypoint.sh"]
