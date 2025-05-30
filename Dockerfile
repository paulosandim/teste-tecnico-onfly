FROM cypress/included:14.4.0

WORKDIR /app

COPY . .

RUN npm ci

CMD ["npx", "cypress", "run"]
